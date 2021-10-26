import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import Employerslist from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Anton Antonov' , salary: '1000' , increase: false, id: 1 },
                {name: 'Ivan Ivanov' , salary: '2000', increase: true, id: 2},
                {name: 'Petr Petrov' , salary: '3000', increase: false, id: 3 },
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1); 
            // const newArr = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const obj = {name, salary, increase: false, id: this.maxId++}
        this.setState(({data}) => {
            // const newArr = [...data, obj]
            return {
                data: [...data, obj]
            }
        })
    }
     
    render() {
        return (
            <div className='app'>
                <AppInfo/>
                
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <Employerslist 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployersAddForm
                    onAdd={this.addItem}
                    />
    
            </div>
        );
    }
}

export default App;