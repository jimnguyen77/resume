import { FC } from 'react';

import { constants, edu, experience, Headers, skills } from './data.constants';
import { ExpandMore } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

enum RowHighlightColors {
  BACKGROUND = '#FFBE7D',
  GRADIENT = 'linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(255,222,175,0.5) 100%)',
}

const rowData = [
  { title: Headers.PROFILE, text: [constants.PROFILE] },
  {
    title: Headers.SKILLS,
    text: skills.map((skill) => {
      const uniqueKey = `${skill.header}-${Math.random().toString(36).substring(7)}`;
      return (
        <Grid key={uniqueKey} sx={{ mb: 3 }}>
          <Grid sx={{ color: '#888' }}>{skill.header}</Grid>
          <Grid>{skill.items.join(', ')}</Grid>
        </Grid>
      );
    }),
  },
  {
    title: Headers.EXPERIENCE,
    text: experience.map((xp) => {
      const uniqueKey = `${xp.company}-${xp.title}-${xp.date}`;
      return (
        <Grid sx={{ mb: 3 }} key={uniqueKey}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid>
                <div style={{ color: '#888' }}>{xp.date}</div>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{xp.company} </span>{' '}
                  <span style={{ fontWeight: 300 }}>{'\u2014'}</span>{' '}
                  <span style={{ fontStyle: 'italic' }}>{xp.title}</span>
                </div>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid>{xp.companyDesc}</Grid>
              <Grid>
                <ul>
                  {xp.bullets.map((bullet: string, j: string) => {
                    const uniqueKey = `${xp.company}-${xp.title}-${j}`;
                    return <li key={uniqueKey}>{bullet}</li>;
                  })}
                </ul>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      );
    }),
  },
  {
    title: Headers.EDUCATION,
    text: edu,
  },
];

interface RowSectionProps {
  title: string;
  data: string[];
  renderItem: (item: string | string[]) => JSX.Element;
}
const RowSection: FC<RowSectionProps> = ({ title, data, renderItem }) => {
  const commonGridStyle = {
    minWidth: '100%',
    p: 4,
  };

  const skillsGridStyle = {
    ...commonGridStyle,
    background: RowHighlightColors.GRADIENT,
    backgroundColor: RowHighlightColors.BACKGROUND,
  };

  const gridStyle = title === Headers.SKILLS ? skillsGridStyle : commonGridStyle;

  return (
    <Grid sx={gridStyle}>
      <Grid sx={{ fontSize: '1.25rem', fontWeight: 700 }}>{title}</Grid>
      <Grid
        sx={{
          borderBottom: '0.05rem solid #000',
          margin: '1rem 0 1.25rem 0.05rem',
          width: '2rem',
        }}
      />
      <Grid>
        {data.map((item, index: number) => (
          <Box
            key={`${title}-${index}-${Math.random().toString(36).substring(7)}`}
            sx={title === Headers.SKILLS || title === Headers.EXPERIENCE ? { mb: 3 } : {}}
          >
            {renderItem(item)}
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export function Content() {
  return (
    <Grid lg={9} sm={8} xs={12}>
      <Grid container>
        {rowData.map((section) => (
          <RowSection
            key={`${section.title}-${Math.random().toString(36).substring(7)}`}
            title={section.title}
            data={section.text as string[]}
            renderItem={(item) => <Grid>{item}</Grid>}
          />
        ))}
      </Grid>
    </Grid>
  );
}
