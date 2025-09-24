function sum(a, b) {
  return a + b;
}

test('soma 2 + 2 deve ser 4', () => {
  expect(sum(2, 2)).toBe(4);
});
