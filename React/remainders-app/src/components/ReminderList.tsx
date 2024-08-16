import React from 'react';
import Remainder from '../models/remainder';

// Defining the shape of Props
interface RemainderListProps {
    // List of remainders
    items: Remainder[]
    onRemoveRemainder: (id: number) => void;
}

function ReminderList({ items, onRemoveRemainder }: RemainderListProps) {
    return (
        // We return unordered lists and then map each item in the lists of remainders to the list item
        <ul className='list-group'>
            {items.map(item => <li className='list-group-item' key={item.id}>
                {item.title}
                <button onClick={() => onRemoveRemainder(item.id) } className="btn btn-outline-danger mx-2 rounded-pill">Delete</button>
                </li>)}
        </ul>
    );
}

export default ReminderList;