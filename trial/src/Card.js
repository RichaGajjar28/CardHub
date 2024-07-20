import React from 'react';
const card = (props)=>{

    return(
            <>
                <div className="card">
                    <div className="Business-Name">{props.BN?props.BN:'Company Name'}</div>
                    <div className="Employee-Name">{props.EN?props.EN:'Your Name'}</div>
                    <div className="Employee-Role">{props.ER?props.ER:'Your Role'}</div>
                    <div className="Employee-Email">{props.EE?props.EE:'Yore Email'}</div>
                    <div className="Employee-Contact">{props.EC?props.EC:'Your Contact'}</div>
                </div>
                <div>
                    <button className='btn' onClick={handleClick}>Download Now</button>
            </div>      
                    
               
    )
}

export default card