// src/components/GameModeCard.js
import React from 'react';
import { Pressable, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GameModeCard({ title, subtitle, gradient, onPress }) {
  return (
    <Pressable onPress={onPress} style={{ borderRadius: 18, overflow: 'hidden', height: 130, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 12, shadowOffset: { width: 0, height: 8 }, elevation: 6 }}>
      <LinearGradient colors={gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1, padding: 18, justifyContent: 'flex-end' }}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>{title}</Text>
        <Text style={{ color: 'rgba(255,255,255,0.9)', marginTop: 4 }}>{subtitle}</Text>
      </LinearGradient>
    </Pressable>
  );
}
