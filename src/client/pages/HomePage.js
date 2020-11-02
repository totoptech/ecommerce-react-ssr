import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HighLitedPad from '../components/HighLightedPad';
import { Container } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchProducts } from '../actions';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '10vh'
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40vh'
  }
}));

const HomePage = props => {
  const [products, loadProducts] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const products = await fetchProducts();
      loadProducts(products);
    }
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      {products ? (
        <Grid container spacing={3}>
          { products.map((item, i) => 
            <HighLitedPad data={item} type="products" key={5 + i} />
          )}          
        </Grid>
      ) : (
        <div className={classes.progress}>
          <CircularProgress color="secondary" />
        </div>
      )}
    </Container>
  );
};

export default {
  component: HomePage
};
