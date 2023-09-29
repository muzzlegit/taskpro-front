import hexRgb from 'hex-rgb';

const tokens = {
  token1: getToken('#FFFFFF'),
  token2: getToken('#000000'),
  token3: getToken('#C12701'),
  token4: getToken('#E09CB5'),
  token5: getToken('#BEDBB0'),
  token6: getToken('#8FA1D0'),
  token7: getToken('#E09CB5'),
  token8: getToken('#121212'),
  token10: getToken('#151515'),
  token11: getToken('#161616'),
  token12: getToken('#9DC888'),
  token13: getToken('#1F1F1F'),
  token14: getToken('#ECEDFD'),
  token15: getToken('#5255BC'),
  token16: getToken('#FCFCFC'),
  token17: getToken('#F6F6F7'),
};

export const themesKit = {
  default: {
    logo: {
      primary: tokens.token11[100],
      text: tokens.token11[100],
      icon: tokens.token1[100],
    },
    input: {
      bg: tokens.token13[100],
      text: tokens.token1[100],
      border: tokens.token5[40],
    },
    primaryBtn: {
      primary: tokens.token5[100],
      text: tokens.token11[100],
      acent: tokens.token12[100],
    },
  },
  dark: {
    logo: {
      primary: tokens.token13[100],
      text: tokens.token1[100],
      icon: tokens.token1[100],
    },
    primaryBtn: {
      primary: tokens.token5[100],
      text: getToken('#161616')[100],
      acent: getToken('#9DC888')[100],
      icon: getToken('#161616')[100],
      stroke: getToken('#FFFFFF')[100],
    },
    sidebar: {
      background: tokens.token8[100],
    },
    header: {
      background: tokens.token11[100],
    },
    screens: {
      background: tokens.token13[100],
    },
    logout: {
      text: tokens.token1[100],
      icon: tokens.token5[100],
    },
    themeSelector: {
      text: tokens.token1[80],
      icon: tokens.token1[80],
      acent: tokens.token5[100],
      listText: tokens.token1[50],
      listBackground: tokens.token10[100],
      listBorder: tokens.token5[100],
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
      primary: tokens.token13[100],
      text: tokens.token11[100],
      icon: tokens.token1[100],
    },
    sidebar: {
      background: tokens.token1[100],
    },
    header: {
      background: tokens.token16[100],
    },
    screens: {
      background: tokens.token17[100],
    },
    logout: {
      text: tokens.token11[100],
      icon: tokens.token5[100],
    },
    themeSelector: {
      text: tokens.token11[80],
      icon: tokens.token11[80],
      acent: tokens.token5[100],
      listText: tokens.token11[100],
      listBackground: tokens.token16[100],
      listBorder: tokens.token5[100],
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
      primary: tokens.token14[100],
      text: tokens.token1[100],
      icon: tokens.token15[100],
    },
    sidebar: {
      background: tokens.token15[100],
    },
    header: {
      background: tokens.token1[100],
    },
    screens: {
      background: tokens.token14[100],
    },
    logout: {
      text: tokens.token1[100],
      icon: tokens.token1[100],
    },
    themeSelector: {
      text: tokens.token11[80],
      icon: tokens.token11[80],
      acent: tokens.token15[100],
      listText: tokens.token11[100],
      listBackground: tokens.token16[100],
      listBorder: tokens.token14[100],
    },
    primaryBg: getToken('#5255BC')[100],
    secondaryBg: getToken('#ECEDFD')[100],
    headerBg: getToken('#FFFFFF')[100],
    popupBg: getToken('#FFFFFF')[100],
    text: getToken('#161616')[100],
    acent: getToken('#5255BC')[100],
    acentHover: getToken('#7B7EDE')[100],
    primaryBtn: {
      primary: tokens.token5[100],
      text: getToken('#161616')[100],
      acent: getToken('#9DC888')[100],
      icon: getToken('#161616')[100],
      stroke: getToken('#FFFFFF')[100],
    },
    input: {
      bg: tokens.token13[100],
      text: tokens.token1[100],
      border: tokens.token5[100],
    },
  },
};

export const theme = {
  colors: {
    ...tokens,
    ...themesKit.violet,
    error: tokens.token3[100],
    labelHigh: tokens.token4[100],
    labelMedium: tokens.token5[100],
    labelLow: tokens.token6[100],
    labelWithout: tokens.token1[100],
    backdrop: tokens.token10[30],

    welcomPrimary: getToken('#161616')[100],

    welcomeLogo: {
      primary: getToken('#161616')[100],
      text: getToken('#161616')[100],
      icon: getToken('#FFFFFF')[100],
    },
    welcomePrimaryBtn: {
      primary: getToken('#BEDBB0')[100],
      text: getToken('#161616')[100],
      acent: getToken('#9DC888')[100],
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
