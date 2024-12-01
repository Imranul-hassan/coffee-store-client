import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="bg-[#F4F3F0] w-9/12 mx-auto mt-8">
            <h3 className="text-3xl text-center font-bold py-2">Add coffee</h3>
            <form onSubmit={handleAddCoffee}>
                <div>
                    <div className="md:flex gap-3 p-5">
                        <div className="w-1/2">
                            <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered w-full " />
                        </div>
                        <div className="w-1/2">
                            <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="flex gap-3 p-5">
                        <div  className="w-1/2">
                            <input type="text" placeholder="Supplier Name" name="supplier" className="input input-bordered w-full " />
                        </div>
                        <div  className="w-1/2">
                            <input type="text" placeholder="Taste" name="taste" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex gap-3 p-5">
                        <div  className="w-1/2">
                            <input type="text" placeholder="Category" name="category" className="input input-bordered w-full " />
                        </div>
                        <div  className="w-1/2">
                            <input type="text" placeholder="Details" name="details" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex gap-3 p-5">
                        <div  className="w-full">
                            <input type="text" placeholder="Photo" name="photo" className="input input-bordered w-full " />
                        </div>
                    </div>
                </div>
                <input type="submit"  value='Add coffee' className="btn btn-block bg-lime-300"/>
            </form>

        </div>
    );
};

export default AddCoffee;