import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import DataTable from "react-data-table-component";

import "./newEmployee.css";


// Je crée un tableau d'objets pour les columns du DataTable 
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
    const employees = useSelector((state) => state.usersList.value); // Récuperer les utilisateur du store 
    const [employeesFiltered, setEmployeesFiltered] = useState([]); // Créer un tableau vide et une fonction pour remplir le tableau

    useEffect(() => {
        if (employees !== null) { // si dans le store il y a des employees 
            setEmployeesFiltered(employees); // remplir le tableau avec les employees 
        }
    }, [employees, setEmployeesFiltered]);

    function handleSearchbarChange(event) {
        if (event.target.value === "") { // si il y a rien dans le input 
            return setEmployeesFiltered(employees); // laisser le tableau tel qu'il est avec tout les employees 
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
            <div className="button-container">
                <Link to="/" className="submit-button">
                    Home
                </Link>
            </div>
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

        </div>
    );
}

export default EmployeesList;