import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  XP: 'xp',
  STREAK: 'streak',
  LAST_PLAYED: 'last_played_date',
  COMPLETED: 'completed_lessons',
};

export async function getXP() {
  const v = await AsyncStorage.getItem(KEYS.XP);
  return v ? parseInt(v) : 0;
}
export async function addXP(amount) {
  const xp = await getXP();
  await AsyncStorage.setItem(KEYS.XP, String(xp + amount));
}

export async function getCompleted() {
  const v = await AsyncStorage.getItem(KEYS.COMPLETED);
  return v ? JSON.parse(v) : {};
}
export async function markLessonComplete(lessonId) {
  const c = await getCompleted();
  c[lessonId] = true;
  await AsyncStorage.setItem(KEYS.COMPLETED, JSON.stringify(c));
}

function todayStr() {
  const d = new Date();
  return d.toISOString().slice(0,10); // YYYY-MM-DD
}

export async function getStreak() {
  const v = await AsyncStorage.getItem(KEYS.STREAK);
  return v ? parseInt(v) : 0;
}
export async function touchStreak() {
  const last = await AsyncStorage.getItem(KEYS.LAST_PLAYED);
  const today = todayStr();

  if (!last) {
    await AsyncStorage.setItem(KEYS.STREAK, '1');
    await AsyncStorage.setItem(KEYS.LAST_PLAYED, today);
    return 1;
  }

  if (last === today) {
    // ya registrada hoy, no cambia
    return parseInt((await AsyncStorage.getItem(KEYS.STREAK)) || '1');
  }

  // calcular si es consecutivo (ayer)
  const y = new Date(today);
  y.setDate(y.getDate() - 1);
  const yesterday = y.toISOString().slice(0,10);

  if (last === yesterday) {
    const curr = await getStreak();
    const next = curr + 1;
    await AsyncStorage.setItem(KEYS.STREAK, String(next));
    await AsyncStorage.setItem(KEYS.LAST_PLAYED, today);
    return next;
  } else {
    // se rompió racha
    await AsyncStorage.setItem(KEYS.STREAK, '1');
    await AsyncStorage.setItem(KEYS.LAST_PLAYED, today);
    return 1;
  }
}
