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

---

## **📁 Chapter 1: JSX & Babel**  
✅ JSX is a syntax extension that lets us write **HTML-like code inside JavaScript**.  
✅ **Babel** is a compiler that converts modern JavaScript into browser-compatible versions.  

```jsx
const element = <h1>Hello, JSX!</h1>;
ReactDOM.render(element, document.getElementById("root"));
```
## **📁 Chapter 2: JSX Attributes & Styling**

### **JSX Attributes**
- JSX uses **camelCase** for attributes (e.g., `className`, `contentEditable`).
- Unlike HTML, JSX **does not allow** the `class` attribute, so we use `className` instead.

### **Inline Styling in JSX**
- JSX styles are passed as an **object**, with camelCase properties:
```jsx
const headingStyle = { color: "blue", fontSize: "20px" };
<h1 style={headingStyle}>Styled Heading</h1>;
```

### **Dynamic Image Loading**
- Generate a random image using: [picsum.photos](https://picsum.photos/)

📚 **Challenges Completed:** Challenge 2, Challenge 3, Challenge 4

---

## **📁 Chapter 3: Components & ES6 Modules**

### **What are Components?**
- Components allow **reusable UI elements**.
- Components must **start with a capital letter** (PascalCase).

### **Import/Export in ES6**
```js
// math.js
export default pi;
export { doublePi, triplePi };

// Importing
import PI, { doublePi, triplePi } from "./math.js";
```

📚 **Challenges Completed:** Challenge 2, Challenge 3, Challenge 4

---

## **📁 Chapter 4: Props & Mapping Data**

### **Props (Properties)**
- Props allow data to be passed between components.

### **Mapping an Array to List Items**
```jsx
const items = ["Apple", "Banana", "Cherry"];
const listItems = items.map((item) => <li>{item}</li>);
```

📚 **Challenges Completed:** Challenge 2, Challenge 3, Challenge 4

---

## **📁 Chapter 5: Conditional Rendering**

### **Ternary Operator Example**
```js
const age = 20;
const message = age >= 18 ? "Adult" : "Minor";
```

### **AND (`&&`) Operator Example**
```js
const isLoggedIn = true;
return isLoggedIn && <h1>Welcome back!</h1>;
```

📚 **Challenges Completed:** Challenge 1, Challenge 2

---

## **📁 Chapter 6: State & Hooks (`useState`)**

### **Using `useState` for Dynamic Updates**
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

📚 **Challenges Completed:** Challenge 2, Challenge 3

---

## **📁 Chapter 7: Event Handling & Forms**

### **Handling Events**
- Supports **onClick, onMouseOver, onMouseLeave**, etc.

### **Controlled Forms using `useState`**
```jsx
const [name, setName] = useState("");
return <input type="text" value={name} onChange={(e) => setName(e.target.value)} />;
```

📚 **Challenges Completed:** Challenge 6

---

## **📁 Chapter 8: Class vs Functional Components**

### **Class Components (Old Approach)**
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### **Functional Components (Modern Approach)**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

📚 **Challenges Completed:** Challenge 1, Challenge 2

---

## **📁 Chapter 9: Spread Operator**

### **Expanding Arrays & Objects**
```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
```

### **Using Spread in Props**
```jsx
const user = { name: "Alice", age: 25 };
<UserProfile {...user} />;
```

📚 **Challenges Completed:** Challenge 3, Challenge 4

---

## **📁 Chapter 10: Managing a Component Tree**

### **Lifting State Up Example**
```jsx
function Parent() {
  const [count, setCount] = useState(0);
  return <Child count={count} setCount={setCount} />;
}

function Child({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

📚 **Challenges Completed:** Challenge 5

---

## **💡 Summary of Completed Chapters**

 
✔ **[Chapter 1: JSX & Babel](#chapter-1-JSX-&-Babel)** ✅   
✔ **[Chapter 2: JSX Attributes & Styling](#chapter-2-jsx-attributes--styling)** ✅  
✔ **[Chapter 3: Components & ES6 Modules](#chapter-3-components--es6-modules)** ✅  
✔ **[Chapter 4: Props & Mapping Data](#chapter-4-props--mapping-data)** ✅  
✔ **[Chapter 5: Conditional Rendering](#chapter-5-conditional-rendering)** ✅  
✔ **[Chapter 6: State & Hooks](#chapter-6-state--hooks)** ✅  
✔ **[Chapter 7: Event Handling & Forms](#chapter-7-event-handling--forms)** ✅  
✔ **[Chapter 8: Class vs Functional Components](#chapter-8-class-vs-functional-components)** ✅  
✔ **[Chapter 9: Spread Operator](#chapter-9-spread-operator)** ✅  
✔ **[Chapter 10: Managing a Component Tree](#chapter-10-managing-a-component-tree)** ✅  

---

## **🚀 Next Steps**
- Learn **React Router, Context API, Redux, and Next.js**.
- Build real-world projects.

---

### **🌟 Connect with Me**
If you found this repository useful, **give it a ⭐!** 😊
```

