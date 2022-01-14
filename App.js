import React,{useEffect, useState} from 'react';
import {View ,StyleSheet, Text,TouchableOpacity,Image,Switch} from 'react-native'

export default function App(){
   const [active_player, setActive_player] = useState('X')
    const [markers, setMarkers] = useState([
      null, null, null,
      null, null, null,
      null, null, null
    ])
    const [winner, setWinner] = useState(null)
    const [theme, setTheme] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false);

    const markPosition = (position) => {
      if(!markers[position]){
        let temp = [...markers] //copy array
        temp[position] = active_player //set value in temp array to active player X or O
        setMarkers(temp) //set temp array to markers array
        if(active_player === 'X'){  //transfer chances to next player
          setActive_player('O')
        }else{
          setActive_player('X')
        }
      }
    }
    
    const CheckWinner = (squares) => { //calculate winner 8 ways
      const lines = [
        //Rows
        [0,1,2], // (0,0) , (0,1) , (0,2) ,
        [3,4,5],
        [6,7,8],
        //Columns
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //Diagonals
        [0,4,8],
        [2,4,6]
      ];
      for(let i=0;i<lines.length;i++){
      
        //[a,b,c] = lines[1]
        const [a,b,c] = lines[i]    // i ==> 1 ==> a=0,b=1,c=2 if(sq[0] && sq[0] ===sq[1] && sq[0] === sq[2])
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){ //check if all the values are same
          return squares[a]
        }
      }
      return null
    }
    useEffect(()=>{
      const winner = CheckWinner(markers)
      if(winner){
        alert(`${winner} is the Winner`)
        setWinner(winner)
        Reset()
      }
      else{
        let temp = [...markers]
        if(temp.includes(null)){
          return
        }else{
          alert('Game Draw')
          setWinner('Draw')
          Reset()
        }
      }
    },[markers])

    const Reset =()=>{
      setMarkers([
        null, null, null,
        null, null, null,
        null, null, null
      ])
    }
   const URl = {
    X: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYNnmmYvtHroptPllxP2xHNBvax3CuVDHEw&usqp=CAU',
    O: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Bx67nr8TSc98MJC5fmJYB5170jQ7sU79Zg&usqp=CAU'
   } 

   const toggleTheme = (props) => {
     setIsEnabled (prevState => !prevState)
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  
  return(
    <View style={[styles.container,{ backgroundColor :theme ==='dark' ? '#000': '#fff'}]}>
    {winner === 'X' ? <Image style={styles.image} source={{uri :URl.X}}/> 
      : <Image style={styles.image}source={{uri : URl.O}}/>
    }
      <Text style={[styles.text ,{color :theme ==='dark' ?'#F6EEC7':'#000'}]}>X vs O</Text>
        <TouchableOpacity style={styles.turn}>
          <Text style={styles.text}>{active_player} 's playing ... </Text>
        </TouchableOpacity>
      <View style={styles.gameboard}>
         <TouchableOpacity style={[styles.cell ,{borderColor:theme ==='dark'? '#fff':'#000'}]} onPress={()=>markPosition(0)}>
            {markers[0]==='X' && <Text style={styles.x}>X</Text>}
            {markers[0]==='O' && <Text style={styles.o}>O</Text>}
         </TouchableOpacity>
         <TouchableOpacity  style={[styles.cell ,{borderColor:theme ==='dark'? '#fff':'#000'}]} onPress={()=>markPosition(1)}>
            {markers[1]==='X' && <Text style={styles.x}>X</Text>}
            {markers[1]==='O' && <Text style={styles.o}>O</Text>}
         </TouchableOpacity>
         <TouchableOpacity style={[styles.cell ,{borderColor:theme ==='dark'? '#fff':'#000'}]} onPress={()=>markPosition(2)}>
            {markers[2]==='X' && <Text style={styles.x}>X</Text>}
            {markers[2]==='O' && <Text style={styles.o}>O</Text>}
         </TouchableOpacity>
         <TouchableOpacity style={[styles.cell ,{borderColor:theme ==='dark'? '#fff':'#000'}]} onPress={()=>markPosition(3)}>
            {markers[3]==='X' && <Text style={styles.x}>X</Text>}
            {markers[3]==='O' && <Text style={styles.o}>O</Text>}  
         </TouchableOpacity>
         <TouchableOpacity style={[styles.cell ,{borderColor:theme ==='dark'? '#fff':'#000'}]} onPress={()=>markPosition(4)}>
            {markers[4]==='X' && <Text style={styles.x}>X</Text>}
            {markers[4]==='O' && <Text style={styles.o}>O</Text>}
         </TouchableOpacity>
         <TouchableOpacity style={[styles.cell ,{borderColor:theme ==='dark'? '#fff':'#000'}]}onPress={()=>markPosition(5)}>
            {markers[5]==='X' && <Text style={styles.x}>X</Text>}
            {markers[5]==='O' && <Text style={styles.o}>O</Text>}  
         </TouchableOpacity>
         <TouchableOpacity style={[styles.cell ,{borderColor:theme ==='dark'? '#fff':'#000'}]}onPress={()=>markPosition(6)}>
            {markers[6]==='X' && <Text style={styles.x}>X</Text>}
            {markers[6]==='O' && <Text style={styles.o}>O</Text>}  
         </TouchableOpacity>
         <TouchableOpacity style={[styles.cell ,{borderColor:theme ==='dark'? '#fff':'#000'}]}onPress={()=>markPosition(7)}>
            {markers[7]==='X' && <Text style={styles.x}>X</Text>}
            {markers[7]==='O' && <Text style={styles.o}>O</Text>}  
         </TouchableOpacity>
         <TouchableOpacity style={[styles.cell ,{borderColor:theme ==='dark'? '#fff':'#000'}]} onPress={()=>markPosition(8)}>
            {markers[8]==='X' && <Text style={styles.x}>X</Text>}
            {markers[8]==='O' && <Text style={styles.o}>O</Text>}  
         </TouchableOpacity>
      </View>
       <TouchableOpacity style={styles.reset} onPress={()=>Reset()}>
          <Text style={styles.text}>Reset</Text>
       </TouchableOpacity>
       <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
         <Text style={[styles.text ,{color :theme ==='dark' ?'#F6EEC7':'#000'}]}>Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#fff" }}
          thumbColor={isEnabled ? "#900C3F" : "#010A43"}
          onValueChange={toggleTheme}
          value={isEnabled}
        />
       </View>
       
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,justifyContent:'center',alignItems:'center',
  },
  text:{
    fontSize:25,
    fontWeight:'bold',
    color:'#F6EEC7',
  },
  gameboard:{
    flexWrap:'wrap',
    flexDirection:'row',
    width:300,
    height:300,
    marginTop:20,
  },
  cell:{
    width:99,
    height:99,
    borderWidth:0.8,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  x:{
    fontSize:60,
    fontWeight:'bold',
    color:'#FF0075',
    fontFamily :'quicksand-bold'
  },
  o:{
    fontSize:60,
    fontWeight:'bold',
    color:'#FDB827',
    fontFamily:'kalam-bold'
  },
  turn:{
     width :250,
      height:50,
      backgroundColor:'#009DAE',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
  },
  reset:{
    width:200,
    height:50,
    backgroundColor:'#009DAE',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  image :{
    width :250 ,height :250, resizeMode:'stretch',borderRadius:15
  },
});


