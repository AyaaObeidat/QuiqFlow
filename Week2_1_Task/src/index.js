"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var ask = function (r1, question) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                r1.question(question, function (answer) {
                    resolve(answer);
                });
            })];
    });
}); };
function createUserProfile(user) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, password, confirmPassword;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('To complete creating your profile, you must enter email and password');
                    _a = user;
                    return [4 /*yield*/, ask(r1, 'Email : ')];
                case 1:
                    _a.email = _b.sent();
                    return [4 /*yield*/, ask(r1, 'Password : ')];
                case 2:
                    password = _b.sent();
                    return [4 /*yield*/, ask(r1, 'ConfirmPassword : ')];
                case 3:
                    confirmPassword = _b.sent();
                    if (password === confirmPassword) {
                        user.password = password;
                        console.log('Your profile was successfully created.\n');
                        return [2 /*return*/, user];
                    }
                    else {
                        console.log('Passwords do not match. Please try again.\n');
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function login(user) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Logged in successfully!');
            console.log("Name: ".concat(user.name));
            console.log("Email: ".concat(user.email));
            return [2 /*return*/];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var uName, uGender, uAge, user, userProfile, userAnswer, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('=== Create User Profile ===');
                    console.log('To create your profile, please enter:');
                    return [4 /*yield*/, ask(r1, 'Full Name : ')];
                case 1:
                    uName = _b.sent();
                    return [4 /*yield*/, ask(r1, 'Gender : ')];
                case 2:
                    uGender = _b.sent();
                    return [4 /*yield*/, ask(r1, 'Age : ')];
                case 3:
                    uAge = _b.sent();
                    user = {
                        name: uName,
                        age: parseInt(uAge),
                        gender: uGender,
                        email: "",
                        password: "",
                    };
                    return [4 /*yield*/, createUserProfile(user)];
                case 4:
                    userProfile = _b.sent();
                    if (!userProfile) return [3 /*break*/, 9];
                    return [4 /*yield*/, ask(r1, 'Do you want to login to your profile? (Yes/No): ')];
                case 5:
                    userAnswer = _b.sent();
                    if (!(userAnswer === 'yes')) return [3 /*break*/, 7];
                    return [4 /*yield*/, login(userProfile)];
                case 6:
                    _a = _b.sent();
                    return [3 /*break*/, 8];
                case 7:
                    _a = console.log('Okay, maybe later!');
                    _b.label = 8;
                case 8:
                    _a;
                    _b.label = 9;
                case 9:
                    r1.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
