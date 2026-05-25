let url = "";

fetch(url, {


    method : "GET",
    headers : {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer Token"
    },
})


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Network response was not ok.');
    }
})
.then(data => {
    console.log(data);
})