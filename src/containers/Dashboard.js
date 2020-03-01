import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { deleteBusiness } from '../redux/actions'

const mapSateToProps = (state) => {
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

export default connect(mapSateToProps, mapDispatchToProps)(Dashboard)