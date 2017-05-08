import aptime from './aptime';

describe('aptime', () => {
  it('should return an AP-formatted time string', () => {
    expect(aptime(new Date(2016, 10, 8, 10, 30))).toBe('10:30 a.m.');
    expect(aptime(new Date(2016, 10, 8, 16, 30))).toBe('4:30 p.m.');
    expect(aptime('2016-11-08T10:30')).toBe('10:30 a.m.');
    expect(aptime('2016-11-08T16:30')).toBe('4:30 p.m.');
  });

  it('should return a time string without minutes if minutes are zero', () => {
    expect(aptime(new Date(2016, 10, 8, 10))).toBe('10 a.m.');
    expect(aptime('2016-11-08T10:00')).toBe('10 a.m.');
  });

  it('should return the string `midnight`', () => {
    expect(aptime(new Date(2016, 10, 8))).toBe('midnight');
    expect(aptime('2016-11-08T00:00')).toBe('midnight');
  });

  it('should return the string `noon`', () => {
    expect(aptime(new Date(2016, 10, 8, 12))).toBe('noon');
    expect(aptime('2016-11-08T12:00')).toBe('noon');
  });
});