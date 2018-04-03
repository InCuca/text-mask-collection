import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import doFormat from './helpers/format';
import {
  thousandsSeparatorSymbol,
  decimalSymbol,
  unmask as unmaskDecimal,
} from './decimalNumber';

export const suffix = ' cm³';

export const mask = createNumberMask({
  prefix: '',
  suffix,
  thousandsSeparatorSymbol,
  allowDecimal: false,
  decimalSymbol,
});

export function unmask(masked) {
  const rawValue = masked.replace(
    new RegExp(suffix),
    '',
  );
  return unmaskDecimal(rawValue);
}

export function format(value) {
  return doFormat(value, mask);
}
