export default function PersonComponent(props){
    let person = props.person
    if (props.person){
      if(props.detail){
        return (
          <>
            <li>{`Person: id=${person.id}, lastname=${person.lastname}=firstname=${person.firstname}, height=${person.height}, gender=${person.gender}`}</li>  
          </>
        )

      }
      else{
        return (
          <>
            <li>{person.firstname} {person.lastname}</li>  
          </>
        )
      }
  }
}