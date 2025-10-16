// src/screens/BranchesScreen.js
import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { branches } from '../data/mockState';

function BranchCard({ item, onPress }) {
  return (
    <Pressable onPress={onPress} style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, shadowOffset: { width: 0, height: 6 }, elevation: 3 }}>
      <Text style={{ fontSize: 28 }}>{item.icon}</Text>
      <Text style={{ fontWeight: '800', marginTop: 8 }}>{item.name}</Text>
      <Text style={{ opacity: 0.7, marginTop: 4 }}>{item.desc}</Text>
      <View style={{ height: 6, backgroundColor: '#eef2ff', borderRadius: 6, marginTop: 12 }}>
        <View style={{ height: 6, width: `${(item.progress / item.levels) * 100}%`, backgroundColor: '#6366f1', borderRadius: 6 }} />
      </View>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ opacity: 0.7 }}>📈 {item.levels} niveles</Text>
        <Text style={{ fontWeight: '700' }}>Comenzar →</Text>
      </View>
    </Pressable>
  );
}

export default function BranchesScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f7fb' }} contentContainerStyle={{ padding: 16, gap: 14 }}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 16 }}>← Volver al Dashboard</Text>
      </Pressable>

      <Text style={{ fontSize: 22, fontWeight: '800', marginTop: 8 }}>Ramas de Aprendizaje</Text>
      <Text style={{ opacity: 0.7, marginBottom: 12 }}>Elige tu camino y progresa desde lo básico hasta convertirte en un experto</Text>

      {branches.map((b) => (
        <BranchCard key={b.id} item={b} onPress={() => navigation.navigate('BranchPath', { id: b.id, name: b.name, icon: b.icon })} />
      ))}
    </ScrollView>
  );
}
