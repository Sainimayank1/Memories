import './App.css';
import {AppBar , Container , Typography , Grow , Grid } from '@material-ui/core'
import Form from './component/Form/Form.js';
import memories from './component/images/memories.png'
import Posts from './component/Posts/Posts';
import useStyles from './style.js'

function App() {
  const classes = useStyles();
  return (
    <Container maxidth='lg'>
      <AppBar position='static' className={classes.appBar} color='inherit'>
        <Typography variant='h2' align='center' className={classes.heading}>Memories</Typography>
        <img src={memories} alt='memories' height='60' className={classes.image}></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing='3'>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
