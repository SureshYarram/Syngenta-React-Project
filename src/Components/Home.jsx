
import { useEffect, useState  } from "react"

export const Home = ()=>{
 
    let [arr,setArr] = useState([])


   useEffect(()=>{
    ColorsArr()
        },[])



    const ColorsArr = ()=>{
        const balloonArr = Array(5)
        .fill()
        .map((_, i) => ({ id: i, popped: false, color: generateRandomColor() }));
    
            setArr([...balloonArr])
      }



    return(
        <>
      <h1>BALLOON GAME</h1>
      <div className="mainDiv">
            <div className="left">

                 <div></div>
            </div>
            <div className="right">
             
                  <div></div>
           
            </div>
            <div className="input">
                <input type="text" placeholder="Enter Your Ballon Number"   /> <br />
                <button>Shoot</button>
            </div>
        </div>

        </>
    )
}