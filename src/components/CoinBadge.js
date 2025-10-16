import { View, Text } from 'react-native';

export default function CoinBadge({ xp = 0 }) {
  return (
    <View style={{
      flexDirection:'row', alignItems:'center', gap:6,
      backgroundColor:'#fff7ed', borderColor:'#fdba74',
      borderWidth:1, paddingHorizontal:10, paddingVertical:6, borderRadius:16
    }}>
      <Text style={{ fontWeight:'700', color:'#ea580c' }}>★</Text>
      <Text style={{ fontWeight:'700', color:'#ea580c' }}>{xp} XP</Text>
    </View>
  );
}
