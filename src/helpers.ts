// Funktion för Console.log
// OM Vi befinner oss i dev miljö skrivs skonsollmeddelandet ut
export function log(...somethingToLog: unknown[]): void {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log(...somethingToLog);
  }
}

// Funktion för Console.table
// OM Vi befinner oss i dev miljö skrivs en tabell ut
export function logTable(...aTableOfSomething: unknown[]): void {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.table(...aTableOfSomething);
  }
}
