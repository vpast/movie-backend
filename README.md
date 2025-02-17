# Movie Catalog  

Movie Catalog is a web application made with React.js, Node.js, and MongoDB. It allows users to browse through over 24,000 movies with the ability to filter them by genre and year. The homepage shows five random movies, which can be refreshed for another selection. The "Movies" page provides filters and pagination, while the "Archives" page allows users to select a time period to see movies released within that range.  

You can find the backend part [in a separate repository](https://github.com/vpast/movie_catalog_frontend.git).  

## Features  
- Browse through a catalog of over 24,000 movies  
- Filter movies by genre and year  
- Random movie suggestions on the homepage  
- Pagination and advanced filtering on the "Movies" page  
- Archives view to explore movies by release date range  

## Technologies Used  
- React.js  
- Node.js  
- MongoDB  

## Demo version
You can check this project on [Vercel](https://movie-catalog-frontend-tau.vercel.app/), but if it turned off for some reason, you can try to launch it localy on your PC, following my instruction below.

![Memico2](https://i.imgur.com/fP9UMEr.gif)

## Installation and Usage  

### Prerequisites  
To run this project locally, you will need to clone both the [frontend](https://github.com/vpast/movie_catalog_frontend) and [backend](https://github.com/vpast/movie_catalog_backend) repositories.  

### Package Installation  
Navigate to each project directory and install the necessary dependencies:  
```bash
npm install
```
### Database setup

You will need to start mongoDB server on your local machine, to work project properly. For this, i will recomend [MongoDB Compass](https://www.mongodb.com/try/download/shell) for UI controll and [MongoDB Community Server](https://www.mongodb.com/try/download/community) for your local database server.

Then you have done it, we ready for next step. In backend reposistory, you will need to follow to **databaseMongo** folder, there you can find 2 json files that you will need. 

![databaseMongoLocation](https://i.imgur.com/nDmuGEp.png)

In MongoDB Compass you will need to create new database called **movies**, remember that case is important. In my project it looks like this

![MongoDBCompassModel](https://i.imgur.com/0cgcjeg.png)

Then click on plus and create two collections **movies** and **movie-comments**
In this collections, click on add data -> import JSON or CSV file, then select json file. After you add json data to your database, it will looks like this

![moviesDatabase](https://i.imgur.com/ZXN9cM2.png)

Do this to **comments** file too.

### Configuration

Ok! Now we going to code.

In your IDE find file called **config.js**, in **frontend repository** and check, that **API_URL** typed correctly, for me it will be

```export  const  API_URL  =  "http://localhost:3001" ```

You can change port how you like. 

Then go to **backend repository** and follow this path movie_catalog_backend -> mogno -> db.js.

There check your connection to mongoDB, for me it looks like this

```
const  mongoose  =  require('mongoose');
const  CONNECTION  = process.env.CONNECTION  ||  'mongodb://localhost:27017/movies';
mongoose.set('debug',  true);
mongoose.connect(CONNECTION,  {});
```

If you don't have or created .env file, change second connection variant to your mongoDB URL. Default connection to mongoDB will be ```mongodb://localhost:27017```, if i am right. Also dont forget to type path to your **model**, like this ```/movies```, remember, **model** not **collection**. This two step's are very important.

### Running the Application

Ok, now the last part. You can launch project like i do or how would you like, for me it will be like that.

![vsCodeTerminal](https://i.imgur.com/91dX9gt.png)

Open two terminals (or split your terminal in VS Code).

1.  In the frontend directory:
    
    ```bash
    npm run build
    npm start
    
    ```
    
    This will start the frontend on `http://localhost:3000`.
    
2.  In the backend directory:
    
    ```bash
    npm start
    
    ```
    

### Accessing the App

Open your browser and go to `http://localhost:3000` to access the application.

All right, that's all. I hope your demo version of project now live!

# Screenshot's

Here are some action shots from the app:

![Memico1](https://i.imgur.com/Ge7Lb1A.gif)

![Memico2](https://i.imgur.com/fP9UMEr.gif)

![Memico3](https://i.imgur.com/vbk0JrC.gif)

![Memico4](https://i.imgur.com/lBDrkZV.gif)
