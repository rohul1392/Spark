import * as actionTypes from '../constants/productConstant';
import axios from 'axios';
export const contentList = {
    products: [
        {
          id: 1,
          title: "COOLEST Cube Ever",
          description:
            "This cube will keep you busy the entire day and it is very fun to play with",
          price: 15.0,
          image:
            "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 2,
          title: "Large Coffee Cup",
          description:
            "Get a big cup of coffee every morning before the day starts",
          price: 20.0,
          image:
            "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 3,
          title: "CHANGED My Life",
          description:
            "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
          price: 150.0,
          image:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        },
        {
          id: 4,
          title: "COOLEST Cube Ever",
          description:
            "This cube will keep you busy the entire day and it is very fun to play with",
          price: 15.0,
          image:
            "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 5,
          title: "Large Coffee Cup",
          description:
            "Get a big cup of coffee every morning before the day starts",
          price: 20.0,
          image:
            "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 6,
          title: "CHANGED My Life",
          description:
            "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
          price: 150.0,
          image:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        },
        {
          id: 7,
          title: "COOLEST Cube Ever",
          description:
            "This cube will keep you busy the entire day and it is very fun to play with",
          price: 15.0,
          image:
            "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 8,
          title: "Large Coffee Cup",
          description:
            "Get a big cup of coffee every morning before the day starts",
          price: 20.0,
          image:
            "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 9,
          title: "CHANGED My Life",
          description:
            "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
          price: 150.0,
          image:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        },
        {
          id: 10,
          title: "COOLEST Cube Ever",
          description:
            "This cube will keep you busy the entire day and it is very fun to play with",
          price: 15.0,
          image:
            "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 11,
          title: "Large Coffee Cup",
          description:
            "Get a big cup of coffee every morning before the day starts",
          price: 20.0,
          image:
            "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 12,
          title: "CHANGED My Life",
          description:
            "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
          price: 150.0,
          image:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        },
      ],
}
export const getProducts = () => async (dispatch) => {
    try {
        console.log('Hiiiiii')
        const { data } = await axios.get(`http://localhost:8000/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        //const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        //console.log(data);

        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: contentList });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};


export const removeProductDetails = () => (dispatch) => {
    
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

};
