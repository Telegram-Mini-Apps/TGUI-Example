import styles from './ModalSection.module.css';
import { Button, Modal, Placeholder, Section } from '@xelene/tgui';

const PlaceholderImage = () => (
  <img
    alt="Telegram sticker"
    src="https://xelene.me/telegram.gif"
    className={styles.image}
  />
);

const ModalWithTrigger = () => (
  <Modal
    header={<Modal.Header />}
    trigger={<Button size="l" stretched>Open modal</Button>}
  >
    <Placeholder
      header="This is nice modal, isn't it?"
      description="Swipe up to close"
    >
      <PlaceholderImage />
    </Placeholder>
  </Modal>
);

export const ModalSection = () => (
  <Section header="Section with modal">
    <Placeholder
      header="This is placeholder"
      description="And this is placeholder description"
      action={<ModalWithTrigger />}
    >
      <PlaceholderImage />
    </Placeholder>
  </Section>
);
