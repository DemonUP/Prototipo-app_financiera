import { View, Text } from 'react-native';
import { colors } from '../theme';

export default function MetricPill({ icon='★', text }) {
  return (
    <View style={{
      flexDirection:'row', alignItems:'center', gap:8,
      backgroundColor:'#ffffff',
      borderWidth:1, borderColor: colors.border,
      paddingHorizontal:14, paddingVertical:8, borderRadius:999,
      shadowColor:'#0f172a', shadowOpacity:0.06, shadowRadius:12, shadowOffset:{width:0,height:6}
    }}>
      <Text style={{ color: colors.primary, fontFamily:'Inter_800ExtraBold' }}>{icon}</Text>
      <Text style={{ color: colors.text, fontFamily:'Inter_600SemiBold' }}>{text}</Text>
    </View>
  );
}
