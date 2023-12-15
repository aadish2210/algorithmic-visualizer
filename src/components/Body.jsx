import BubbleSort from "./BubbleSort"
import { RouterProvider , createBrowserRouter } from "react-router-dom"
import Homepage from "./Homepage"
const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Homepage />,
    },
    {
      path : "/bubbleSort",
      element : <BubbleSort />
    }
  ]
  )
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body