import {Component} from 'react'
import {actions} from '../people/PeopleApplicationContext'
export default class LogComponent extends Component{
    state = {message: "Nothing"}

    componentDidMount(){
        this.actionsSubscription = actions.subscribe(this.update)
    }
    componentWillUnmount(){
        this.actionsSubscription.unsubscribe()
    }
    update = (data) => {
        this.setState({message: data})    
    }
    render(){
        return (
            <>
            {this.state.message}
            </>
    
        )
    
    }  
}