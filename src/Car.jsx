import { useState, useEffect } from 'react';

const Car = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964
  });

  useEffect(() => {
    setCar(prevCar => ({ ...prevCar, color: 'blue' }));
  }, []);

  useEffect(() => {
    const prevCar = { ...car };
    if (
      prevCar.brand === car.brand &&
      prevCar.model === car.model &&
      prevCar.color === car.color &&
      prevCar.year === car.year
    ) {
      return;
    }

    if (prevCar.brand !== car.brand) {
      print("old brand: " + prevCar.brand + "     new brand: " + car.brand);
    }
    if (prevCar.model !== car.model) {
      print("old model: " + prevCar.model + "     new model: " + car.model);
    }
    if (prevCar.color !== car.color) {
      print("old color: " + prevCar.color + "     new color: " + car.color);
    }
    if (prevCar.year !== car.year) {
      print("old year: " + prevCar.year + "     new year: " + car.year);
    }
  }, [car]);

  const changeColor = () => {
    setCar(prevCar => ({ ...prevCar, color: "blue" }));
  }

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color}
        {car.model}
        from {car.year}.
      </p>
      <button
        type="button"
        onClick={changeColor}
      >Change color</button>
    </div>
  );
}

export default Car;
