
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
         let arr1 = colourArr
      let removed =  arr1.splice((val-1),1);
 
      divArr.push(...removed)
      setVal(null)
       setColourArr([...colourArr])
        document.getElementById("ballonnumber").value = ""
    
  }
  
  const PushandMove = (val)=>{
    let arr1 = divArr;
    let removed = arr1.splice(val,1);
    colourArr.push(...removed)

    colourArr.sort(function(a, b) {
      return (a.id - b.id);
  })
    setColourArr([...colourArr])
}
    return(
        <>
      <h1>BALLOON GAME</h1>
      <div className="mainDiv">
            <div className="left">
              
            {divArr.map((el,index)=>(
                 <div onClick={()=>PushandMove(index)} key ={el.id} style={{backgroundColor:el.color}}></div>
             ))}
                
            </div>
            <div className="right">   

            {colourArr.map((el)=>(
                    <div key={el.id}  style={{backgroundColor:el.color}}></div>
                ))}
           
            </div>
            <div className="input">
                <input type="text" id="ballonnumber" placeholder="Enter Your Ballon Number"  onChange={(e)=>setVal(e.target.value)}  /> <br />
                <button onClick={()=>PopandMove(val)}>Shoot</button>
            </div>
        </div>

        </>
    )
}