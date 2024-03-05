import { useRef, useState } from 'react';
import styles from './TooltipSection.module.css';

import { Banner, Button, Section, Tooltip } from '@xelene/tgui';

export const TooltipSection = () => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  return (
    <Section header="Tooltip section">
      <Banner
        header="Tooltip on button"
        subheader="Press the button to show the tooltip"
      >
        <Button
          ref={ref}
          size="s"
          className={styles.button}
          onClick={() => setShown(!shown)}
        >
          {shown ? 'Hide' : 'Show'}
        </Button>
      </Banner>
      {shown && (
        <Tooltip
          mode="dark"
          targetRef={ref}
        >
          Look in the mirror, you look so cute! Xx
        </Tooltip>
      )}
    </Section>
  );
};
