import React from "react";
import './App.css';


function createComponent(comp) {
  return (
    <Components
      key={comp.id}
      image={comp.image}
      name={comp.name}
      price={comp.price}
    />
  );
}

function Components(props) {
  return (
    <div className="term" >
        <img src={props.image} width="280" height="235" alt="menu item"/><br />
        <p>Name: <span>{props.name}</span><br/></p>
        <p>Price: ₹<span>{props.price}</span><br/></p>
    </div>
  );
}

const desserts = [
  {
      id: 1,
      image: "https://media.istockphoto.com/photos/waffles-with-fruit-and-maple-syrup-on-a-marble-counter-picture-id185266029?k=20&m=185266029&s=612x612&w=0&h=Tms_IvrEGK0W9oWnno2rZ8e_GBAOyT_Ug0HN9qJNlVY=",
      name: "Berry Blast Waffle",
      price: 220
  },
  {
      id: 2,
      image: "https://d29hmqxeker05q.cloudfront.net/eyJidWNrZXQiOiJpbWFnZXMuY2tiay5jb20iLCJrZXkiOiJpbWFnZXMvYnJlYTAzMjY5YzAzczAwMXIwMDdnMDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjQsImhlaWdodCI6MTAyNCwiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImVudHJvcHkifSwianBlZyI6eyJxdWFsaXR5Ijo5MCwicHJvZ3Jlc3NpdmUiOnRydWV9fX0=",
      name: "Cinnamon Roll",
      price: 175
  },
  {
      id: 3,
      image: "https://i.pinimg.com/736x/e9/31/bb/e931bba39d3d8f2f1d46a77bc5cf0828.jpg",
      name: "Danish Pastry",
      price: 200
  },
];

function Time(){
  var CurrentHour = new Date().getHours();
  var CurrentMins = new Date().getMinutes();
  var DeliveryHour = CurrentHour;
  if(CurrentHour===23)
      DeliveryHour=0;
  else
      DeliveryHour=CurrentHour+1;
  if(CurrentMins<10)
      CurrentMins="0"+CurrentMins;
  if(CurrentHour<10)
      CurrentHour="0"+CurrentHour;
  if(DeliveryHour<10)
      DeliveryHour="0"+DeliveryHour;
return (
  <div>
      <p>Order Time: {CurrentHour}:{CurrentMins} IST</p>
      <p>Expected Delivery Time: {DeliveryHour}:{CurrentMins} IST</p>
  </div> 
  );
}

class App extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          count220: 0,
          count175: 0, 
          count200: 0,
          Total: 0,
          Date: "", 
          EDate: "" 
      }
      this.increase1 = this.increase1.bind(this)
      this.increase2 = this.increase2.bind(this)
      this.increase3 = this.increase3.bind(this)
      this.decrease1 = this.decrease1.bind(this)
      this.decrease2 = this.decrease2.bind(this)
      this.decrease3 = this.decrease3.bind(this)
      this.display = this.display.bind(this)
  }
      increase1=(e)=>{ 
        if(this.state.count220>=0){
          this.setState({ 
          count220: this.state.count220 + 1, 
          Total: this.state.Total + 220 });
        }
      }
      decrease1=(e)=>{ 
        if(this.state.count220>0){
          this.setState({ 
          count220: this.state.count220 - 1, 
          Total: this.state.Total - 220 });
        }
      }
      increase2=(e)=>{ 
        if(this.state.count175>=0){
          this.setState({ 
          count175: this.state.count175 + 1, 
          Total: this.state.Total + 175 });
        }
      }
      decrease2=(e)=>{ 
        if(this.state.count175>0){
          this.setState({ 
          count175: this.state.count175 - 1, 
          Total: this.state.Total - 175});
        }
      }
      increase3=(e)=>{ 
        if(this.state.count200>=0){
          this.setState({ 
          count200: this.state.count200 + 1, 
          Total: this.state.Total + 200});
        }
      }
      decrease3=(e)=>{ 
        if(this.state.count200>0){
          this.setState({ 
          count200: this.state.count200 - 1, 
          Total: this.state.Total - 200});
        }
      } 
      display=(e)=>{
        var CurrentHour = new Date().getHours();
        var CurrentMins = new Date().getMinutes();
        var DeliveryHour = CurrentHour;
        if(CurrentHour===23)
            DeliveryHour=0;
        else
            DeliveryHour=CurrentHour+1;
        if(CurrentMins<10)
            CurrentMins="0"+CurrentMins;
          
          var date1=CurrentHour+':'+CurrentMins;
          var edate1=DeliveryHour+':'+CurrentMins;
          this.setState({ 
              Date: date1, 
              EDate: edate1
          })
      }
  render() {
      
      return(
          
        <div id="root">
          <h1><center>Dessert Haven</center></h1>
          <div id="data" style = {{display:"flex", justifyContent:"space-evenly" }}>
            {desserts.map(createComponent)}
          </div>
      
          <div id="data" style = {{display:"flex", justifyContent:"space-evenly",}}>
            <div >
              <label>Quantity: </label>
              <input type="text" value={this.state.count220} style={{width:"50%"}}/>
              <button onClick={this.increase1} style={{backgroundColor:"rgba(23, 222, 23, 0.296)", borderWidth:"1.5px"}} >+</button>
              <button onClick={this.decrease1} style={{backgroundColor:"rgba(222, 23, 23, 0.296)", borderWidth:"1.5px"}} >-</button>
            </div>
            <div >
              <label>Quantity: </label>
              <input type="text" value={this.state.count175} style={{width:"50%"}}/>
              <button onClick={this.increase2} style={{backgroundColor:"rgba(23, 222, 23, 0.296)", borderWidth:"1.5px"}} >+</button>
              <button onClick={this.decrease2} style={{backgroundColor:"rgba(222, 23, 23, 0.296)", borderWidth:"1.5px"}} >-</button>
            </div>
            <div >
              <label>Quantity: </label>
              <input type="text" value={this.state.count200} style={{width:"50%"}}/>
              <button onClick={this.increase3} style={{backgroundColor:"rgba(23, 222, 23, 0.296)", borderWidth:"1.5px"}} >+</button>
              <button onClick={this.decrease3} style={{backgroundColor:"rgba(222, 23, 23, 0.296)", borderWidth:"1.5px"}} >-</button>
            </div>
          </div>

          <div style={{marginLeft:150, paddingTop:50}}>
            <p id="order">Total: ₹{this.state.Total}<button id="order" onClick={this.display}>Order</button></p>
            <p><b>Order Summary:</b></p>
            <p>Your Bill Total is ₹{this.state.Total}</p>
            <Time/>
          </div>
        </div>
          )
      }
  }

export default App;