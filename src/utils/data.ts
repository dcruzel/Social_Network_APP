const names = [
  'Aaron', 
  'Alex', 
  'Angel',
  'Boston',
  'Storm',
  'Stephen', 
  'Christina', 
  'Liz', 
  'Dan',
];
const emails = [
  '@gmail.com', 
  '@yahoo.com', 
  '@yahoo.ca', 
  '@hotmail.com',
  '@rogers.com',
  '@outlook.com',
  '@rogers.com',
  '@Mailbox.org',
]
const thoughtsBodies = [
  'How to make a friend',
  'What is the meaning of Thanksgiving?',
  'Best day ever',
  'Write a thank you email',
  'Wonderful life movie comments',
  'How to create youtube videos',
  'Fun activities',
];

// const possibleReactions = [
//   'Happy',
//   'Yay!',
//   'This was awesome',
//   'Thankful',
//   'Sad',
//   'Oooh',
//   'Angry',
// ];

// Get a random item given an array
const getRandomArrItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username and email
const getRandomUsername = () =>
  `${getRandomArrItem(names)}`;
const getRandomEmail = ()=>
  `${getRandomArrItem(names)}${getRandomArrItem(emails)}`

// Function to generate random videos that we can add to the database. Includes video responses.
const getRandomThoughts = (int: number) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtsBodies),
     //reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

// Create the reactions that will be added to each thought
// const getThoughtReactions = (int: number) => {
//   if (int === 1) {
//     return getRandomArrItem(possibleReactions);
//   }
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       responseBody: getRandomArrItem(possibleReactions),
//       username: getRandomUsername(),
//     });
//   }
//   return results;
// };

// Export the functions for use in seed.js 
// Add back getVideoResponses to functions in export
export { getRandomUsername, getRandomEmail, getRandomThoughts };
