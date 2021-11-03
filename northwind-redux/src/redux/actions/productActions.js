import * as actionTypes from "./actionTypes";



export function getProductSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
  }
  
  export function getProducts() {
    return function (dispatch) {

      let url = "http://localhost:3000/products";
      return fetch(url)
        .then((response) => response.json())
        .then((result) => dispatch(getProductSuccess(result)));
    };
  }