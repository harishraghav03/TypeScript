/* 
TypeScript is Programming Language created by Micrsoft to address the shortcomming of JavaScript 
It is used to build Large-scale Applications
Benifits
Static-Typed
DrawBacks
Browsers don't understand ts code
.ts -> Compiler (Transpilation) -> .js
We should be disicpline in writting code

Installing TypeScript
npm i -g typescript

tsc -v -> Version

// Creating Config file

tsc --init
Configuration File for the ts compiler

While we compile our ts code, it uses ES5 as default

In Order to debug the code, we can uncomment an setting in config file (That creates map file) or create launch.json 
that tells how to debug this application and also we need to add additional setting preLaunchTask
This means we are telling the ts compiler to build our appl using the config file
*/