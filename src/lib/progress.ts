export interface ProgressPayload {
  version: 1;
  completed: string[];
  updatedAt: string;
}

export function sanitizeCompleted(value: unknown, validIds?: Set<string>): string[] {
  if (!Array.isArray(value)) return [];
  const ids = value.filter((item): item is string => typeof item === 'string');
  return [...new Set(validIds ? ids.filter((id) => validIds.has(id)) : ids)];
}

export function parseProgress(raw: string | null, validIds?: Set<string>): ProgressPayload {
  const empty: ProgressPayload = { version: 1, completed: [], updatedAt: new Date(0).toISOString() };
  if (!raw) return empty;
  try {
    const parsed = JSON.parse(raw) as Partial<ProgressPayload>;
    return {
      version: 1,
      completed: sanitizeCompleted(parsed.completed, validIds),
      updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : empty.updatedAt
    };
  } catch {
    return empty;
  }
}

export function completionPercent(completedCount: number, totalCount: number): number {
  if (totalCount <= 0) return 0;
  return Math.round((Math.max(0, Math.min(completedCount, totalCount)) / totalCount) * 100);
}

