import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { colors, layout } from '../theme';

export default function LessonCard({ title, summary, completed=false, onPress }) {
  const [hover, setHover] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      style={{
        backgroundColor: colors.surface,
        borderColor: colors.border, borderWidth: 1,
        borderRadius: layout.radius, padding: 18,
        transform: [{ translateY: hover ? -2 : 0 }, { scale: hover ? 1.01 : 1 }],
        ...layout.shadow,
      }}
    >
      <Text style={{ fontFamily:'Inter_800ExtraBold', fontSize:18 }}>
        {title} {completed ? '✅' : ''}
      </Text>
      <Text style={{ color: colors.sub, marginTop: 6 }}>{summary}</Text>

      <View style={{ marginTop: 12, flexDirection:'row', alignItems:'center', gap:8 }}>
        <View style={{
          width: 8, height: 8, borderRadius: 999,
          backgroundColor: completed ? colors.good : colors.primary
        }} />
        <Text style={{ color: completed ? colors.good : colors.primary, fontFamily:'Inter_600SemiBold' }}>
          {completed ? 'Completada' : 'Empezar →'}
        </Text>
      </View>
    </Pressable>
  );
}
