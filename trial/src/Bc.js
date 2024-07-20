// import jsPDF from "jspdf";
// import React from "react";

// const Bc = (props) => {
//   const { BN, EN, ER, EE, EC } = props;

//   const handleClick = () => {
//     console.log("Saving data:", { BN, EN, ER, EE, EC });
//     const doc = new jsPDF();

//     doc.setFontSize(22);
//     doc.text("Business Card Information", 14, 16);

//     const data = [
//       { label: "Name:", value: BN },
//       { label: "Company name:", value: EN },
//       { label: "Mobile No.:", value: ER },
//       { label: "Email:", value: EE },
//       { label: "Address:", value: EC },
//     ];

//     let yPos = 30;
//     data.forEach((item) => {
//       doc.setFontSize(14);
//       doc.text(item.label, 14, yPos);
//       doc.setFontSize(12);
//       doc.text(item.value, 60, yPos);
//       yPos += 10;
//     });

//     doc.save("business_card.pdf");
//   };

//   return (
//     <div>
      
//       <div className="card">
//         <div className="Business-Name">{BN ? BN : "Company Name"}</div>
//         <div className="Employee-Name">{EN ? EN : "Your Name"}</div>
//         <div className="Employee-Role">{ER ? ER : "Your Role"}</div>
//         <div className="Employee-Role">{EE ? EE : "Your Email-ID"}</div>
//         <div className="Employee-Role">{EC ? EC : "Your Mobile Number"}</div>
//       </div>

//       <div>
//         <button  className="btn" onClick={handleClick}>
//           Download Card
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Bc;


import React from "react";
import './Card_Generator.css'
import { jsPDF } from "jspdf";

const handleClick = (props) => {
    let doc = jsPDF();
    doc.text(`Business Name: ${props.BN || 'Company Name'}`, 10, 10);
    doc.text(`Employee Name: ${props.EN || 'Your Name'}`, 10, 20);
    doc.text(`Employee Role: ${props.ER || 'Your Role'}`, 10, 30);
    doc.text(`Employee Email: ${props.EE || 'Your Email-ID'}`, 10, 40);
    doc.text(`Employee Contact: ${props.EC || 'Your Mobile Number'}`, 10, 50);
    doc.save('card.pdf');
}


function Bc(props) {
        return (
            <>
                <div className="card">
                    <div className="Business-Name">{props.BN ? props.BN : 'Company Name'}</div>
                    <div className="Employee-Name">{props.EN ? props.EN : 'Your Name'}</div>
                    <div className="Employee-Role">{props.ER ? props.ER : 'Your Role'}</div>
                    <div className="Employee-Role">{props.EE ? props.EE : 'Your Email-ID'}</div>
                    <div className="Employee-Role">{props.EC ? props.EC : 'Your Mobile Number'}</div>
                </div>
                <div className="button-main">
                    <button onClick={handleClick}>Click to Download PDF</button>
                </div>
            </>
        )
    }

export default Bc