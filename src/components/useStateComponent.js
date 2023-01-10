import React, { useState } from 'react'

function useStateComponent() {
  const [car, setCar] = useState({
    name: "baleno",
    make: "2021",
    color: "blue",
    brand: "maruti"
  });

  const changeProperties = () => {
    setCar(prevState => {
      return { ...prevState, color: "white" }
    })
  }

  return (
    <React.Fragment>
      <h1>Use State Hook - color is {car.color} make is {car.make} brand is {car.brand}</h1>
      <button onClick={changeProperties}>
        Change
      </button>
    </React.Fragment>

  )
}

export default useStateComponent;