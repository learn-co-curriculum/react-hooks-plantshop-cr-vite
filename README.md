# Plantshop

Plantshop is a React application for browsing and managing plants in a simple online plant shop. The application connects a React frontend to a JSON Server backend and allows users to view, add, search, and mark plants as out of stock.

## About the Project

This project was built as part of a React Hooks lab focused on connecting a frontend application to a backend and managing application state with React.

The main objectives were to:

- Fetch plant data from a backend when the application loads.
- Add new plants through a form.
- Mark plants as out of stock using React state.
- Search and filter plants by name.
- Practice passing data and functions between React components.

## Features

### View Plants

All plants are fetched from the backend when the application loads and displayed as plant cards.

### Add a New Plant

Users can add a new plant by entering:

- Plant name
- Image URL
- Price

The form sends the new plant to the backend using a `POST` request and updates the page with the newly added plant.

### Mark a Plant as Out of Stock

Users can click the **In Stock** button on a plant card to mark the plant as **Out of Stock**.

The sold-out status is managed using React state and is not persisted to the backend.

### Search Plants

Users can search for plants by name. The displayed plants are filtered according to the search query.

When the search field is cleared, all plants are displayed again.

## Technologies Used

- React
- JavaScript
- React Hooks
- `useState`
- `useEffect`
- Fetch API
- JSON Server
- Vite
- CSS
- Vitest
- React Testing Library

## Project Structure

```text
src/
├── components/
│   ├── App.jsx
│   ├── Header.jsx
│   ├── NewPlantForm.jsx
│   ├── PlantCard.jsx
│   ├── PlantList.jsx
│   ├── PlantPage.jsx
│   └── Search.jsx
│
├── __tests__/
│   └── test_suites/
│
├── index.css
└── main.jsx

db.json
package.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd react-hooks-plantshop-cr-vite
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the backend

Open a terminal and run:

```bash
npm run server
```

The JSON Server backend runs on:

```text
http://localhost:6001
```

### 5. Start the React application

Open another terminal and run:

```bash
npm run dev
```

Open the local Vite URL shown in the terminal.

## Running Tests

To run the test suite:

```bash
npm run test
```

The application currently passes all automated tests:

```text
Test Files  5 passed (5)
Tests       10 passed (10)
```

## How the Application Works

The main plant data is managed in `PlantPage`.

When the page loads, `useEffect` sends a `GET` request to the backend:

```text
React Application
       |
       v
GET /plants
       |
       v
JSON Server
       |
       v
Plant data
       |
       v
PlantPage state
       |
       v
PlantList
       |
       v
PlantCard
```

When a user adds a plant, the application sends a `POST` request:

```text
NewPlantForm
       |
       v
PlantPage
       |
       v
POST /plants
       |
       v
JSON Server
       |
       v
Updated plant list
```

Search functionality filters the plants currently stored in React state.

## Application Screenshot

Add a screenshot of the completed application below:

```markdown
![Plantshop Application](./screenshots/plantshop.png)
```

Place the screenshot in a `screenshots` folder:

```text
screenshots/
└── plantshop.png
```

## Learning Outcomes

Through this project, I practiced:

- Managing React state with `useState`.
- Fetching backend data with `fetch`.
- Running side effects with `useEffect`.
- Handling form submissions with `onSubmit`.
- Passing props between components.
- Rendering lists with `.map()`.
- Filtering data with JavaScript `.filter()` and `.includes()`.
- Using conditional rendering.
- Connecting a React frontend to a JSON Server backend.
- Testing React components with Vitest and React Testing Library.
- Using Git and GitHub for version control.

## Author

**Tracy **

Built as part of a React Hooks learning project.
