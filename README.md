# Proyecto: Prueba diagnóstica

## Autor

**Julio Suarez**  
CI: V31074002

---

## Descripción

Este repositorio contiene la solución a los cuatro problemas planteados en la actividad. Cada problema está implementado en el lenguaje más adecuado o solicitado, utilizando buenas prácticas de programación y memoria dinámica cuando es necesario.

Las soluciones incluyen:

1. Validación de cadenas en notación FEN (Forsyth-Edwards Notation) para ajedrez.
2. Generación de coeficientes de polinomios \((x+1)^n\) y cálculo paso a paso del valor del polinomio.
3. Reconocimiento de cadenas con expresiones en notación científica, IP y correo electrónico.
4. Detección de palabras reservadas de C y traducción al español usando memoria dinámica.

---

## Estructura del repositorio

/repositorio
│
├── problema1/ # Validación de FEN
│ ├── index.ts
│ └── README.md (opcional)
│
├── problema2/ # Polinomios y Pascal
│ ├── ts/ # Implementación TypeScript
│ │ ├── index.ts
│ │ └── resultado_ts.txt
│ └── py/ # Implementación Python
│ ├── main.py
│ └── resultado_py.txt
│
├── problema3/ # Reconocimiento de cadenas
│ └── index.ts
│
├── problema4/ # Palabras reservadas de C
│ └── main.c
│
└── README.md # Este archivo

---

## Instrucciones de ejecución

### Problema 1 (FEN)

- **Lenguaje:** TypeScript
- **Ejecución:**

```bash
cd problema1
ts-node index.ts
Problema 2 (Polinomios)
Lenguaje: TypeScript


cd problema2/ts
ts-node index.ts
Esto generará resultado_ts.txt con los coeficientes, pasos y tiempo de ejecución.

Lenguaje: Python

bash
cd problema2/py
python main.py
Esto generará resultado_py.txt con los coeficientes, pasos y tiempo de ejecución.

Nota: Para n=100, los tiempos de ejecución se miden con alta resolución.

Problema 3 (Reconocimiento de cadenas)
Lenguaje: TypeScript

Ejecución:

bash
cd problema3
ts-node index.ts
Detecta:

Números en notación científica

Direcciones IP (IPv4)

Correos electrónicos

Problema 4 (Palabras reservadas de C)
Lenguaje: C / TS

Ejecución:

bash

cd problema4
gcc palabrasReservadas.c -o palabrasReservadas

./palabrasReservadas
./palabrasReservadasTS Es la version con TS

Permite ingresar un código C y luego

Muestra las palabras reservadas encontradas con su traducción al español.

Dependencias
TypeScript: npm install -g typescript ts-node

Python 3 (para problema 2/py)

GCC (para compilar C en problema 4)


Los resultados paso a paso y tiempos de ejecución se almacenan en archivos .txt cuando corresponde.

Se respetan las buenas prácticas de programación, manejo de errores y validación de entradas.

Link a la defensa
[Incluir aquí el link a la presentación o defensa si aplica]
```
