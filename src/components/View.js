import React from 'react'
import Header from './Header'

const View = () => {
  const viewlist=[{"title":"ffghgjn","category":"veg","description":"ddhydh","prepared":"hgdhgh"},
  {"title":"yufiugkj","category":"nonveg","description":"desdgvcghc","prepared":"hfytruyfjh"},
  {"title":"56etyujhg","category":"veg","description":"hgdytduy","prepared":"trtryu"},
  {"title":"6e7uty","category":"veg","description":"76rfthiuyt","prepared":"jhhhadfsghjk"},
  {"title":"kjhgfdrtyu","category":"veg","description":"ru6rfuuy","prepared":"preuydjygfjpared"}]
  return (
    <div>
      <Header/>

      <div classNameName="container">
    <div classNameName="row">
        <div classNameName="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

       <div className="card"  >
       {viewlist.map((value,key)=>{
return <div classNameName="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
   <img  src="https://media.istockphoto.com/photos/stewed-meat-with-vegetables-picture-id1309290665?s=612x612" className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{value.title}</h5>
  <p className="card-text">{value.category}</p>
  <p className="card-text">{value.description}</p>
  <p className="card-text">{value.prepared}</p>
  <a href="#" className="btn btn-danger">DELETE</a>
</div>
</div>
       })}
</div>
       

        </div>
        </div>
        </div>

    </div>
  )
}

export default View