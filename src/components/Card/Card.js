import React from 'react'

let person = {
	name: 'John Doe',
	email: 'johndoe@gmail.com',
	address: '123 Main St'
}


const Card = () => {
    return(

<div id="person" className="card">
  <div className="card-body">
  <h5 className="card-title">{person.name}</h5>
  <h6 className="card-subtitle mb-2 text-muted">{person.email}</h6>
  <p className="card-text">{person.address}</p>
  </div>
</div>

    )
}

export default Card