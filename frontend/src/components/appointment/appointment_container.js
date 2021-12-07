import { connect } from "react-redux"
import Product from "./products"
import { fetchUserAppointments, createAppointment} from "../../actions/product_action"

const mSTP = (state,ownProps)=> {
    
    return {
    appointments: Object.values(state.entities.appointments),
    query: ownProps.match.params.query
}}

const mDTP = dispatch =>({
    // fetchProducts: ()=> dispatch(fetchProducts()),
    fetchSearchProducts: query=> dispatch(fetchSearchProducts(query))
})

export default connect(mSTP, mDTP)(Product)