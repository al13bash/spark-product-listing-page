export const intersection = (array1, array2) =>
  array1.filter(value => -1 !== array2.indexOf(value));