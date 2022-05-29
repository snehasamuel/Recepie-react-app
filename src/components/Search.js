import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
  var [title,setTitle]=useState("")
  var [data,setData]=useState([{"title":"","category":"","description":"","prepared":""}])
  
  const searchValue=()=>{
    
    const readData={"title":title}
    console.log(data)
    axios.post("http://localhost:7000/api/searchrecepie",readData).then((response)=>{
console.log(response.data)
setData(response.data.data)
    })
  }
  const deleteValue=(id)=>{
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

  }
  return (
    <div>
      <Header/>
      <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Title</label>
                    <input onChange={(a)=>{setTitle(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchValue} className="btn btn-success">SEARCH</button>
                </div>
                
            </div>
            


{data.map((value,key)=>{
return  <div className='row g-3'>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Category</label>
                    <input value={value.category} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Description</label>
                    <input value={value.description} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Preapared by</label>
                    <input value={value.prepared} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={()=>{deleteValue(value._id)}} className="btn btn-danger">DELETE</button>
                    </div>
                
</div>
       })}







        </div>
    </div>
</div>
    </div>
  )
}

export default Search