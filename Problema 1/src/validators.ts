// Devuelve un objeto con dos propiedades: valid (boolean) y message (string)
export function validateFen(fen: string): { valid: boolean; message: string } {
  // Verificamos que la entrada exista y sea una cadena
  if (!fen || typeof fen !== 'string') {
    return { valid: false, message: 'FEN debe ser una cadena de texto.' }
  }

  // Separamos la cadena por espacios (usando regex para cubrir múltiples espacios)
  const parts = fen.trim().split(/\s+/)
  if (parts.length !== 6) {
    // La notación FEN siempre debe tener 6 partes
    return {
      valid: false,
      message: `FEN debe tener 6 campos (hay ${parts.length}).`,
    }
  }

  // Desestructuramos las partes de la cadena FEN
  const [
    posicion, // distribución de piezas
    activo, // color que mueve (w o b)
    enroque, // derechos de enroque
    enPassant, // casilla de captura al paso
    medioMovimiento, // contador de medio movimiento
    movimientoCompleto, // número de jugada
  ] = parts as [string, string, string, string, string, string]

  // --- Validación del tablero de piezas ---
  const rangos = posicion.split('/')
  if (rangos.length !== 8) {
    // El tablero debe tener exactamente 8 filas
    return { valid: false, message: 'El campo de piezas debe tener 8 filas.' }
  }

  // Expresión regular que valida caracteres válidos dentro del tablero
  // Letras válidas (piezas) y números (espacios vacíos)
  const piezasValidas = /^[prnbqkPRNBQK1-8]+$/
  let reyBlanco = 0
  let reyNegro = 0

  // Recorremos cada fila del tablero
  for (const [i, rango] of rangos.entries()) {
    // Si la fila contiene caracteres que no coinciden con los permitidos, error
    if (!piezasValidas.test(rango)) {
      return {
        valid: false,
        message: `Fila ${i + 1} contiene caracteres inválidos.`,
      }
    }

    let count = 0
    // Recorremos cada carácter de la fila
    for (const ch of rango) {
      if (/[1-8]/.test(ch))
        // Si el carácter es un número del 1 al 8, suma esa cantidad de casillas vacías
        count += parseInt(ch)
      else count += 1 // Si es una pieza, cuenta como una casilla ocupada

      // Contamos reyes para asegurarnos de que haya exactamente uno de cada color
      if (ch === 'K') reyBlanco++
      if (ch === 'k') reyNegro++
    }

    // Cada fila debe representar exactamente 8 casillas en total
    if (count !== 8) {
      return { valid: false, message: `Fila ${i + 1} no suma 8 casillas.` }
    }
  }

  // Verificamos que haya un único rey blanco y un único rey negro
  if (reyBlanco !== 1 || reyNegro !== 1) {
    return {
      valid: false,
      message: 'Debe haber exactamente un rey blanco y uno negro.',
    }
  }

  // --- Validación del color activo ---
  // Solo puede ser 'w' (blancas) o 'b' (negras)
  if (!['w', 'b'].includes(activo)) {
    return { valid: false, message: "El color activo debe ser 'w' o 'b'." }
  }

  // --- Validación del campo de enroque ---
  // Puede ser "-", o una combinación de las letras KQkq (sin repetir)
  if (enroque !== '-' && !/^[KQkq]+$/.test(enroque)) {
    return { valid: false, message: 'Campo de enroque inválido.' }
  }
  // Comprobamos que no haya letras repetidas en el campo de enroque
  if (new Set(enroque).size !== enroque.length && enroque !== '-') {
    return { valid: false, message: 'Campo de enroque tiene duplicados.' }
  }

  // --- Validación del campo "en passant" ---
  // Puede ser "-" o una casilla válida (columna a-h y fila 3 o 6)
  if (enPassant !== '-' && !/^[a-h][36]$/.test(enPassant)) {
    return { valid: false, message: 'Campo en_passant inválido.' }
  }

  // --- Validación de los contadores ---
  const half = Number(medioMovimiento)
  const full = Number(movimientoCompleto)

  // El contador de medio movimiento debe ser >= 0
  if (isNaN(half) || half < 0) {
    return { valid: false, message: 'halfmove debe ser >= 0.' }
  }

  // El número de jugada debe ser >= 1
  if (isNaN(full) || full < 1) {
    return { valid: false, message: 'fullmove debe ser >= 1.' }
  }

  // Si todas las validaciones pasan, la FEN es válida
  return { valid: true, message: 'FEN válida ✅' }
}
