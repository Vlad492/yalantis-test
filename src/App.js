import React from 'react';
import './App.css';
import Card from './components/card'
import Preloader from './components/preloader'





class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      months: [ { name: 'January', counter: 0 },
                { name: 'February', counter: 0 },
                { name: 'March', counter: 0 },
                { name: 'April', counter: 0 },
                { name: 'May', counter: 0 },
                { name: 'June', counter: 0 },
                { name: 'July', counter: 0 },
                { name: 'August', counter: 0 },
                { name: 'September', counter: 0 },
                { name: 'October', counter: 0 },
                { name: 'November', counter: 0 },
                { name: 'December', counter: 0 }]
    }
  }
  componentDidMount() {
    const request = async () => {
      let response = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users').then((res) => res.json())
      this.setState({ users: response })
      let months = this.state.months
      response.forEach((elem) => {
        let month = new Date(elem.dob).getMonth()
        months[month].counter = months[month].counter + 1
      })
    this.setState({months : months})
      

    }
    request()
  }
  render() {
    if(this.state.users[0]){
    return (<div className="App">
      <h1>Test app</h1>
      {this.state.months.map((elem, index) => <Card month={elem.name} key={index} count = {elem.counter} users = {this.state.users.filter((user)=>new Date(user.dob).getMonth() === index)}/>)}
    </div>)
  }else{
    return(<Preloader/>)
  }}
}
export default App;