# nyt_reach_search2
 Create React components, work with helper/util functions, and utilize the React mounting lifecycle to query and display articles based on user searches. Use Node, Express and MongoDB so that users can save articles to read later.

Installation:

Backend:

1. Connect to mongodb through mLab
   Explanation: Ease of access for different devices.
2. In terminal (command line interface) run npm init
   Explanation: Creates package.json (manifest)that list dependencies and scripts
3. In terminal run: npm i express body-parser concurrently mongoose
   Explanation:
   express: main framework
   mongoose: used to connect and interact with MongoDB
   body-parser: takes in data from request (request.body)
   concurrently: allows you to run a script and have multiple commands such starting backend server on port 5000 and frontend on port 3000 (see package.json for further scripts)
4. Optional: Optional: In terminal run npm i -D nodemon
   Explanation: will update app without manually having to restart

Frontend
5. After builing backend routes(testing with Postman), models(mongoose) run in the      terminal : npm i -g create-react-app
   Explanation: This is to install the create-react-app globally if you haven't done this.
6. In terminal run: create-react-app client
   Explanation: creates boiler plate react app in folder called client which is seperate from the backend.
7. Open package.json (the one in the client folder) and add a proxy
   Explanation: Provides the beginning part of the url for backend calls and shortens what needs to be written when using routes in the react app.
8. Optional: Open package.json(the one in the root folder) add the following scripts:
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
   Explanation: This allows you to open both servers at the same time in the terminal by running: npm run dev.

