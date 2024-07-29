import React from 'react';

import { AppRoot, List } from '@telegram-apps/telegram-ui';
import { CellSection } from './components/CellSection';
import { FormSection } from './components/FormSection/FormSection';
import { BannerSection } from './components/BannerSection';
import { TimelineSection } from './components/TimelineSection/TimelineSection';
import { TooltipSection } from './components/TooltipSection/TooltipSection';
import { ModalSection } from './components/ModalSection/ModalSection';

export const App = () => (
  <AppRoot>
    <List>
      <CellSection />
      <FormSection />
      <BannerSection />
      <TimelineSection />
      <TooltipSection />
      <ModalSection />
    </List>
  </AppRoot>
);
