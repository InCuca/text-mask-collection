import createNumberSuffix from './helpers/createNumberSuffix';
import {
  unmask as unmaskDecimal,
  format as doFormat,
} from './decimalNumber';

export const suffix = ' kg';

export const mask = createNumberSuffix(suffix);

export function unmask(masked) {
  const rawValue = masked.replace(
    new RegExp(suffix),
    '',
  );
  return unmaskDecimal(rawValue);
}

export function format(value) {
  return doFormat(value, mask, true);
}
