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
  
  