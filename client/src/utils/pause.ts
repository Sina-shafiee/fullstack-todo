export const pause = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));
