export interface Employee{
    id:string
    employee_name:string
    employee_age:string
    employee_salary:string

}

export default class EmployeeController{
    async loadData():Promise<Array<Employee>> {
        try{
          let result = await fetch('http://dummy.restapiexample.com/api/v1/employees')
          let data = await result.json()
          return data
        }
        catch(err){
          alert("Something went wrong: " + err)
          return [];
        }
      }

}