// Standard config loader pattern
export function loadConfig(): { endpoint: string } {
  return {
    endpoint: process.env.API_ENDPOINT || 'https://default.api'
  }
}