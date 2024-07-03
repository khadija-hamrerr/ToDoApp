# To run Test in different Browsers from the Command Line 

use command:  npx cypress run --browser chrome

# To run Test in different Browsers Using Cypress Test Runner


# open cypress
npx cypress open

select browser

# To run Test in different Browsers Using scripts in 'package.json'
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cypress:run:chrome": "cypress run --browser chrome",
    "cypress:run:edge": "cypress run --browser edge",
    "cypress:open": "cypress open"
  },
  

  chrome: npm run cypress:run:chrome