"use strict"
const users = [
    {
        userName: "John",
        lastName: "Doe",
        age: 28,
        address: {
            street: "Sunset Boulevard",
            number: 12,
            house: true,
        },
        role: "Web Developer",
    },
    {
        userName: "Jane",
        lastName: "Smith",
        age: 34,
        address: {
            street: "Ocean Drive",
            number: 45,
            house: false,
        },
        role: "Graphic Designer",
    },
    {
        userName: "Michael",
        lastName: "Brown",
        age: 40,
        address: {
            street: "Main Street",
            number: 78,
            house: true,
        },
        role: "Product Manager",
    },
    {
        userName: "Emily",
        lastName: "Davis",
        age: 26,
        address: {
            street: "Elm Street",
            number: 22,
            house: true,
        },
        role: "UX Designer",
    },
    {
        userName: "Chris",
        lastName: "Taylor",
        age: 31,
        address: {
            street: "Cedar Road",
            number: 19,
            house: false,
        },
        role: "Data Analyst",
    },
    {
        userName: "Sophia",
        lastName: "Anderson",
        age: 29,
        address: {
            street: "Willow Lane",
            number: 56,
            house: true,
        },
        role: "DevOps Engineer",
    },
    {
        userName: "David",
        lastName: "Clark",
        age: 37,
        address: {
            street: "Maple Drive",
            number: 89,
            house: true,
        },
        role: "Backend Developer",
    },
    {
        userName: "Olivia",
        lastName: "Moore",
        age: 25,
        address: {
            street: "Birch Avenue",
            number: 67,
            house: false,
        },
        role: "Marketing Specialist",
    },
    {
        userName: "James",
        lastName: "Wilson",
        age: 32,
        address: {
            street: "Pine Street",
            number: 102,
            house: true,
        },
        role: "Mobile Developer",
    },
    {
        userName: "Ava",
        lastName: "Martin",
        age: 30,
        address: {
            street: "Cherry Lane",
            number: 15,
            house: false,
        },
        role: "Content Creator",
    },
    {
        userName: "Daniel",
        lastName: "Walker",
        age: 35,
        address: {
            street: "Ash Boulevard",
            number: 48,
            house: true,
        },
        role: "Full Stack Developer",
    }
];

const container = document.getElementById("my_container");

function getAddressString(address) {
    return `${address.number} ${address.street}`;
}

users.forEach(user => {
	const card = document.createElement("article");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    const img = document.createElement("img");

	if(user.userName == "Charlie" || user.userName == "Frank" || user.userName == "Henry" || user.userName == "Jack" || user.userName == "Leo")
		img.src = "./assets/02.jpg";
	else
		img.src = "./assets/01.jpg";

    img.alt = user.userName;
    const cardTitle = document.createElement("span");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = user.userName;
    cardImage.appendChild(img);
    cardImage.appendChild(cardTitle);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const ul = document.createElement("ul");
    ul.classList.add("list-group");

    const nameItem = document.createElement("li");
    nameItem.classList.add("list-group-item");
    nameItem.innerHTML = `<strong>Name:</strong> ${user.userName} ${user.lastName}`;

    const ageItem = document.createElement("li");
    ageItem.classList.add("list-group-item");
    ageItem.innerHTML = `<strong>Age:</strong> ${user.age}`;

    const addressItem = document.createElement("li");
    addressItem.classList.add("list-group-item");
    const addressImgSrc = user.address.house ? "./assets/house.svg" : "./assets/apart.svg";
    addressItem.innerHTML = `<strong>Address:</strong> ${getAddressString(user.address)} <img class="list-group-img" src="${addressImgSrc}" alt="">`;

    const roleItem = document.createElement("li");
    roleItem.classList.add("list-group-item");
    roleItem.innerHTML = `<strong>Role:</strong> ${user.role}`;

    ul.appendChild(nameItem);
    ul.appendChild(ageItem);
    ul.appendChild(addressItem);
    ul.appendChild(roleItem);

    cardContent.appendChild(ul);
    card.appendChild(cardImage);
    card.appendChild(cardContent);

    container.appendChild(card);
});
