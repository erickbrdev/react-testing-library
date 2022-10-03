/* eslint-disable no-func-assign */
function numberRandom() {
  return Math.floor(Math.random() * 100);
}

function isEven() {
  return (numberRandom() % 2 ) === 0
}

function sum() {
  return numberRandom() + numberRandom()
}

describe('Aprendendo sobre mocks', () => {
  it("Testa se a função sum() foi chamada", () => {
    sum = jest.fn()
    sum()

    expect(sum).toHaveBeenCalled();
  })

  it("Testa o resultado da função sum()", () => {
    sum = jest.fn().mockReturnValue(8);

    expect(sum()).toBe(8)
  })

  it("Testa o número de vezes que a função sum() foi chamada", () => {
    sum = jest.fn()
    sum()
    sum()

    expect(sum).toHaveBeenCalledTimes(2)
  })

  it("Testa a função isEven() quando recebe um número par", () => {
    numberRandom = jest.fn().mockReturnValue(2)

    expect(isEven()).toBe(true)
  })

  it("Testa a função isEven() quando recebe um número ímpar", () => {
    numberRandom = jest.fn().mockReturnValue(3)

    expect(isEven()).toBe(false)
  })
})