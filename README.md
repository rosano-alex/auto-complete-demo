<p style="text-align: Left;"><img src="misc/title.png" width="550"></p>

## Overview
This application implements a simple auto-complete search component powered by the Users API endpoint:
https://jsonplaceholder.typicode.com/users<br>
User data is fetched on load, then formatted and sorted alphabetically before being rendered. Preprocessing the dataset ensures consistent display formatting and improves client-side performance.

## Local development setup

<mark>Command line setup instruction</mark>

Yarn setup:

```bash
## STEP 1
git clone https://github.com/rosano-alex/auto-complete-demo.git

## STEP 2
cd auto-complete-demo && yarn

## STEP 3
yarn start
```
NPM setup:

```bash
## STEP 1
git clone https://github.com/rosano-alex/auto-complete-demo.git

## STEP 2
cd auto-complete-demo && npm install

## STEP 3
npm run start
```


<br>
<mark>Available developer scripts</mark>

In the project directory, you can run the following scripts.

| yarn | NPM | info |
|------|-------|-------|
| `yarn start` | `npm run start` | Runs the app in the development mode and opens [http://localhost:3000](http://localhost:3000)
| `yarn build` | `npm run build` | Builds the optimized app for production to the `build` folder
| `yarn prettier` | `npm run prettier` | Recursively runs prettier on every file in the src folder
| `yarn test` | `npm run test` | Run project unit tests
