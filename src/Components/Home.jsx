
import { useEffect, useState  } from "react"

export const Home = ()=>{
 
    let [colourArr,setColourArr] = useState([]);
    const[val,setVal] = useState(null);
    const [divArr,setdivArr] = useState([])


   useEffect(()=>{
    ColorsArr()
        },[])

        function generateRandomColor()
        {
            var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            return randomColor;
            //random color will be freshly served
        }

    const ColorsArr = ()=>{
        const balloonArr = Array(5)
        .fill()
        .map((_, i) => ({ id: i, color: generateRandomColor() }));
    
            setColourArr([...balloonArr])
      }

        
  const PopandMove = (val)=>{
       
    if(val==null){
        return
    }
         let arr1 = arr
      let removed =  arr1.splice((val-1),1);
 
      divArr.push(...removed)
      setVal(null)
       setArr([...arr])
        document.getElementById("ballonnumber").value = ""
    
  }

    return(
        <>
      <h1>BALLOON GAME</h1>
      <div className="mainDiv">
            <div className="left">
              
                
            </div>
            <div className="right">   

            {colourArr.map((el)=>(
                    <div key={el.id}  style={{backgroundColor:el.color}}></div>
                ))}
           
            </div>
            <div className="input">
                <input type="text" id="ballonnumber" placeholder="Enter Your Ballon Number"   /> <br />
                <button onClick={()=>PopandMove(val)}>Shoot</button>
            </div>
        </div>

        </>
    )
}