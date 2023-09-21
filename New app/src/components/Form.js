import React, { useState, useContext } from 'react';
import { EmployeeContext } from './employeeContext';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { states } from './states';
import { options } from './options';

function Form(){
    const { addEmployee } = useContext(EmployeeContext)
    const [valueDate, onChangeDate] = useState(new Date())
    const [valueDay, onChangeDay] = useState(new Date())
    const saveEmployee = (e) => {
        e.preventDefault()
        const employee = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            valueDay: e.target.valueDay.value,
            valueDate: e.target.valueDate.value,
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

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker id="date-of-birth" name="dateOfBirth" onChange={(onChangeDay)} value={valueDay} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker id="start-date" name="startDate" onChange={(onChangeDate)} value={valueDate} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street"/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city"/>

                    <label htmlFor="state">State</label>
                    <Select options={states} name="state" />


                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zipCode" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select options={options} name="department" />
                <button id="submit">save</button>
            </form>
    )
}

export default Form