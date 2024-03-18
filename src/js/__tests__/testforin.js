import sortObj from '../forin.js';

const checkObjVarOne = {
  name: 'мечник', health: 10, attack: 80, level: 2, defence: 40,
};
const checkArrOne = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];
const checkArrTwo = [
  { key: 'name', value: 'мечник' },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
  { key: 'level', value: 2 },
];

const dataList = [
  [checkObjVarOne, ['name', 'level'], checkArrOne],
  [checkObjVarOne, ['name'], checkArrTwo],
];

const testForIn = test.each(dataList);
testForIn('testing ForIn function', (obj, value, expected) => {
  const result = sortObj(obj, value);
  expect(result).toEqual(expected);
});
