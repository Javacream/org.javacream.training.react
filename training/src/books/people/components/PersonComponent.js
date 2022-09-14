export default function PersonComponent(props){
    return <div className={props.style}>{props.person.firstname} {props.person.lastname}</div>
}