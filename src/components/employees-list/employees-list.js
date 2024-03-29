import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp, onSalary}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem key={id} 
            {...itemProps} // object spread
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            onSalary={(newSalary) => onSalary(id, newSalary)}/>

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