# Typescript: The big picture

Have nodejs installed, and then install typescript globally in your project:

````
npm i -g typescript
````

## Transpiling through commandline

Into root of the project example (transpile ts code to older js with):

````
tsc basic.ts
````

js folder and transpiling to ES2015 example (send transpiled ts into js folder and to ES2015 version with):

````
tsc --target ES2015 --outDir js basic.ts
````