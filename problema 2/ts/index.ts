import { writeFileSync } from 'fs'

/**
 * Genera los coeficientes del polinomio (x+1)^n usando el triángulo de Pascal.
 * Utiliza memoria dinámica (arreglo redimensionable).
 */
function generarCoeficientes(n: number): number[] {
  // Creamos un arreglo con n+1 posiciones (desde 0 hasta n)
  const coef: number[] = new Array(n + 1).fill(0)
  coef[0] = 1 // El primer coeficiente siempre es 1 (base del triángulo)

  // Generamos los coeficientes usando la regla de Pascal
  for (let i = 1; i <= n; i++) {
    // Recorremos de derecha a izquierda para no sobrescribir datos
    for (let j = i; j > 0; j--) {
      // Usamos operador nullish coalescing (??) y garantizamos el tipo
      const left = coef[j] ?? 0
      const right = coef[j - 1] ?? 0
      coef[j] = left + right
    }
  }

  return coef
}

/**
 * Calcula el valor del polinomio (x+1)^n de forma explícita
 * usando los coeficientes generados y muestra el proceso paso a paso.
 */
function calcularPolinomio(
  n: number,
  x: number
): { coeficientes: number[]; pasos: string[]; resultado: number } {
  // Obtenemos los coeficientes del polinomio (x+1)^n
  const coeficientes = generarCoeficientes(n)
  const pasos: string[] = []

  let resultado = 0

  // Recorremos desde el mayor exponente hasta 0
  for (let exp = n; exp >= 0; exp--) {
    // Verificamos que el coeficiente no sea undefined (TS-safe)
    const coef = coeficientes[exp] ?? 0
    const termino = coef * Math.pow(x, exp)
    resultado += termino
    pasos.push(`${coef} * ${x}^${exp} = ${termino}`)
  }

  return {
    coeficientes,
    pasos,
    resultado,
  }
}

// --- Programa principal ---
const n = 100
const x = 2

const contenido: string[] = []

const inicio = process.hrtime.bigint() // tiempo de alta resolución
const { coeficientes, pasos, resultado } = calcularPolinomio(n, x)
const fin = process.hrtime.bigint()

const tiempo = Number(fin - inicio) / 1_000_000 // convertir nanosegundos a ms

contenido.push(`Coeficientes del polinomio (x+1)^${n}:`)
contenido.push(coeficientes.join(' '))
contenido.push(`\n\nCálculo paso a paso para x=${x}:`)
contenido.push(...pasos.slice(0, 10)) // primeros 10 pasos
contenido.push(`\n\nResultado final: f(${x}) = ${resultado}`)
contenido.push(`Tiempo de ejecución: ${tiempo.toFixed(6)} ms`)

// Guardar en archivo
console.log('Directorio actual:', process.cwd())

writeFileSync('resultado_ts.txt', contenido.join('\n'), { encoding: 'utf-8' })

console.log("Archivo 'resultado_ts.txt' generado ✅")
console.log(`Tiempo de ejecución: ${tiempo.toFixed(6)} ms`)
