// fetch("https://api.github.com/users/nishantsaini2331")

// .then(data => data.json())

// .then(data => console.log(data))

const userForm = document.querySelector("#github-form");
const userInput = document.querySelector("#github-username");
const display = document.querySelector("#show-profile");

async function getData(username = "nishantsaini2331") {
    display.innerHTML=` <div class="loader"></div> `
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    return data
}

userForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    let username = userInput.value;
    const data = await getData(username)
   display.innerHTML = `
    <img src="${data.avatar_url}" alt="GitHub Profile">

    <h2>${data.name}</h2>

    <p>Bio: ${data.bio || "No bio available"}</p>

    <p>Followers: ${data.followers}</p>

    <p>Following: ${data.following}</p>

    <p>Public repos: ${data.public_repos}</p>

    <a href="${data.html_url}" target="_blank">
        Visit Profile
    </a>
`;

})