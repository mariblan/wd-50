// Get your shorts on - this is an array workout!
// ## Array Cardio

// Some initial data we can work with:
// Working with arrays with primitive data:
const scientifics = [
  'Albert Einstein',
  'Isaac Newton',
  'Marie Curie',
  'Johanes Kepler',
  'Galileo Galilei',
];
const yearOfBirth = [1879, 1643, 1867, 1571, 1564];
const science = ['physicist', 'mathematician', 'physicist'];

// Array.prototype.filter()
// 1. Filter the years of birth in the year array to retrieve only those between 1500 and 1600
// and log the output to the console.
// Expected output: an array containing two years: 1571 and 1564

// Array.prototype.indexOf()
// 2. Find the index of the items in the expected output of step 1 and log them into the console.
// Expected output: 3 and 4.

// Array.prototype.push()
// 3. Add the expected output of step 2 into a new array named arrayOfIndex and log it into the console.
// Expected output: [3, 4]

// Array.prototype.filter()
// 4. Find out which elements of the scientifics array have the same index as the items of the yearOfBirth
// that were outputted to the console in step 1 and log it into the console.
// Expected output: [Johanes Kepler, Galileo Galilei].

// Array.prototype.map()
// 5. Log into the console the next sentence using the scientifics array: "Hi, [name of the scientific]"
// Expected output: 5 sencences: "Hi, Albert Einstein", "Hi, Isaac Newton", "Hi, Marie Curie",
// "Hi, Johanes Kepler" and "Hi, Galileo Galilei".

// Array.prototype.find()
// 6. Find which item on the scientifics array has the same index as the item [1867] in the array yearOfBirth.
// Expected output: [Marie Curie].
// and

// Array.prototype.push()
// 6. Push the expected output of step 6 in a new array named sentence1.
// Expected output: ["Marie Curie"].

// String.prototype.split()
// 7.1 Turn the next string into an array: "was born in ."
// 7.2. Store the output in an array named sentence2.
// Expected output: ["was", "born", "in"]

// Array.prototype.concat()
// 8.1. Combine the resulting arrays of step 6 and 7.
// 8.2. Store result on a new array named sentence.
// Expected output: ["Marie Curie", "was", "born", "in", "."]

// Array.prototype.splice()
// 9. Add the item with index 3 in the yearOfBirth array to the new array created in step 8
// in between the last two elements.
// Expected output: ["Marie Curie", "was", "born", "in", 1867, "."]

// Array.prototype.join()
// 10. Transform the sentence array in a string.
// Expected output: a string: Marie Curie was born in 1867 .

// Array.prototype.pop()
// 11.1. Remove the last item of the yearOfBirth array.
// 11.2. Log the item into the console. Expected output: [1564]
// 11.3. Log the resulting yearOfBirth array after the last item has been removed. Expected output:
// [1879, 1643, 1867, 1571]

// Array.prototype.slice()
// 12. Substract the elements that don't start with 18 on the resulting yearOfBirth array on step 11.3.

// Array.prototype.map()
// 13. Give us an array filled with the scientifics names and their science
// Expected output:
// ["Albert Einstein, physicist", "Isaac Newton, mathematician", "Marie Curie, physicist",
// "Johannes Kepler", "Galileo Galilei"]

// 14. Sort the scientifics array alphabetically.
// Expected output: ['Albert Einstein', 'Galileo Galilei', 'Isaac Newton', 'Johanes Kepler', 'Marie Curie']

// Array.prototype.sort()
// 15. Sort the yearOfBirth by smaller to bigger.
// Expected output: [1564, 1571, 1643, 1867, 1879]

// Array.prototype.sort()
// 16. Sort the yearOfBirth by bigger to smaller.
// Expected output: [1879, 1867, 1643, 1571, 1564]


// BONUS
// 17. Give us an array filled with the scientifics emails by using the information in the scientifics
// and the yearOfBirth arrays.
// The emails should be lowercase firstName + date of birth @ scientific.com
// Expected output:
// eg: ["albert1879@scientific.com", "isaac1643@scientific.com", "marie1867@scientific.com", "johannes1571@scientific.com", , "galileo1564@scientific.com"]
// To do this activity, you will have to first think about what steps you need to follow to achieve the end result.
// This is the process you will have to do as a programmer in the future, so this is a good time to start developing
// the skill to split big tasks into smaller ones.
// You can use any of the array methods that you used in the previous activities.




// Activity 2 - not today

// Take some time to analyze the data structure
// Do each objects have the exact same data?
const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
    categories: ['man', 'physicist'],
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
    categories: ['man', 'mathematician'],
  },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
    categories: ['woman', 'physicist'],
  },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
    categories: ['woman', 'physicist'],
  },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
    categories: ['woman', 'physicist'],
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
    categories: ['woman', 'inventor'],
  },
];

// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
// Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler

// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
// Expected output: an array containing only one inventor: Isaac Newton

// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
// Expected output: an array containing only one inventor: Albert Einstein

// Array.prototype.map()
// 4. Give us an array filled with the inventors first and last names
// Expected output:
// ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]

// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// Expected output:
// eg: ["albert1879@inventor.com", "isaac1643@inventor.com", "galileo1564@inventor.com", "marie1867@inventor.com", "johannes1571@inventor.com", "nicolaus1473@inventor.com", "max1858@inventor.com", "katherine1898@inventor.com", "ada1815@inventor.com", "sarah e.1855@inventor.com", …]

// Array.prototype.sort()
// 6. Sort the inventors by birthdate, youngest to oldest (eg: the one whose birth year is closer to us on top)
// Expected output: an array of inventors going from "Katherine Blodgett" -> to "Nicolaus Copernicus"

// Array.prototype.reduce()
// 7. How many years did all the inventors live all together?

// Array.prototype.sort()
// 8. Sort the inventors by years lived

// Array.prototype.filter()
// 9. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevardsInParis = [
  'Boulevard Auguste-Blanqui',
  'Boulevard Barbès',
  'Boulevard Beaumarchais',
  "Boulevard de l'Amiral-Bruix",
  'Boulevard Mortier',
  'Boulevard Poniatowski',
  'Boulevard Soult',
  'Boulevard des Capucines',
  'Boulevard de la Chapelle',
  'Boulevard de Clichy',
  'Boulevard du Crime',
  "Boulevard du Général-d'Armée-Jean-Simon",
  'Boulevard Haussmann',
  "Boulevard de l'Hôpital",
  'Boulevard des Italiens',
  'Boulevard Lefebvre',
  'Boulevard de la Madeleine',
  'Boulevard de Magenta',
  'Boulevard Malesherbes',
  'Boulevard Marguerite-de-Rochechouart',
  'Boulevard Montmartre',
  'Boulevard du Montparnasse',
  'Boulevard Raspail',
  'Boulevard Richard-Lenoir',
  'Boulevard Saint-Germain',
  'Boulevard Saint-Michel',
  'Boulevard de Sébastopol',
  'Boulevard de Strasbourg',
  'Boulevard du Temple',
  'Boulevard Voltaire',
  'Boulevard de la Zone',
];

// Array.prototype.sort()
// 10. Sort the people alphabetically by last name

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.reduce()
// 11. Sum up the instances of each of these vehicles
// (eg: how many times each vehicle appears in the array)

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'skateboard',
];

// Array.prototype.some()
// 12. Is at least one person 18 years old?

const family = [
  { name: 'Lily', year: 2009 },
  { name: 'Leah', year: 2011 },
  { name: 'Liv', year: 2000 },
  { name: 'Lydia', year: 2015 },
];

// Array.prototype.every
// 13. Do all names of the family members start with the letter L?
