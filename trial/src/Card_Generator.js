// import React from "react";
// import './Card_Generator.css';
// import Bc from "./Bc";


// function CardGenerator() {

//     let [BN, setBN] = React.useState('Enter Business Name')
//     let [EN, setEN] = React.useState('Enter Your Name')
//     let [ER, setER] = React.useState('Enter Your Role')
//     let [EE, setEE] = React.useState('Enter Your Email-ID')
//     let [EC, setEC] = React.useState('Enter Your Contact Number')

//     const handleChange = (e, type) => {

//         if (type === 'BN') {
//             console.log(e.target.value)
//             setBN(e.target.value)
//         }
//         else if (type === 'EN') {
//             console.log(e.target.value)
//             setEN(e.target.value)
//         }
//         else if (type === 'ER') {
//             console.log(e.target.value)
//             setER(e.target.value)
//         }
//         else if (type === 'EE') {
//             console.log(e.target.value)
//             setEE(e.target.value)
//         }
//         else if (type === 'EC') {
//             console.log(e.target.value)
//             setEC(e.target.value)
//         }
//     }

//     return (
//         <>
//         <div className="row">
//             <div className="container col-md-6">
//                 <div className="info">
//                     <div className="info-head">
//                     <h2 >Enter Details To Generate Card</h2>
//                     </div>
                    
//                     <form>
//                         <input className="Style_Input" value={BN} onChange={(e) => { handleChange(e, 'BN') }} placeholder="Enter Business Name"></input>
//                         <input className="Style_Input" value={EN} onChange={(e) => { handleChange(e, 'EN') }} placeholder="Enter Your Name"></input>
//                         <input className="Style_Input" value={ER} onChange={(e) => { handleChange(e, 'ER') }} placeholder="Enter Your Role"></input>
//                         <input className="Style_Input" value={EE} onChange={(e) => { handleChange(e, 'EE') }} placeholder="Enter Your Email-ID"></input>
//                         <input className="Style_Input" value={EC} onChange={(e) => { handleChange(e, 'EC') }} placeholder="Enter Your Contact Number"></input>
//                     </form>
//                 </div>
//                 <div className="col-md-7">
//                     <Bc BN={BN} EN={EN} ER={ER} EE={EE} EC={EC}/>
//                 </div>
                
      
                
               
//             </div>
//             </div>
//         </>
//     )
// }

// export default CardGenerator



import React from "react";
import './Card_Generator.css';
import Bc from "./Bc";

function CardGenerator() {

    let [BN, setBN] = React.useState('')
    let [EN, setEN] = React.useState('')
    let [ER, setER] = React.useState('')
    let [EE, setEE] = React.useState('')
    let [EC, setEC] = React.useState('')

    const handleChange = (e, type) => {

        if (type === 'BN') {
            console.log(e.target.value)
            setBN(e.target.value)
        }
        else if (type === 'EN') {
            console.log(e.target.value)
            setEN(e.target.value)
        }
        else if (type === 'ER') {
            console.log(e.target.value)
            setER(e.target.value)
        }
        else if (type === 'EE') {
            console.log(e.target.value)
            setEE(e.target.value)
        }
        else if (type === 'EC') {
            console.log(e.target.value)
            setEC(e.target.value)
        }
    }

    return (
        <>
            <div className="row">
                <div className="container col-md-7" >
                    <div className="info">
                        <h3 className="info-head">Enter Details To Generate Card</h3>
                        <form>
                            <input className="Style_Input" value={BN} onChange={(e) => { handleChange(e, 'BN') }} placeholder="Enter Business Name"></input>
                            <input className="Style_Input" value={EN} onChange={(e) => { handleChange(e, 'EN') }} placeholder="Enter Your Name"></input>
                            <input className="Style_Input" value={ER} onChange={(e) => { handleChange(e, 'ER') }} placeholder="Enter Your Role"></input>
                            <input className="Style_Input" value={EE} onChange={(e) => { handleChange(e, 'EE') }} placeholder="Enter Your Email-ID"></input>
                            <input className="Style_Input" value={EC} onChange={(e) => { handleChange(e, 'EC') }} placeholder="Enter Your Contact Number"></input>
                        </form>
                    </div>
                </div>
                <div className="col-md-5">
                    <Bc BN={BN} EN={EN} ER={ER} EE={EE} EC={EC}/>
                </div>
            </div>
        </>
    )
}

export default CardGenerator