# 🚀 React Learning Journey  

## **📖 Completed Chapters**  

✔ **[Chapter 1: JSX & Babel](#chapter-1-jsx--babel)** ✅  
✔ **[Chapter 2: JSX Attributes & Styling](#chapter-2-jsx-attributes--styling)** ✅  
✔ **[Chapter 3: Components & ES6 Modules](#chapter-3-components--es6-modules)** ✅  
✔ **[Chapter 4: Props & Mapping Data](#chapter-4-props--mapping-data)** ✅  
✔ **[Chapter 5: Conditional Rendering](#chapter-5-conditional-rendering)** ✅  
✔ **[Chapter 6: State & Hooks](#chapter-6-state--hooks)** ✅  
✔ **[Chapter 7: Event Handling & Forms](#chapter-7-event-handling--forms)** ✅  
✔ **[Chapter 8: Class vs Functional Components](#chapter-8-class-vs-functional-components)** ✅  
✔ **[Chapter 9: Spread Operator](#chapter-9-spread-operator)** ✅  
✔ **[Chapter 10: Managing a Component Tree](#chapter-10-managing-a-component-tree)** ✅  


## **📌 What is React?**

- A **JavaScript library** for building user interfaces.
- A **component-based architecture** for reusability.

### **Component Tree Structure**
```
        App
         /\
    Nav Bar   ToDoList
                 |
              ListItem
                /\
          Checkbox itemText
```
- We can create **custom elements (components)**.
- Components combine **HTML, CSS, and JavaScript**.
- **Server-Side Rendering (SSR)** renders pages on the server instead of the browser.
- React **compares the old and new DOM trees** to update changes efficiently.

## **📌 Key Topics to Learn in React**
✅ JSX, Props, Styles, Components, Virtual DOM, Babel  
✅ State, useState, Declarative Programming, Hooks  
✅ ES6 Features, Spread Operator, Import/Export  
✅ Map & Filter, Destructuring  

---

## **🚀 Setting Up a React Project**
### **Vite Setup (Recommended)**
```sh
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
npm run dev
```

### **Create React App (CRA) Setup**
```sh
npx create-react-app my-app
cd my-app
npm start
```

📌 **Demo Project Structure:**  
```
Chapter-1/my-react-app  
Chapter-1/my-app  
```

---

## **📁 Chapter 1: JSX & Babel**
✅ JSX is a **JavaScript XML syntax** used to write UI code.  
✅ **Babel** compiles modern JavaScript into browser-compatible versions.  
✅ JSX requires a **single parent element** in `render()`.  

```jsx
const element = <h1>Hello, JSX!</h1>;
ReactDOM.render(element, document.getElementById("root"));
```
📌 **References:** `Chapter-1/codeSandbox`  

---

## **📁 Chapter 2: JSX Attributes & Styling**
✅ JSX uses **camelCase** for attributes (`className`, `contentEditable`).  
✅ **Inline Styling Example:**  
```jsx
const headingStyle = { color: "blue", fontSize: "20px" };
<h1 style={headingStyle}>Styled Heading</h1>;
```
✅ Dynamic image loading: [picsum.photos](https://picsum.photos/).  
📌 **Challenges Completed:** Challenge 2, Challenge 3, Challenge 4  

---

## **📁 Chapter 3: Components & ES6 Modules**
✅ **Components:** Reusable UI elements.  
✅ **Import/Export Example:**  
```js
// math.js
export default pi;
export { doublePi, triplePi };

// Importing
import PI, { doublePi, triplePi } from "./math.js";
```
📌 **Challenges Completed:** Challenge 2, Challenge 3, Challenge 4  

---

## **📁 Chapter 4: Props & Mapping Data**
✅ **Props (Properties):** Allow passing data between components.  
✅ **Mapping an array to list items:**  
```jsx
const items = ["Apple", "Banana", "Cherry"];
const listItems = items.map((item) => <li>{item}</li>);
```
📌 **Challenges Completed:** Challenge 2, Challenge 3, Challenge 4  

---

## **📁 Chapter 5: Conditional Rendering**
✅ **Ternary Operator Example:**  
```js
const age = 20;
const message = age >= 18 ? "Adult" : "Minor";
```
✅ **AND (`&&`) Operator Example:**  
```js
const isLoggedIn = true;
return isLoggedIn && <h1>Welcome back!</h1>;
```
📌 **Challenges Completed:** Challenge 1, Challenge 2  

---

## **📁 Chapter 6: State & Hooks (`useState`)**
✅ **React uses `useState` for dynamic updates.**  
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```
📌 **Challenges Completed:** Challenge 2, Challenge 3  

---

## **📁 Chapter 7: Event Handling & Forms**
✅ Handling **onClick, onMouseOver, onMouseLeave** events.  
✅ **React Forms:** Controlled inputs using `useState`.  
```jsx
const [name, setName] = useState("");
return <input type="text" value={name} onChange={(e) => setName(e.target.value)} />;
```
📌 **Challenges Completed:** Challenge 6  

---

## **📁 Chapter 8: Class vs Functional Components**
✅ **Class Components (Old Approach)**  
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
✅ **Functional Components (Modern Approach)**  
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
📌 **Challenges Completed:** Challenge 1, Challenge 2  

---

## **📁 Chapter 9: Spread Operator**
✅ **Expanding Arrays & Objects:**  
```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
```
✅ **Using Spread in Props:**  
```jsx
const user = { name: "Alice", age: 25 };
<UserProfile {...user} />  
```
📌 **Challenges Completed:** Challenge 3, Challenge 4  

---

## **📁 Chapter 10: Managing a Component Tree**
✅ **Splitting Components & Passing State to Children**  
✅ **Lifting State Up Example:**  
```jsx
function Parent() {
  const [count, setCount] = useState(0);
  return <Child count={count} setCount={setCount} />;
}

function Child({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```
📌 **Challenges Completed:** Challenge 5  

---

## **🚀 Next Steps**
- Learn **React Router, Context API, Redux, and Next.js**.  
- Build real-world projects.  

---

### **🌟 Connect with Me**
If you found this repository useful, **give it a ⭐!** 😊


