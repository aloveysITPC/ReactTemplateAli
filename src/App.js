import "../public/styles.css";

const hour = new Date();
let time = hour.getHours();

function gettime() {
  if (time <= 12) {
    return <h1> Good Morning </h1>;
  } else {
    return <h1> Good Afternoon</h1>;
  }
}

export default function App() {
  if (time <= 12) {
    return <h1> Good Morning </h1>;
  } else {
    return <h1> Good Afternoon</h1>;
  }
}
// export default function App() {
//   return (
//     <div className="App">
//       <h1>good Morning, it is {time} hundred hours</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <p>but there's more</p>
//     </div>
//   );
// }
