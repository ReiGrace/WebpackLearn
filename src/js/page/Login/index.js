import { connect } from 'react-redux';
import { action } from '../../../redux/action/index';
import PropTypes from 'prop-types';


class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            login: 0
        }
    }
    static contextType = {
        refs: PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                登陆界面!!登陆次数为 {this.props.state}
                <div>
                    <button onClick={() => { this.props.testReducer() }} >点击</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.testReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    testReducer: () => {
        dispatch(action.testReducer());
    }
})

const LoginC = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginC;