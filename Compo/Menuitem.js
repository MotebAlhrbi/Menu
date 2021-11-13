import Apple from '../img/Apple.jpg';
import Burger from '../img/Burger.jpg';
import React, { Component } from 'react';
import coffe from '../img/coffe.jpg';
import mango from '../img/mango.jpg';
import orange from '../img/orange.jpg';
import salad from '../img/Salad.jpg';
import strawberry from '../img/Strawberry.jpg';
import Tea from '../img/Tea.jpg';
import Shawarma from '../img/Shawarma.jpg'


 export let Menuitem = [

{ Name:'Apple juice' , price:10 , img:Apple , type:'cold_drink' , value:0 , id:Math.random()*100} ,
{Name:'mango juice' , price:11 , img:mango , type:'cold_drink', value:0 ,id: Math.random()*100} ,
{Name:'orange juice' , price:12 , img:orange , type:'cold_drink', value:0 ,id: Math.random()*100} ,
{Name:'strawberry juice' , price:13 , img:strawberry , type:'cold_drink', value:0 ,id: Math.random()*100}

/////////////////////////////////////////////
,
 {Name:'Tea' , price:20 , img:Tea , type:'Hot_drink', value:0,id: Math.random()*100} ,
 {Name:'Cofee' , price:25 , img:coffe , type:'Hot_drink', value:0,id: Math.random()*100}

//////////////////////////////////////////////
,
{Name:'Burger' , price:30 , img:Burger , type:'Food', value:0,id: Math.random()*100} ,
{Name:'Shawarma' , price:10 , img:Shawarma , type:'Food', value:0,id: Math.random()*100}  ,
{Name:'salad' , price:10 , img:salad , type:'Food', value:0,id: Math.random()*100}

]



