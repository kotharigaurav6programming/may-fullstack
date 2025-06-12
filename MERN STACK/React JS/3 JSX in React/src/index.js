import React from 'react';
import { createRoot } from 'react-dom/client';
import printMessage3, { printMessage1, printMessage2 } from './test4.jsx';
// import printMessage from './test4.jsx';

createRoot(document.getElementById("root1")).render(printMessage1);
createRoot(document.getElementById("root2")).render(printMessage2);
createRoot(document.getElementById("root3")).render(printMessage3);