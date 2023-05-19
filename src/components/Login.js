import React, { useState } from 'react'

const Login = () => {
    const[name , setName]=useState('');
    const[email , setEmail]=useState('');
    const[address , setAddress]=useState('');

    // const [person, setPerson]=useState({
    //     name:'',
    //     email:'',
    //     address:''
    // });

    const handlername=(e)=>{
        setName(e.target.value);
    }
    const handleremail=(e)=>{
        setEmail(e.target.value);
    }
    const handleraddress=(e)=>{
        setAddress(e.target.value);
    }
    const formhandler=(e)=>{
        e.preventDefault();
        console.log(name,email,address)
        setName('');
        setEmail('');
        setAddress('');
    }
  return (
    <div className='container'>
<div className='row'>
    <div className='col-md-8'>
    <form className="row g-3" onSubmit={formhandler}>
  <div className="col-md-12">
    <label htmlFor="inputEmail4" className="form-label">Name</label>
    <input type="text" className="form-control" placeholder='input name' onChange={handlername}  value={name}  name="name"  />
  </div>
  <div className="col-md-12">
    <label htmlFor="inputPassword4" className="form-label">Email</label>
    <input type="text" className="form-control"  onChange={handleremail}  value={email}  name="name" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" onChange={handleraddress}   value={address}  name="name"  placeholder="1234 Main St" />
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>

    </div>

</div>



    </div>
  )
}

export default Login