import React, { useState, useContext } from 'react';
import { EmployeeContext } from './employeeContext';
import Modal from 'veb-modal';
import 'veb-modal/dist/index.css'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
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
            dateOfBirth: e.target.dateOfBirth.value,
            startDate: e.target.startDate.value,
            department: e.target.department.value,
            street: e.target.street.value,
            state: e.target.state.value,
            city: e.target.city.value,
            zipCode: e.target.zipCode.value
        }
        addEmployee(employee)
        openModal()
    }

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return(
            <form onSubmit={saveEmployee} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" required minLength="2" pattern="[a-zA-Z-àâçéèêëîïôûùüÿñæœ']{2,}"/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" required minLength="2" pattern="[a-zA-Z-àâçéèêëîïôûùüÿñæœ']{2,}"/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker id="date-of-birth" name="dateOfBirth" onChange={(onChangeDay)} value={valueDay}/>

                <label htmlFor="start-date">Start Date</label>
                <DatePicker id="start-date" name="startDate" onChange={(onChangeDate)} value={valueDate}/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" required minLength="2"/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city" required minLength="2"/>

                    <label htmlFor="state">State</label>
                    <Select options={states} name="state" required/>


                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zipCode" required/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select options={options} name="department" required/>
                <div> 
                    <button id='submit' onClick={openModal}> save </button>
                    {modalVisible && 
                    <Modal 
                        text="Employee Created !"
                        closeModal={closeModal}
                         />}
                </div>
            </form>
    )
}

export default Form