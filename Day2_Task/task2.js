const prompt = require('prompt-sync')();

let usersProfiles = [
    {name:'Aya', age:23, gender:'Female', email:'aya@gmail.com'},
    {name:'Mohammad', age:30, gender:'Male', email:'mohammad@gmail.com'},
    {name:'Khalid', age:44, gender:'Male', email:'Khalid@gmail.com'}
];

const GetAllUsers = () => {
    usersProfiles.forEach((user) => {
        console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`);
    });
};

const GetUsersEmails = () => {
    let usersEmails = usersProfiles.map(user => user.email);
    usersEmails.forEach((email, index) => {
        console.log(`User ${index + 1} => ${email}`);
    });
};

const GetMaleUsers = () => {
    let maleUsers = usersProfiles.filter(user => user.gender === 'Male');
    maleUsers.forEach(user => {
        console.log(user.name);
    });
};

console.log("All Users:");
GetAllUsers();

console.log("Users Emails:");
GetUsersEmails();

console.log("Male Users:");
GetMaleUsers();
