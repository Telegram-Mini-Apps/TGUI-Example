import { ReactNode } from 'react';
import { Cell, IconContainer, Section } from '@telegram-apps/telegram-ui';

import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat';
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices';
import { Icon28Stats } from '@telegram-apps/telegram-ui/dist/icons/28/stats';

type CellProps = {
  id: number;
  icon: ReactNode;
  text: string;
}

const cells: CellProps[] = [
  {
    id: 1,
    icon: <Icon28Chat />,
    text: 'Chat Settings',
  },
  {
    id: 2,
    icon: <Icon28Devices />,
    text: 'Data and Storage',
  },
  {
    id: 3,
    icon: <Icon28Stats />,
    text: 'Devices',
  },
];

export const CellSection = () => (
  <Section header="This is section header" footer="And this is footer">
    {cells.map((cell) => (
      <Cell
        key={cell.id}
        before={<IconContainer>{cell.icon}</IconContainer>}
      >
        {cell.text}
      </Cell>
    ))}
  </Section>
);
