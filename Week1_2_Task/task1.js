const prompt = require('prompt-sync')();

const createUserProfile = (fname, lname, userGender, userAge) => {
    console.log('To complete creating your profile, you must enter email and password');
    
    let email = prompt('Email: ');
    let password = prompt('Password: ');
    let confirmPassword = prompt('Confirm Password: ');
    
    if (password === confirmPassword) {
        const userProfile = {
            name: fname + ' ' + lname,
            gender: userGender,
            age: userAge,
            email: email,
            password: password
        };
        console.log('Your profile was successfully created.\n');
        return userProfile;
    } else {
        console.log('Passwords do not match. Please try again.\n');
        return null;
    }
};

const login = (userProfile) => {
    console.log('Logged in successfully!');
    console.log(`Name: ${userProfile.name}`);
    console.log(`Email: ${userProfile.email}`);
};

console.log('=== Create User Profile ===');
console.log('To create your profile, please enter:');

let firstName = prompt('First Name: ');
let lastName = prompt('Last Name: ');
let gender = prompt('Gender: ');
let age = parseInt(prompt('Age: '));

const userProfile = createUserProfile(firstName, lastName, gender, age);

if (userProfile) {
    let userAnswer = prompt('Do you want to login to your profile? (Yes/No): ').toLowerCase();
    userAnswer === 'yes' ? login(userProfile) : console.log('Okay, maybe later!');
}
