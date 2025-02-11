import React, { useState } from 'react'
import API_URL from '../../Pages/URL/Url'

export default function ItemsizeComp(props) {
  const { sizeComp } = props

  let imageUrl = `${API_URL}itemImage/item/${sizeComp.item.itemid}`
  const data = sizeComp.price

  const [counter, setCounter] = useState(1)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }
  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div>
      <br /><br />
      <div>
        <div className="row">
          <div className="col">
            <img src={imageUrl} alt="sd" className='float-end shadow' style={{ height: "380px", width: "500px", borderRadius: "10px" }} />
          </div>
          <div className="col">
            <h1>{sizeComp.item.itemName} </h1>
            <h4 style={{ color: "gray" }}>{sizeComp.item.type}</h4>
            <h5>Description: <br />{sizeComp.item.description}</h5>
            <h5>Size  : {sizeComp.size}</h5>
            <hr />
            <h6>Other Sizes</h6>
            <div className="form" id=''>
              <div className="row">
                <div className="col">
                  <select name="sizeChange" id="sizeChange" style={{ width: "200px" }}>
                    <option value="Regular">Regular</option>
                    <option value="small">Small</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div className="col" id='buttoninComp'>
                </div>
              </div> <br />
              <div className="row">
                <div className="col">
                  <input type="number" value={counter} style={{ width: "200px" }} />
                </div>
                <div className="col">
                  <h5>
                    <button onClick={incrementCounter}>
                      +
                    </button>
                    <span style={{ margin: '10px' }}>{counter}</span>
                    <button onClick={decrementCounter} >
                      -
                    </button>
                  </h5>
                </div>
                <div className="col">
                  <h5>Quantity</h5>
                </div>
              </div>
            </div>
            <span><p><b>Note:</b> Only one topping can be added</p></span>
          </div>
          <h5>Price : {data} Rs.</h5>

        </div>
      </div>
      <br /><br />
    </div>
  )
}

// item:
      // description: "pizza, dish of Italian origin consisting of a flattened disk of bread dough"
      // itemName: "Momo Mia Pizza"
      // itemid: 1
      // type: "Veg"
// price: 250
// size: "Regular"
// sizeId: 2
