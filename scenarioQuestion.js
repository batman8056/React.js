// useEffect Runs on Component Mount (Empty Dependency Array [])
//*********************************************************** */
// import { useEffect } from "react";
// const Example = () => {
//   useEffect(() => {
//     console.log("Component Mounted");
//   }, []);
//   return <h1>Hello, World!</h1>;
// };
// export default Example;
//Component Mounted

// import { useState, useEffect } from "react";
// const Example = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Component Rendered");
//   });
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };
// export default Example;
//Component Rendered

import { useState, useEffect } from "react";
const Example = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component Mounted");
  }, []);
  useEffect(() => {
    console.log("Component Rendered");
  });
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default Example;
// Component Mounted
// Component Rendered

// import { useState, useEffect } from "react";
// const Example = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log(`Count Updated: ${count}`);
//   }, [count]);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };
// export default Example;
//Count Updated: 0
// Count Updated: 1
// Count Updated: 2
// ...


// import { useState, useEffect } from "react";
// const Timer = () => {
//   useEffect(() => {
//     console.log("Timer Started");
//     return () => console.log("Timer Stopped");
//   }, []);
//   return <h1>Timer Running...</h1>;
// };
// const App = () => {
//   const [showTimer, setShowTimer] = useState(true);
//   return (
//     <div>
//       {showTimer && <Timer />}
//       <button onClick={() => setShowTimer(false)}>Stop Timer</button>
//     </div>
//   );
// };
// export default App;
//Timer Started
// Timer Stopped (when the button is clicked)


// Handling API Errors in useEffect
//**********************************/

// import { useState, useEffect } from "react";
// const FetchData = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     fetch("https://api.example.com/data")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => setData(data))
//       .catch((error) => setError(error.message));
//   }, []);
//   return (
//     <div>
//       {error ? <p>Error: {error}</p> : <p>Data: {JSON.stringify(data)}</p>}
//     </div>
//   );
// };
// export default FetchData;
//Data: {"name":"John Doe","age":30}


// import { useState, useEffect } from "react";
// const FetchDataAsync = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response = await fetch("https://api.example.com/data");
//         if (!response.ok) throw new Error("Failed to fetch data");
//         let result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return <div>{error ? <p>Error: {error}</p> : <p>Data: {JSON.stringify(data)}</p>}</div>;
// };
// export default FetchDataAsync;
// Data: {"id":1,"name":"John Doe","age":30}


// import { useState, useEffect } from "react";
// const FetchTwoAPIs = () => {
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState(null);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     fetch("https://api.example.com/user/1")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch user");
//         return res.json();
//       })
//       .then((userData) => {
//         setUser(userData);
//         return fetch(https://api.example.com/posts?userId=${userData.id});
//       })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch posts");
//         return res.json();
//       })
//       .then((postsData) => setPosts(postsData))
//       .catch((err) => setError(err.message));
//   }, []);

//   return (
//     <div>
//       {error && <p>Error: {error}</p>}
//       {user && <h3>User: {user.name}</h3>}
//       {posts && posts.map((post) => <p key={post.id}>{post.title}</p>)}
//     </div>
//   );
// };
// export default FetchTwoAPIs;
// User: John Doe
// Post One
// Post Two


// import { useState, useEffect } from "react";
// const FetchWithUnmountCheck = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isMounted, setIsMounted] = useState(true);
//   useEffect(() => {
//     setIsMounted(true);
//     fetch("https://api.example.com/data")
//       .then((response) => response.json())
//       .then((result) => {
//         if (isMounted) setData(result);
//       })
//       .catch((error) => {
//         if (isMounted) setError(error.message);
//       });
//     return () => setIsMounted(false); // Cleanup function
//   }, []);

//   return <div>{error ? <p>Error: {error}</p> : <p>Data: {JSON.stringify(data)}</p>}</div>;
// };
// export default FetchWithUnmountCheck;
// Data: {"id":1,"name":"John Doe"}

