# Plantsy

A plant shop admin app built with React. It connects to a JSON Server backend so plants are loaded from, and saved to, an API.

## Features

- See all plants when the app loads
- Add a new plant using the form (saved to the backend)
- Mark a plant as "Out of Stock" (this is not saved to the backend)
- Search plants by name to see a filtered list

## Screenshot

![Plantsy screenshot](./screenshot.png)

## Tech Stack

- React (Vite)
- JSON Server
- Vitest and React Testing Library

## Getting Started

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd <folder-name>
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend (runs on port 6001):
   ```
   npm run server
   ```
4. In a second terminal, start the app:
   ```
   npm run dev
   ```
5. Open the link shown in the terminal. To check the backend, visit http://localhost:6001/plants.

## Running Tests

```
npm run test
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/plants` | Get all plants |
| POST | `/plants` | Add a new plant |

## Author

Peter Mboya