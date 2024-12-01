import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const  {_id, name, quantity, supplier, taste, category, details, photo} = coffee

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(updateCoffee)

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div className="bg-slate-200 w-9/12 mx-auto mt-8">
            <h3 className="text-3xl text-center font-bold py-2">Update coffee</h3>
            <form onSubmit={handleUpdateCoffee}>
                <div>
                    <div className="md:flex gap-3 p-5">
                        <div className="w-1/2">
                            <input type="text" placeholder="Coffee Name" name="name" defaultValue={name} className="input input-bordered w-full " />
                        </div>
                        <div className="w-1/2">
                            <input type="text" placeholder="Quantity" name="quantity" defaultValue={quantity} className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="flex gap-3 p-5">
                        <div  className="w-1/2">
                            <input type="text" placeholder="Supplier Name" name="supplier" defaultValue={supplier} className="input input-bordered w-full " />
                        </div>
                        <div  className="w-1/2">
                            <input type="text" placeholder="Taste" name="taste" defaultValue={taste} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex gap-3 p-5">
                        <div  className="w-1/2">
                            <input type="text" placeholder="Category" name="category" defaultValue={category} className="input input-bordered w-full " />
                        </div>
                        <div  className="w-1/2">
                            <input type="text" placeholder="Details" name="details" defaultValue={details} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex gap-3 p-5">
                        <div  className="w-full">
                            <input type="text" placeholder="Photo" name="photo" defaultValue={photo} className="input input-bordered w-full " />
                        </div>
                    </div>
                </div>
                <input type="submit"  value='Update coffee' className="btn btn-block bg-amber-200"/>
            </form>

        </div>
    );
};

export default UpdateCoffee;