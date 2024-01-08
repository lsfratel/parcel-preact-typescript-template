# Parcel + Preact + TypeScript Template

This repository serves as a basic template for setting up a web project using [Parcel](https://parceljs.org/) as the bundler, [Preact](https://preactjs.com/) as the frontend library, and [TypeScript](https://www.typescriptlang.org/) for type-checking.

## Features

- **Parcel**: Blazing fast, zero-config web application bundler.
- **Preact**: Fast 3KB React alternative with the same ES6 API.
- **TypeScript**: Adds static typing to JavaScript to improve developer productivity and code quality.
- **Hot Module Replacement (HMR)**: Instantly see changes as you edit files, without reloading the browser.
- **Optimized Build**: Parcel optimizes your code for production automatically.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone or Fork** this repository to begin.

2. Navigate to the project directory:

    ```bash
    cd parcel-preact-typescript-template
    ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

### Usage

- Start development server:

  ```bash
  pnpm start
  ```

  This command starts a local development server with HMR enabled. Open your browser and visit `http://localhost:1234` to see your application.

- Build for production:

  ```bash
  pnpm run build
  ```

  This command bundles and optimizes your code for production in the `dist` directory.

## License

This project is licensed under the [MIT License](LICENSE).
