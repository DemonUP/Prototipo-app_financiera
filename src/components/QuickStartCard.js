import { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme';

export default function QuickStartCard({ onPress }) {
  const scale = useRef(new Animated.Value(1)).current;
  const glow  = useRef(new Animated.Value(0)).current;
  const [hover, setHover] = useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.03, duration: 900, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1.00, duration: 900, useNativeDriver: true }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, { toValue: 1, duration: 1200, useNativeDriver: false }),
        Animated.timing(glow, { toValue: 0, duration: 1200, useNativeDriver: false }),
      ])
    ).start();
  }, []);

  const shadowOpacity = glow.interpolate({ inputRange:[0,1], outputRange:[0.10,0.22] });

  return (
    <Animated.View style={{ transform:[{ scale }], shadowColor:'#7c3aed', shadowOpacity, shadowRadius:22, shadowOffset:{width:0,height:10} }}>
      <Pressable onPress={onPress} onHoverIn={() => setHover(true)} onHoverOut={() => setHover(false)} style={{ borderRadius: 24 }}>
        <LinearGradient
          colors={[colors.primary, colors.primary2, colors.accent]}
          start={{x:0,y:0}} end={{x:1,y:1}}
          style={{
            borderRadius: 24, padding: 18,
            borderWidth: 1, borderColor: 'rgba(0,0,0,0.06)',
            transform:[{ translateY: hover ? -2 : 0 }, { scale: hover ? 1.02 : 1 }],
          }}
        >
          <View style={{ flexDirection:'row', alignItems:'center', gap:12 }}>
            <Text style={{ fontSize:22, color:'#fff', fontWeight:'800' }}>▶</Text>
            <View style={{ flex:1 }}>
              <Text style={{ color:'#fff', fontWeight:'800' }}>Jugar ahora</Text>
              <Text style={{ color:'#f8fafc' }}>3 preguntas rápidas para ganar XP</Text>
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
}
