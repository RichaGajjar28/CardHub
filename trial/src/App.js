// import CardGenerator from "./Card_Generator";

// function App() {
//   return (
//     <CardGenerator />
//   )
// }

// export default App;


import CardGenerator from "./Card_Generator";
import './Card_Generator.css'
import Heading from "./Heading";
// import PdfBtn from "./pdf-btn";

function App() {
  return (
    <>
      <Heading/>
      <div className="main-container">
        <CardGenerator />
      </div>
    </>

  )
}

export default App;
