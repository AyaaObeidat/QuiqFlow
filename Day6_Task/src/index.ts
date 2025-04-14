import * as readline from 'readline';
export {};
const r1 = readline.createInterface({
    input:process.stdin,
    output : process.stdout
});
const ask = async (r1:readline.Interface , question:string):Promise<string> =>{
    return new Promise((resolve)=>{
       r1.question(question,(answer)=>{
        resolve(answer);
       });
    });
}
interface UserProfile{
    name:string;
    gender:string;
    email:string;
    password:string;
    age:number;
}

async function createUserProfile(user:UserProfile):Promise<UserProfile|null> {
    console.log('To complete creating your profile, you must enter email and password');
    user.email = await ask(r1,'Email : ');
    let password = await ask(r1,'Password : ');
    let confirmPassword = await ask(r1,'ConfirmPassword : ');

    if (password === confirmPassword){
        user.password = password;
        console.log('Your profile was successfully created.\n');
        return user;
    }else {
        console.log('Passwords do not match. Please try again.\n');
        return null;
    }
}

async function login(user : UserProfile){
    console.log('Logged in successfully!');
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
}

async function main() {
console.log('=== Create User Profile ===');
console.log('To create your profile, please enter:');
let uName = await ask(r1,'Full Name : ');
let uGender = await ask(r1,'Gender : ');
let uAge = await ask(r1,'Age : ');

let user : UserProfile = {
    name : uName,
    age :parseInt(uAge),
    gender : uGender,
    email : "",
    password : "",
};

const userProfile = await createUserProfile(user);

if (userProfile) {
    let userAnswer = await ask(r1,'Do you want to login to your profile? (Yes/No): ');
        userAnswer === 'yes' ?await login(userProfile) : console.log('Okay, maybe later!');
}
r1.close();
} 
main();
