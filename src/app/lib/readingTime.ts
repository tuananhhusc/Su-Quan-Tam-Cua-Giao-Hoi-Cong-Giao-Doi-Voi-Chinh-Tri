import { siteMeta } from "./siteMeta";

export function readingTimeLabel(): string {
  return `~${siteMeta.readingMinutes} phút đọc`;
}

export function readingTimeFromWordCount(
  words: number,
  wpm = siteMeta.wordsPerMinute
): number {
  return Math.max(1, Math.ceil(words / wpm));
}
