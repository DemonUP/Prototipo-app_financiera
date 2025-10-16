const lessons = [
  {
    id: 'basicos-1',
    title: 'Conceptos básicos I',
    summary: 'Inflación, interés simple/compuesto, presupuesto',
    items: [
      { type: 'card', content: 'La **inflación** es el aumento general de precios que reduce el poder adquisitivo.' },
      { type: 'card', content: 'El **interés compuesto** reinvierte intereses y acelera el crecimiento.' },
      { type: 'quiz',
        question: 'Si la inflación es 10% y tu dinero no rinde, tu poder de compra…',
        choices: ['Aumenta 10%', 'Disminuye ~10%', 'Se mantiene'],
        answerIndex: 1, explain: 'Necesitas ~10% más dinero para lo mismo.'
      },
      { type: 'quiz',
        question: '¿Qué hace crecer más un ahorro a largo plazo?',
        choices: ['Interés simple', 'Interés compuesto', 'Guardarlo'],
        answerIndex: 1, explain: 'El compuesto capitaliza intereses.' },
    ],
  },
  {
    id: 'inversion-1',
    title: 'Inversión y riesgo',
    summary: 'Riesgo, diversificación, ETFs',
    items: [
      { type: 'card', content: '**Riesgo**: el rendimiento puede ser distinto al esperado.' },
      { type: 'card', content: '**Diversificar** reduce riesgo específico al mezclar activos.' },
      { type: 'quiz',
        question: '¿Qué reduce riesgo específico?',
        choices: ['Endeudarse', 'Diversificar', 'Elegir 1 acción'],
        answerIndex: 1, explain: 'La diversificación distribuye el riesgo.' },
    ],
  },
];

export default lessons;
