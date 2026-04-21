# Project Overview

This is a Next.js project for a digital agency called "Studio". It's a modern, mobile-first landing page built with Tailwind CSS and TypeScript. The project is well-structured, with a clear separation of components, pages, and data.

## Building and Running

To get started with this project, you'll need to have Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server on [http://localhost:3000](http://localhost:3000).

3.  **Build the project for production:**
    ```bash
    npm run build
    ```

4.  **Start the production server:**
    ```bash
    npm run start
    ```

5.  **Lint the code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. All styles are applied using utility classes directly in the JSX.
*   **Components:** Components are organized into `layout` and `sections` directories. Reusable UI components are located in `components/ui`.
*   **Data:** All text content is stored in `lib/data.ts`. This makes it easy to update the site's content without touching the components.
*   **TypeScript:** The project is written in TypeScript, which provides type safety and better developer experience.
*   **Icons:** The project uses `lucide-react` for icons.
