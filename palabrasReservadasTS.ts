const palabrasReservadas: Record<string, string> = {
  auto: 'automático',
  break: 'romper',
  case: 'caso',
  char: 'carácter',
  const: 'constante',
  continue: 'continuar',
  default: 'por_defecto',
  do: 'hacer',
  double: 'doble',
  else: 'sino',
  enum: 'enumeración',
  extern: 'externo',
  float: 'flotante',
  for: 'para',
  goto: 'ir_a',
  if: 'si',
  int: 'entero',
  long: 'largo',
  register: 'registro',
  return: 'retornar',
  short: 'corto',
  signed: 'con_signo',
  sizeof: 'tamaño_de',
  static: 'estático',
  struct: 'estructura',
  switch: 'seleccionar',
  typedef: 'tipo_definido',
  union: 'unión',
  unsigned: 'sin_signo',
  void: 'vacío',
  volatile: 'volátil',
  while: 'mientras',
}

function traducirC(codigo: string): string[] { 
  // Separamos el código en tokens por espacios y símbolos comunes
  const tokens = codigo.split(/\b/) // \b = límite de palabra  //REGEX
  const traducciones: string[] = [] //Array para gurdar las traducciones

  for (let token of tokens) { 
    // Si el token es una palabra reservada, traducirlo
    const trimmed = token.trim()
    if (palabrasReservadas[trimmed]) {
      traducciones.push(`${trimmed} -> ${palabrasReservadas[trimmed]}`)
    }
  }

  return traducciones
}

const codigoC = `
#include <stdio.h>
int main() {
    int x = 10;
    if (x > 0) {
        for (int i = 0; i < x; i++) {
            printf("%d\\n", i);
        }
    }
    return 0;
}
`

const resultado = traducirC(codigoC)
console.log('Palabras reservadas encontradas y traducidas:')
console.log(resultado.join('\n'))
