# Plantsy 🌱

Plantsy is a React plant shop application that allows users to browse plants, add new plants, mark plants as out of stock, and search for plants by name.

The application connects a React frontend to a JSON Server backend using `fetch()` requests. Plant data is loaded from the backend when the application starts, while sold-out status is managed locally in React state.

## Features

Display all plants when the application loads
Fetch plant data from the backend
Add new plants using a form
Send new plants to the backend
Display newly added plants immediately
Mark plants as "Out of Stock"
Search plants by name
Case-insensitive plant searching
Restore all plants when the search field is cleared
Automated tests for all major features

## Screenshot

![Plantsy Application](./plantshop-screenshot.png)

## Technologies Used

React
JavaScript
Vite
JSON Server
React Testing Library
Vitest
HTML
CSS

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository and move into the project directory:

```bash
git clone <your-repository-url>
cd react-hooks-plantshop-cr-vite
```

Install the project dependencies:

```bash
npm install
```

## Running the Application

The project requires two processes: the React frontend and the JSON Server backend.

### Start the backend

Open a terminal and run:

```bash
npm run server
```

The backend runs on:

```text
http://localhost:6001
```

The plant data is available at:

```text
http://localhost:6001/plants
```

### Start the React application

Open a second terminal and run:

```bash
npm run dev
```

The Vite development server will provide the URL for the React application.

## Running Tests

Run the test suite with:

```bash
npm run test
```

The test suite verifies the following functionality:

Loading all plants from the backend
Creating new plants
Marking plants as sold out
Searching and filtering plants

The completed application currently passes all 10 tests.

## How the Application Works

### Loading Plants

When `PlantPage` loads, React's `useEffect` makes a `GET` request to the backend:

```text
GET http://localhost:6001/plants
```

The returned plants are stored in React state and passed to `PlantList`.

### Adding a Plant

The `NewPlantForm` collects the plant name, image URL, and price.

When the form is submitted, a `POST` request is sent to:

```text
http://localhost:6001/plants
```

The newly created plant is then added to the React state and displayed on the page.

### Marking a Plant as Sold Out

The sold-out feature is managed locally using React state.

Clicking the `In Stock` button changes it to `Out of Stock`. This change is intentionally not persisted to the backend.

### Searching Plants

The `Search` component tracks the user's search input.

Plants are filtered using JavaScript's `includes()` method:

```javascript
plant.name.toLowerCase().includes(searchQuery.toLowerCase());
```

This makes the search case-insensitive.

When the search field is cleared, all plants are displayed again.

## Testing

The application includes tests for each major deliverable:

| Test                    | Functionality               |
| ----------------------- | --------------------------- |
| `AllPlants.test.jsx`    | Fetches and displays plants |
| `CreatePlant.test.jsx`  | Adds a new plant            |
| `InStock.test.jsx`      | Marks a plant as sold out   |
| `SearchPlants.test.jsx` | Filters plants by name      |

The complete test suite passes:

```text
Test Files  5 passed
Tests       10 passed
```

## Development

Create a feature branch before making changes:

```bash
git checkout -b feature/plant-shop-functionality
```

After making changes, run the tests:

```bash
npm run test
```

Commit changes with a descriptive message:

```bash
git add .
git commit -m "Implement plant shop functionality"
```

Push the branch:

```bash
git push -u origin feature/plant-shop-functionality
```

Then open a Pull Request on GitHub for review.

## Future Improvements

Possible future improvements include:

Persisting sold-out status to the backend
Adding plant categories
Adding sorting by price
Adding plant details pages
Adding user authentication
Adding a shopping cart
Adding form validation
Adding loading and error states

## License

This project was created as part of a React learning exercise.
