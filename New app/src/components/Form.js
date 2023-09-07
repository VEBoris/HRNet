import React, { useContext } from 'react';
import { EmployeeContext } from './employeeContext.js';

function Form(){
    const { addEmployee } = useContext(EmployeeContext)
    const saveEmployee = (e) => {
        e.preventDefault()
        const employee = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            dateOfBirth: e.target.dateOfBirth.value,
            startDate: e.target.startDate.value,
            department: e.target.department.value,
            street: e.target.street.value,
            state: e.target.state.value,
            city: e.target.city.value,
            zipCode: e.target.zipCode.value
        }
        addEmployee(employee)
    }
    
    return(
            <form onSubmit={saveEmployee} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" required/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" required/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street"/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city"/>

                    <label htmlFor="state">State</label>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zipCode" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <button id="submit">save</button>
            </form>
    )
}

export default Form