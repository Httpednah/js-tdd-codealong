// Your code here
// src/utils.js

// This function calculates the current age given a birth year.
export function currentAgeForBirthYear(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
