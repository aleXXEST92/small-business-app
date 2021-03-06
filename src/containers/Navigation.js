import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { deleteBusiness } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBusiness: (index) => dispatch(deleteBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)