// 1. (* Using the ? optional chaining operator *) //
const user = {
  name: "Sunny",
  socials: {
    github: "https://github.com/SunnyAjimalJS",
    linkedin: "https://www.linkedin.com/in/sunny-ajimal/",
  },
};

// Traditional way:
if (user && user.socials) {
  // console.log(user.company.street); // Output: undefined
}
// Using the ? optional chaining operator:
// console.log(user?.socials?.github); // Output: https://github.com/SunnyAjimalJS
// console.log(user?.socials?.facebook); // Output: undefined

// 2. (* Using the Ternary operator *) //
let myScore = 90;
let grade;

// Traditional way:
if (myScore > 85) {
  grade = "A";
} else {
  grade = "B";
}

// Using the ternary operator:
let grade = myScore > 85 ? "A" : "B";
let myGrade = `Your grade is ${grade}`;
// console.log(myGrade); // Output: Your grade is A
