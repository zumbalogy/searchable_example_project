import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const ListItem = (x) => (
  <tr key={x._id.$oid}>
    <td>{x.name}</td>
    <td>{x.height}</td>
    <td>{x.admin ? "\u2713" : ""}</td>
    <td style={{color: x.favorite_color}}>{x.favorite_color ? "\u2B24" : ""}</td>
    <td>{(new Date(x.birthday)).toDateString()}</td>
  </tr>
)

class Searcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', results: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    let url = 'all/';
    axios.get(url).then((res) => {
      let sorted = res.data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      this.setState({results: sorted});
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
            <input type="text"
                   placeholder="Search"
                   value={this.state.value}
                   onChange={this.handleChange} />
          </label>
        </form>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Admin?</th>
            <th>Favorite Color</th>
            <th>Birthday</th>
          </tr>
            { this.state.results.map(ListItem) }
          </tbody>
        </table>
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
