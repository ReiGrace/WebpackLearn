import './index.less';
import PropTypes from 'prop-types';

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            pages: [this.props.page]
        }
        this.pageOfProps = {
            0: null
        }
    }
    static contextTypes = {
        refs: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.context.refs['router'] = this;
    }

    push = (element, props) => {
        let routeDom = this.refs['route'];

        this.state.pages.push(element);
        this.pageOfProps[this.state.current + 1] = props || {};

        this.setState({
            pages: this.state.pages,
            current: this.state.current + 1
        });
    }

    pop = () => {
        let routeDom = this.refs['route'];

        this.state.pages.pop();
        this.state.pages[this.state.current] = null;
        delete this.pageOfProps[this.state.current];

        this.setState({
            current: this.state.current - 1
        });
    }

    render() {
        let htmlArr = [];
        for (let index = 0; index < this.state.pages.length; index++) {
            const element = this.state.pages[index];

            let offset = (index - this.state.current) * (window.screen.width);
            let propsTo = this.pageOfProps[index];

            htmlArr.push(
                <RouterPage key={index} index={index} left={offset} >
                    {React.createElement(element, {
                        ...propsTo
                    })}
                </RouterPage>
            );

        }
    }
}

class RouterPage extends React.Component {
    render() {
        return (
            <div className='route-page' style={{ width: window.screen.width, left: this.props.left }} >
                {this.props.children}
            </div>
        )
    }
}


export default Router;