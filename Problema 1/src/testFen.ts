import { validateFen } from './validators'

const fens = [
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', // válido
  // Output → ✅ FEN válida ✅

  'rnbqkbn/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', // menos filas
  // Output → ❌ Fila 1 no suma 8 casillas.

  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPP/RNBQKBNR w KQkq - 0 1', // fila corta
  // Output → ❌ Fila 7 no suma 8 casillas.

  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNK w KQkq - 0 1', // dos reyes blancos
  // Output → ❌ Debe haber exactamente un rey blanco y uno negro.
]

for (const f of fens) {
  const response = validateFen(f)
  console.log(`FEN: ${f}`)
  console.log(`→ ${response.valid ? '✅' : '❌'} ${response.message}\n`)
}
