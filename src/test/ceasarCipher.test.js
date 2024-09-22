import { ceasarCipher } from "./ceasarCipher";

test("Ceasar Cipher", () => {
  expect(ceasarCipher("xyz", 3)).toBe("abc");
});

test("Ceasar Cipher with uppercase letters", () => {
  expect(ceasarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Ceasar Cipher with special characters", () => {
  expect(ceasarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
