var admin =  require("./config/firebaseAdmin/fire").admin; //the firebase admin object

const express = require('express');
const bodyParser = require('body-parser'); //for console.log(req.body) inside post requests

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//The database with predefined user
var db = {
  users: {
    "8xTpOqRrXHXNBB6yP4kciGPilrw1" : {
      count: 0
    }
  }
}

getUserCount = (uid) => {
  return db.users[uid].count;
}

setUserCount = (uid, count) => {
  db.users[uid].count = count;
}

/* Verifies the idToken, and if successful, returns the uid of the user */
verifyIdToken = async (idToken) => {
  let uid = null;

  await admin.auth().verifyIdToken(idToken)
    .then( function(decodedToken) {
      uid = decodedToken.uid;
    })
    .catch( function(error) {
      console.log(error);
    });

  return uid;
}

/****************************** API CALLS ******************************/

/* Gets the count of the current user using the uid */
app.get('/api/count/get', (req, res) => {
  const uid = req.query.uid;
  const currCount = getUserCount(uid);
  res.json({count: currCount});
});

/* Increments the user's count if the id token is verified
 * and returns the count, otherwise the user is not authenticated 
 */
app.post('/api/count/increment', async (req, res) => {
  let uid = await verifyIdToken(req.body.idToken);

  if (uid != null) {
    const currCount = getUserCount(uid);
    const newCount = Math.max(1, currCount * 2);
    setUserCount(uid, newCount);
    res.json({count: newCount});
  }else {
    res.json(401);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));