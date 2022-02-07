import React, { useState } from "react";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";
import { adjustItemQty } from '../../redux/actions/cartActions';
import { useSelector,useDispatch } from 'react-redux'

const useStyle = makeStyles({
    component: {
        marginTop: 30
    },
    button :{
        borderRadius: '50%'
    }
})

const GroupedButton = ({item}) => {
    const classes = useStyle();
    const [ counter, setCounter ] = useState(item.qty);
    const dispatch = useDispatch()

    const handleIncrement = (id) => {
        console.log('GroupedButton',id)
        dispatch(adjustItemQty(id, counter + 1))
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = (id) => {
        console.log('GroupedButton',id)
        dispatch(adjustItemQty(id, counter - 1))
        setCounter(counter => counter - 1 );
    };

    return (
        <ButtonGroup className={classes.component} >
            <Button className={classes.button} onClick={() => handleDecrement(item.id)} disabled={counter === 1}>-</Button>
            <Button disabled>{counter}</Button>
            <Button className={classes.button} onClick={() => handleIncrement(item.id)}>+</Button>
        </ButtonGroup>
    );
}

export default GroupedButton;