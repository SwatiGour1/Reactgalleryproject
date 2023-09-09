import React, { useState } from 'react'
import menu from './Menu'

const Gallery=()=>{
    const[items,setitems]=useState(menu)
    const Filteritem=(categitem)=>{
        const updateditem=menu.filter((curelem)=>{
            return curelem.category===categitem;
        })
        setitems(updateditem);
    }
    return(
        <>
<h2 className='text-center mt-4 mb-3'>Favorite Food</h2>
<hr></hr>
<div className='menu-tabs container'>
    <div className='menu-btn d-flex justify-content-evenly mb-5 mt-5'>
<button className='btn btn-warning' onClick={()=>setitems(menu)}>All</button>

<button className='btn btn-warning' onClick={()=>Filteritem('food')}>Fruits</button>
<button className='btn btn-warning' onClick={()=>Filteritem('vegatable')}>Vegatable</button>
<button className='btn btn-warning' onClick={()=>Filteritem('Flower')}>Flower</button>
  </div>
  </div>
  {
    items.map((item)=>{
        const{id,title,price,img,desc}=item;
        return(
          <div className='glr'>
            <div class="card" style={{width:"18rem"}} id={id}>
    <img src={img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{price}</p>
      <p>{desc}</p>
    </div>
  </div>
 </div>
        )
    })
  }
 </>
    )
}
export default Gallery