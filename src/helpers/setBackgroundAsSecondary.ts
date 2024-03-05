import { getTelegramData } from '@xelene/tgui/dist/helpers/telegram';

export const setBackgroundAsSecondary = () => {
  const telegramData = getTelegramData();
  if (!telegramData) {
    return;
  }

  telegramData.setBackgroundColor(telegramData.themeParams.secondary_bg_color);
};
