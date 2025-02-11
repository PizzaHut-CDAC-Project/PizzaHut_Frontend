import React from 'react'
import './ToppingComp.css'
import { toast } from 'react-toastify'
import URL from '../../Pages/URL/Url'

export default function ToppingComp(props) {
    const { toppComp } = props
    var toppignCount = 0
    let imageUrl = `${URL}toppingImages/attachment/${toppComp.toppingId}`

    const addtopping=()=>{
        if(toppignCount === 0){
            
            toast.success(`Topping ${toppComp.toppingName} added` )
        }else{
            toast.error("Only one Topping can be added")
        }
        toppignCount = toppignCount+1
        toast.warning(toppignCount)
    }

    return (
        <div>
            <div className="row toppingRow" id='toppingSelected'>
                <div className="col">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="col">
                    {toppComp.toppingName}
                </div>
                <div className="col">
                    {toppComp.price} Rs
                </div>
                <div className="col">
                    <button className='btn btn-link addLink' id={toppComp.toppingId}
                   onClick={addtopping}
                    >Add</button>
                </div>
            </div>
        </div>
    )
}


// price: 25
// toppingId: 1
// toppingName: "faltu"

{/* <motion.button className='btn btn-link addLink'
    whileHover={{ scale: 1.03, color: "blue" }}
    whileTap={{ scale: 0.98, color: "steelblue" }}
>Add</motion.button> */}