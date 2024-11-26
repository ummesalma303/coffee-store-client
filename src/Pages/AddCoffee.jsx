import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee=event=>{
        event.preventDefault()

        const form= event.target
        const name= form.name.value
        const chef= form.chef.value
        const supplier= form.supplier.value
        const taste= form.taste.value
        const category= form.category.value
        const details= form.details.value
        const photo= form.photo.value
        const user={name,chef,supplier,taste,category,details,photo}
        // console.log(user)


        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json(user))
        .then(data=>{
            // console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Coffee added successfully",
                    icon: "success"
                  });
                  event.target.reset()
                }
              })
    }
  return (
    <div className="py-9 px-24">
      <div className="bg-[#F4F3F0] p-10">
        <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              name="name"
              placeholder="Coffee name"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              name="chef"
              className="grow"
              placeholder="Coffee Chef"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="supplier"
              className="grow"
              placeholder="Enter coffee supplier"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="taste"
              className="grow"
              placeholder="coffee taste"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="category"
              className="grow"
              placeholder="Enter coffee category"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="details"
              className="grow"
              placeholder="Enter coffee details"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 col-span-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              name="photo"
              className="grow"
              placeholder="Enter photo URL"
            />
          </label>
          <button type="submit" className="btn bg-[#D2B48C] col-span-2">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
