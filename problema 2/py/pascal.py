import time

def generarCoeficientes(n: int) -> list[int]:
  coef = [0] * (n+1)
  coef[0]=1

  print(coef) #Array de coeficientes inicial

  for i in range(1, n+1):
    for j in range(i,0, -1):
      coef[j] = coef[j] + coef[j-1]

  return coef

def calcularPolinomio(n: int, x: int) -> tuple[list[int], int, list[str]]:
  coef = generarCoeficientes(n)
  pasos: list[str] = []

  resultado = 0

  for i in range(n+1):
    resultado += coef[i]*(x**i)
    pasos.append(f"{coef[i]} * {x}^{i} = {coef[i]*(x**i)}")

  return coef,resultado, pasos


# --- Programa principal ---
n = 100
x = 2

contenido: list[str] = []  # TIPADO EXPLÍCITO

inicio = time.perf_counter()
coef, resultado, pasos = calcularPolinomio(n, x)
fin = time.perf_counter()
tiempo = fin - inicio
print(f"Tiempo de ejecución: {tiempo:.6f} segundos")


contenido.append(f"Coeficientes del polinomio (x+1)^{n}:")
contenido.append(" ".join(map(str, coef)))
contenido.append(f"\n\nCálculo paso a paso para x={x}:")
contenido.extend(pasos[:10])  # mostramos solo los primeros pasos
contenido.append(f"\n\nResultado final: f({x}) = {resultado}")
contenido.append(f"Tiempo de ejecución: {tiempo:.6f} segundos")
with open("resultado_py.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(contenido))

print("Archivo 'resultado_py.txt' generado ✅")
print(f"Tiempo de ejecución: {tiempo:.6f} segundos")