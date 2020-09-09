let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    hobby: "Singing",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3378",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let hasil = {...data, name: 'Muhammad Khoirul Wafa', email: 'muhkhwafa@gmail.com', hobby: 'Coding'};

const {address: {street, city}} = data;

console.log(hasil);
console.log(`${street}, ${city}`);