import React  from 'react';
import './App.css';
import Login from "./Login.js"
//function App() {
 class App extends React.Component {
  
state ={
  counter : 0,
  time:new Date().toLocaleString(),
  
}
   Myclick=()=>{
     
    this.setState({counter : this.state.counter + 1})
    
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
     
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
   

    doTheMultiplication() {
      this.setState(function (prevState, props) {
        return {
          value: prevState.thingToMultiply * props.multiplier
        };
      });
    }
 render(){ 
  
  return (
    <div className="App"> 
     <Login/>
   
     <button type="submit"  onClick={this.Myclick} style={{borderRadius:"20px" , marginTop:"10%",width:"07%",height:"100px"}}>
  <p>{this.state.counter} </p>
  counter
</button>
  <p style={{color:"black", display:"flex",flexDirection:"column", fontSize:"50px" ,backgroundColor:"#fff"}}>{this.state.time}</p>
  <canvas value={this.state.date}></canvas>
  
    </div>
  );
 }

 }

export default App;
