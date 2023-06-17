
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
- Navigate inside the repository folder run bundle install and then yarn install. This
will install all the necessary ruby and react libraries needed for the project
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


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Author**

- GitHub: [@taimourz](https://github.com/taimour)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Resoucres
- https://medium.com/codex/deploying-a-rails-api-react-app-with-sessions-and-csrf-tokens-d33d2924639

deploy to render
- https://dev.to/nickmendez/heroku-alternative-how-to-deploy-a-reactjs-rails-api-app-to-render-2k17
- https://gorails.com/episodes/how-to-deploy-rails-to-render

amazon s3 bucket for images
- https://medium.com/nerd-for-tech/handling-images-part-1-using-active-storage-in-rails-6-with-amazon-s3-buckets-92b739fa790

login signup auth
- https://medium.com/swlh/react-reactions-cfdde7f08dff
