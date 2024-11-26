import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee =useLoaderData()
    // console.log(coffee)
    const {_id,name,chef,supplier,taste,category,details,photo}=coffee

    const updatedCoffee=event=>{
        event.preventDefault()

        const form= event.target
        const name= form.name.value
        const chef= form.chef.value
        const supplier= form.supplier.value
        const taste= form.taste.value
        const category= form.category.value
        const details= form.details.value
        const photo= form.photo.value
        const updatedCoffee={name,chef,supplier,taste,category,details,photo}
        // console.log(user)


        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount) {
                // console.log("success")
                Swal.fire({
                    title: "Success!",
                    text: "Updated Coffee added successfully",
                    icon: "success"
                  });
                  event.target.reset()
                }
              })
    }

    return (
        <div>
             <div className="py-9 px-24">
      <div className="bg-[#F4F3F0] p-10">
        <form onSubmit={updatedCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              name="name"
              defaultValue={name}
            />
           
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="chef"
              className="grow"
             defaultValue={chef}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="supplier"
              className="grow"
              defaultValue={supplier}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="taste"
              className="grow"
             defaultValue={taste}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="category"
              className="grow"
             defaultValue={category}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="details"
              className="grow"
              defaultValue={details}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 col-span-2">
            <input
              type="text"
              name="photo"
              className="grow"
              defaultValue={photo}
            />
          </label>
          <button type="submit" className="btn bg-[#D2B48C] col-span-2">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateCoffee;