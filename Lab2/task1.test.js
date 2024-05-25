/*1. Напишіть тест, щоб перевірити, що функція 1 яка викликає іншу функцію 2 з аргументами
Name і Lastname викликається з значеннями name=John lastname=Doe. Використовуйте
макет функції для створення імітації функції.*/

const { function1 } = require('./task1');

test('"Function 1 should call function 2 with arguments name="Kristina" and lastname="Dzhola"', () => {
    const mockFunction2 = jest.fn();
    function1(mockFunction2, "Kristina", "Dzhola");
    expect(mockFunction2).toHaveBeenCalledWith("Kristina", "Dzhola");
});