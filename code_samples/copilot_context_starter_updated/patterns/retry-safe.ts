// Retry-safe function wrapper example
function retry<T>(fn: () => T, retries = 3): T | null {
  for (let i = 0; i < retries; i++) {
    try {
      return fn();
    } catch (e) {
      console.warn(`Retrying (${i + 1})...`);
    }
  }
  return null;
}