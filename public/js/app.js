class WelcomeComponent extends React.Component{
  render(){
    return <h2>Welcome to the People App!</h2>
  }
}

class People extends React.Component{
  render(){
    let peopleInfoHtml = people.map((p) =>
    <Person key={p.personId} info={p.info()} />)
  return   <div className='ui unstackable items'>{peopleInfoHtml}</div>
}
}
class Person extends React.Component{
  render(){
    return <li>{this.props.info}</li>
  }
}

ReactDOM.render(<WelcomeComponent />, document.getElementById('welcome-content'))
ReactDOM.render(<People />, document.getElementById('people'))
