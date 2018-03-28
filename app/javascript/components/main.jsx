import React from 'react'
import axios from 'axios'

const UserRow = (u) => (
  <tr key={u._id.$oid}>
    <td>{u.name}</td>
    <td>{u.score}</td>
    <td>{u.admin ? '\u2713' : ''}</td>
    <td style={{color: u.favorite_color}}>{u.favorite_color ? '\u2B24' : ''}</td>
    <td>{(new Date(u.birthday)).toDateString()}</td>
  </tr>
)

class Searcher extends React.Component {
  constructor() {
    super();
    this.state = {list: []};
    this.sendSearch = this.sendSearch.bind(this);
    axios.get('all').then((r) => this.setState({list: r.data}));
  }

  sendSearch(e) {
    e.preventDefault();
    let q = document.getElementById('search-input').value;
    axios.post('search', { search: q }).then((r) => {
      this.setState({ list: r.data });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendSearch}>
          <input id='search-input'
                 type='text'
                 placeholder='Search'
                 autoComplete='off' />
        </form>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Admin?</th>
              <th>Favorite Color</th>
              <th>Birthday</th>
            </tr>
            { this.state.list.map(UserRow) }
          </tbody>
        </table>
      </div>
    );
  }
}

const Main = () => <Searcher/>

export { Main };
