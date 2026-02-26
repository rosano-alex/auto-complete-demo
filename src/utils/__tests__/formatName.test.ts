import { formatName } from "../formatName";
import "@testing-library/jest-dom";

describe("formatName", () => {
  it("formats simple first and last name", () => {
    expect(formatName("John Doe")).toBe("Doe, John");
  });

  it("trims input and collapses extra spaces", () => {
    expect(formatName("  Alice   Wonderland  ")).toBe("Wonderland, Alice");
  });

  it("handles title and suffix together", () => {
    // Title at start and suffix at end should be removed and shown in output
    expect(formatName("Dr. John Smith Jr.")).toBe("Smith Jr., John (Dr.)");
  });

  it("handles multi-word last names", () => {
    expect(formatName("Mary Ann von Trapp")).toBe("Ann von Trapp, Mary");
  });

  it("recognizes suffixes without periods (II, III)", () => {
    expect(formatName("Tim Cook II")).toBe("Cook II, Tim");
  });

  it("throws when name cannot be parsed (single token)", () => {
    expect(() => formatName("Plato")).toThrow(/Unable to parse name/);
  });

  it("throws when only title is present", () => {
    expect(() => formatName("Dr.")).toThrow(/Unable to parse name/);
  });
});
