programa {
  funcao inicio() {
    real valor, maior = 0
    inteiro i

    para(i = 0; i < 3; i++) {
      escreva("Digite o valor: ")
      leia(valor)
      se(valor > maior) {
        maior = valor
      }
      limpa()
    }

    escreva("O maior valor é: ", maior)
  }
}
