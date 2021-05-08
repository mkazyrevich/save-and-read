function sum(a: number, b: number): number {
  return a + b;
}

let val: number;

beforeAll(() => {
  console.log('start');
  val = 12;
});

test('for study', () => {
  expect(sum(4, 8)).toEqual(val);
});

test('for study2', () => {
  expect(4 * 3).toEqual(val);
});
