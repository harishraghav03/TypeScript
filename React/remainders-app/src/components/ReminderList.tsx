import React from 'react';
import Remainder from '../models/remainder';

// Defining the shape of Props
interface RemainderListProps {
    // List of remainders
    items: Remainder[]
}

function ReminderList({items}: RemainderListProps) {
    return (
        // We return unordered lists and then map each item in the lists of remainders to the list item
        <ul>
            {items.map(item => <li key={item.id}>key={item.title}</li>)}
        </ul>
    );
}

export default ReminderList;