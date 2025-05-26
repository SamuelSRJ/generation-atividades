programa {
  funcao inicio() {
    cadeia pais
    inteiro idade
    logico permitido

    escreva("Digite o seu pais/Enter your country (BRA, POR, USA): ")
    leia(pais)
    limpa()

    se(pais == "USA") {
      escreva("Enter your age: ")
      leia(idade)
      limpa()
    } senao {
      escreva("Digite sua idade: ")
      leia(idade)
      limpa()
    }

    se((pais == "BRA" e idade >= 18) ou (pais == "POR") ou (pais == "USA" e idade >= 21)) {
      permitido = verdadeiro
    } senao {
      permitido = falso
    }

    se((pais == "BRA" e permitido) ou (pais == "POR")) {
      escreva("Permitido")
    } senao se(pais == "USA" e permitido) {
      escreva("Allowed")
    } senao se(pais == "USA" e nao permitido) {
      escreva("Not allowed")
    } senao {
      escreva("Não permitido")
    }

  }
}
