function isPunctuation(char: string) {
  return /[.?!]/.test(char);
}

function checkLookbehindSupport() {
  try {
    new RegExp("(?<=a)b");
    return true;
  } catch (e) {
    return false;
  }
}

const DOES_BROWSER_SUPPORT_LOOKBEHIND = checkLookbehindSupport();

function lookbehindSplit(text: string) {
  const regex = /(?<=[.?!])\s/g;
  const tokens = text.split(regex);
  return tokens.filter((phrase) => phrase.length > 0);
}

function bruteSplit(text: string) {
  const regex = /([.?!])/g;
  const tokens = text.split(regex);
  const phrases: string[] = [];
  let phrase = "";

  tokens.forEach((token) => {
    if (token.length === 0) return;
    token = token.trim();

    if (isPunctuation(token)) {
      phrase += token;
    } else {
      if (phrase.length > 0) {
        phrases.push(phrase.trim());
      }
      phrase = token;
    }
  });

  if (phrase.length > 0) phrases.push(phrase.trim());

  return phrases;
}

/**
 * Split by punctuation followed by space. Supports: . ! ? \r \n
 * @param text
 * @returns
 */
export function splitPhrases(text: string) {
  // lookbehind is not supported in Safari
  if (DOES_BROWSER_SUPPORT_LOOKBEHIND) {
    return lookbehindSplit(text);
  }

  return bruteSplit(text);
}
