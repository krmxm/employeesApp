import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            increace: false,
            activeClass: ''
        }
    }

    onIncrease = () => {
        this.setState(({increace}) => ({ // круглые скобки чтобы не прописывать return
            increace: !increace
        }))
    }

    onLike = () => {
        this.setState(({activeClass}) => ({
            activeClass: activeClass === '' ? ' like' : ''
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increace} = this.state;
        const {activeClass} = this.state;
        

        let classNames = "list-group-item d-flex justify-content-between";
        if (increace) {
            classNames += ' increase';
        }

        return(
            <li onClick={this.onLike} className={classNames + activeClass}>
                <span className="list-group-item-label" >{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;