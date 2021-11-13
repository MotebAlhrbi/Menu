import './App.css';
import React, { useState } from 'react';
import Footer from './Compo/footer';


import Menulist from './Compo/Meanulist';
import {Menuitem} from'./Compo/Menuitem';

function App() {



  return (

      <div>


<center style={{color:'whitesmoke'}}><h1 style={{fontFamily:'initial'}}> MENU</h1> </center>



<Menulist />
<Footer/>
    </div>
  );
}

export default App;
