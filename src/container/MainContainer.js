import Home from '../components/Home'
import {connect} from 'react-redux' //connects react components to redux store
import {addToCart,removeCart} from '../actions/action'

const mapStateToProps=state=>({ //use to select part of data from the store that connect component needs
   data:state.cardItems
})
const mapDispatchToProps=dispatch=>({ //dispatches actions to store
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeCartHandler:data=>dispatch(removeCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
