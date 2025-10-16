import { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import lessons from '../data/lessons';
import PrimaryButton from '../components/PrimaryButton';
import { colors, layout } from '../theme';

export default function LessonScreen({ route, navigation }) {
  const { lessonId } = route.params || {};
  const lesson = useMemo(() => lessons.find(l => l.id === lessonId), [lessonId]);
  if (!lesson) return <View style={{ padding:16 }}><Text>No se encontró la lección.</Text></View>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.subtitle}>{lesson.summary}</Text>

      {lesson.items.filter(i => i.type === 'card').map((it, idx) => (
        <View key={idx} style={styles.card}>
          <Text style={styles.cardText}>{it.content.replace(/\*\*(.*?)\*\*/g, '$1')}</Text>
        </View>
      ))}

      <PrimaryButton title="Practicar ahora" onPress={() => navigation.navigate('Quiz', { lessonId })} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{ padding:20, gap:14, alignSelf:'center', width:'100%', maxWidth: layout.maxWidth },
  title:{ fontFamily:'Inter_800ExtraBold', fontSize:30 },
  subtitle:{ color: colors.sub, marginBottom:4 },
  card:{
    backgroundColor: colors.surface,
    borderColor: colors.border, borderWidth:1,
    borderRadius: layout.radius, padding:18,
    ...layout.shadow
  },
  cardText:{ fontSize:16, lineHeight:24 },
});
