// 1 - დავალება--------------------------------------------------------

let cars = ['audi','bmw', 'lexus', 'volkswagen', 'porsche', 'audi']; 
for (let i = 1; i < 5; i++) {
    console.log (cars[i]);
}

// 2 - დავალება--------------------------------------------------------

let names = ['giorgi', 'khatia', 'nini', 'ani', 'tea'];
for (let i = 0; i < names.length; i++) {
    if (names[i].length > 3) {
        console.log (names[i])
    }
}

// მეორე ჩანაწერი

let names = ['giorgi', 'khatia', 'nini', 'ani', 'tea'];
for (let x of names) {
    if (x.length >3) {
        console.log (x);
    }
}

// 3 - დავალება---------------------------------------------------------

let x = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let y = 0; y < x.length; y++) {
    if (x[y] % 2 == 0) {
        console.log (x[y]);
    }
}

let x = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let y = 0; y < x.length; y++) {
    if (x[y] % 2 != 0) {
        console.log (x[y]);
    }
}

// ან 

let x = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let y = 0; y < x.length; y++) {
    if (x[y] % 2 == 1) {
        console.log (x[y]);
    }
}

// 4 - დავალება---------------------------------------------------------

let numbers = [15, 67, 100, 5, 7, [80, 500] ] 

console.log (numbers[5][1]);

// 5 - დავალება---------------------------------------------------------

var person = {
    firstname: 'john',
    lastname: 'doe',
    age: 50,
    eyecolor: 'blue'
  };
  console.log (person['eyecolor']);

// ან 

var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };
  console.log (person.eyecolor);
  
// 6 - დავალება---------------------------------------------------------

let x = ['giorgi', 'khatia', 'nini']
console.log (x[0])
console.log (x[1])
console.log (x[2])

// 7 - დავალება---------------------------------------------------------

let names = ['giorgi', 'khatia', 'nini', 'akaki', 'nika']
    if (names.length == 5 && names[names.length-1] =='nika') {
        console.log ('მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა')
    }

    else {
        console.log ('error');
    }

let saxelebi = ['sandro', 'giorgi', 'khatia', 'nini', 'akaki', 'nika', 'nodari']
if (saxelebi.length == 7 && saxelebi[0] == 'sandro') {
    console.log ('მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო')
}
else {
    console.log ('error');
}

// 8 - დავალება------------------------------------------------------------

// 6 === “6”? (true ან false) 

// იქნება false, რადგან === შემთხვევაში ტიპების კონვერტაცია არ ხდება.



