import React, { PureComponent } from 'react';

interface Employee{
    id:string
    employee_name:string
    employee_age:string
    employee_salary:string

}

export default class EmployeeComponent extends PureComponent<{}, {employees: Array<Employee>}>{
    state = {
      employees: [],
    };
  
    componentDidMount(){
    }
    render(){
          return (
              <div>
                <h3>Employees</h3>
                <div><ol>TODO</ol></div>
              </div>
            )
          }
}