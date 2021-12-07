import * as ApiAppointmentUtil from "../util/appointments_utils";

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

export const receiveProducts = products =>({
    type: RECEIVE_PRODUCTS,
    products,
})

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product,
})

export const fetchProducts = () =>dispatch=> (
    ApiAppointmentUtil.fetchProducts().then((products)=> dispatch(receiveProducts(products)))
)

export const fetchProduct = (productId) => dispatch=> (
    ApiAppointmentUtil.fetchProduct(productId).then((product=> dispatch(receiveProduct(product))))
)

export const fetchSearchProducts = query => dispatch => (
    ApiAppointmentUtil.fetchSearchProducts(query).then(products => dispatch(receiveProducts(products)))
)
