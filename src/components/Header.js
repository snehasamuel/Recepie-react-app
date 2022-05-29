import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
<Link class="navbar-brand" to="/">RECEPIE APP</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
<Link class="nav-link " to="/">Add Recepie</Link>
       <Link class="nav-link" to="/search">Search Recepie</Link>
       <Link class="nav-link " to="/view">View Recepies</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header