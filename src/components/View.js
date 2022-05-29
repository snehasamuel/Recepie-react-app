import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
  var [data,setData]=useState([])
  var [load,setLoad]=useState(true)
  axios.get("http://localhost:7000/api/viewerecepie").then((response)=>{
console.log(response.data)
setData(response.data)
setLoad(false)
  })
  const deleteApi=((id)=>{
    const data={"_id":id}
console.log(id)
axios.post("http://localhost:7000/api/delete",data).then((response)=>{
console.log(response.data)
if(response.data.status=="success")
{
  alert("data deleted successfully")
}
else
{
  alert("deletion failed")
}
})
  })
  return (
    <div>
      <Header/>

      <div classNameName="container">
    <div classNameName="row">
        <div classNameName="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

{load ?
  <div class="spinner-grow text-success" role="status">
  <span class="sr-only"></span>
</div> : 
  <div className="card"  >
       {data.map((value,key)=>{
return <div >
   <img  src="https://media.istockphoto.com/photos/stewed-meat-with-vegetables-picture-id1309290665?s=612x612" className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{value.title}</h5>
  <p className="card-text">{value.category}</p>
  <p className="card-text">{value.description}</p>
  <p className="card-text">{value.prepared}</p>
  <button onClick={()=>{deleteApi(value._id)}} className="btn btn-danger">DELETE</button>
</div>
</div>
       })}
</div>}
       
        </div>
        </div>
        </div>

    </div>
  )
}

export default View