import { FC } from 'react';

import { LinkedInIcon } from '../assets';
import { constants } from './data.constants';
import { PlaceOutlined, MailOutlined, SmartphoneOutlined, HomeOutlined } from '@mui/icons-material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2';

enum SidebarColors {
  BACKGROUND = '#8DBCFF',
  GRADIENT = 'linear-gradient(25deg, rgba(255,255,255,1) 0%, rgba(141,188,255,1) 60%)',
}

enum TitleColors {
  TITLE1 = '#000BFF',
  TITLE2 = '#C1007E',
}

enum SidebarNameFont {
  FAMILY = 'D-DIN Condensed, sans-serif',
  SIZE = '3.5rem',
  WEIGHT = '700',
}

const contactInfo = [
  { icon: <PlaceOutlined />, text: constants.LOCATION },
  { icon: <MailOutlined />, text: constants.EMAIL },
  { icon: <SmartphoneOutlined />, text: constants.PHONE },
  {
    icon: <LinkedInIcon viewBox='0 0 1500 1500' />,
    text: constants.LINKEDIN,
    link: constants.LINKEDIN_URL,
  },
  { icon: <HomeOutlined />, text: constants.URL },
];

interface ContactInfoItemProps {
  icon: JSX.Element;
  text: string;
  link?: string;
}

const ContactInfoItem: FC<ContactInfoItemProps> = ({ icon, text = '', link }) => {
  return (
    <Grid
      container
      alignItems='center'
      sx={{ width: '100% !important', mb: text === constants.LOCATION ? 6 : 0 }}
    >
      <Grid sx={{ mt: 1, mr: 1 }}>{icon}</Grid>
      {link ? (
        <Grid>
          <Link href={link} target='_blank' underline='hover' color='inherit'>
            {text}
          </Link>
        </Grid>
      ) : (
        <Grid>{text}</Grid>
      )}
    </Grid>
  );
};

export function Sidebar() {
  return (
    <Grid
      lg={3}
      sm={4}
      xs={12}
      columnSpacing={{ xs: 12, sm: 12, md: 12, lg: 3 }}
      sx={{
        background: SidebarColors.GRADIENT,
        backgroundColor: SidebarColors.BACKGROUND,
        p: 5,
      }}
    >
      <Grid
        sx={{
          fontFamily: SidebarNameFont.FAMILY,
          fontSize: SidebarNameFont.SIZE,
          fontWeight: SidebarNameFont.WEIGHT,
        }}
      >
        <Grid sx={{ lineHeight: '0.9' }}>
          {constants.FIRSTNAME} {constants.LASTNAME}
        </Grid>
      </Grid>
      <Grid container>
        <Grid>
          <span style={{ color: TitleColors.TITLE1 }}>{constants.TITLE1}</span>{' '}
          <span style={{ color: TitleColors.TITLE2 }}>{constants.TITLE2}</span>
        </Grid>
      </Grid>

      {contactInfo?.map((item) => (
        <ContactInfoItem key={item.text} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </Grid>
  );
}
