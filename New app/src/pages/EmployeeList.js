import React, { useContext } from 'react';
import { EmployeeContext } from '../components/employeeContext';
import CustomTable from "agr-custom-table";
import { NavLink } from "react-router-dom"

function EmployeeList() {
	const { employees } = useContext(EmployeeContext)
	const title = 'Welcome to Employee List Page';
	const columns = [
		{ label: 'First Name', key: 'firstName' },
		{ label: 'Last Name', key: 'lastName' },
		{ label: 'Start Date', key: 'startDate' },
		{ label: 'Department', key: 'department' },
		{ label: 'Date of Birth', key: 'dateOfBirth' },
		{ label: 'Street', key: 'street' },
		{ label: 'City', key: 'city' },
		{ label: 'State', key: 'state' },
		{ label: 'Zip Code', key: 'zipCode' },
	];

	return (
		<section className="container">
			<h1>{title}</h1>
			<div style={{backgroundColor: 'white'}}>
				<CustomTable data={employees} columns={columns} pagination={true} search={true} sortable={true} filterEntries={true}/>
            	<NavLink to="/">Home</NavLink>
			</div>
		</section>
	)
}

export default EmployeeList;