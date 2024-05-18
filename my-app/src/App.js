import {useState} from 'react';

export default function myApp() {
  return (
    <div>
    <h1>Counters that update separately</h1>
    <MyButton />
    <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onclick={handleClick}>
      clicked {count} times
    </button>
  );
}

// import React from 'react';

// const products = [
//   {
//     id: 1,
//     name: "Apples",
//     isFruit: true,
//   },
//   {
//     id: 2,
//     name: "Oranges",
//     isFruit: true,
//   },
//   {
//     id: 3,
//     name: "Ginger",
//     isFruit: false,
//   },
// ];

// export default function ShoppingList() {
//   const listItems = products.map((product) => (
//     <li key={product.id} style={{ color: product.isFruit ? 'cyan' : 'violet' }}>
//       {product.name}
//     </li>
//   ));

//   return (
//     <ul>{listItems}</ul>
//   );
// }


// const user = {
//   name: 'King Cosby',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };



// export default function profile () {
//   return (
//     <>
//       <h1>Hello {user.name}</h1>
//       <h1>My Profile</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt="profile"
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//         }}
//       />
//     </>
//   );
// }



// function MyButton () {
//   return(
//     <button>
//     I'm a button
//     </button>
//   );

// }


// export default function App() {
//   return (
//     <div>

//       <h1>Hello welcome to my Website</h1>
//       <MyButton />
//     </div>
//   );
// }




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Today By CosbyThePython
//         </a>
//       </header>
//     </div>
//   );
// }

