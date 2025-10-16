// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
import GameModeCard from '../components/GameModeCard';
import { userState } from '../data/mockState';

export default function HomeScreen({ navigation }) {
  const u = userState.user;
  const { width } = useWindowDimensions();

  // Breakpoints
  const isTablet = width >= 768;
  const isDesktop = width >= 1180;

  // Espaciados compactos
  const GAP = isDesktop ? 10 : 8;
  const PAD = isDesktop ? 10 : 8;

  // Contenedor: usar ~92% del viewport en desktop para reducir márgenes laterales
  const page = { flex: 1, backgroundColor: '#f5f7fb' };
  const container = {
    width: isDesktop ? '92%' : '96%',
    alignSelf: 'center',
    paddingTop: 8,
    paddingBottom: 12,     // menor espacio al fondo
  };

  // Grid (5/3/1) con menos separación
  const grid = { flexDirection: 'row', flexWrap: 'wrap', gap: GAP };
  const gridItem = {
    flexGrow: 1,
    flexBasis: isDesktop ? '18.6%' : isTablet ? '32%' : '100%',
    minWidth: isDesktop ? 180 : isTablet ? 210 : '100%',
  };

  return (
    <ScrollView style={page} contentContainerStyle={container}>
      {/* Header compacto */}
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: PAD,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 3 },
          elevation: 1,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={{ fontSize: 24 }}>🧑‍🎓</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '800' }}>{u.name}</Text>
            <Text style={{ opacity: 0.7 }}>Nivel {u.level}</Text>

            <View style={{ height: 4, backgroundColor: '#eef2ff', borderRadius: 6, marginTop: 6 }}>
              <View
                style={{
                  height: 4,
                  width: `${(u.xp % 1000) / 10}%`,
                  backgroundColor: '#6366f1',
                  borderRadius: 6,
                }}
              />
            </View>
            <Text style={{ opacity: 0.6, fontSize: 11, marginTop: 4 }}>{u.xp % 1000} / 1000 XP</Text>
          </View>

          <View style={{ gap: 0 }}>
            <Text style={{ opacity: 0.8 }}>🔥 {u.streakDays} días</Text>
            <Text style={{ opacity: 0.8 }}>🪙 {u.coins}</Text>
            <Text style={{ opacity: 0.8 }}>🏆 {u.xp} XP</Text>
          </View>
        </View>
      </View>

      {/* Título compacto */}
      <Text style={{ marginTop: 10, marginBottom: 8, fontWeight: '800', fontSize: 18 }}>Modos de Juego</Text>

      {/* Grid de modos */}
      <View style={grid}>
        <View style={gridItem}>
          <GameModeCard
            title="Ramas de Aprendizaje"
            subtitle="Progresa por niveles temáticos"
            gradient={['#6a11cb', '#2575fc']}
            onPress={() => navigation.navigate('Branches')}
          />
        </View>
        <View style={gridItem}>
          <GameModeCard title="Lecciones" subtitle="Aprende a tu ritmo" gradient={['#1e3c72', '#2a5298']} onPress={() => { }} />
        </View>
        <View style={gridItem}>

          <GameModeCard
            title="Modo Desafío"
            subtitle="Contra reloj con multiplicadores de XP"
            gradient={['#ff6a00', '#ff2a2a']}
            onPress={() => navigation.navigate('Play', { branchId: 'fundamentos', levelId: 'f1', nextLevelId: 'f2' })}
          />

        </View>
        <View style={gridItem}>
          <GameModeCard title="Simulador" subtitle="Toma decisiones en escenarios reales" gradient={['#b832ff', '#ff3db4']} onPress={() => { }} />
        </View>
        <View style={gridItem}>
          <GameModeCard title="Modo Batalla" subtitle="Compite contra la IA" gradient={['#08b24b', '#00ce7a']} onPress={() => { }} />
        </View>
      </View>

      {/* ===== Sección Básico ===== */}
      <RowHeader label="Básico" done="0 / 3 completado" color="#22c55e" top={12} bottom={6} />
      <CoursesRow
        gap={GAP}
        pad={PAD}
        items={[
          { icon: '💰', title: 'Introducción al Dinero', desc: 'Aprende los conceptos básicos del dinero', xp: '50 XP' },
          { icon: '📊', title: 'Presupuesto Personal', desc: 'Crea y maneja tu presupuesto', xp: '75 XP', lock: true },
          { icon: '🐷', title: 'Ahorro Inteligente', desc: 'Desarrolla hábitos de ahorro efectivos', xp: '60 XP', lock: true },
        ]}
      />

      {/* ===== Sección Intermedio ===== */}
      <RowHeader label="Intermedio" done="0 / 2 completado" color="#3b82f6" top={10} bottom={6} />
      <CoursesRow
        gap={GAP}
        pad={PAD}
        items={[
          { icon: '💳', title: 'Deudas y Crédito', desc: 'Entiende cómo funcionan las deudas', xp: '80 XP' },
          { icon: '📈', title: 'Introducción a Inversiones', desc: 'Haz que tu dinero trabaje para ti', xp: '100 XP', lock: true },
        ]}
      />

      {/* ===== Sección Avanzado ===== */}
      <RowHeader label="Avanzado" done="0 / 1 completado" color="#a855f7" top={10} bottom={6} />
      <CoursesRow
        gap={GAP}
        pad={PAD}
        items={[{ icon: '🎯', title: 'Planificación Financiera', desc: 'Planifica tu futuro financiero', xp: '90 XP', lock: true }]}
      />
    </ScrollView>
  );
}

/* ---------- Subcomponentes locales ---------- */

function RowHeader({ label, done, color, top = 12, bottom = 6 }) {
  return (
    <View style={{ marginTop: top, marginBottom: bottom, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      <View style={{ backgroundColor: color, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999 }}>
        <Text style={{ color: '#fff', fontWeight: '800', fontSize: 11 }}>{label}</Text>
      </View>
      <Text style={{ opacity: 0.6, fontSize: 12 }}>{done}</Text>
    </View>
  );
}

function CoursesRow({ items, gap = 10, pad = 10 }) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const isDesktop = width >= 1180;

  const row = { flexDirection: 'row', flexWrap: 'wrap', gap };
  const cardW = {
    flexGrow: 1,
    flexBasis: isDesktop ? '32.2%' : isTablet ? '48.6%' : '100%',
    minWidth: isDesktop ? 300 : isTablet ? 300 : '100%',
  };

  return (
    <View style={row}>
      {items.map((it, idx) => (
        <View
          key={idx}
          style={[
            {
              backgroundColor: '#fff',
              borderRadius: 12,
              padding: pad,
              shadowColor: '#000',
              shadowOpacity: 0.05,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 3 },
              elevation: 1,
            },
            cardW,
          ]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={{ fontSize: 20 }}>{it.icon}</Text>
            {it.lock && (
              <View style={{ marginLeft: 'auto', backgroundColor: '#eef2ff', borderRadius: 999, paddingHorizontal: 6, paddingVertical: 2 }}>
                <Text style={{ fontSize: 11, color: '#64748b' }}>🔒</Text>
              </View>
            )}
          </View>
          <Text style={{ fontWeight: '700', marginTop: 6 }}>{it.title}</Text>
          <Text style={{ opacity: 0.7, marginTop: 4, fontSize: 12 }}>{it.desc}</Text>
          <Text style={{ opacity: 0.6, marginTop: 6, fontSize: 12 }}>{it.xp}</Text>
        </View>
      ))}
    </View>
  );
}
