import styles from './FormSection.module.css';

import { ColorInput, IconContainer, Input, Section, Slider } from '@xelene/tgui';
import { Icon24SunLow } from '@xelene/tgui/dist/icons/24/sun_low';

export const FormSection = () => (
  <Section header="Form section">
    <Input header="Android title" placeholder="Something here" />
    <ColorInput />
    <Slider
      step={25}
      before={(
        <IconContainer className={styles.sliderIcon}>
          <Icon24SunLow />
        </IconContainer>
      )}
      after={<IconContainer><Icon24SunLow /></IconContainer>}
    />
  </Section>
);
