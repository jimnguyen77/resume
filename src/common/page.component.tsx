import { Content } from './content.component';
import { Sidebar } from './sidebar.component';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';

enum PageFont {
  FAMILY = 'Roboto, sans-serif',
  WEIGHT = '400',
}

export function Page() {
  return (
        <Grid
          container
          component='main'
          sx={{ fontFamily: PageFont.FAMILY, fontWeight: PageFont.WEIGHT, height: '100vh' }}
        >
          <CssBaseline />
          <Sidebar />
          <Content />
        </Grid>
    );
}
