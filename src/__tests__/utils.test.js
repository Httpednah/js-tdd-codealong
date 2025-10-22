// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const birthYear = 1984;
    const expectedAge = new Date().getFullYear() - birthYear;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });

  it("returns the correct age if a person was born in year 0", () => {
    // Arrange
    const birthYear = 0;
    const expectedAge = new Date().getFullYear() - birthYear;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });
});
