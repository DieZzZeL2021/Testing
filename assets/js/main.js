/** @format */

var userObj = {
  firstName: 'Bob',
  lastName: 'Marley',
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function ageClassification(n) {
  var str = '';

  str =
    n < 0
      ? null
      : n <= 24
      ? 'детский возраст'
      : n <= 44
      ? 'молодой возраст'
      : n <= 65
      ? 'средний возраст'
      : n <= 75
      ? 'пожилой возраст'
      : n <= 90
      ? 'старческий возраст'
      : n <= 122
      ? 'долгожители'
      : null;
  return str;
}
