import { useRef } from "react";

const UserInputField = (props) => {
 
  const value = useRef(0);
  const handleClick = ()=>{
    props.setState(value.current.value)
  }
  return (
    <div>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={value} type="text" placeholder="Enter Value" className="mt-3 p-2 rounded-xl"></input>
            <button type="submit" className="ml-5 px-5 p-2 rounded-xl text-white bg-black bg-opacity-60" onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}

export default UserInputField