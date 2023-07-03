import { extendTheme } from '@chakra-ui/react';
import { buildLegacyTheme } from 'sanity';

export const colors = {
   brand: {
    primary: "hsl(33,47%,49%)",
    primaryLight: "hsl(33,66%,60%)",
    primaryDark: "hsl(33,75%,45%)",
   }, 
};

export const theme = extendTheme({ colors });

const props = {
  '--wg-white': '#fff',
  '--wg-black': '#1a1a1a',
  '--brand-primary': colors.brand.primary,
  '--brand-primary-light': colors.brand.primaryLight,
  '--brand-primary-dark': colors.brand.primaryDark,
  '--wg-gray': '#666666',
};

export const wgTheme = buildLegacyTheme({
  '--black': props['--wg-black'],
  '--gray': props['--wg-gray'],

  '--focus-color': props['--brand-primary-dark'],

  '--brand-primary': props['--brand-primary'],

  '--component-bg': props['--wg-white'],
  '--component-text-color': props['--wg-black'],

  '--default-button-color': props['--wg-gray'],
  '--default-button-primary-color': props['--brand-primary'],

  '--state-info-color': props['--brand-primary-light'],
});