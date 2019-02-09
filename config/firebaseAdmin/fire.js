let admin = require("firebase-admin");
let serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-nodejs-3498b.firebaseio.com"
});

module.exports = {
  admin: admin,
};
