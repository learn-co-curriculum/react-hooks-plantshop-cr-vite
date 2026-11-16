
# Plantsy - Plant Shop Admin Dashboard

A React application for managing a plant shop inventory. Users can view available plants fetched from a local backend API, add new plants to the catalog, filter plants by name, and toggle stock availability.

## Features

* **View Inventory**: Fetches and displays all plants on initial load.
* **Add New Plants**: Submits new plant details (`name`, `image`, `price`) to the backend via a `POST` request and updates the UI immediately.
* **Toggle Stock Status**: Marks individual plants as `"In Stock"` or `"Out of Stock"`.
* **Live Search**: Filters displayed plants in real time based on user search input.

## Setup & Usage

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the JSON backend server (runs on port `6001`):
   ```bash
   npm run server
   ```
3. In a new terminal, start the frontend development server:
   ```bash
   npm run dev
   ```
4. Run the test suite:
   ```bash
   npm run test
   ```