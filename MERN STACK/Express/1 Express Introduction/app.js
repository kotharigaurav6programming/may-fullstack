import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

var app = express();

app.get('/',(request,response)=>{
    response.send("<h1>Home Page</h1>");
});
app.post('/about',(request,response)=>{
    response.send("<h1>About Page</h1>");
});
app.put('/contact',(request,response)=>{
    response.send("<h1>Contact Page</h1>");
});
app.delete('/services',(request,response)=>{
    response.send("<h1>Services Page</h1>");
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});
/*
In **Node.js** and **Express**, `request` and `response` objects behave differently.  

---

### **1️⃣ Node.js (Without Express)**
In a basic Node.js HTTP server, the `request` and `response` objects come from the **`http` module**:

- **`request`** → Instance of **`http.IncomingMessage`**
- **`response`** → Instance of **`http.ServerResponse`**

Example:
```js
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req instanceof http.IncomingMessage); // true
    console.log(res instanceof http.ServerResponse);  // true

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

server.listen(3000, () => console.log('Server running on port 3000'));
```

---

### **2️⃣ Express.js**
When using Express, `request` and `response` are **enhanced** versions of the Node.js `IncomingMessage` and `ServerResponse` objects.  

- **`request`** → Instance of **`express.Request`** (extends `http.IncomingMessage`)  
- **`response`** → Instance of **`express.Response`** (extends `http.ServerResponse`)  

Example:
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req instanceof express.request.constructor); // true
    console.log(res instanceof express.response.constructor); // true
    res.send('Hello, Express!');
});

app.listen(3000, () => console.log('Express server running on port 3000'));
```

### **3️⃣ What's the Difference?**
| Feature          | Node.js (`http`)         | Express (`express`) |
|-----------------|------------------------|----------------------|
| `req` type      | `http.IncomingMessage`  | `express.Request` (`IncomingMessage` + extra methods) |
| `res` type      | `http.ServerResponse`   | `express.Response` (`ServerResponse` + extra methods) |
| Parsing JSON    | ❌ No built-in JSON parsing | ✅ `req.body` with `express.json()` |
| URL parameters  | ❌ Manual parsing required | ✅ `req.params` |
| Query parameters | ❌ `url.parse(req.url, true).query` | ✅ `req.query` |
| Response helpers | ❌ `res.write()`, `res.end()` | ✅ `res.send()`, `res.json()`, `res.status()` |

---

### **4️⃣ Key Takeaways**
- **Express request (`req`)** extends `http.IncomingMessage`, adding features like `req.body`, `req.params`, and `req.query`.
- **Express response (`res`)** extends `http.ServerResponse`, adding `res.json()`, `res.send()`, and `res.status()`.
- **Express simplifies request handling** by adding middleware support and built-in parsing.

Would you like to see an example where we compare handling the same request in **Node.js vs. Express**? 🚀
*/