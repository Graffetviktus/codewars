/* Преобразуем все в массив, складываем весь массив */
var countBits = function(n) {
  return Number(n.toString(2).split('').reduce((last, next) =>  Number(last) + Number(next)));
};

