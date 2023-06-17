
#  Ecommerce Store with Voice Navigation <a name="about-project"></a>

### Tech Stack <a name="tech-stack"></a>


  <ul>
    <li>React</li>
    <li>Ruby on Rails</li>
    <li>PostgreSQL</li>
    <li>Bootstrap 5</li>

  </ul>

### USING THE CODE
- Make sure you have WSL 2 installed and working. NOTE: ``` rails db:create ``` doesn't work in WSL 1
-  Install PostgreSQL database and make yourself super user and have all the
necessary privileges to create Database.
- Install the latest version of node.
- Install Ruby version 3.0.2.
- Install the latest version of rails.
- Also make sure to have package manager yarn and npm installed.
- Run the command ```git clone git@github.com:taimourz/EcommerceStore-voice-nav.git```
- Navigate inside the repository folder run ```bundle install``` and then ```yarn install```. This
will install all the necessary ruby and react libraries needed for the project
- Open ```database.yml``` file and make sure to change the username to your own username
- Open 2 tabs and run the following commands in them separately, These
commands will make sure to run your server and build all the necessary css and
javascript needed for the project.
  - ``` bin/dev ```
  - ``` yarn build –watch ```
- open localhost 3000 and you will have a running web app

### Deployment on Render
- create an account on render.com
- clone this project and push it on your own github repo.
- create a rails master key in your local development environment and save it there and also copy and paste that in Render.com
- connect your repo with render.com, it would automatically deploy your web there 

### Example API Endpoints
- Auth
  - POST http://localhost:3000/login
  - POST http://localhost:3000/signup
  - POST http://localhost:3000/logout
- User CRUD
  - PUT	http://localhost:3000/api/v1/Users/5
  - GET	http://localhost:3000/api/v1/Users/1
  - DELETE	http://localhost:3000/api/v1/Users/88
  - GET http://localhost:3000/api/v1/Users/all-users
- Product CRUD
  - POST http://localhost:3000/api/v1/products
  - GET http://localhost:3000/api/v1/products/7
  - GET http://localhost:3000/api/v1/Products/all-products
  - PUT http://localhost:3000/api/v1/Products/30
  - DELETE http://localhost:3000/api/v1/products/15
  - POST http://localhost:3000/products/search
- Other endpoints
  - run ``` rails routes ``` to get all the routes       

### Pages Included
- Home Page 
- Contact Page 
- Blog Page 
- Cart Page 
- Sign Up Page 
- Login Page 
- Reset Password Page 
- Wishlist Page 
- Compare Product Page
- Single Blog Page 
- Product Page 
- Checkout Page 
- Terms and Conditions Page 
- Shipping Policy Page 
- Refund Policy 
- Privacy Policy Page 
- Our Store Page 
- Compare Product Page 



### Using Voice Commands
- Press ``` Ctrl ``` : this will start listening voice commands
- Press ``` Esc ```  : this will stop listening voice commands
#### Voice commands
- scroll down
- scroll up
- go to "Home" NOTE: say the page name here instead of Home
- Filling the forms
  - For example: Open the checkout page:
  - say "First Name", then say "Taimour"
  - similarly say "Last Name", then say "Afzal"
  - Doing this will fill the form with voice commands
- Searching
  - Say "Search for car" Note: here instead of car say your product title that is stored in the DB. This will take your to the car product page     



### Screenshots
## Home
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/670d8f91-684d-4696-a708-9fb71fa3e249)
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/d7055910-4c5d-4d2c-a591-402d400bc5f9)
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/a16a241f-71f6-4e98-b9a6-452b05baf546)
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/d340519e-4658-49be-880c-778f58362944)

## Ourstore
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/3263bf69-ae70-44e3-b698-13002c09daaf)
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/19b9d1c0-5aab-42c3-a3ee-8ce6bb6ad174)
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/c5f5c213-34d3-49d3-b566-c82e1bf3c1a4)

## Blog Page
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/dcd34be4-563f-4fef-9204-58d47a21606c)
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/a055cd92-5d24-4e69-b8fe-f223120e918b)

## Contact Page
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/aca5f9fe-40c0-4053-bd04-8f1ec0475ce6)

## Login Page
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/c1f3e2b9-c8e7-4a1d-8b3a-36260d063be4)

## Signup Page
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/646a9164-d7b4-4a38-a92c-0a29bbfded75)

## Reset Password Page
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/0ec71dbf-a606-4bba-a1e9-d2c6aa97862a)

## Wishlist Page
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/cec2515c-7b34-400c-bbec-a30b97c6e16a)

## Compare Product Page
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/521d2bb8-30fc-431a-a173-425143feff30)

## Cart Page 
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/ea928824-e46e-4c29-a4a6-352910d4d5e2)

## Checkout Page
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/42615426-25e3-4e2e-bdaf-e4713722b3d2)

## Policy Pages (Privacy, Shipping, Terms and Conditions)
![image](https://github.com/taimourz/EcommerceStore-voice-nav/assets/63347409/e5501126-bcbf-4b25-ae11-7fdc46e85308)












### Resoucres
- https://medium.com/codex/deploying-a-rails-api-react-app-with-sessions-and-csrf-tokens-d33d2924639

deploy to render
- https://dev.to/nickmendez/heroku-alternative-how-to-deploy-a-reactjs-rails-api-app-to-render-2k17
- https://gorails.com/episodes/how-to-deploy-rails-to-render

amazon s3 bucket for images
- https://medium.com/nerd-for-tech/handling-images-part-1-using-active-storage-in-rails-6-with-amazon-s3-buckets-92b739fa790

login signup auth
- https://medium.com/swlh/react-reactions-cfdde7f08dff
