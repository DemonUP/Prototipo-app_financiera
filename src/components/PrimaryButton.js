import { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme';

export default function PrimaryButton({ title, onPress, style }) {
  const [hover, setHover] = useState(false);
  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      style={[{ borderRadius: 999, transform:[{ scale: hover ? 1.02 : 1 }] }, style]}
    >
      <LinearGradient
        colors={[colors.primary, colors.primary2]}
        start={{x:0,y:0}} end={{x:1,y:1}}
        style={{
          paddingVertical: 12, paddingHorizontal: 20, borderRadius: 999,
          borderWidth: 1, borderColor: 'rgba(0,0,0,0.06)',
          shadowColor:'#0f172a', shadowOpacity: hover ? 0.18 : 0.12, shadowRadius: 16, shadowOffset:{width:0,height:8}
        }}
      >
        <Text style={{ color:'#fff', fontFamily:'Inter_800ExtraBold' }}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}
