"use strict";

/**
 * Encodes a Unicode string to base64
 * @param str - The Unicode string to encode
 * @returns Base64 encoded string
 */
function utoa(str: string): string {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  const binary = String.fromCharCode(...bytes);
  return btoa(binary);
}

/**
 * Decodes a base64 encoded string back to Unicode
 * @param base64 - The base64 string to decode
 * @returns Decoded Unicode string
 */
function atou(base64: string): string {
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  const decoder = new TextDecoder();
  return decoder.decode(bytes);
}

export { atou, utoa };
