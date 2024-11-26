import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from '../components/Coffee';

const Coffees = () => {
    const loadedCoffees =useLoaderData()
    const [coffees,setCoffees]=useState(loadedCoffees)
    // console.log(coffees)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 py-9 px-24'>
            {
                coffees.map(coffee=><Coffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Coffee>)
            }
        </div>
    );
};

export default Coffees;