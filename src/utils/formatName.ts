// constants`
const TITLES_SET = new Set([
  "Mr.",
  "Mrs.",
  "Ms.",
  "Miss",
  "Dr.",
  "Prof.",
  "Rev.",
]);
const SUFFIXES_SET = new Set(["Jr.", "Sr.", "II", "III", "IV", "V"]);

/**
 * Parses and formats a name into:
 * {Last Name} {Suffix}, {First Name} (Title)
 */

export function formatName(fullName: string): string {
  const sections = fullName.trim().split(/\s+/);

  let title: string | undefined;
  let suffix: string | undefined;

  // Extract title (if first token matches)
  if (TITLES_SET.has(sections[0])) {
    title = sections.shift();
  }

  // Extract suffix (if last token matches)
  if (SUFFIXES_SET.has(sections[sections.length - 1])) {
    suffix = sections.pop();
  }
  if (sections.length < 2) {
    throw new Error(`Unable to parse name: "${fullName}"`);
  }

  const firstName = sections[0];
  const lastName = sections.slice(1).join(" ");

  const formatted = [
    suffix ? `${lastName} ${suffix}` : lastName,
    `${firstName}${title ? ` (${title})` : ""}`,
  ].join(", ");

  return formatted;
}
