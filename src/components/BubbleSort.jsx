import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

const BubbleSort = () => {
  const [arr, setArr] = useState([]);
  const copy = [89, 77, 67, 53, 34];
  const pbRefs = useRef(Array.from({ length: 5 }, () => React.createRef()));

  const handleClick = () => {
    const newValue = parseInt(value.current.value, 10);
    setArr([...arr, newValue]);
  };

  function setPB() {
    arr.forEach((value, index) => {
      if (pbRefs.current[index].current) {
        pbRefs.current[index].current.style.width = value + "%";
        pbRefs.current[index].current.innerHTML = value;
      }
    });
  }

  function bubbleSortStep(i, j) {
    if (j < arr.length - i - 1) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      setPB();
      console.log(arr);

      setTimeout(() => {
        bubbleSortStep(i, j + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        bubbleSort(i + 1);
      }, 1000);
    }
  }

  function bubbleSort(i) {
    if (i < arr.length - 1) {
      bubbleSortStep(i, 0);
    } else {
      setPB();
      console.log("sorting done");
    }
  }

  const initialize = () => {
    console.log("use effect called");
    setPB();
  };

  useEffect(() => {
    initialize();
  }, [arr]);

  const value = useRef(null);

  return (
    <div className="m-5">
      <Link to="/">
        <h1 className="pb-4 arrow">
          <span></span>
          <span></span>
          <span></span>
        </h1>
      </Link>
      <h1 className="hover:underline ml-[100px] p-3"></h1>
      <h1 className="text-3xl pb-2">Bubble Sort</h1>
      {Array.from({ length: 5 }, (_, index) => (
        <ProgressBar key={index} ref={pbRefs.current[index]} />
      ))}
      <button className="mt-3 px-5" onClick={() => bubbleSort(0)}>
        Start Sorting
      </button>
      <button className="ml-5 px-5" onClick={() => setArr(copy)}>
        Reset
      </button>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={value}
          type="text"
          placeholder="Enter Value"
          className="mt-3 p-2 rounded-xl"
        />
        <button
          type="submit"
          className="ml-5 px-5 p-2 rounded-xl text-white bg-black bg-opacity-60"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BubbleSort;