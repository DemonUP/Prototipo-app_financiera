import { View } from 'react-native';

export default function ProgressBar({ progress = 0 }) {
  return (
    <View style={{ height: 10, backgroundColor: '#eee', borderRadius: 6, overflow: 'hidden' }}>
      <View style={{ width: `${Math.min(100, Math.max(0, progress*100))}%`, height: '100%', backgroundColor: '#22c55e' }} />
    </View>
  );
}
