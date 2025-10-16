import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import { colors, layout } from '../theme';

export default function HeroHeader() {
  return (
    <View style={{ width:'100%', alignSelf:'center', maxWidth: layout.maxWidth }}>
      <LinearGradient
        colors={[colors.primary, colors.primary2, colors.accent]}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 28,
          padding: 28,
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.6)',
          ...layout.shadow,
        }}
      >
        <Text style={{ fontFamily:'Inter_800ExtraBold', fontSize: 28, color:'#fff' }}>FinLearn</Text>
        <Text style={{ color:'#f8fafc', marginTop: 6 }}>
          Educación financiera en cápsulas — teoría clara + práctica inmediata.
        </Text>
      </LinearGradient>
    </View>
  );
}
