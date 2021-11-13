import React, {useState } from 'react';
import {Menuitem} from './Menuitem';
import App from '../App';



function Menulist() {


let [counter , setcounter] = useState(0);
let [list,setlist] = useState([...Menuitem]);

let on =(e)=>{

  let x = e.target.value;

  switch(x){

 case 'cold_drink':
  setlist( Menuitem.filter((Menuitem)=>Menuitem.type==='cold_drink'))
break;

case 'Hot_drink' :
setlist(Menuitem.filter((Menuitem)=>Menuitem.type==='Hot_drink'))
break;

case 'Food' :
setlist(Menuitem.filter((Menuitem)=>Menuitem.type==='Food'))
break;


default:

  setlist(Menuitem);
  break;

  }
}



    return (

<div style={{margin:'30px'}} >

<select className="form-select" aria-label="Default select example" onChange={on}>
  <option value='all'>Open this select menu</option>
  <option value="cold_drink">cold drink</option>
  <option value="Hot_drink">Hot drink</option>
  <option value="Food">Food</option>
</select>


{list.map((item)=>
<div className=" card"  style={{width:"18rem" , display:'inline-block' , margin:'5px'}} key={item.id}>
  <img  src={item.img} alt={item.Name}  style={{width: '100%'} } />
  <div className=" card-body">
    <h5 className="card-title">{item.Name}</h5>
    <p className="card" style={{padding:'10px' ,color:'whitesmoke' ,backgroundColor:'red'}}>Some quick example <br/>text to build on <br/>the card title.<strong><br/>price:{item.price}</strong></p>
  <div>
  <button type="button" className="btn btn-primary" onClick={()=>{setcounter(item.value++)}} id={item.id}>+</button>
   <span className="badge bg-secondary" style={{margin:'3px'}}>{item.value}</span>
 <a>  <button type="button" className="btn btn-primary"  onClick={()=>{ if(item.value>0){setcounter(item.value--)} else{return item.value}}}  > - </button> </a>

</div>
  </div>
</div>

)
}
</div>


    );
}

export default Menulist;
