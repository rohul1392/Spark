import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton,Grid} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './styles';
import { useSelector,useDispatch } from 'react-redux'
// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from '../../../redux/actions/cartActions'

const Product = ({ product}) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  return (
    <Grid item key={product.id} xs={12} sm={6} md={3}>
    <Card className={classes.card}>
    <Link to={`/product/${product.id}`} >
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h5">
          {product.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h5">
          $ {product.price}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <IconButton aria-label="Add to Favourite" className={classes.icon}>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="Add to Cart" onClick={() => dispatch(addToCart(product.id))}  className={classes.icon} >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
