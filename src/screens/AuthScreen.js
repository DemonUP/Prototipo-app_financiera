// src/screens/AuthScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, useWindowDimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FeatureItem from '../components/FeatureItem';

export default function AuthScreen({ navigation }) {
  const [tab, setTab] = useState('login');
  const { width } = useWindowDimensions();
  const twoCols = width >= 900;

  return (
    <LinearGradient colors={['#0f1027', '#3b1e84', '#7b1fa2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1, padding: twoCols ? 60 : 20 }}>
      <View style={{ flex: 1, flexDirection: twoCols ? 'row' : 'column', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
        {/* Izquierda: features */}
        <View style={{ flex: 1, width: '100%', maxWidth: 560 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.15)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)' }}>
              <Text style={{ fontSize: 22, color: '#fff' }}>📈</Text>
            </View>
            <View>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: '800' }}>FinanzaMaster</Text>
              <Text style={{ color: 'rgba(255,255,255,0.9)' }}>Domina tu futuro financiero</Text>
            </View>
          </View>

          <FeatureItem icon="🎮" title="Aprende Jugando" subtitle="Múltiples modos para dominar finanzas personales" />
          <FeatureItem icon="🎯" title="Simulaciones Reales" subtitle="Escenarios del mundo real para decidir" />
          <FeatureItem icon="⚡" title="Progreso Gamificado" subtitle="Gana coins, sube de nivel y compite" />
        </View>

        {/* Derecha: tarjeta de autenticación */}
        <View style={{ width: '100%', maxWidth: 560, backgroundColor: '#fff', borderRadius: 16, padding: 18, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 16, shadowOffset: { width: 0, height: 12 }, elevation: 6 }}>
          <View style={{ flexDirection: 'row', backgroundColor: '#f3f4f6', borderRadius: 12, padding: 6, marginBottom: 12 }}>
            {['login', 'register'].map((t) => (
              <Pressable key={t} onPress={() => setTab(t)} style={{ flex: 1, backgroundColor: tab === t ? '#fff' : 'transparent', paddingVertical: 10, borderRadius: 10, alignItems: 'center' }}>
                <Text style={{ fontWeight: '700' }}>{t === 'login' ? 'Iniciar Sesión' : 'Registrarse'}</Text>
              </Pressable>
            ))}
          </View>

          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 12, fontWeight: '700', opacity: 0.7 }}>Email</Text>
            <TextInput placeholder="tu@email.com" style={inputS} keyboardType="email-address" autoCapitalize="none" />
            <Text style={{ fontSize: 12, fontWeight: '700', opacity: 0.7 }}>Contraseña</Text>
            <TextInput placeholder="••••••••" style={inputS} secureTextEntry />
            <Pressable onPress={() => navigation.replace('Home')} style={({ pressed }) => [btn, pressed && { opacity: 0.9 }]}>
              <LinearGradient colors={['#4776E6', '#8E54E9']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={btnInner}>
                <Text style={{ color: '#fff', fontWeight: '800' }}>Iniciar Sesión</Text>
              </LinearGradient>
            </Pressable>
            <Text style={{ textAlign: 'center', fontSize: 12, opacity: 0.6 }}>Demo: solo ingresa tu email para probar la app</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const inputS = { backgroundColor: '#f9fafb', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 10, padding: 12 };
const btn = { borderRadius: 12, overflow: 'hidden', marginTop: 8 };
const btnInner = { paddingVertical: 14, alignItems: 'center' };
