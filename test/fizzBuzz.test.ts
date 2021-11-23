import { fizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz Tests', () => {
  describe('Default behaviour', () => {
    it('should return 1 when sending 1', () => {
      expect(fizzBuzz(1)).toBe('1');
    });
    it('should return 2 when sending 2', () => {
      expect(fizzBuzz(2)).toBe('2');
    });
    it('should return 4 when sending 4', () => {
      expect(fizzBuzz(4)).toBe('4');
    });
  });
});
