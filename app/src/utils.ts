export function millisecondsToHuman(ms: number): string {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor((ms / 1000 / 3600) % 24);
  const humanTime = `${withZero(hours)}:${withZero(minutes)}:${withZero(seconds)}`;
  return humanTime;
}

export const withZero = (num: number): string => {
  const textNum: string = num.toString();
  if (textNum.length > 2) throw new Error('Two digits max.');
  if (textNum.length == 1) return `0${textNum}`;
  return textNum;
};

export const humanToMilliseconds = (hours: number, minutes: number, seconds: number) => {
  return hours * 3600 * 1000 + minutes * 60 * 1000 + seconds * 1000;
};
