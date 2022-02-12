/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4, ];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);



const teamMembers = [{
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }, {
    name: 'Nelly',
    profession: 'Accountant',
    yrsExperience: 4
  }, {
    name: 'David',
    profession: 'Technician',
    yrsExperience: 2
  }
];

// Totaling a specific object property
let totalYrsExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalYrsExp);



// Grouping by a property, and totaling it too
let expByProf = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {

    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;

  }
  return acc;

}, {});
console.log(expByProf);
console.log("----------------------challenge-----------------------------------------------");
// find student with the highest score in english

let students = [{
    name: 'John',
    subjects: ['maths', 'english', 'cad'],
    teacher: {
      maths: 'Harry',
      english: 'Joan',
      cad: 'Paul'
    },
    results: {
      maths: 90,
      english: 75,
      cad: 87
    },
  },
  {
    name: 'Emily',
    subjects: ['science', 'english', 'art'],
    teacher: {
      science: 'Iris',
      english: 'Joan',
      art: 'Simon'
    },
    results: {
      science: 93,
      english: 73,
      art: 95
    },
  },
  {
    name: 'Adam',
    subjects: ['science', 'maths', 'art'],
    teacher: {
      science: 'Iris',
      maths: 'Harry',
      art: 'Simon'
    },
    results: {
      science: 93,
      english: 88,
      maths: 97,
      art: 95
    },
  },
  {
    name: 'Fran',
    subjects: ['science', 'english', 'art'],
    teacher: {
      science: 'Iris',
      english: 'Joan',
      art: 'Simon'
    },
    results: {
      science: 93,
      english: 87,
      art: 95
    },
  }
];
/** 
const biggest = students.map(student => ({
  name: student.name,
  max: student.results.english
})).reduce((acc, curr) => (acc.max > curr.max) ? acc : curr, {});


console.log(biggest); */

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name, results:{english}}) => {
    if(max < english) {
        acc = {name:name, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest);
*/
const biggest = students.reduce((acc, curr) => {
  acc = acc.max > curr.results.english ? acc : {
    name: curr.name,
    max: curr.results.english
  };
  return acc;
}, {
  name: "",
  max: 0
});

console.log(biggest);