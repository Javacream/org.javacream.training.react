class WelcomeComponent extends React.Component{
  render(){
    return <h2>Welcome to the People App!</h2>
  }
}

class PeopleComponent extends React.Component{
  state = {
    people: [],
  };

  constructor(){
    super()
    this.message = "a message from PeopleComponent"
    this.callback3 = this.callback3.bind(this)
  }
  componentDidMount(){
    this.setState({people: peopleModel.people()})
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
  callback4 = function(){
    return this.message
  }

  handleNameChange = (clickedPerson) => {
    let person = peopleModel.personOf(clickedPerson)
    person.lastname = person.lastname + "A"
    this.changeState()
  }

  changeState(){
    this.setState({people:peopleModel.people()})
  }
  render(){
    let peopleInfoHtml = this.state.people.map((p) =>
    <PersonInfoComponent key={p.personId} info={p.info()} />)

    let peopleHtml = this.state.people.map((p) =>
    <PersonComponent key={p.personId} index={p.personId} lastname={p.lastname} firstname={p.firstname} married={p.partner ? true : false} handleNameChange={this.handleNameChange}/>)
  return (
          <div>
            <h3>People</h3>
            <div className='ui unstackable items'><ol>{peopleHtml}</ol></div>
            <h3>People Info</h3>
            <div className='ui unstackable items'><ul>{peopleInfoHtml}</ul></div>
            <h3>FunctionDemoComponent</h3>
            <div className='ui unstackable items'><FunctionDemoComponent function1={this.callback1} function2={this.callback2} function3={this.callback3} function4={this.callback4} message="a message from FunctionDemoComponent"/></div>
          </div>
  )
}
}

const FunctionDemoComponent = (props) => {
    return (
      <div>
        <p>Callback1: {props.function1()}</p>
        <p>Callback2: {props.function2()}</p>
        <p>Callback3: {props.function3()}</p>
        <p>Callback4: {props.function4()}</p>
      </div>
    )
}
const PersonInfoComponent = (props) => {
    return <li>{props.info}</li>
}

const PersonComponent = (props) => {

    const handleNameChange = () => {
      props.handleNameChange(props.index)
    }

    return (
      <li>
        <p>Lastname: {props.lastname}</p>
        <p>Firstname: {props.firstname}</p>
        <p>Married: <input type="checkbox" value="Married" checked={props.married} readOnly="true"></input></p>
        <p><input type="button" value="Change name!" onClick={handleNameChange}></input></p>
      </li>
  )
}


ReactDOM.render(<WelcomeComponent />, document.getElementById('welcome-content'))
ReactDOM.render(<PeopleComponent />, document.getElementById('people'))
