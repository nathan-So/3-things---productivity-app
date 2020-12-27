import React, { useState } from "react";
import List from "./List";

const Forms = () => {
  const [allThings, setAllThings] = useState({
    goodFirst: "",
    goodSecond: "",
    goodThird: "",
    badFirst: "",
    badSecond: "",
    badThird: "",
    betterFirst: "",
    betterSecond: "",
    betterThird: "",
  });
  const [things, setThings] = useState({
    goodFirst: "",
    goodSecond: "",
    goodThird: "",
    badFirst: "",
    badSecond: "",
    badThird: "",
    betterFirst: "",
    betterSecond: "",
    betterThird: "",
  });
  //A essayer d'implémenter
  //Mettre des variables au lieu des "first","good", etc.
  //   const [things, setThings] = useState({
  //     good: { first: "", second: "", third: "" },
  //     bad: { first: "", second: "", third: "" },
  //     better: { first: "", second: "", third: "" },
  //   });

  const handleChange = (e) => {
    // if (name === goodFirst) {
    //   setThings({ ...things, good: { ...things.good, first: value } });
    // }
    // if (name === goodSecond) {
    //   setThings({ ...things, good: { ...things.good, second: value } });
    // }
    //A continuer
    const name = e.target.name;
    const value = e.target.value;
    setThings({ ...things, [name]: value });
    // console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      goodFirst,
      goodSecond,
      goodThird,
      badFirst,
      badSecond,
      badThird,
      betterFirst,
      betterSecond,
      betterThird,
    } = things;

    if (
      goodFirst &&
      goodSecond &&
      goodThird &&
      badFirst &&
      badSecond &&
      badThird &&
      betterFirst &&
      betterSecond &&
      betterThird
    ) {
      const newThings = { ...things, id: new Date().getTime().toString() };
      setAllThings([...allThings, newThings]);
      setThings({
        goodFirst: "",
        goodSecond: "",
        goodThird: "",
        badFirst: "",
        badSecond: "",
        badThird: "",
        betterFirst: "",
        betterSecond: "",
        betterThird: "",
      });
    }
  };

  return (
    <div>
      <article>
        <form className="form">
          <h2>3 good things you did today </h2>
          <div className="form-control">
            <label htmlFor="first">Thirst thing : </label>
            <input
              className=""
              type="text"
              id="first"
              name="goodFirst"
              value={things.goodFirst}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="second">Second thing : </label>
            <input
              className=""
              type="text"
              id="second"
              name="goodSecond"
              value={things.goodSecond}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="third">Third thing : </label>
            <input
              className=""
              type="text"
              id="third"
              name="goodThird"
              value={things.goodThird}
              onChange={handleChange}
            />
          </div>
          <h2>3 bad things you did today </h2>
          <div className="form-control">
            <label htmlFor="first">Thirst thing : </label>
            <input
              className=""
              type="text"
              id="first"
              name="badFirst"
              value={things.badFirst}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="second">Second thing : </label>
            <input
              className=""
              type="text"
              id="second"
              name="badSecond"
              value={things.badSecond}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="third">Third thing : </label>
            <input
              className=""
              type="text"
              id="third"
              name="badThird"
              value={things.badThird}
              onChange={handleChange}
            />
          </div>
          <article>
            <h2>3 things you could do better tomorrow </h2>
            <div className="form-control">
              <label htmlFor="first">Thirst thing : </label>
              <input
                className=""
                type="text"
                id="first"
                name="betterFirst"
                value={things.betterFirst}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="second">Second thing : </label>
              <input
                className=""
                type="text"
                id="second"
                name="betterSecond"
                value={things.betterSecond}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="third">Third thing : </label>
              <input
                className=""
                type="text"
                id="third"
                name="betterThird"
                value={things.betterThird}
                onChange={handleChange}
              />
            </div>
          </article>

          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </article>
      <div>{/* <List allThings={allThings} /> */}</div>
    </div>
  );
};

export default Forms;
