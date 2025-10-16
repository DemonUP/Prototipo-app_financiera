// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import GameModeCard from '../components/GameModeCard';
import { userState } from '../data/mockState';

export default function HomeScreen({ navigation }) {
  const u = userState.user;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f7fb' }} contentContainerStyle={{ padding: 16 }}>
      {/* Header con progreso */}
      <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 14, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, shadowOffset: { width: 0, height: 6 }, elevation: 3 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Text style={{ fontSize: 28 }}>🧑‍🎓</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '800' }}>{u.name}</Text>
            <Text style={{ opacity: 0.7 }}>Nivel {u.level}</Text>
            <View style={{ height: 6, backgroundColor: '#eef2ff', borderRadius: 6, marginTop: 8 }}>
              <View style={{ height: 6, width: `${(u.xp % 1000) / 10}%`, backgroundColor: '#6366f1', borderRadius: 6 }} />
            </View>
            <Text style={{ opacity: 0.6, fontSize: 12, marginTop: 4 }}>{u.xp % 1000} / 1000 XP</Text>
          </View>
          <View>
            <Text style={{ opacity: 0.7 }}>🔥 {u.streakDays} días</Text>
            <Text style={{ opacity: 0.7 }}>🪙 {u.coins}</Text>
            <Text style={{ opacity: 0.7 }}>🏆 {u.xp} XP</Text>
          </View>
        </View>
      </View>

      <Text style={{ marginTop: 18, marginBottom: 12, fontWeight: '800', fontSize: 18 }}>Modos de Juego</Text>

      <View style={{ gap: 14 }}>
        <GameModeCard title="Ramas de Aprendizaje" subtitle="Progresa por niveles temáticos" gradient={['#6a11cb', '#2575fc']} onPress={() => navigation.navigate('Branches')} />
        <GameModeCard title="Lecciones" subtitle="Aprende a tu ritmo" gradient={['#1e3c72', '#2a5298']} onPress={() => navigation.navigate('Lesson')} />
        <GameModeCard title="Modo Desafío" subtitle="Contra reloj con multiplicadores de XP" gradient={['#ff512f', '#dd2476']} onPress={() => {}} />
        <GameModeCard title="Simulador" subtitle="Escenarios del mundo real" gradient={['#833ab4', '#fd1d1d']} onPress={() => {}} />
        <GameModeCard title="Modo Batalla" subtitle="Compite contra la IA" gradient={['#00b09b', '#96c93d']} onPress={() => {}} />
      </View>

      <Text style={{ marginTop: 22, marginBottom: 8, fontWeight: '800' }}>Básico</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
        {['Introducción al Dinero', 'Presupuesto Personal', 'Ahorro Inteligente'].map((t, i) => (
          <View key={i} style={miniCard}>
            <Text style={{ fontSize: 12, opacity: 0.6 }}>50-75 XP</Text>
            <Text style={{ fontWeight: '700', marginTop: 6 }}>{t}</Text>
            <Text style={{ opacity: 0.6, marginTop: 6, fontSize: 12 }}>Aprende conceptos básicos</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const miniCard = {
  width: 260,
  backgroundColor: '#fff',
  borderRadius: 14,
  padding: 14,
  shadowColor: '#000',
  shadowOpacity: 0.06,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 4 },
  elevation: 2,
};
