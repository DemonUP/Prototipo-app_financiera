// src/data/mockState.js
export const userState = {
  user: { name: 'asd', level: 1, streakDays: 0, coins: 0, xp: 0 },
  setXP(x) { this.user.xp = x; },
};

export const branches = [
  { id: 'fundamentos', name: 'Fundamentos Financieros', desc: 'Conceptos básicos del dinero y la economía personal', levels: 3, progress: 0, icon: '💡' },
  { id: 'gestion', name: 'Gestión del Dinero', desc: 'Presupuesto, ahorro y control de gastos', levels: 4, progress: 0, icon: '📊' },
  { id: 'credito', name: 'Crédito y Deudas', desc: 'Maneja el crédito y evita trampas de deuda', levels: 4, progress: 0, icon: '💳' },
  { id: 'inversiones', name: 'Inversiones', desc: 'Haz crecer tu dinero', levels: 5, progress: 0, icon: '📈' },
  { id: 'largo_plazo', name: 'Planificación a Largo Plazo', desc: 'Retiro, metas y legado', levels: 3, progress: 0, icon: '🎯' },
];

export const branchPaths = {
  fundamentos: [
    { id: 'f1', title: '¿Qué es el Dinero?', desc: 'Conceptos básicos del dinero', xp: 50, questions: 3, locked: false, color: '#5B8CFF' },
    { id: 'f2', title: 'Valor del Dinero en el Tiempo', desc: 'Inflación y poder adquisitivo', xp: 75, questions: 3, locked: true, color: '#6bd6a6' },
    { id: 'f3', title: 'Ingresos vs Gastos', desc: 'La ecuación fundamental', xp: 90, questions: 3, locked: true, color: '#ffd166' },
  ],
  gestion: [
    { id: 'g1', title: 'Tu Primer Presupuesto', desc: 'Plan de gastos e ingresos', xp: 80, questions: 2, locked: false, color: '#86efac' },
    { id: 'g2', title: 'Regla 50/30/20', desc: 'Distribuye tu dinero', xp: 90, questions: 2, locked: true, color: '#60a5fa' },
    { id: 'g3', title: 'Fondo de Emergencia', desc: 'Tu colchón financiero', xp: 100, questions: 2, locked: true, color: '#fca5a5' },
  ],
  credito: [
    { id: 'c1', title: 'Tipos de Deuda', desc: 'Buena vs mala deuda', xp: 80, questions: 2, locked: false, color: '#fda4af' },
    { id: 'c2', title: 'Tarjetas de Crédito', desc: 'Úsalas inteligentemente', xp: 90, questions: 2, locked: true, color: '#f87171' },
    { id: 'c3', title: 'Interés Compuesto (en deudas)', desc: 'Tu enemigo', xp: 100, questions: 2, locked: true, color: '#fb923c' },
  ],
};
