import React from 'react'
import Businesscard from './Businesscard'
import './new.css'


function New() {

    const [Name, setName] = React.useState("Enter your Name:")
    const handleChange = (event) => {

        setName(event.target.value)

    }
    const [BN, setBN] = React.useState()
    const handleChangebn = (event) => {

        setBN(event.target.value)

    }

    const [Role, setRole] = React.useState("Enter Your Role:")
    const handleChangerole = (event) => {

        setRole(event.target.value)
    }

    const [email, setemail] = React.useState("Enter email:")
    const handleChangemail = (event) => {

        setemail(event.target.value)
    }
    const [Contact, setContact] = React.useState("Enter Contact:")
    const handleChangecont = (event) => {

        setContact(event.target.value)
    }

    


    return (
        
        <div className='row'>
            <div className='container col-md-6'>
                <div className='info'>
                <h1>Business card Form</h1><br />

                {/* <label for="BN" text align="center" > BN:</label> */}
                <input type="text" id="BN" onChange={handleChangebn} value={BN} placeholder='Enter your Business Name'/><br /><br />

                {/* <label for="Name" > Name:    </label> */}
                <input type="text" id="Name" onChange={handleChange} value={Name} placeholder='Enter your Name'/><br /><br />
                
                {/* <label>Email id:</label> */}
                <input type="email"  onChange={handleChangemail} value={email} placeholder='Enter your email'/><br /><br />
                
                {/* <label for="Role">Role:   </label> */}
                <input type="text" id="Role" onChange={handleChangerole} value={Role}placeholder='Enter your Role'/><br /><br />
               
                {/* <label>Contact:   </label> */}
                <input type="number" onChange={handleChangecont} value={Contact} placeholder='Enter your Contact'/><br />

                <br />

               
                </div>


               

            </div>
            <div className='col-md-6'>
    <Businesscard/>
</div>
        </div>
    );

};

export default New;