programa {
  funcao inicio() {
    inteiro num

    escreva("Digite um numero: ")
    leia(num)

    se((num % 4 == 0) ou (num % 9 == 0)){
      escreva("VERDADEIRO")
    } senao {
      escreva("FALSO")
    }
  }
}
