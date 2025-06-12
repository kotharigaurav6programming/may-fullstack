import React from 'react';
import { createRoot } from 'react-dom/client';

const message = <h1>This is an example of React Js</h1>
const printMessage = <del>{message}</del>

createRoot(document.getElementById("root")).render(printMessage);