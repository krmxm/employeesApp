import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem {...item}/> // object spread

        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;

// когда мы помещаем массив компонентов на страницу, то реакт их расположит один за одним