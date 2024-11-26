import React, { useState } from 'react';
import { FaPencil, FaRegEye } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({coffee,coffees,setCoffees}) => {
  const {_id,name,chef,supplier,taste,category,details,photo}=coffee
  // const[coffees,setCoffees]=useState(coffee)
    // console.log(coffee)

    const deleteItems=(_id)=>{
      // console.log(_id)



      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
      fetch(`http://localhost:5000/coffee/${_id}`,{
        method:"DELETE",
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if (data.deletedCount>0) {
        console.log(data)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        const remainingCoffee= coffees.filter(singleCoffee=>singleCoffee._id !== _id)
        setCoffees(remainingCoffee)
        console.log(remainingCoffee)
      }
      // setCoffees(remainingCoffee)

    })
        }
      });
                    
    }


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img className='w-96 h-full object-cover aspect-video '
      src={photo}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>taste: {taste}</p>
    <p>Chef: {chef}</p>
  </div>
 <div className="flex items-center justify-center pr-5">
   
<div className="join join-vertical space-y-4 *:text-white">
  <button className="btn join-item bg-[#D2B48C]"><FaRegEye /></button>
  <NavLink to={`/updateCoffee/${_id}`}> <button className="btn join-item bg-[#3C393B] text-white"><FaPencil /></button></NavLink>
  <button onClick={()=>deleteItems(_id)} className="btn join-item bg-[#EA4744]"><MdDelete /></button>
</div>
 </div>
</div>


        </div>
    );
};

export default Coffee;