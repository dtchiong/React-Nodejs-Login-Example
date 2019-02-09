import fire from "../config/fire";

/* Retrieves the idToken from the current user from firebase */
async function getIdToken() {
  let idToken = null;

  await fire.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then( (retrievedIdToken) => {
      idToken = retrievedIdToken;
    })
    .catch( (error) => {  
      console.log(error);
    });

  return idToken;
}

/* Makes a request to increment the count by first getting the idToken
 * so that the request can be authenticated 
 */
async function incrementCount() {

  const idToken = await this.getIdToken();
  const response = await fetch("api/count/increment", {
    method: "POST",
    body: JSON.stringify({ idToken: idToken }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
}

/* Gets the current count from the server using the user's uid */
async function getCount(uid) {
  const response = await fetch(`api/count/get?uid=${uid}`);
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
}

const Requests = { incrementCount, getCount, getIdToken };
export default Requests;
