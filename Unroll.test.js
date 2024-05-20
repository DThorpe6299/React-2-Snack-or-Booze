const unroll = require('./unroll');

describe('unroll', () => {
  it('should handle an empty matrix', () => {
    const square = [];
    const result = unroll(square);
    expect(result).toEqual([]);
  });

  it('should handle a 1x1 matrix', () => {
    const square = [[1]];
    const result = unroll(square);
    expect(result).toEqual([1]);
  });

  it('should handle a 2x2 matrix', () => {
    const square = [
      [1, 2],
      [4, 3]
    ];
    const result = unroll(square);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle a 3x3 matrix', () => {
    const square = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];
    const result = unroll(square);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
})
