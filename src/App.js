import { useState ,useLayoutEffect} from 'react';
import './App.css';
let  count = 0;
function App() {
  
 const[board,setBoard]  = useState([[{id:1, color:"red"},{id:2, color:"red"},{id:3, color:"red"},{id:4, color:"red"}],
 [{id:5, color:"red"},{id:6, color:"red"},{id:7, color:"red"},{id:8, color:"red"}],
 [{id:9, color:"red"},{id:10, color:"red"},{id:11, color:"red"},{id:12, color:"red"}],
 [{id:13, color:"red"},{id:14, color:"red"},{id:15, color:"red"},{id:16, color:"red"}]]);



  const handleClick = (ev)=>{
    let clickid = parseInt(ev.target.id),updatedBoard = [...board];
    count = count + 1;
    for(let i=0 ; i<updatedBoard.length;i++){
      for(let j =0 ; j< updatedBoard[i].length ; j++){
        if(count >=3){
          updatedBoard[i][j].count = updatedBoard[i][j]?.count -1;
        }
        if(updatedBoard[i][j].id === clickid){
          updatedBoard[i][j].color= "blue";
          updatedBoard[i][j].count = count >= 3 ? 2 : count;
        }
        if(updatedBoard[i][j]?.count === 0){
          updatedBoard[i][j].color= "red";
        }
      }
    }

    setBoard(updatedBoard);
    console.log(updatedBoard);

  }

  return (
    <div className="App">
     <div>
       {console.log(board)}
        {board.map((row, i) => (
          <div key={i} className="row">
            {row.map((col, j) => (
              <div className={col.color ==="red"? "red":"blue"} key={j} id={col.id} onClick={handleClick}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
