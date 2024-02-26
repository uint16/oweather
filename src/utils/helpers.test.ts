import { getLocalDate } from "./helpers";

describe("Test helper functions", () => {
  test('should return correct date for valid input', () => {
    const unixTime = 1708819200; // 2024-02-25T00:00:00Z
    const timezoneOffset = -5 * 60 * 60; // Eastern Time (US)
    const expectedDate = 'February 24, 2024';

    const actualDate = getLocalDate(unixTime, timezoneOffset);
    expect(actualDate).toBe(expectedDate);
  });

  test('should handle zero timestamps', () => {
    const actualDate = getLocalDate(0, 0);
    expect(actualDate).toBe('January 1, 1970');
  });
})