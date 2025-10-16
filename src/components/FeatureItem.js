// src/components/FeatureItem.js
import React from 'react';
import { View, Text } from 'react-native';

export default function FeatureItem({ icon, title, subtitle }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 12, marginBottom: 18 }}>
      <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.12)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' }}>
        <Text style={{ fontSize: 22, color: '#fff' }}>{icon}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>{title}</Text>
        <Text style={{ color: 'rgba(255,255,255,0.8)' }}>{subtitle}</Text>
      </View>
    </View>
  );
}
