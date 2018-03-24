import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
        this.setState({results: [1,3]});
    }

    render() {
        return (
                <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                </form>
                {this.state.results}
            </div>
        );
    }
}

// const Hello = props => (
//    <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//     name: 'David'
// }

// Hello.propTypes = {
//     name: PropTypes.string
// }

const Main = () => (
        <div>
        <SearchForm/>
        </div>
)

export { Main };
