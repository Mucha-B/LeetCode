console.log("Hello world");


// Research bin key word with JSON data in JS
// Research call, bind, and apply
// https://www.youtube.com/watch?v=rZc7_2YXbP8&ab_channel=codeSTACKr







// GPT Responce. Clean Up.

### **Understanding `call()`, `bind()`, and `apply()` in JavaScript**  

In JavaScript, **`call()`**, **`bind()`**, and **`apply()`** are methods used to manipulate the `this` context of functions. These methods allow you to explicitly set the value of `this` and pass arguments to a function dynamically.

---

## **1. `call()` Method**
The `call()` method **invokes a function immediately** and allows you to pass arguments one by one.

### **Syntax:**
```javascript
functionName.call(thisArg, arg1, arg2, ...);
```

- `thisArg` → The value of `this` inside the function.  
- `arg1, arg2, ...` → Arguments passed individually.  

### **Example:**
```javascript
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person1 = { firstName: "John", lastName: "Doe" };
console.log(person.fullName.call(person1));  // Output: John Doe
```

### **Example with Arguments:**
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const user = { name: "Alice" };

greet.call(user, "Hello", "!"); // Output: Hello, Alice!
```

---

## **2. `apply()` Method**
The `apply()` method **is similar to `call()`, but it accepts arguments as an array** instead of individual values.

### **Syntax:**
```javascript
functionName.apply(thisArg, [arg1, arg2, ...]);
```

- `thisArg` → The value of `this` inside the function.  
- `[arg1, arg2, ...]` → Arguments passed as an array.

### **Example:**
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const user = { name: "Alice" };

greet.apply(user, ["Hello", "!"]); // Output: Hello, Alice!
```

### **Use Case:**
One common use case of `apply()` is using it with `Math.max()` or `Math.min()`.
```javascript
const numbers = [3, 8, 2, 5, 10];
console.log(Math.max.apply(null, numbers));  // Output: 10
```

---

## **3. `bind()` Method**
The `bind()` method **does not immediately invoke the function**. Instead, it **returns a new function** with `this` bound to the specified value.

### **Syntax:**
```javascript
const newFunction = functionName.bind(thisArg, arg1, arg2, ...);
```

- `thisArg` → The value of `this` inside the function.  
- `arg1, arg2, ...` → Arguments to pre-set in the function.

### **Example:**
```javascript
const user = {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

const newGreet = user.greet.bind(user);
newGreet();  // Output: Hello, Alice
```

### **Example with Partial Application:**
```javascript
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10
```
Here, `bind()` creates a new function where `a` is fixed to `2`, so calling `double(5)` is the same as calling `multiply(2, 5)`.

---

## **Key Differences Between `call()`, `apply()`, and `bind()`**
| Method  | Calls Function Immediately? | Arguments Type | Returns New Function? |
|---------|----------------------------|---------------|------------------|
| `call()`  | ✅ Yes  | Comma-separated values | ❌ No |
| `apply()` | ✅ Yes  | Array | ❌ No |
| `bind()`  | ❌ No  | Comma-separated values | ✅ Yes |

---

## **When to Use Which?**
1. Use **`call()`** when you need to invoke a function immediately with a specific `this` value and pass arguments individually.  
2. Use **`apply()`** when you need to invoke a function immediately with a specific `this` value and pass arguments as an array (useful for functions like `Math.max`).  
3. Use **`bind()`** when you want to create a new function with a fixed `this` value that can be invoked later.  

Would you like me to clarify anything further? 😊