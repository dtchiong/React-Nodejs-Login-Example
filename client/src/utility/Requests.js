/* Makes a request to increment the count */
async function incrementCount(idToken) {
    const response = await fetch("api/count/increment", {
        method: "POST",
        body: JSON.stringify({idToken: idToken}),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const body = await response.json();
    
    if (response.status !== 200) throw Error(body.message);
    
    return body;
}

/* Gets the current count from the server */
async function getCount(idToken) {
    const response = await fetch("api/count/get");
    const body = await response.json();
    
    if (response.status !== 200) throw Error(body.message);

    return body;
}

const Requests = { incrementCount, getCount };
export default Requests;


