import React from 'react';
import './App.css';
import Card from './components/card'
import Preloader from './components/preloader'





class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
  }
  componentDidMount() {
      fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((res) => res.json())
      .then((res)=>this.setState({ users: res }))
  }
  render() {
    if (this.state.users[0]) {
      return (
        <div className="App">
          <article>
            <h1>Test app</h1>
            {this.state.months.map((elem, index) => <Card month={elem} key={index} users={this.state.users.filter((user) => new Date(user.dob).getMonth() === index)} />)}
          </article>

        </div>
      )
    } else {
      return (<Preloader />)
    }
  }
}
export default App;