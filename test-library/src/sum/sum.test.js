/* eslint-disable jest/valid-expect */
const sum = require('./sum')


test('sum', () => {

  //implementação original
  expect(sum.somar(1,2)).resolves.toBe(3)

   // criando o mock e substituindo a implementação para uma subtração
   const mockSomar = jest
    .spyOn(sum, "somar")
    .mockImplementation((a,b) => a - b)

    sum.somar(5,1);
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar(5, 1)).toBe(4);
    expect(mockSomar).toHaveBeenCalledTimes(2);
    expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

    //restaurando a implementação original
    sum.somar.mockRestore();    
    expect(sum.somar(2,2)).resolves.toBe(4)
})