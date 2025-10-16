// src/data/levels.js
// 6 niveles: 3 de "fundamentos" + 3 de "gestion"
export const LEVELS = {
  fundamentos: [
    {
      id: 'f1',
      title: '¿Qué es el Dinero?',
      xpReward: 50,
      passScore: 60, // porcentaje mínimo para aprobar
      questions: [
        {
          q: '¿Qué función principal cumple el dinero?',
          options: ['Ser bonito', 'Intercambio de bienes y servicios', 'Atraer riqueza por sí mismo', 'Evitar impuestos'],
          answer: 1,
          explain: 'El dinero facilita el intercambio de bienes y servicios como medio de pago.'
        },
        {
          q: '¿Cuál NO es una propiedad del dinero?',
          options: ['Divisible', 'Duradero', 'Pesado', 'Aceptado'],
          answer: 2,
          explain: 'El dinero idealmente es ligero, divisible, duradero y aceptado.'
        },
        {
          q: '¿Qué es el ingreso?',
          options: ['Lo que pagas', 'Lo que ganas', 'Lo que debes', 'Lo que ahorras'],
          answer: 1,
          explain: 'Ingreso = dinero que entra (salario, ventas, etc.).'
        },
      ],
    },
    {
      id: 'f2',
      title: 'Valor del Dinero en el Tiempo',
      xpReward: 75,
      passScore: 60,
      questions: [
        {
          q: 'La inflación:',
          options: ['Aumenta el poder adquisitivo', 'Reduce el poder adquisitivo', 'No afecta al dinero', 'Solo afecta a ricos'],
          answer: 1,
          explain: 'Con inflación, la misma cantidad de dinero compra menos.'
        },
        {
          q: 'Si hoy puedes invertir y ganar 5%, entonces $100 hoy vs $100 en 1 año:',
          options: ['$100 hoy valen menos', 'Son iguales', '$100 hoy valen más', 'Depende del clima'],
          answer: 2,
          explain: 'Por el costo de oportunidad, $100 hoy > $100 en el futuro.'
        },
        {
          q: 'Interés simple se calcula sobre:',
          options: ['Capital + intereses', 'Solo capital', 'Inflación', 'Impuestos'],
          answer: 1,
          explain: 'El simple se calcula siempre sobre el capital original.'
        },
      ],
    },
    {
      id: 'f3',
      title: 'Ingresos vs Gastos',
      xpReward: 90,
      passScore: 60,
      questions: [
        {
          q: 'Si gastas más de lo que ingresas consistentemente, ¿qué ocurre?',
          options: ['Aumentas ahorro', 'Te endeudas', 'Nada', 'Ganas interés'],
          answer: 1,
          explain: 'Déficit ⇒ suele terminar en deudas.'
        },
        {
          q: 'Para mejorar tu balance mensual, lo primero es:',
          options: ['No medir nada', 'Aumentar gastos fijos', 'Hacer presupuesto', 'Usar más crédito'],
          answer: 2,
          explain: 'Presupuestar te da visibilidad y control.'
        },
        {
          q: 'Un gasto variable es:',
          options: ['Renta', 'Suscripción anual', 'Comida a domicilio', 'Seguro de auto'],
          answer: 2,
          explain: 'Variables cambian mes a mes: ocio, comida fuera, etc.'
        },
      ],
    },
  ],
  gestion: [
    {
      id: 'g1',
      title: 'Tu Primer Presupuesto',
      xpReward: 80,
      passScore: 60,
      questions: [
        {
          q: 'Primera acción para presupuestar:',
          options: ['Estimar a ojo', 'Registrar ingresos y gastos', 'Comprar una libreta cara', 'Usar crédito'],
          answer: 1,
          explain: 'Registra movimientos para saber de dónde partes.'
        },
        {
          q: 'Un presupuesto realista debe ser:',
          options: ['Rígido', 'Flexible y actualizado', 'Secreto', 'Solo trimestral'],
          answer: 1,
          explain: 'Debe adaptarse a cambios y revisarse.'
        },
      ],
    },
    {
      id: 'g2',
      title: 'Regla 50/30/20',
      xpReward: 90,
      passScore: 60,
      questions: [
        {
          q: 'En la regla 50/30/20, el 50% es para:',
          options: ['Deseos', 'Necesidades', 'Ahorro e inversión', 'Deudas malas'],
          answer: 1,
          explain: '50% necesidades, 30% deseos, 20% ahorro/inversión.'
        },
        {
          q: 'Si ganas $1000 netos, ¿cuánto idealmente va a ahorro/inversión?',
          options: ['$50', '$100', '$200', '$300'],
          answer: 2,
          explain: '20% de 1000 = 200.'
        },
      ],
    },
    {
      id: 'g3',
      title: 'Fondo de Emergencia',
      xpReward: 100,
      passScore: 60,
      questions: [
        {
          q: 'Meta típica de fondo de emergencia:',
          options: ['1-2 meses de gastos', '3-6 meses de gastos', '12-18 meses', 'No se recomienda'],
          answer: 1,
          explain: 'Se sugieren 3 a 6 meses cubiertos.'
        },
        {
          q: '¿Dónde conviene guardarlo?',
          options: ['Bajo el colchón', 'Inversión muy volátil', 'Alta liquidez y bajo riesgo', 'Criptos riesgosas'],
          answer: 2,
          explain: 'Necesitas liquidez y estabilidad.'
        },
      ],
    },
  ],
};

// util simple para buscar nivel por rama+id
export function findLevel(branchId, levelId) {
  const arr = LEVELS[branchId] || [];
  return arr.find(l => l.id === levelId);
}
