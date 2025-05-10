import React from 'react'


const isLoggedIn = ({setLogin}) => {

   

    function handelLogin(e){
        e.preventDefault();
        setLogin(true)
    }

  return (
    <div>
        <h1>Parent Component</h1>
        <form onSubmit={handelLogin}>
        <label>Username:<input type='text'/></label>
        <br/>
        <br/>
        <label>Password:<input type='password'/></label>
        <br/>
        <br/>
        <button >Login</button>
        </form>
    </div>
  )
}

export default isLoggedIn
