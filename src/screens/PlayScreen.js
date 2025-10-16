// src/screens/PlayScreen.js
import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { findLevel } from '../data/levels';
import { userState } from '../data/mockState';

const QUESTION_TIME = 20; // segundos por pregunta

export default function PlayScreen({ route, navigation }) {
  const { branchId, levelId, nextLevelId, titleFromNode } = route.params;
  const level = useMemo(() => findLevel(branchId, levelId), [branchId, levelId]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(QUESTION_TIME);
  const [finished, setFinished] = useState(false);

  const q = level?.questions[idx];

  // Timer
  useEffect(() => {
    if (finished) return;
    if (time <= 0) {
      handleAnswer(-1); // sin respuesta
      return;
    }
    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time, finished]);

  if (!level) {
    return (
      <View style={screen}>
        <Text>No se encontró el nivel.</Text>
        <Pressable style={btn} onPress={() => navigation.goBack()}><Text style={btnTxt}>Volver</Text></Pressable>
      </View>
    );
  }

  function handleAnswer(optIndex) {
    if (finished) return;
    const correct = q.answer === optIndex;
    const gained = correct ? 100 / level.questions.length : 0;
    setScore(s => s + gained);
    setSelected(optIndex);
    setTimeout(() => {
      if (idx + 1 < level.questions.length) {
        setIdx(idx + 1);
        setSelected(null);
        setTime(QUESTION_TIME);
      } else {
        setFinished(true);
      }
    }, 600);
  }

  function handleFinish() {
    const passed = score >= level.passScore - 1e-6;
    if (passed) {
      userState.user.xp += level.xpReward;
    }
    navigation.replace('Result', {
      branchId, levelId,
      title: level.title || titleFromNode,
      score: Math.round(score),
      passed,
      xp: passed ? level.xpReward : 0,
      nextLevelId,
    });
  }

  if (finished) {
    return (
      <View style={screen}>
        <Text style={{ fontSize: 22, fontWeight: '800', marginBottom: 6 }}>{level.title}</Text>
        <Text style={{ opacity: 0.7, marginBottom: 14 }}>Puntaje: {Math.round(score)}%</Text>
        <Pressable style={btnPrimary} onPress={handleFinish}><Text style={btnTxtWhite}>Ver resultado</Text></Pressable>
      </View>
    );
  }

  return (
    <View style={screen}>
      {/* HUD */}
      <View style={hud}>
        <Text style={{ fontWeight: '800' }}>{level.title}</Text>
        <Text style={{ opacity: 0.7 }}>Pregunta {idx + 1} / {level.questions.length}</Text>
        <View style={timerBarWrap}>
          <View style={[timerBarFill, { width: `${(time / QUESTION_TIME) * 100}%` }]} />
        </View>
        <Text style={{ opacity: 0.7 }}>{time}s</Text>
      </View>

      {/* Pregunta */}
      <View style={card}>
        <Text style={{ fontWeight: '700', marginBottom: 10 }}>{q.q}</Text>
        {q.options.map((op, i) => {
          const isSel = selected === i;
          const isCorrect = selected != null && i === q.answer;
          const bg =
            selected == null
              ? '#f3f4f6'
              : isCorrect
              ? '#22c55e33'
              : isSel
              ? '#ef444433'
              : '#f3f4f6';

        return (
          <Pressable key={i} disabled={selected != null} onPress={() => handleAnswer(i)} style={[opt, { backgroundColor: bg }]}>
            <Text>{op}</Text>
          </Pressable>
        );})}

        {selected != null && (
          <Text style={{ opacity: 0.7, marginTop: 8, fontSize: 12 }}>
            {q.explain}
          </Text>
        )}
      </View>
    </View>
  );
}

/* Resultado */
export function ResultScreen({ route, navigation }) {
  const { title, score, passed, xp, branchId, nextLevelId } = route.params;

  return (
    <View style={screen}>
      <Text style={{ fontSize: 22, fontWeight: '800' }}>{passed ? '¡Completado!' : 'Inténtalo de nuevo'}</Text>
      <Text style={{ marginTop: 6 }}>{title}</Text>
      <Text style={{ opacity: 0.7, marginTop: 4 }}>Puntaje: {score}%</Text>
      {passed ? <Text style={{ marginTop: 4 }}>Ganaste {xp} XP</Text> : null}

      <View style={{ height: 10 }} />
      <Pressable style={btn} onPress={() => navigation.popToTop()}><Text style={btnTxt}>Volver al inicio</Text></Pressable>
      {passed && nextLevelId ? (
        <Pressable style={btnPrimary} onPress={() => navigation.replace('Play', { branchId, levelId: nextLevelId })}>
          <Text style={btnTxtWhite}>Siguiente nivel →</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

/* estilos inline */
const screen = { flex: 1, backgroundColor: '#f5f7fb', padding: 16, alignItems: 'center' };
const hud = { width: '100%', maxWidth: 800, backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 12 };
const card = { width: '100%', maxWidth: 800, backgroundColor: '#fff', borderRadius: 12, padding: 12 };
const opt = { padding: 12, borderRadius: 10, marginTop: 8 };
const timerBarWrap = { height: 6, backgroundColor: '#eef2ff', borderRadius: 6, marginVertical: 6 };
const timerBarFill = { height: 6, backgroundColor: '#6366f1', borderRadius: 6 };
const btn = { backgroundColor: '#e5e7eb', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 10, marginTop: 8, alignItems: 'center' };
const btnPrimary = { backgroundColor: '#6366f1', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 10, marginTop: 8, alignItems: 'center' };
const btnTxt = { fontWeight: '700', color: '#111827' };
const btnTxtWhite = { fontWeight: '700', color: '#fff' };
