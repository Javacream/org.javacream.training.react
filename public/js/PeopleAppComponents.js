class WelcomeComponent extends React.Component{
  render(){
    return <h2>Welcome to the People App!</h2>
  }
}

class PeopleComponent extends React.Component{

  constructor(){
    super()
    this.message = "a message from PeopleComponent"
    this.callback3 = this.callback3.bind(this)
  }
  callback1(){
    return this.message
  }
  callback2 = () => {
    return this.message
  }
  callback3(){
    return this.message
  }

  render(){
    let peopleInfoHtml = people.map((p) =>
    <PersonInfoComponent key={p.personId} info={p.info()} />)

    let peopleHtml = people.map((p) =>
    <PersonComponent key={p.personId} lastname={p.lastname} firstname={p.firstname} married={p.partner ? true : false} />)
  return (
          <div>
            <h3>People</h3>
            <div className='ui unstackable items'><ol>{peopleHtml}</ol></div>
            <h3>People Info</h3>
            <div className='ui unstackable items'><ul>{peopleInfoHtml}</ul></div>
            <h3>FunctionDemoComponent</h3>
            <div className='ui unstackable items'><FunctionDemoComponent function1={this.callback1} function2={this.callback2} function3={this.callback3}  message="a message from FunctionDemoComponent"/></div>
          </div>
  )
}
}

class FunctionDemoComponent extends React.Component{
  render(){
    return (
      <div>
        <p>Callback1: {this.props.function1()}</p>
        <p>Callback2: {this.props.function2()}</p>
        <p>Callback3: {this.props.function3()}</p>
      </div>
    )
  }
}
class PersonInfoComponent extends React.Component{
  render(){
    return <li>{this.props.info}</li>
  }
}

class PersonComponent extends React.Component{
  render(){
    return (
      <li>
        <p>Lastname: {this.props.lastname}</p>
        <p>Firstname: {this.props.firstname}</p>
        <p>Married: <input type="checkbox" value="Married" checked={this.props.married} readOnly="true"></input></p>
      </li>
  )}
}


ReactDOM.render(<WelcomeComponent />, document.getElementById('welcome-content'))
ReactDOM.render(<PeopleComponent />, document.getElementById('people'))
