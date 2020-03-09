import { connect } from 'react-redux'
import AdminHome from '../components/AdminHome'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(AdminHome)