# Users-Posts Backend

This is the backend server for the Web Developer Assignment, built with Node.js, TypeScript, Express.js, and SQLite3.

## Prerequisites

- Node
- TypeScript
- Npm
- SQLite3

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```
   This will compile TypeScript files from `src/` into JavaScript in the `dist/` directory.

## Running the Server

Start the server in production mode:

```bash
npm start
```

For development mode with hot reloading:

```bash
npm run dev
```

For development mode without hot reloading (required by nodemon):

```bash
npm run dev:once
```


For test runner

```bash
npm run test
```

## Project Structure

```
/backend
├── src/           # TypeScript source files
├── dist/          # Compiled JavaScript files (generated after build)
├── config/        # Configuration files
└── ...
```

## Important Notes

- Make sure the TypeScript files are properly compiled into the `dist/` directory before running the server
- The production server runs from the compiled files in `dist/`
- Development mode runs directly with ts-node and nodemon for hot reloading



# Frontend

## System requirements

- [Git](https://git-scm.com/)
- [Node.js ](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)

You should be able to verify all these are installed correctly using:

```
node --version
npm --version
git --version
```

## Setup
Please go through the following steps to run this project locally:
-  Install all the dependencies using `npm install`. 
-  Start the project in development mode using `npm run dev`.
-  Run the test suite using npm run test `npm run test`.

## Naming conventions
* folders and `.ts` files follow the `kebab` convention
* hooks follow the `camelCase` convention
* components that return a `JSX.Element` like `.tsx` follow the `PascalCase` convention


## Technologies used 🛠️

- [Typescript](https://www.typescriptlang.org/) - for setting an interface for the app
- [Formik](https://formik.org/) - A popular React library for building and managing forms with easy-to-use form state management and validation support.
- [Yup](https://github.com/jquense/yup) - A JavaScript schema builder for value parsing and validation, commonly used with Formik for form validation schemas.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - for testing
