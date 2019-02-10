# React Nodejs with Firebase Auth Example App  

## To Run
1. Make sure yarn is installed  
```$ npm install -g yarn```
2. At the root directory, install the server dependences  
```$ yarn```
3. At the client directory, install the client dependencies  
```$ cd client```  
```$ yarn```
4. Back at the root directory, start the app  
```$ cd ..```  
```$ yarn start```

  The app should be running at [http://localhost:3000
](http://localhost:3000)

  Login using the predefined user:  
**Username:** defaultuser@gmail.com  
**Password:** password


## About
This is an example login app with server requests--built with React and Bootstrap for the front-end,
and Nodejs/Express for the API Server with Firebase Authentication. API calls are authenticated using
token-based authentication. The app is also built with responsiveness in mind, so that it looks normal
on different sized browsers and devices.
  
Note: The Firebase admin service account key should not be committed to public repositories, but it
 is fine for this example app.