/** @format */

describe('Проверяем наличие полей и их значений в объекте userObj', () => {
  it('Поле firstName имеет значение', () => {
    expect(userObj.firstName).toBeDefined();
  });
  it('Полю firstName присвоена строка', () => {
    expect(userObj.firstName).toBeInstanceOf(String);
  });
  it('Полю lastName присвоена строка', () => {
    expect(userObj.lastName).toBeInstanceOf(String);
  });
  it('Полю age присвоено число', () => {
    expect(userObj.age).toBeInstanceOf(Number);
  });
  it('метод fullName() возвращает имя и фамилию в строке через пробел', () => {
    expect(userObj.fullName()).toBe(`${userObj.firstName} ${userObj.lastName}`);
  });
});

describe('Тестирование функции ageClassification()', () => {
  it('Проверяем возраст менee 0, более 122. Функция должна вернуть null', () => {
    expect(ageClassification(-1)).toBeNull();
  });
  it('Проверяем возраст 0...24. Функция должна вернуть строку "детский возраст"', () => {
    expect(ageClassification(1)).toMatch(/детский возраст/);
  });
  it('Проверяем возраст 24.01...44. Функция должна вернуть строку "молодой возраст"', () => {
    expect(ageClassification(25)).toMatch(/молодой возраст/);
  });
  it('Проверяем возраст 44.01...65. Функция должна вернуть строку "средний возраст"', () => {
    expect(ageClassification(46)).toMatch(/средний возраст/);
  });
  it('Проверяем возраст 65.01...75. Функция должна вернуть строку "пожилой возраст"', () => {
    expect(ageClassification(70)).toMatch(/пожилой возраст/);
  });
  it('Проверяем возраст 75.01...90. Функция должна вернуть строку "старческий возраст"', () => {
    expect(ageClassification(89)).toMatch(/старческий возраст/);
  });
  it('Проверяем возраст 90.01...122. Функция должна вернуть строку "долгожители"', () => {
    expect(ageClassification(91)).toMatch(/долгожители/);
  });
});
