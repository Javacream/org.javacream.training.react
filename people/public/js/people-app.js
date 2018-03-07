/* eslint-disable no-param-reassign, operator-assignment */

class PeopleComponent extends React.Component {
  render() {
    const people = createPeople()
    const peopleComponents = people.map((person) => (
      <PersonComponent
        key={'person-' + person.personId}
        lastname={person.lastname}
        firstname={person.firstname}
        gender={person.gender}
        height={person.height}

      />
    ));
    return (
      <div>
        {peopleComponents}
      </div>
    );
  }
}

class PersonComponent extends React.Component {
  render() {
    return (
      <div>
      {this.props.lastname} {this.props.firstname} {this.props.height} {this.props.gender}
      </div>
    );
  }
}

ReactDOM.render(
  <PeopleComponent />,
  document.getElementById('content')
);
