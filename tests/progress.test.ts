import { describe, expect, it } from 'vitest';
import { completionPercent, parseProgress, sanitizeCompleted } from '../src/lib/progress';

describe('progress data', () => {
  it('deduplicates and filters imported objective ids', () => {
    const valid = new Set(['one', 'two']);
    expect(sanitizeCompleted(['one', 'one', 'missing', 7, 'two'], valid)).toEqual(['one', 'two']);
  });

  it('recovers safely from malformed local data', () => {
    expect(parseProgress('{oops').completed).toEqual([]);
    expect(parseProgress(null).version).toBe(1);
  });

  it('keeps completion percentages within bounds', () => {
    expect(completionPercent(9, 36)).toBe(25);
    expect(completionPercent(40, 36)).toBe(100);
    expect(completionPercent(-2, 36)).toBe(0);
    expect(completionPercent(1, 0)).toBe(0);
  });
});

