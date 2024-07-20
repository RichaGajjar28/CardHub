import React from 'react';

function Login(){
    return(
        <div className='login-box'>
            <form>
            <h1 className='name'> Login Form</h1>

            <div className='div'>
            <label  style={{fontWeight:'600'}}> Name</label>
            <input type='text' placeholder='Enter Your Name'size="14" style={{border:'1px solid black'}}></input><br />

            <label style={{fontWeight:'600'}}> JobTitle</label>
            <input type='text' placeholder='Enter Your Jobname' size="14"style={{border:'1px solid black'}}></input><br />

            <label style={{fontWeight:'600'}}> Company</label>
            <input type='text' placeholder='Enter Your Company name' size="14" style={{border:'1px solid black'}}></input><br />

            <label style={{fontWeight:'600'}}> Email</label>
            <input type='text' placeholder='Enter Your EmailId' size="14" style={{border:'1px solid black'}}></input><br />

            <label style={{fontWeight:'600'}}> Phone</label>
            <input type='tel' placeholder='Enter Your Phone Number' size="14" style={{border:'1px solid black'}}></input> 
            </div>

            <div>
                <button className='btn'>Login</button>
            </div>
            </form>
        </div>
    )
}
export  default Login;