import { NavLink } from "react-router-dom"

// const data = [
//     { id: 1, name: {firstName: 'Jhon', lastName: 'Doe'}, age: 25 },
//     { id: 2, name: 'Jane Smith', age: 30 },
//     { id: 3, name: 'Bob Johnson', age: 35 },
//   ];

function EmployeeList() {
    //console.log(data)
    return(
        <>       
            <h3 className='list-title'>Current Employees</h3>
            <footer>
                <NavLink to="/">Home</NavLink>
            </footer>
        </>
    )
}

export default EmployeeList