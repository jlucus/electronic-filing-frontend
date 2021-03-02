import colorPalette from "./utils/colorPalette";


export const baseColors = {
  blue: "#078dd3",
  orange: "#ffa02f",
  robin: "#00c7b2",
  purple: "#722ed1",
  cyan: "#0abfa9",
  green: "#52c41a",
  white: "#ffffff",
  magenta: "#eb2f96",
  gray: "#dde2e5",
  yellow: "#faff2d",
  gold: "#feff02",
  black: "#000000",
  red: "#ff0000",
  darkgray: "#a9a9a9",
  lightgray: "#F5F7F6",
};

export const palletColors = {};

for (const [colorKey, baseColorValue] of Object.entries(baseColors)) {
  for (let i = 1; i <= 10; i++) {
    palletColors[colorKey + i] = colorPalette(baseColorValue, i);
  }
  palletColors[`${colorKey}Base`] = baseColorValue;
}

//
function getImpColor(color) {
  return `${color} !important`;
}

export const lightColors = {
  primaryColor: baseColors.blue,
  secondaryColor: baseColors.cyan,

  primaryBgColor: baseColors.gray,

  titleColor: baseColors.white,
  titleBgColor: "#035aa4",
  titleHoverBgColor: "#2C96DA",

  headerColor: "#303a40",
  mainBgColor: baseColors.white,

  secondaryTitleColor: "#259482",
  blockBgColor: "#F6F6F6",
  textColor: "#4B555B",

  primaryButtonBgColor: baseColors.orange,
  primaryButtonBgHoverColor: "#ffb762",
  primaryButtonTextColor: baseColors.white,

  secondaryButtonBgColor: "#0098db",
  secondaryButtonBgHoverColor: "#0fb2db",
  secondaryButtonTextColor: baseColors.white,

  dangerButtonBgColor: "#5d676f",
  dangerButtonBgHoverColor: "#54636f",
  dangerButtonTextColor: baseColors.white,

  lightButtonBgColor: "#e0e1dd",
  lightButtonBgHoverColor: "#c8e0e1",
  lightButtonTextColor: baseColors.black,

  primaryFooterTextColor: "#6e8393",
  primaryFooterTextHoverColor: "#37424a",
  primaryFooterBgColor: "#21282d",

  primaryRobin: "#00c7b2",
  secondaryRiptide: "#80e0d3",

  // secondaryFooterTitleColor: '#21282d',
  secondaryFooterTextColor: baseColors.white,
  secondaryFooterBgColor: "#21282d",

  privacyTextColor: "#6e8393",
  privacyTextHoverColor: "#37424a",

  linkTextColor: "#0098db",
  linkTextHoverColor: "#0fb6ff",
  linkTextHoverBgColor: "none",

  modalBgColor: "rgba(0,0,0,0.5)",
  templateConfigureBgColor: "#EAFAFF",
  inputBgColor: baseColors.white,
  inputDisabledBgColor: baseColors.gray,
  inputTextColor: "#333333",
  separateLineColor: "#43B3E7",

  tabSelectBgColor: "#35C5B1",
  tabSelectHoverBgColor: "#56c5b1",

  cardDefaultBgColor: "#E7F8FF",
  cardBorderColor: baseColors.gray,
  helpboxBgColor: "#FA9F2F",
  helpboxTextColor: baseColors.white,

  // @TODO The legacy button color, hover color will be replaced with the below simple color palette
  defaultBtnTextColor: baseColors.white,
  defaultBtnBgColor: "#078dd3",
  primaryBtnTextColor: baseColors.white,
  primaryBtnBgColor: "#078dd3",
  secondaryBtnTextColor: baseColors.white,
  secondaryBtnBgColor: baseColors.orange,
  robinBtnTextColor: baseColors.white,
  robinBtnBgColor: "#00c7b2",

  errorTextColor: baseColors.red,
  noteTextColor: baseColors.cyan,

  mainMenuBgColor: baseColors.white,
  mainMenuTextColor: baseColors.black,
  mainMenuSeparatorColor1: baseColors.white,
  mainMenuSeparatorColor2: "#FAA032",
  mainMenuHoverTextColor: baseColors.white,
  mainMenuHoverBgColor: "#FA9F2F",

  subMenuTextColor: baseColors.black,
  subMenuBorderColor: "#EFEFEF",
  subMenuItemBorderColor: "#FA9F2F",
  subMenuItemHoverBgColor: "#FCD9AC",

  subNavMenuLevel1BgColor: "#53A7D9",
};

export const darkColors = {
  primaryColor: baseColors.black,
  secondaryColor: baseColors.black,

  primaryBgColor: baseColors.black,

  titleColor: baseColors.white,
  titleBgColor: baseColors.black,
  titleHoverBgColor: baseColors.black,

  headerColor: baseColors.white,
  mainBgColor: baseColors.black,

  secondaryTitleColor: baseColors.white,
  blockBgColor: baseColors.black,
  textColor: baseColors.white,

  primaryButtonBgColor: baseColors.black,
  primaryButtonBgHoverColor: getImpColor(baseColors.yellow),
  primaryButtonTextColor: baseColors.white,

  primaryFooterTextColor: baseColors.white,
  primaryFooterTextHoverColor: baseColors.yellow,
  primaryFooterBgColor: baseColors.black,

  secondaryButtonBgColor: baseColors.white,
  secondaryButtonBgHoverColor: baseColors.yellow,
  secondaryButtonTextColor: baseColors.black,

  dangerButtonBgColor: baseColors.white,
  dangerButtonBgHoverColor: baseColors.yellow,
  dangerButtonTextColor: baseColors.black,

  lightButtonBgColor: baseColors.white,
  lightButtonBgHoverColor: baseColors.yellow,
  lightButtonTextColor: baseColors.black,

  // secondaryFooterTitleColor: '#21282d',
  secondaryFooterTextColor: baseColors.gold,
  secondaryFooterBgColor: baseColors.black,

  privacyTextColor: baseColors.gold,
  privacyTextHoverColor: baseColors.yellow,

  linkTextColor: getImpColor(baseColors.gold),
  linkTextHoverColor: getImpColor(baseColors.black),
  linkTextHoverBgColor: baseColors.gold,
  modalBgColor: "rgba(0,0,0,1)",
  templateConfigureBgColor: baseColors.black,
  inputBgColor: baseColors.black,
  inputDisabledBgColor: baseColors.black,
  inputTextColor: baseColors.white,
  separateLineColor: baseColors.gold,

  tabSelectBgColor: "#111111",
  tabSelectHoverBgColor: "#222222",

  cardDefaultBgColor: baseColors.black,
  cardBorderColor: baseColors.gray,
  helpboxBgColor: baseColors.black,
  helpboxTextColor: baseColors.white,

  //
  defaultBtnTextColor: baseColors.gold,
  defaultBtnBgColor: baseColors.black,

  errorTextColor: baseColors.yellow,
  noteTextColor: baseColors.yellow,

  mainMenuBgColor: baseColors.black,
  mainMenuTextColor: baseColors.yellow,
  mainMenuSeparatorColor1: baseColors.black,
  mainMenuSeparatorColor2: "#FAA032",
  mainMenuDropdownColor: "#FA9F2F",
};
