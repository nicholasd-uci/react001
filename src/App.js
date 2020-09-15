import React from 'react'
// import './App.css'
import Form from './components/Form'
import Card from './components/Card'






const App = () => {
  return (
// you can make a Div that renders those components only || this is called a sjx fragment <> && </>
// the <> helps get multi elements on the page. || <div>
  <>
  {/* this is called a chevron */}
    <Card />
    <Form />

  </>
  )
}

export default App
