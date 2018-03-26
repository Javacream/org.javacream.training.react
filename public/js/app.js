class WelcomeComponent extends React.Component{
  render(){
    return <p>Welcome to the People App!</p>
  }
}

ReactDOM.render(<WelcomeComponent />, document.getElementById('content'))
