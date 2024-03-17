import { useContext } from 'react';

import classes from './ProductItem.module.css';
import CartContext from '../../../store/cart-context';

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: 1,
      price: props.price
    });
  };

  return (
      <div className={classes.box_main}>
        <h4 className={classes.shirt_text}>{props.title}</h4>
        <p className={classes.price_text}>Price  <span style={{color: "#262626"}}>$ {props.price}</span></p>
        <div className={classes.tshirt_img}><img src={props.image} /></div>
        <div className={classes.btn_main}>
          <div className={classes.buy_bt}><a onClick={addToCartHandler}>Buy Now</a></div>
          <div className={classes.seemore_bt}><a href="#">See More</a></div>
        </div>
      </div>
  );
};

export default ProductItem;
