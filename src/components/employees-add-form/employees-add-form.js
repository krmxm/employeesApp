import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            errors: {
                name: '',
                salary: ''
            }
        }
    }

    validateForm = () => {
        const {name, salary} = this.state;
        let isValid = true;
        const errors = {
            name: '',
            salary: ''
        };

        if (!name.trim()) {
            errors.name = 'Пожалуйста, введите имя сотрудника';
            isValid = false;
        }

        if (!salary.trim()) {
            errors.salary = 'Пожалуйста, введите зарплату сотрудника';
            isValid = false;
        }

        this.setState({errors});
        return isValid;
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, // квадратные скобки чтобы достучать до значения атрибута, которые соответсвуют названию состояния
            errors: {
                name: '',
                salary: ''
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.validateForm()) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                errors: {
                    name: '',
                    salary: ''
                }
            })
        }
    }

    render() {
        const {name, salary, errors} = this.state;

        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
                {errors.name && <div className='text-danger'>{errors.name}</div>}
                {errors.salary && <div className='text-danger'>{errors.salary}</div>}

            </div>
        )
    }
}

export default EmployeesAddForm;