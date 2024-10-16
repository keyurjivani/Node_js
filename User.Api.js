import { Users } from "./Api.js";

let get_user = await Users.get()


const mapper = (data) =>{
    data.map((item)=>{
        let username = document.createElement("p");
        username.innerText = `Username: ${item.username}`;

        let email = document.createElement("p");
        email.innerText = `Email: ${item.email}`;

        let div = document.createElement("div");
        div.append(username, email);

        document.getElementById("display").append(div)

    })
}
mapper(get_user)