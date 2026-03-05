# React Recipe Discovery App

A client-side “Recipe Discovery” application that utilizes React.js and the MealDB API. You can view a list of recipe categories, a list of recipes in each category, the details for each recipe, and on the recipe details page you can add or remove recipes to/from yur favorites list. If you have different pages open in multiple tabs, your favorites lists will be updated live on the favorites page.

## Setup and Usage

- Clone the repository.

```
git clone https://github.com/shanosha/mod-10-sba.git
```

- Navigate to the directory.

```
cd mod-10-sba
```

- Install the node packages.

```
npm install
```

- Run the Vite development server.

```
npm run dev
```

- Open the server URL in a browser.

- Begin exploring recipes.

## Reflection

- The most challenging part of the project.
  - The assignment requirements weren't clear and initially lead me to beleave that I could ONLY add the recipe ID to the favorites variable. But the instructor later clarified.

- A brief explanation of a design decision you made (e.g., why you structured a hook a certain way, how you decided to manage a piece of state).
  - I structured the useState custom hook to include a useEffect statment that monitors local storage, because when I was testing the app I had different pages open in different tabs, and I noticed favorites weren't being updated accuratly. Now, even if a user has different recipe detail pages open, and adds/removes recipes as favorites, the favorites page is updated live.
