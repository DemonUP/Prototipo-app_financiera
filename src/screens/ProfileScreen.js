import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getXP, getStreak } from '../utils/storage';
import { colors, layout } from '../theme';

export default function ProfileScreen() {
  const [xp, setXP] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => { (async () => { setXP(await getXP()); setStreak(await getStreak()); })(); }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu progreso</Text>

      <View style={styles.kpis}>
        <View style={styles.kpi}>
          <Text style={styles.kpiValue}>{xp}</Text>
          <Text style={styles.kpiLabel}>XP</Text>
        </View>
        <View style={styles.kpi}>
          <Text style={styles.kpiValue}>{streak} 🔥</Text>
          <Text style={styles.kpiLabel}>Racha</Text>
        </View>
      </View>

      <View style={styles.tip}>
        <Text style={{ fontWeight:'700', color: colors.text }}>Tip del día</Text>
        <Text style={{ color:'#cbd5e1' }}>Aplica 50/30/20: 50% necesidades, 30% deseos, 20% ahorro/inversión.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:16, alignSelf:'center', width:'100%', maxWidth: layout.maxWidth },
  title:{ fontSize:26, fontWeight:'800', marginBottom:12 },
  kpis:{ flexDirection:'row', gap:12 },
  kpi:{
    flex:1,
    backgroundColor:'rgba(255,255,255,0.06)',
    borderColor:'rgba(255,255,255,0.16)', borderWidth:1,
    borderRadius: layout.radius, padding:18, alignItems:'center'
  },
  kpiValue:{ fontSize:24, fontWeight:'800', color: colors.primary },
  kpiLabel:{ color:'#b6c0d4', marginTop:4 },
  tip:{ marginTop:14, backgroundColor:'rgba(59,130,246,0.15)', borderColor:'rgba(59,130,246,0.35)', borderWidth:1, padding:16, borderRadius: layout.radius }
});
