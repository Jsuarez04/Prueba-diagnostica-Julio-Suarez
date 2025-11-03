#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

typedef struct {
    char *ingles;
    char *espanol;
} PalabraReservada;

int main() {
    // Lista de palabras reservadas y su traducción
    PalabraReservada palabras[] = {
        {"auto", "automático"}, {"break", "romper"}, {"case", "caso"},
        {"char", "carácter"}, {"const", "constante"}, {"continue", "continuar"},
        {"default", "por_defecto"}, {"do", "hacer"}, {"double", "doble"},
        {"else", "sino"}, {"enum", "enumeración"}, {"extern", "externo"},
        {"float", "flotante"}, {"for", "para"}, {"goto", "ir_a"},
        {"if", "si"}, {"int", "entero"}, {"long", "largo"},
        {"register", "registro"}, {"return", "retornar"}, {"short", "corto"},
        {"signed", "con_signo"}, {"sizeof", "tamaño_de"}, {"static", "estático"},
        {"struct", "estructura"}, {"switch", "seleccionar"}, {"typedef", "tipo_definido"},
        {"union", "unión"}, {"unsigned", "sin_signo"}, {"void", "vacío"},
        {"volatile", "volátil"}, {"while", "mientras"}
    };
    int nPalabras = sizeof(palabras)/sizeof(palabras[0]);

    // --- Cargar código en memoria dinámica ---
    size_t size = 1024; // tamaño inicial
    char *codigo = malloc(size);
    if (!codigo) {
        printf("Error al asignar memoria.\n");
        return 1;
    }

    printf("Ingrese el código C (finalice con una línea vacía):\n");
    codigo[0] = '\0';
    char linea[256];
    while (fgets(linea, sizeof(linea), stdin)) {
        if (linea[0] == '\n') break;
        // ampliar memoria si es necesario
        if (strlen(codigo) + strlen(linea) + 1 > size) {
            size *= 2;
            codigo = realloc(codigo, size);
            if (!codigo) {
                printf("Error al reasignar memoria.\n");
                return 1;
            }
        }
        strcat(codigo, linea);
    }

    // --- Tokenizar y buscar palabras reservadas ---
    char *token = strtok(codigo, " \t\n;(){}[],");
    while (token) {
        for (int i = 0; i < nPalabras; i++) {
            if (strcmp(token, palabras[i].ingles) == 0) {
                printf("%s -> %s\n", token, palabras[i].espanol);
            }
        }
        token = strtok(NULL, " \t\n;(){}[],");
    }

    free(codigo);
    return 0;
}
