# Plantsy Plant Shop

Plantsy is a React plant shop admin app connected to a JSON backend. The app loads plant data on page load, lets users add plants with a form submission, supports local sold-out toggling, and filters plants by a search query.

## Preview

![Plantsy demo](./demo.gif)

## Features

- Fetches all plants from `http://localhost:6001/plants` when the app loads
- Creates a new plant with a `POST /plants` request and renders it immediately
- Marks a plant as `Out of Stock` in the UI without persisting the change
- Filters visible plants by name using the search input and `includes()`

## Component Design

The app keeps shared state in `PlantPage` and passes props down to presentational components.

| Component | State | Props | Responsibility |
| --- | --- | --- | --- |
| `PlantPage` | `plants`, `searchTerm` | none | Fetches data, creates plants, filters the visible list |
| `NewPlantForm` | `formData` | `onAddPlant` | Tracks controlled inputs and submits new plant data |
| `Search` | none | `searchTerm`, `onSearchChange` | Displays and updates the current search query |
| `PlantList` | none | `plants` | Renders all visible plant cards |
| `PlantCard` | `isInStock` | `plant` | Displays a plant and toggles local stock status |

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the backend server:

```bash
npm run server
```

3. In a second terminal, start the React app:

```bash
npm run dev
```

4. Open the app in your browser using the local Vite URL shown in the terminal.

## Testing

Run the test suite with:

```bash
npm test
```

## API

Base URL:

```text
http://localhost:6001
```

Endpoints used by the app:

- `GET /plants`
- `POST /plants`

Example plant object:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```

Example `POST /plants` body:

```json
{
  "name": "Snake Plant",
  "image": "./images/snake-plant.jpg",
  "price": 22.5
}
```

## Project Notes

- Sold-out status is intentionally non-persisting for this lab and only updates the rendered card
- Search is case-insensitive so users can find plants with partial matches
