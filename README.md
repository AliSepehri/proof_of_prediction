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
1. Implement the functionality of share button #frontend
1. Make pages responsible #frontend
1. Make sure only the owner can create prediction #backend
1. Sign-up by google account #backend #frontend
1. Show user's predictions (`/profile`) #frontend
1. Configure Babel for importing path (use unified path in everywhere)
