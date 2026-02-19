## Plant Shop React Application

This project is a React-based Plant Shop application that demonstrates core concepts such as state management, data fetching, controlled components, and conditional rendering. The app connects to a local json-server backend to retrieve and manage plant data. Users can view plants on page load, add new plants, search by name, and toggle stock status. The App component serves as the central state manager, ensuring a clean and predictable data flow. All UI updates are driven by state changes, following React’s unidirectional data pattern. The project emphasizes component separation and maintainable structure. It provides a practical example of building a small but complete CRUD-style frontend application.

## Component Structure

The App component owns the main state, including the plants array and search term. PlantPage acts as a layout container for the form, search bar, and plant list. PlantList receives plant data and renders multiple PlantCard components. Each PlantCard displays individual plant details and handles stock toggling via a callback. NewPlantForm manages controlled inputs and sends new plant data upward. Search captures user input and updates the search state in App. This structure keeps logic centralized and components reusable. Data flows down through props, while actions flow upward through callback functions.

## Data Fetching

When the application loads, App uses useEffect to fetch plant data from the backend. The request runs once on mount and updates the plants state with the retrieved array. Once state updates, React re-renders and displays the plant list. Error handling ensures failed requests are logged. The plants state is initialized as an empty array to prevent rendering issues. This setup ensures all plants appear automatically on page load.

## Adding a New Plant

The NewPlantForm uses controlled inputs to manage form data. On submission, it sends a POST request to the backend with the plant information. After a successful response, the new plant is added to the plants state in App. The UI updates instantly without refreshing the page. The form resets after submission for better user experience. This demonstrates lifting state up and updating shared data from child components.

## Search Functionality

The Search component updates a searchTerm state stored in App. Before rendering, App filters the plants array using the includes() method. The filtering is case-insensitive for better usability. When the search input is cleared, all plants display again automatically. This approach keeps filtering logic centralized and avoids modifying the original data. The list updates dynamically as the user types.

## Sold Out Toggle

Each PlantCard displays a button showing whether the plant is in stock or sold out. Clicking the button triggers a function from App that toggles the isSoldOut property. The update is done immutably using array mapping. After state changes, React re-renders and updates the button label. This demonstrates conditional rendering and state-driven UI updates. The logic remains centralized while the UI remains clean and responsive.

## Running the Application

Install dependencies using npm install. Start the backend with npx json-server --watch db.json --port 6001. Then run the React app using npm run dev. Ensure the backend is running before interacting with the app. The project demonstrates essential React patterns used in real-world applications.