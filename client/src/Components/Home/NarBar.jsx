import { Box, makeStyles, Typography } from '@material-ui/core';
import { navData } from '../../constant/data';
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '55px 130px 0 130px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center',
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit',
        'text-decoration': 'none'
    }
}));

const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(temp => (
                    <Link to={`/products`}>
                    <Box className={classes.container}>
                        <img src={temp.url} className={classes.image} />
                        <Typography className={classes.text}>{temp.text}</Typography>
                    </Box>
                    </Link>
                ))
            }
            {/* <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                navData.map(temp => (
                    <Link to={`/products`}>
                    <Box className={classes.container}>
                        <img src={temp.url} className={classes.image} />
                        <Typography className={classes.text}>{temp.text}</Typography>
                    </Box>
                    </Link>
                ))
                }
            </Carousel> */}
        </Box>
    )
}

export default NavBar;