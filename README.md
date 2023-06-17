
#  Ecommerce Store with Voice Navigation <a name="about-project"></a>

### Tech Stack <a name="tech-stack"></a>


  <ul>
    <li>React</li>
    <li>Ruby on Rails</li>
    <li>PostgreSQL</li>

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






### Resoucres
- https://medium.com/codex/deploying-a-rails-api-react-app-with-sessions-and-csrf-tokens-d33d2924639

deploy to render
- https://dev.to/nickmendez/heroku-alternative-how-to-deploy-a-reactjs-rails-api-app-to-render-2k17
- https://gorails.com/episodes/how-to-deploy-rails-to-render

amazon s3 bucket for images
- https://medium.com/nerd-for-tech/handling-images-part-1-using-active-storage-in-rails-6-with-amazon-s3-buckets-92b739fa790

login signup auth
- https://medium.com/swlh/react-reactions-cfdde7f08dff
