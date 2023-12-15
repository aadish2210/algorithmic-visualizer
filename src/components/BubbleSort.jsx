import { useEffect  , useRef } from "react";
import ProgressBar from "./ProgressBar"
import { Link } from "react-router-dom";
const BubbleSort = () => {

    const handleClick = ()=>{
        console.log(value.current.value);
        arr.push(value.current.value)
        setPB();
    }
    let arr = [];
    let copy = [89,77,67,53,34];
    var pb;

    const value = useRef(0);
    
    function setPB() {
        for (let k = 0; k < 5; k++) {
            pb[k].style.width = arr[k] + "%";
            pb[k].innerHTML = arr[k];
        }
    }
    
    function bubbleSortStep(i, j) {
        if (j < arr.length - i - 1) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
    
            setPB();
            console.log(arr);
    
            setTimeout(function () {
                bubbleSortStep(i, j + 1);
            }, 500);
        } else {
            setTimeout(function () {
                bubbleSort(i + 1);
            }, 1000);
        }
    }
    function bubbleSort(i) {
        if (i < arr.length - 1) {
            // Start the inner loop with j = 0
            bubbleSortStep(i, 0);
        } else {
            
            // Sorting is complete
            setPB();
            console.log("sorting doen")
        }
        
    }

    const intitalize = ()=>{
        console.log("use effect called")
        pb = document.getElementsByClassName("progress-bar");
        setPB();
    }

    useEffect(() => {
        intitalize()
    },[]);

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
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <button className="mt-3 px-5" onClick={()=>{bubbleSort(0)}}>Start Sorting</button>
        <button className="ml-5 px-5" onClick={()=>{
            arr=copy;
            intitalize();
        }}>Reset</button>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={value} type="text" placeholder="Enter Value" className="mt-3 p-2 rounded-xl"></input>
            <button type="submit" className="ml-5 px-5 p-2 rounded-xl text-white bg-black bg-opacity-60" onClick={handleClick}>Submit</button>
        </form>
        {/* <form onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={value} type="text" placeholder="Enter Value" className="mt-3 p-2 rounded-xl"></input>
            <button type="submit" className="ml-5 px-5 p-2 rounded-xl text-white bg-black bg-opacity-60" onClick={handleClick}>Submit</button>
        </form>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={value} type="text" placeholder="Enter Value" className="mt-3 p-2 rounded-xl"></input>
            <button type="submit" className="ml-5 px-5 p-2 rounded-xl text-white bg-black bg-opacity-60" onClick={handleClick}>Submit</button>
        </form>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={value} type="text" placeholder="Enter Value" className="mt-3 p-2 rounded-xl"></input>
            <button type="submit" className="ml-5 px-5 p-2 rounded-xl text-white bg-black bg-opacity-60" onClick={handleClick}>Submit</button>
        </form>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={value} type="text" placeholder="Enter Value" className="mt-3 p-2 rounded-xl"></input>
            <button type="submit" className="ml-5 px-5 p-2 rounded-xl text-white bg-black bg-opacity-60" onClick={handleClick}>Submit</button>
        </form> */}
        
        
    </div>
  )
}

export default BubbleSort