# Plantsy – React Plant Shop

A React application for managing a plant shop. Users can view available plants, add new plants, mark plants as sold out, and search for plants by name.

## Features

- **View Plants:** Fetch and display all plants from the backend API.
- **Add Plants:** Submit a form to add new plants.
- **Stock Management:** Mark plants as out of stock.
- **Search Plants:** Filter plants by name.

## Technologies Used

- React
- JavaScript
- Vite
- JSON Server
- HTML and CSS
- React Hooks (`useState` and `useEffect`)

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ivy94Kemmy/react-hooks-plantshop-cr-vite.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-hooks-plantshop-cr-vite
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

Start the backend server in your first terminal:

```bash
npm run server
```

The backend runs at `http://localhost:6001`.

Open a second terminal and start the React application:

```bash
npm run dev
```

Open the local URL provided by Vite, usually `http://localhost:5173`.

## API Endpoints

The application uses JSON Server to manage plant data.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/plants` | Retrieve all plants |
| POST | `/plants` | Add a new plant |

Base API URL: `http://localhost:6001`

## Running Tests

Run the test suite with:

```bash
npm run test -- --run
```

## Project Structure

```text
src/
├── components/
│   ├── NewPlantForm.jsx
│   ├── PlantCard.jsx
│   ├── PlantList.jsx
│   ├── PlantPage.jsx
│   └── Search.jsx
├── App.jsx
└── main.jsx

db.json
package.json
```

## Author

Developed as part of the React Hooks Plant Shop Code Challenge.