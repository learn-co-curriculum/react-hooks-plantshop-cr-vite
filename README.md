# Phase 2 Code Challenge: Plantsy

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](./demo.gif)

## Instructions

Welcome to Plantsy! You've been tasked with building out some features for the
admin side of a plant store. The designers have put together the components and
CSS. Now it's up to you to bring the features to life by adding stateful logic
as well as persisting data to the backend via our API.

Your job will be to make our app work according to the user stories you will
find the [Deliverables](#Deliverables) section.

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `6001`.
3. In a new terminal, run `npm run dev`.

Make sure to open [http://localhost:6001/plants](http://localhost:6001/plants)
in the browser to verify that your backend is working before you proceed!

## Endpoints

The base URL for your backend is: `http://localhost:6001`

## Deliverables

As a user:

1. When the app starts, I can see all plants.
2. I can add a new plant to the page by submitting the form.
3. I can mark a plant as "sold out".
4. I can search for plants by their name and see a filtered list of plants.

### Endpoints for Core Deliverables

#### GET /plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```

# Plant Shop Application 🪴

A React-based frontend application for managing a local plant shop's inventory. 

## Visuals
![Plant Shop Application displaying a grid of plants and a search bar](./Screenshot from 2026-05-10 20-50-50.png)

## Description
This project connects a React frontend to a local mock backend API. It allows users to view the current plant inventory, add new plants via a controlled form, mark specific plants as sold out (optimistic/local UI update), and filter the inventory by plant name.

## Features
* **View Inventory:** Fetches and displays all plants from the database on initial load.
* **Add Plants:** Users can submit new plants (name, image URL, price) which are POSTed to the backend and immediately rendered.
* **Search Functionality:** A live-search bar filters the plant list by name without mutating the original state.
* **Stock Tracking:** Users can toggle individual plants in and out of stock locally.

## Installation
1. Clone the repository down to your local machine.
2. Run `npm install` to install dependencies.
3. In a separate terminal, start the backend server: `npm run server` (runs json-server on port 6001).
4. Start the React application: `npm start` (runs on port 3000).
