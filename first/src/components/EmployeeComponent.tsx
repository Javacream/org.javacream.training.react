import React, { PureComponent } from 'react';
import {Employee} from '../controller/EmployeeController';
import {applicationContext} from '../context/ApplicationContext'

export default class EmployeeComponent extends PureComponent<{}, {employees: Array<Employee>}>{
    readonly employeeController = applicationContext.employeeController
    
    state = {
      employees: [],
    };
  
    async componentDidMount(){
      let employeeList:Array<Employee> = await this.employeeController.loadData()
      this.setState({employees: employeeList})
    }
    render(){
      let employeeHtml = this.state.employees.map((e:Employee) =>
      <ol key={e.id}>{e.employee_name}</ol>)
  
      
        return (
            <div>
              <h3>EMPLOYEES</h3>
              <div><ol>{employeeHtml}</ol></div>
            </div>
          )
        }
}