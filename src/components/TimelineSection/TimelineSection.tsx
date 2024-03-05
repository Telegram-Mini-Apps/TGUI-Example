import styles from './TimelineSection.module.css';
import { Section, Timeline } from '@xelene/tgui';

const TIMELINE_ITEMS = [
  {
    header: 'Arrived',
    description: 'Yesterday',
  },
  {
    header: 'Departed',
    description: 'Today',
  },
  {
    header: 'In transit',
    description: 'Tomorrow',
  },
  {
    header: 'Processed to delivery center',
    description: 'Next week',
  },
  {
    header: 'Shipped',
    description: 'Someday',
  },
];

export const TimelineSection = () => (
  <Section header="Timeline">
    <Timeline className={styles.timeline} active={2}>
      {TIMELINE_ITEMS.map((item, index) => (
        <Timeline.Item key={index} header={item.header}>
          {item.description}
        </Timeline.Item>
      ))}
    </Timeline>
  </Section>
);
