// 3) Implemente reconocimiento de cadenas, expresiones notación científica, ip, correo electrónico.

//Regex
const regexCientifica = /^[+-]?\d+(\.\d+)?[eE][+-]?\d+$/

// [+-]? → opcional + o -

// \d+(\.\d+)? → parte entera y opcional decimal

// [eE][+-]?\d+ → la e o E seguida de exponente

const regexIPv4 =
  /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/

// 25[0-5] → 250-255

// 2[0-4]\d → 200-249

// 1\d{2} → 100-199

// [1-9]?\d → 0-99

// Se repite con . tres veces

const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// [a-zA-Z0-9._%+-]+ → usuario

// @ → obligatorio

// [a-zA-Z0-9.-]+ → dominio

// \.[a-zA-Z]{2,} → extensión mínima 2 caracteres

function reconocerCadena(cadena: string): String {
  if (regexIPv4.test(cadena)) return 'Dirección IP'
  if (regexCorreo.test(cadena)) return 'Correo electrónico'
  if (regexCientifica.test(cadena)) return 'Notación científica'
  return 'Cadena no reconocida'
}

const tests = [
  '1.23e10', //✅
  '-2.5E-3', //✅
  '192.168.1.1', //✅
  '255.255.255.255', //✅
  'juliorbk.dev@gmail.com', //✅
  'correo@sub.dominio.489', // ❌
  'texto cualquiera', // ❌
]

for (const test of tests) {
  console.log(`${test} -> ${reconocerCadena(test)}`)
}
