import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import DataTable from "react-data-table-component";

import "./newEmployee.css";


// Je crée la constante 
const columns = [
    {
        name: "First Name",
        selector: (row) => row.firstName,
        sortable: true,
    },
    {
        name: "Last Name",
        selector: (row) => row.lastName,
        sortable: true,
    },
    {
        name: "Start Date",
        selector: (row) => row.startDate,
        sortable: true,
    },
    {
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
    },
    {
        name: "Date of Birth",
        selector: (row) => row.dateOfBirth,
        sortable: true,
    },
    {
        name: "Street",
        selector: (row) => row.street,
        sortable: true,
    },
    {
        name: "City",
        selector: (row) => row.city,
        sortable: true,
    },
    {
        name: "State",
        selector: (row) => row.state,
        sortable: true,
    },
    {
        name: "Zip Code",
        selector: (row) => row.zipCode,
        sortable: true,
    },
];

function EmployeesList() {
    const employees = useSelector((state) => state.usersList.value);
    const [employeesFiltered, setEmployeesFiltered] = useState([]);

    useEffect(() => {
        if (employees !== null) {
            setEmployeesFiltered(employees);
        }
    }, [employees, setEmployeesFiltered]);

    function handleSearchbarChange(event) {
        if (event.target.value === "") {
            return setEmployeesFiltered(employees);
        }

        return setEmployeesFiltered(
            employees.filter(
                (employee) =>
                    employee.firstName
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    employee.lastName
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    employee.department
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    employee.dateOfBirth
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    employee.street
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    employee.city
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    employee.state
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    employee.zipCode
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase())
            )
        );
    }

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <div>
                Rechercher :{" "}
                <input
                    type="text"
                    id="employee-searchbar"
                    className=""
                    onChange={handleSearchbarChange}
                ></input>
            </div>
            <DataTable
                id="employee-table"
                className="display"
                columns={columns}
                data={employeesFiltered}
                pagination
            />
            <div className="button-container">
                <Link to="/" className="submit-button">
                    Home
                </Link>
            </div>
        </div>
    );
}

export default EmployeesList;