import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'; // используем Webpack

function App() {

    const data = [
        {name: "John C.", salary: 800, increace: false},
        {name: "Alex M.", salary: 3000, increace: true},
        {name: "Carl W.", salary: 5000, increace: false}

    ];
    
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;