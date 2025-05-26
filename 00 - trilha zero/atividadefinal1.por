programa {
  funcao inicio() {
    inteiro vetor[] = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6}
    inteiro aux

    //escreva("VETOR ORIGINAL: ")
    para(inteiro i = 0; i < 9; i++){ // Repete o for interno para que a varredura seja feita todas as vezes e garantir que as trocas vizinhas estão corretas
      para(inteiro j = 0; j < 9; j++) { // Varre o array uma vez e vai invertendo as posições vizinhas
        se(vetor[j] < vetor[j+1]) {
          aux = vetor[j]
          vetor[j] = vetor[j+1]
          vetor[j+1] = aux
        }
      }
    }

    para(inteiro i = 0; i < 10; i++) {
      escreva(vetor[i], " ")
    }
    
  }
}
