export function shortenString(string: string, maxLength: number): string {
  const firstSlice = string.slice(0, maxLength);
  const secondSlice = firstSlice.slice(0, firstSlice.lastIndexOf(" "));
  return secondSlice + "...";
}

export function capitalizeString(string: string): string {
  return string[0].toUpperCase() + string.substring(1)
}