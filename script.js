/* eslint-disable no-unused-vars */
"use strict";

// Data needed for a later exercise
// eslint-disable-next-line no-unused-vars

// // console.log(menu);
// // const restaurantCopy = { ...restaurant };

// // restaurantCopy.name = 'burgers';

// //  console.log(restaurantCopy.name);

// //  console.log(restaurant.name);

// // restaurant.orderDelivery({
// // starterIndex:2,
// // mainIndex:2,
// // time:'22:00',
// // adress:"scarisoara"
// // });

// // const [a, b, c] = restaurant.categories;

// // console.log(a,b,c);

// // console.log( restaurant.order(2,0));

// // console.log(starter,main);

// [starter, main] = [main, starter];
// // console.log(starter,main);

// let nested = [2, 4, [5, 6]];

// let [x, , y] = nested;
// // console.log(x,y);

// // const [p=1,q=1,r=1]=[8,3,9];
// // console.log(p,q,r);

// const { mainMenu: e1, openingHours: e2, categories: e3 } = restaurant;
// // console.log(mainMenu);

// const {
//   mainMenu: [e, i, l],
//   openingHours: hours,
// } = restaurant;
// // console.log(e, i, l);

// // console.log(hours);
// const { thu, fri, sat } = hours;
// // console.log(thu);

// const { open: ez, close: pz } = thu;

// // console.log(ez, pz);

// // const { menu = [], starterMenu: starters = [] } = restaurant;

// // console.log(menu, starters);

// let a = 111;
// let b = 999;
// // let c;

// const obj = { a: 23, b: 28, c: 14 };

// // ({ a, b, c } = obj);
// // console.log(a, b, c);

// //nested obj

// const {
//   fri: { open: o, close: c },
// } = hours;
// // console.log(o, c);

// const [ezz, ...food] = [restaurant.mainMenu, restaurant.starterMenu];
// // console.log(ezz);
// // console.log(food);

// //Objects

// const { saturday, ...weekdays } = restaurant.openingHours;

// // console.log(weekdays);

// console.log(`-----OR-----`);
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// // add(2,3);
// // add(5,3,6,2);

// const ezzz = [23, 5, 11];
// // add(...ezzz);

// // restaurant.numGuests=23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 2;
// console.log(guest1);

// const guests2 = restaurant.numGuests || 10;

// console.log(guests2);

// console.log(`-----AND-----`);

// console.log(0 && 'Jhonas');
// console.log(7 && 88);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'olives');
// }

// restaurant.orderPizza && restaurant.orderPizza(`dance`, `ezz`);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const weekdays = ["mon", "tue", "wed", "thu", "friday", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, adress, time }) {
    console.log(`order recieved! ${this.starterMenu[starterIndex]} 
    and ${this.mainMenu[mainIndex]} 
    will be delivered at:  ${adress} , time:${time}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

console.log(`------------`);
const res1 = {
  name: "Mancare",
  numGuests: 20,
};

const res2 = {
  name: "food",
  owner: "Ionut",
};

// res1.numGuests =res1.numGuests || 10;
// res2.numberGuests =res2.numGuests ||10;

res1.numGuests ||= 10;
res2.numGuests ||= 121;
// console.log(res1, res2);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// // console.log(players1);
// const [gk, ...fieldPlayers] = players1;
// // console.log(fieldPlayers);
// const [...allPlayers] = [...players1, ...players2];
// // console.log(allPlayers);

// const [...players1Final] = [...players1, "Thiago", "Coutinho", "Perisic"];

// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;

// console.log(team1, draw, team2);

// const printGoals = function (...playerNames) {
//   console.log(...playerNames);
//   console.log(playerNames.length);
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// const odd = function (team1, team2) {
//   const x = (team2 > team1 && team1) || team2;

//   team2 > team1 &&
//     console.log(` Team1 is more likely to win and the odd is : ${x}`);
//     team1 > team2 &&
//     console.log(`Team2 is more likely to win and the odd is :${x}`);
//   };
// odd(team1, team2);
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for(const item of menu) console.log(item);

// for(const [i,el] of menu.entries()) console.log(`${i+1}: ${el}`);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "friday", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day},we open at ${open}`);
}

// console.log(restaurant.order?.(2, 1) ?? "Method does not exist");

const users = [{ name: "Jonas", email: "hello@" }];

// console.log(users[0]?.name ?? "User array empty");
const properties = Object.keys(openingHours);

// console.log(properties);

let openStr = `we are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day},`;
}
// console.log(openStr);

const values = Object.values(openingHours);

// const entries = Object.entries(openingHours);

// console.log(entries);

// for (const [key, { open, close }] of entries)
//   console.log(`On ${key} we are open at ${open} and colsed at ${close} `);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// for(const [goal,name] of game.scored.entries())
// console.log(`Goal ${goal+1}:${name}`);
let average = 0;

const entries = Object.entries(game.odds);

for (const x of entries) {
  average += x;
}
average = average / entries.length;
console.log(average);

for (const [team, value] of entries) {
  let teamStr=team==='x' ? 'draw':game[team];
  console.log(`Odd of victory ${teamStr} :${value}`);
}




