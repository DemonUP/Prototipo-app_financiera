import { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import lessons from '../data/lessons';
import { addXP, markLessonComplete, touchStreak } from '../utils/storage';
import { colors, layout } from '../theme';

const XP_PER_CORRECT = 10;

export default function QuizScreen({ route, navigation }) {
  const { lessonId } = route.params || {};
  const lesson = useMemo(() => lessons.find(l => l.id === lessonId), [lessonId]);
  const [questions, setQuestions] = useState(() => (lesson?.items || []).filter(i => i.type === 'quiz'));
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);
  const [feedback, setFeedback] = useState('');
  const jump = useRef(new Animated.Value(0)).current;

  useEffect(() => { touchStreak(); }, []);
  if (!lesson) return <View style={{ padding:16 }}><Text>No se encontró la lección.</Text></View>;

  const q = questions[idx];

  const onPick = (i) => {
    if (picked !== null) return;
    setPicked(i);
    const correct = i === q.answerIndex;
    if (correct) {
      setScore(s => s + 1);
      setFeedback('¡Correcto! +10 XP');
      addXP(XP_PER_CORRECT);
      Animated.sequence([
        Animated.timing(jump, { toValue: -6, duration: 120, useNativeDriver: true }),
        Animated.timing(jump, { toValue: 0, duration: 140, useNativeDriver: true }),
      ]).start();
    } else {
      setFeedback(`Ups. ${q.explain}`);
      setQuestions(prev => [...prev, q]); // reinsertar al final
    }
  };

  const onNext = async () => {
    if (idx + 1 >= questions.length) {
      await markLessonComplete(lesson.id);
      navigation.goBack();
      return;
    }
    setIdx(idx + 1); setPicked(null); setFeedback('');
  };

  const progress = Math.min(1, idx / Math.max(1, questions.length));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${progress*100}%` }]} /></View>

      <View style={styles.card}>
        <Text style={styles.question}>{q.question}</Text>

        {q.choices.map((c, i) => {
          const isCorrect = i === q.answerIndex;
          const isPicked = picked === i;
          let bg = colors.surface, border = colors.border;
          if (picked !== null) {
            if (isPicked && isCorrect) { bg = '#e9fbe8'; border = '#9ae6a3'; }
            else if (isPicked && !isCorrect) { bg = '#ffeeee'; border = '#f9b4b4'; }
          }
          return (
            <TouchableOpacity key={i} style={[styles.choice, { backgroundColor:bg, borderColor: border }]} onPress={() => onPick(i)}>
              <Text style={styles.choiceText}>{c}</Text>
            </TouchableOpacity>
          );
        })}

        <Text style={styles.feedback}>{feedback}</Text>

        <Animated.View style={{ transform:[{ translateY: jump }] }}>
          <TouchableOpacity style={styles.nextBtn} onPress={onNext}>
            <Text style={{ color:'#fff', fontFamily:'Inter_800ExtraBold' }}>
              {idx + 1 >= questions.length ? 'Finalizar' : 'Siguiente'}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Text style={styles.score}>Puntaje: {score}/{questions.length}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20, alignSelf:'center', width:'100%', maxWidth: layout.maxWidth, gap:12 },
  title:{ fontFamily:'Inter_800ExtraBold', fontSize:22 },
  progressTrack:{ height:8, backgroundColor:'#eaeef5', borderRadius:999, overflow:'hidden' },
  progressFill:{ height:'100%', backgroundColor: colors.primary },
  card:{
    marginTop:8, backgroundColor: colors.surface, borderColor: colors.border, borderWidth:1,
    borderRadius: layout.radius, padding:18, ...layout.shadow
  },
  question:{ fontSize:18, fontFamily:'Inter_600SemiBold', marginBottom:8 },
  choice:{ borderWidth:1, borderRadius:12, padding:12, marginTop:8 },
  choiceText:{ fontSize:16 },
  feedback:{ minHeight:22, marginTop:10, color: colors.sub },
  nextBtn:{
    alignSelf:'flex-end',
    backgroundColor: colors.primary,
    paddingVertical:12, paddingHorizontal:20,
    borderRadius:999, marginTop:12,
    shadowColor:'#7c3aed', shadowOpacity:0.25, shadowRadius:14, shadowOffset:{width:0,height:6}
  },
  score:{ marginTop:8, color: colors.sub },
});
