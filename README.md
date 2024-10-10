# Project: Dynamic Page Builder

This is a React-based web application that enables users to create and customize their own pages using three predefined templates: Business Card, Gallery View, and Letter. The application allows users to input dummy data, which is then displayed in the selected template format.

## Features

- Template Selection: Users can choose from three templates.
- Dynamic Page Generation: Customized pages generated based on user input.
- Responsive Design: All pages render properly across different screen sizes.
- State Management: Uses Zustand for lightweight state management.
- Form Handling: Utilizes React Hook Form for input validation and management.
- API Simulation: Simulated API calls using Axios for data fetching.

## Prerequisites

Ensure you have the following installed before starting:

- **Node.js**: `v20.15.0` or later.
- **Yarn**: For managing dependencies.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Kerolos2000/kiros-group-app
   cd kiros-group-app
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

   The development server will be available at [http://localhost:5173](http://localhost:5173).

## Available Scripts

- `dev`: Starts the Vite development server.
- `commit`: for publish commit in github.
- `lint`: Lints the project files using ESLint.

## Project Structure

```bash
├── src/
│   ├── components/      # Reusable React components
│   ├── constants/       # Static constants
│   ├── hooks/           # Custom React hooks
│   ├── layout/          # Layout components for structuring the app
│   ├── pages/           # Pages for the application
│   ├── providers/       # Context and providers for state management
│   ├── router/          # Routing configuration
│   ├── themes/          # Theme customization and settings
│   ├── App.tsx          # Root application file
│   └── main.tsx         # Entry point for the application
```

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **MUI**: UI library for building React components.
- **Zustand**: State management for global state.
- **React Hook Form**: Form handling management.
- **Zod**: Form handling validation.
- **React Query**: For server-side data management.

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
