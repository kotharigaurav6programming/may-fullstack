var express = require("express");
var app = express();
// console.log(app);

app.get('/',(request,response)=>{
    //response.send({status:200,message:"Success"});
    //response.json({status:200,message:"Success"});
    response.status(200).json({message:"Success"});
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});
/*
Both `response.send()` and `response.json()` are used to send responses in an Express.js application, but they have subtle differences.

### **Differences Between `response.send()` and `response.json()`**

1. **`response.send()`**  
   - Can send various types of responses, including strings, objects, and buffers.
   - If an object is passed, it is automatically converted to JSON.
   - It determines the `Content-Type` automatically based on the response data.

   ```js
   response.send({status: 200, message: "Success"});
   ```

   The response will be:
   ```json
   {
     "status": 200,
     "message": "Success"
   }
   ```
   With `Content-Type: application/json`.

2. **`response.json()`**  
   - Specifically sends a JSON response.
   - Ensures `Content-Type: application/json` is set.
   - It is preferable when sending JSON data explicitly.

   ```js
   response.json({status: 200, message: "Success"});
   ```

   The response will also be:
   ```json
   {
     "status": 200,
     "message": "Success"
   }
   ```
   With `Content-Type: application/json`.

### **Which One to Use?**
- If you **always want JSON responses**, use `response.json()`.
- If you might send other types of responses (HTML, text, buffers), use `response.send()`.
- In your case, since you're sending JSON, `response.json()` is the **more explicit and recommended** option.

🚀 **Best Practice:**
```js
response.status(200).json({status: 200, message: "Success"});
```
This approach explicitly sets the HTTP status code and ensures a proper JSON response.
*/

/*
In Express.js, when you use `response.send({status:200, message:"Success"})`, it automatically converts the object to JSON format and sets the `Content-Type: application/json`. If you want to send the object itself **without converting it to JSON**, you need to bypass Express's automatic response handling.  

### **Solution: Send the Object Without JSON Conversion**
Since HTTP responses are text-based, you cannot send a raw JavaScript object directly over an HTTP response. However, you can send the object **as a JavaScript variable inside an EJS template** or send it in a way that the client can use it as an object.

### **1️⃣ Send the Object as JavaScript in an EJS Template**
If you are using **EJS as the template engine**, you can pass the object from the server and use it in the frontend.

#### **Express.js Route:**
```js
app.get("/object", (req, res) => {
    const myObject = { status: 200, message: "Success" };
    res.render("index", { myObject });
});
```

#### **EJS File (`views/index.ejs`):**
```html
<script>
    let receivedObject = <%= JSON.stringify(myObject) %>;
    console.log(receivedObject); // {status: 200, message: "Success"}
</script>
```
👉 This way, you get the object in the frontend **as a JavaScript variable**.

---

### **2️⃣ Send the Object as JavaScript Code (`text/javascript`)**
Instead of sending JSON, you can send a JavaScript script that defines the object.

#### **Express.js Route:**
```js
app.get("/object.js", (req, res) => {
    res.type("text/javascript");
    res.send("const myObject = { status: 200, message: 'Success' };");
});
```
#### **Frontend (`index.html`):**
```html
<script src="/object.js"></script>
<script>
    console.log(myObject); // {status: 200, message: "Success"}
</script>
```
👉 This makes `myObject` available in the global scope as a JavaScript object.

---

### **3️⃣ Send the Object as Plain Text**
You can send the object **as a stringified object** instead of JSON.

#### **Express.js Route:**
```js
app.get("/object", (req, res) => {
    res.type("text/plain");
    res.send("const myObject = { status: 200, message: 'Success' };");
});
```
👉 This will return the JavaScript code as plain text.

---

### **Conclusion**
Since HTTP responses are text-based, you can't send a **pure JavaScript object** directly. The best approach depends on how you want to use the object:  
✅ **Use EJS** if you are rendering an HTML page.  
✅ **Use `text/javascript`** if you want to serve the object as a JavaScript file.  
✅ **Use `text/plain`** if you just need the object as text.  

Which approach fits your use case? 🚀
*/