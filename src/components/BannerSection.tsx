import { Banner, Button, Image, Section } from '@telegram-apps/telegram-ui';

const TON_SITE_LINK = 'https://ton.space/';

export const BannerSection = () => (
  <Section header="Banner inside section">
    <Banner
      before={<Image size={48} />}
      header="Introducing TON Space"
      subheader="Start exploring TON in a new, better way"
    >
      <Button
        size="s"
        Component="a"
        target="_blank"
        href={TON_SITE_LINK}
      >
        Try it out
      </Button>
    </Banner>
  </Section>
);
