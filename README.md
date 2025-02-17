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

# Demo version
You can check this project on [Vercel](https://movie-catalog-frontend-tau.vercel.app/), but if it turned off for some reason, you can try to launch it localy on your PC, following my instruction below.

![Memico2](https://i.imgur.com/LRDSjT9.gif)

# How to run

### Package update

To run this project, you will need to download 2 repositories, [frontend](https://github.com/vpast/movie_catalog_frontend) and [backend](https://github.com/vpast/movie_catalog_backend). Then, when you have done it, set up packages that will need to launch using ```npm i ``` in terminal.

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

Ok, now the last part. You can launch project like i do or how would you like, for me it will be like that.

![vsCodeTerminal](https://i.imgur.com/91dX9gt.png)

In VS Code i separate terminal to two and working. Left, will be frontend and right will be backend. For frontend you will need type next commands
```npm run build``` then ```npm start``` it will start your frontend part.
Then in backend terminal type ```npm start```.

After all or this you can try to follow your url, there you open your frontend, for me it will be http://localhost:3000

All right, that's all. I hope your demo version of project now live!

# Screenshot's

Here are some action shots from the app:

![Memico1](https://i.imgur.com/DeKMjg5.gif)

![Memico2](https://i.imgur.com/LRDSjT9.gif)

![Memico3](https://i.imgur.com/By3COM6.gif)

![Memico4](https://i.imgur.com/Sk8L4Rn.gif)
