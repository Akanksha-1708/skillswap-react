// function app() : normal js function
// function App() : function treated as react component
// react draws everything inside return( " mix of js and html" )
// <> </> is react fragment, acts as an invisible box
//<Navbar/> is a way of calling Navbar component

// import Navbar from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar/>
//     </>
//   );
// }

// export default App;

import Home from "./pages/Home/Home";

function App() {
  return <Home />;
}

export default App;