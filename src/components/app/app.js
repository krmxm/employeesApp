import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'; // используем Webpack

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: false, rise: true, id: 1},
                {name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2},
                {name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3}
            ]
        }
        this.maxItem = 4;
    }

    deleteItem = (id) => { 
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index); // копируем кусочки массива
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after]; // сращиваем два массива в новый массив

            
            return {
                // data: newArr // возвращаем новый массив, соблюдая правила иммутабельности
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxItem ++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase}; // Это синтаксис объектного литерала для добавления или изменения свойства increase в новом объекте newItem
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }

                return item;
            })
        }))
    }

    render () {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}
                />
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;