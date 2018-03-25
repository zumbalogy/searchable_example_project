import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const ListItem = (item) => (
  <li key={item._id.$oid}>
    {item.name}
    {item.admin}
    {item.created_at}
    {item.height}
    {item.nick_name}
    {item.birthday}
  </li>
)

class Searcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', results: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    let url = 'all/';
    axios.get(url).then((res) => {
      this.setState({results: res.data});
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let url = 'search/' + this.state.value;
    if (this.state.value == '') {
      url = 'all/';
    }
    axios.get(url).then((res) => {
      this.setState({results: res.data});
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        { this.state.results.map(ListItem) }
      </div>
    );
  }
}

const Main = () => (
  <div>
    <Searcher/>
  </div>
)

export { Main };
