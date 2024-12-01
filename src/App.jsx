import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className="w-9/12 mx-auto">
      
      <h1 className="text-3xl font-bold text-center my-6">Coffee Item </h1>
      <div className="grid md:grid-cols-2 gap-4 ">
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id} 
            coffee={coffee}
            coffees ={coffees}
            setCoffees ={setCoffees}
            >
            </CoffeeCard>)
        }
      </div>
      
  
    </div>
  )
}

export default App
