Proof of Prediction

### How to Run
- Backend
  1. cd api/
  1. cp .env.sample .env
  1. npm install
  1. npm run ganache
  1. cd truffle/
  1. npx truffle compile
  1. npx truffle migrate
  1. cd ..
  1. npm run start 

- Frontend
  1. cd client/
  1. npm install
  1. npm run dev

### To Do List
1. (Done) Create a authentication middleware
1. (Done) Configure environment variables in a proper way
1. (Done) Initial frontend project #frontend
1. (Done) Login by email #frontend
1. (Done) List of predictions #frontend
1. (Done) Create a login form #frontend
1. (Done) Create new prediction (`/predictions/new`) #frontend
1. (Done) Root page to show all predictions (`/`) #frontend
1. (Done) Prediction show page (`/predictions/:id`) #frontend
1. (Done) Generate hash of prediction text #frontend
1. (Done) Define/Compile/Deploy a sample smart-contract
1. (Done) Connect to Ethereum network and call smart-contract methods
1. (Done) Define `PredictionHash` smart-contract
1. (Done) Store transaction ID next to the related prediction record
1. (Done) Configure `test` libraries
1. (Done) Configure `test` environments
1. (Todo) Isolate each test case (by removing database)
1. Configure Babel for importing path (use unified path in everywhere)
1. Add ownership to smart-contract to prevent creating hash by everyone in network
1. Dockerize the frontend and the backend application
1. Show user's predictions (`/profile`) #frontend
1. User's setting page (`/profile/setting`) #frontend
1. Ability to save original text in prediction model
1. Sign-up by google account #backend #frontend
1. Convert prediction body to lowercase before computing hash
1. Create prediction form's validations
