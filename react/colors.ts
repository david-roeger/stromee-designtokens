const alias = (color: string) => {
  return `var(--colors-${color})`;
};


const baseStromeeGreen = "#6ddc91";
const baseStromeeNavy = "#1d2445";
const basePopPetrol = "#1b4650";
const basePunchGreen = "#caf2a3";
const baseSummerYellow = "#fcf466";
const baseSkyBlue = "#7cb9d6";
const baseSkyBlueLight = "#b1d5e7";
const baseLollipopRed = "#b33349";
const baseGrey200 = "#666a6a";
const baseGrey300 = "#a3a6a6";
const baseGrey400 = "#cfcfcf";
const baseGrey500 = "#ebebeb";
const baseGrey600 = "#f8f8f8";
const baseCloudWhite = "#ffffff";
const baseCloudWhiteOpacity40 = "#ffffff66";
const baseCloudWhiteOpacity80 = "#ffffffcc";
const baseStromeeGreen200 = "#84e1a2";
const baseStromeeGreen300 = "#98e6b2";
const baseStromeeGreen400 = "#adebc1";
const baseStromeeNavy200 = "#1d2849";
const baseStromeeNavy300 = "#24325b";
const baseStromeeNavy400 = "#2c3c6d";
const baseTanLight = "#f0e7da";
const baseTanDark = "#f5d6ba";
const baseOpacity100 = "#1d244508";
const baseOpacity200 = "#1d24451a";
const baseOpacity300 = "#1d244526";
const baseOpacity400 = "#1d244566";
const baseOpacity500 = "#1d244599";
const baseOpacityFull = "#ffffff00";
const actionOnDisabled = "#a3a6a6";
const actionBorderDisabled = "#a3a6a6";
const forgroundDisabled = "#a3a6a6";
const effectsDropShadowButtons = "#0512381a";
const effectsDropShadowLables = "#0512381a";
const effectsDropShadowInputDropdownFields = "#05123808";
const effectsDropShadowCards = "#0512381a";
const effectsDropShadowCardsHover = "#161e3726";
const effectsDropShadowFloatingComponents = "#0512381a";
const feedbackBackgroundErrorInput = "#f2e5e7";
const actionDisabled = alias("baseGrey600")
const actionBackground = alias("baseCloudWhite")
const actionPrimaryDefault = alias("baseStromeeGreen");
const actionPrimaryHover = alias("baseStromeeGreen")
const actionOnPrimaryDefault = alias("baseStromeeNavy")
const actionOnPrimaryHover = alias("baseStromeeNavy")
const actionSecondaryDefault = alias("baseStromeeNavy")
const actionSecondaryHover = alias("baseStromeeNavy")
const actionOnSecondaryDefault = alias("baseGrey600")
const actionOnSecondaryHover = alias("baseGrey600")
const actionTertiaryDefault = alias("baseGrey600")
const actionTertiaryHover = alias("baseStromeeNavy")
const actionOnTertiaryDefault = alias("baseStromeeNavy")
const actionOnTertiaryHover = alias("baseGrey600")
const actionBorderDefault = alias("baseStromeeNavy")
const actionBorderOnDark = alias("baseGrey600")
const actionBorderActive = alias("baseGrey400")
const forgroundDefault = alias("baseStromeeNavy")
const forgroundOnDark = alias("baseGrey500")
const forgroundSecondary = alias("baseGrey300")
const backgroundDefault = alias("baseGrey600")
const backgroundSecondary = alias("baseCloudWhite")
const backgroundDarkPrimary = alias("baseStromeeNavy")
const borderCards = alias("baseGrey500")
const borderDividerLight = alias("baseGrey500")
const borderDefault = alias("baseStromeeNavy")
const effectsGlowDefault = alias("baseCloudWhiteOpacity80")
const feedbackAttention = alias("baseTanLight")
const feedbackSuccess = alias("baseStromeeGreen")
const feedbackError = alias("baseLollipopRed")
const feedbackTextlinkStatic = alias("baseSkyBlue")
const feedbackTextlinkHover = alias("baseSkyBlueLight")
const feedbackBorderError = alias("baseLollipopRed")
const feedbackForgroundDefault = alias("baseStromeeNavy")
const feedbackForgroundSecondary = alias("baseCloudWhite")
const feedbackForgroundError = alias("baseLollipopRed")
const feedbackForgroundSuccess = alias("baseStromeeGreen")
const feedbackBackgroundSuccess = alias("baseStromeeGreen")
const feedbackBackgroundAttention = alias("baseTanLight")
const feedbackBackgroundError = alias("baseLollipopRed")
const backgroundContainerProduct = alias("baseTanLight")
const backgroundContainer = alias("basePopPetrol")
const actionOnDark = alias("baseGrey500")
const actionInactive = alias("baseGrey400")
const actionActive = alias("baseStromeeGreen")

export const Colors = {
    baseStromeeGreen,
    baseStromeeNavy,
    basePopPetrol,
    basePunchGreen,
  /** Background content blocks */
    baseSummerYellow,
    baseSkyBlue,
    baseSkyBlueLight,
    baseLollipopRed,
    baseGrey200,
    baseGrey300,
    baseGrey400,
    baseGrey500,
    baseGrey600,
    baseCloudWhite,
    baseCloudWhiteOpacity40,
    baseCloudWhiteOpacity80,
    baseStromeeGreen200,
    baseStromeeGreen300,
    baseStromeeGreen400,
    baseStromeeNavy200,
    baseStromeeNavy300,
    baseStromeeNavy400,
    baseTanLight,
    baseTanDark,
    baseOpacity100,
    baseOpacity200,
    baseOpacity300,
    baseOpacity400,
    baseOpacity500,
    baseOpacityFull,
    actionOnDisabled,
    actionBorderDisabled,
  /** Use for free-standing icons, graphics and/or texts */
    forgroundDisabled,
  /** opacity-200 */
    effectsDropShadowButtons,
  /** lition-basic-opacity-100 */
    effectsDropShadowLables,
    effectsDropShadowInputDropdownFields,
    effectsDropShadowCards,
    effectsDropShadowCardsHover,
    effectsDropShadowFloatingComponents,
    feedbackBackgroundErrorInput,
    actionDisabled,
    actionBackground,
    actionPrimaryDefault,
    actionPrimaryHover,
    actionOnPrimaryDefault,
    actionOnPrimaryHover,
    actionSecondaryDefault,
    actionSecondaryHover,
    actionOnSecondaryDefault,
    actionOnSecondaryHover,
    actionTertiaryDefault,
    actionTertiaryHover,
    actionOnTertiaryDefault,
    actionOnTertiaryHover,
    actionBorderDefault,
    actionBorderOnDark,
    actionBorderActive,
  /** Use for free-standing icons, graphics and/or texts */
    forgroundDefault,
  /** Use for free-standing icons, graphics and/or texts on dark backgrounds */
    forgroundOnDark,
    forgroundSecondary,
  /** Baseline UI background */
    backgroundDefault,
    backgroundSecondary,
    backgroundDarkPrimary,
    borderCards,
  /** Use to divide between section or elements when needed */
    borderDividerLight,
    borderDefault,
    effectsGlowDefault,
    feedbackAttention,
    feedbackSuccess,
    feedbackError,
    feedbackTextlinkStatic,
    feedbackTextlinkHover,
    feedbackBorderError,
    feedbackForgroundDefault,
    feedbackForgroundSecondary,
    feedbackForgroundError,
    feedbackForgroundSuccess,
    feedbackBackgroundSuccess,
    feedbackBackgroundAttention,
    feedbackBackgroundError,
    backgroundContainerProduct,
    backgroundContainer,
    actionOnDark,
    actionInactive,
    actionActive,
}