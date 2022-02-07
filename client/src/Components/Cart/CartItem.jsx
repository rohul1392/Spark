import { Card, makeStyles, Box, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';
import GroupButton from './GroupButton';

const useStyle = makeStyles({
    component: {
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0,
        display: 'flex'
    },
    leftComponent: {
        margin: 20, 
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        height: 110,
        width: 110
    },
    mid: {
        margin: 20
    },
    greyTextColor: {
        color: '#878787'
    },
    smallText: {
        fontSize: 14,
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    },
    remove: {
        marginTop: 20,
        fontSize: 16,
        color:'red'
    }
});

const CartItem = ({ item, removeItemFromCart }) => {
    console.log(item)
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src={item.image} className={classes.image} />
                <GroupButton item={item}/>
            </Box>
            <Box className={classes.mid}>
                <Typography>{item.title}</Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>৳{item.price}</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>৳{0}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{0} off</span>
                </Typography>
                <Button className={classes.remove} onClick={() => removeItemFromCart(item.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;