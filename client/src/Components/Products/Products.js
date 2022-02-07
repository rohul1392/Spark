
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

import Product from "./Product/Product";
import { products } from '../../constant/data'

const Products = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
    <Grid container spacing={4}>
        {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Grid>
        </Container>
  );
};

export default Products
