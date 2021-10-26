
import EmployersListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';

const Employerslist = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // <EmployersListItem name={item.name} salary={item.salary}/>
            <EmployersListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default Employerslist;