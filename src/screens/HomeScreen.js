import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import lessons from '../data/lessons';
import { getXP, getCompleted } from '../utils/storage';
import HeroHeader from '../components/HeroHeader';
import LessonCard from '../components/LessonCard';
import MetricPill from '../components/MetricPill';
import QuickStartCard from '../components/QuickStartCard';
import { colors, layout } from '../theme';

export default function HomeScreen({ navigation }) {
  const [xp, setXP] = useState(0);
  const [completed, setCompleted] = useState({});
  const { width } = useWindowDimensions();

  useEffect(() => {
    const load = async () => {
      setXP(await getXP());
      setCompleted(await getCompleted());
    };
    const unsub = navigation.addListener('focus', load);
    load();
    return unsub;
  }, [navigation]);

  const cols = width >= 1200 ? 3 : width >= 820 ? 2 : 1;
  const data = (lessons || []).filter(l => l && l.id && l.title);

  const quickPlay = () => {
    const first = data[0];
    if (first) navigation.navigate('Quiz', { lessonId: first.id });
  };

  return (
    <View style={styles.container}>
      <HeroHeader />

      <View style={{ marginTop:16 }}>
        <QuickStartCard onPress={quickPlay} />
      </View>

      <View style={styles.toolbar}>
        <MetricPill icon="★" text={`${xp} XP`} />
        <Text style={{ color: colors.sub }}>Lecciones recomendadas</Text>
      </View>

      <FlatList
        data={data}
        key={cols}
        numColumns={cols}
        columnWrapperStyle={cols > 1 ? { gap: layout.gap } : null}
        contentContainerStyle={{ gap: layout.gap, paddingBottom: 48 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <LessonCard
              title={item.title}
              summary={item.summary}
              completed={completed[item.id]}
              onPress={() => navigation.navigate('Lesson', { lessonId: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20, alignSelf:'center', width:'100%', maxWidth: layout.maxWidth },
  toolbar:{ marginTop:18, marginBottom:12, flexDirection:'row', alignItems:'center', justifyContent:'space-between' },
});
