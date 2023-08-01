import { Grid } from '@mui/material';

const App = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <section className='full'>left</section>
      </Grid>
      <Grid item xs={9} columnSpacing={{ xs: 3 }}>
        <section className='quarter space'>top</section>
        <Grid container spacing={2} columnSpacing={{ xs: 3 }}>
          <Grid item xs={3}>
            <section className='quarter'>middle</section>
          </Grid>
          <Grid item xs={3}>
            <section className='quarter'>middle</section>
          </Grid>
          <Grid item xs={3}>
            <section className='quarter'>middle</section>
          </Grid>
          <Grid item xs={8}>
            <section className='half'>bottom</section>
          </Grid>
          <Grid item xs={4}>
            <section className='half'>bottom</section>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
