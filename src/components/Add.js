import React, { useState } from 'react'
import Header from './Header'

const Add = () => {
  var [title,setTitle]=useState("")
  var [categ,setCateg]=useState("")
  var [desc,setDesc]=useState("")
  var [prepared,setPrepared]=useState("")

  const submitValues=()=>{
     const data={"title":title,"category":categ,"description":desc,"prepared":prepared}
     console.log(data)
  }
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Recepie Title</label>
                    <input onChange={(a)=>{setTitle(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Category</label>
                    <select onChange={(a)=>{setCateg(a.target.value)}} name="" id="v" class="form-control option">
                      <option>Veg</option>
                      <option>Non-Veg</option>

                    </select>
                   
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Description</label>
                    <textarea onChange={(a)=>{setDesc(a.target.value)}} name="" id="" cols="20" rows="5" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Preapared by</label>
                    <input onChange={(a)=>{setPrepared(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={submitValues} className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add