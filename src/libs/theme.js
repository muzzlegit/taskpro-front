import hexRgb from 'hex-rgb';

export const theme = {
  colors: {
    error: getToken('#c12701')[100],
    labelHigh: getToken('#E09CB5')[100],
    labelMedium: getToken('#BEDBB0')[100],
    labelLow: getToken('#8FA1D0')[100],
    labelWithout: getToken('#FFFFFF')[30],
    backdrop: getToken('#151515')[30],

    token1: getToken('#FFFFFF'),
    token2: getToken('#000000'),
    token3: getToken('#1F1F1F'),
    token4: getToken('#BEDBB0'),
    token5: getToken('#151515'),

    welcomPrimary: getToken('#161616')[100],
    welcomeLogo: {
      primary: getToken('#161616')[100],
      text: getToken('#161616')[100],
      icon: getToken('#FFFFFF')[100],
    },
  },
  welcomBg: 'linear-gradient(#FFFFFF, #BEDBB0)',
  fontSize: {
    primary: '14px',
    secondary: '10px',
    title: '24px',
  },
  breackPoints: {
    response: '320px',
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },
};

export const themesKit = {
  dark: {
    logo: {
      primary: getToken('#1F1F1F')[100],
      text: getToken('#FFFFFF')[100],
      icon: getToken('#FFFFFF')[100],
    },
    primaryBg: getToken('#121212')[100],
    secondaryBg: getToken('#1F1F1F')[100],
    headerBg: getToken('#161616')[100],
    popupBg: getToken('#161616')[100],
    text: getToken('#FFFFFF')[100],
    acent: getToken('#BEDBB0')[100],
    acentHover: getToken('#9DC888')[100],
  },
  light: {
    logo: {
      primary: getToken('#1F1F1F')[100],
      text: getToken('#161616')[100],
      icon: getToken('#FFFFFF')[100],
    },
    primaryBg: getToken('#FFFFFF')[100],
    secondaryBg: getToken('#F6F6F7')[100],
    headerBg: getToken('#FCFCFC')[100],
    popupBg: getToken('#FCFCFC')[100],
    text: getToken('#161616')[100],
    acent: getToken('#BEDBB0')[100],
    acentHover: getToken('#9DC888')[100],
  },
  violet: {
    logo: {
      primary: getToken('#ECEDFD')[100],
      text: getToken('#FFFFFF')[100],
      icon: getToken('#5255BC')[100],
    },
    primaryBg: getToken('#5255BC')[100],
    secondaryBg: getToken('#ECEDFD')[100],
    headerBg: getToken('#FFFFFF')[100],
    popupBg: getToken('#FFFFFF')[100],
    text: getToken('#161616')[100],
    acent: getToken('#5255BC')[100],
    acentHover: getToken('#7B7EDE')[100],
  },
};

function getToken(hex) {
  return {
    100: hex,
    90: hexRgb(hex, { format: 'css', alpha: 0.9 }),
    80: hexRgb(hex, { format: 'css', alpha: 0.8 }),
    70: hexRgb(hex, { format: 'css', alpha: 0.7 }),
    60: hexRgb(hex, { format: 'css', alpha: 0.6 }),
    50: hexRgb(hex, { format: 'css', alpha: 0.5 }),
    40: hexRgb(hex, { format: 'css', alpha: 0.4 }),
    30: hexRgb(hex, { format: 'css', alpha: 0.3 }),
    20: hexRgb(hex, { format: 'css', alpha: 0.2 }),
    10: hexRgb(hex, { format: 'css', alpha: 0.1 }),
  };
}
