//using test method
// let a="hello world abc";
// let b=/hello/
// let c=b.test(a);
// console.log(c); //<= output will be true



//match literal string  <= checking upper case lower case
// let a="hello world abc";
// let b=/HELLO/
// let c=b.test(a);
// console.log(c);  <=output will be false



// // //match literal string with different possibilities
// let a = "James has a pet cat.";
// let b = /dog|bird|fish/; // Change this line
// let c = b.test(a);
// console.log(c);   //<=output will be false



// //Ignore Case While Matching string literals
// let a="hello world abc";
// let b=/WORLD/i;
// let c=b.test(a);
// console.log(c); //<=== output will be true



// //.match method to match strings
// let a="hello world abc";
// let b=/world/;
// let c=a.match(b);
// console.log(c);  //<=output will be strings



//.match method(Find More Than the First Match)
//  let a="hello Hello abc";
//  let b=/hello/gi;              //<= or output will be null if we enter another string
//  let c=a.match(b);
//  console.log(c);



//.test method match anything with wildcard period
//   let a="i am hut";
//   let b=/.u/;
//   let c=b.test(a);
//   console.log(c);  // <=output will be true 



//Match Single Character with Multiple Possibilities
// let a = "i am boy";
// let b = /[aeiou]/gi; 
// let c = a.match(b); 
// console.log(c);    //<= output will be [i,a,o]



//Match Letters of the Alphabet in match method
// let a="i am boy";
// let b=/[a-z]/gi;
// let c=a.match(b);
// console.log(c);   //<=output will be [ 'i', 'a', 'm', 'b', 'o', 'y' ]



//Match Numbers and Letters of the Alphabet
//   let a="hello abc 1234";
//   let b=/[a-z0-3]/;
//   let c= a.match(b);
//   console.log(c);  //<= output will be ['h', 'e', 'l', 'l','o', 'a', 'b', 'c','1', '2', '3']
  


//negated character sets(you could  create a set of characters that you do not want to match)
//  let a="hello abc 123";
//  let b=/[^aeiou^0-9]/gi;
//  let c=a.match(b);
//  console.log(c);  //<== output will be ['h',,'l'.'l',,'b','c','']



// //print the character which have repeating one or more time 
// let a="msisssissipi";
// let b=/s+/gi;
// let c=a.match(b);
// console.log(c);  //<==output will be [ 's', 'sss', 'ss' ] 



//characters that occur zero or more times
// let a ="Aaaaaaarrrgh";
// let b=/Aa*/;
// let c=a.match(b);
// console.log(c);  //<=output will be [ 'Aaaaaaa', index: 0, input: 'Aaaaaaarrrgh', groups: undefined ]



//Find Characters with Lazy Matching
// let a = "<h1>Winter is coming</h1>";
// let b = /<.*?>/;
// let c = a.match(b);
// console.log(c);   
// output:[
//     '<h1>',
//     index: 0,
//     input: '<h1>Winter is coming</h1>',
//     groups: undefined
// ]



// search for patterns in specific positions in strings(you used the caret(^) character )
//  let a = "Cal and Ricky both like racing.";
//  let b = /^Cal/;
//  let c = b.test(a);
//  console.log(c);  //output will be (true)



//match ending patterns in strings(You can search the end of strings using the dollar sign character ($))
// let a = "The last car on a train is the caboose";
// let b = /caboose$/; 
// let c = b.test(a);
// console.log(a);  //<==output will be true



//Match All Letters and Numbers(This shortcut is equal to [A-Za-z0-9_].also uupercase and lowercase)
// let a = "The five boxing wizards jump quickly.";
// let b = /\w/g; // Change this line
// let c = a.match(b);
// console.log(c); //<== output will be(The five boxing wizards jump quickly.)



//opposite of small w (match letters and numbers but dont print)
// let a = "The five boxing wizards jump quickly. 123  WWW";
// let b = /\W/g; 
// let c = a.match(b);
// console.log(c); //<==dont print anything ,just blank array



//shortcut to look for digit characters is \d
// let a="2024 abc hello";
// let b=/\d/g;
// let c=a.match(b);
// console.log(c); //<==output will be 2024



//opposite of small d(match numbers but dont print) \D
//  let a="2024 abc hello";
//  let b=/\D/g;
//  let c=a.match(b);
//  console.log(c);   //<== output[' ','abc','hello']



//counting spaces in strings(\s)
// let a = "Whitespace is important in separating words";
// let b = /\s/g; // Change this line
// let c = a.match(b);
// console.log(c);  //<==output will be('','','','')



//not counting space in strings(\S)
// let a="Whitespace is important in separating words";
// let b=/\S/g;
// let c=a.match(b);
// console.log(c); //<== output will be(W,h,i,t,e,s,p,a,c,e,i,s,i,m,p,o,r,t,a,n,t,i,n,s,e,p,a,r,a,t,i,n,g,w,o,r,d,s)



//Specify Upper and Lower Number of Matches
//  let a = "Ohhh no";
//  let b = /Oh{3,6}\sno/; 
//  let c = b.test(a);
//  console.log(c);  //<=output will be true



//Specify Only the Lower Number of Matches
//  let a="ohhhh no";
//  let b=/oh{4,}\sno/;
//  let c=b.test(a);
//  console.log(c); //<== output will be true



//Specify Exact Number of Matches
// let a = "Timmmmber";
// let b = /Tim{4}ber/; 
// let c = b.test(a);
// console.log(c);   //<==output will be true