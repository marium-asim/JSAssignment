Chapter21-25
Task1

// var firstName=prompt("Enter your First Name");
// var secondName=prompt("Enter your Last Name");
// var fullName=firstName+" "+ secondName;
// alert("Welcome " + fullName);

Task2

// var input=prompt("Enter your favorite mobile phone model");
// var len=input.length;
// document.write("My favorite phone is: " + input);
// document.write("<br>Length of string: "+ len);

Task3

// var string= "Pakistani";
// var ind=string.indexOf("n");
// document.write("String: " + string);
// document.write("<br>Index of 'n': " + ind);

Task4
 
// var string= "Hello World";
// var ind=string.lastIndexOf("l");
// document.write("String: " + string);
// document.write("<br>Last Index of 'l': " + ind);

Task5

// var string= "Pakistani";
// var ind=string.charAt(3);
// document.write("String: " + string);
// document.write("<br>Character at index 3: " + ind);
 
Task6

// var firstName=prompt("Enter your First Name");
// var secondName=prompt("Enter your Last Name");
// var s=" "
// var fullName=firstName.concat(s,secondName);
// alert("Welcome " + fullName);

Task7

// var city="Hyderabad";
// var newCity=city.replace("Hyder","Islam");
// document.write("City: " + city);
// document.write("<br>After replacement: " + newCity);

Task8

// var message="Ali and Sami are best friends. They play cricket and football together.";
// var newMessage=message.replace(/and/g, "&");
// document.write("Message: " + message);
// document.write("<br>After replacement: " + newMessage);

Task9

// var val="472";
// var no=parseInt(val);
// document.write("Value: " + val);
// document.write("<br>Type: " + typeof(val));
// document.write("<br>Value: " + no);
// document.write("<br>Type: " + typeof(no));

Task10

// var input=prompt("Enter your favorite dry fruit");
// var newInp=input.toUpperCase();
// document.write("User Input: " + input);
// document.write("<br>Upper case: " + newInp);

Task11

// var input=prompt("Enter your favorite country");
// var newInp=input.slice(1);
// var lowerCase=newInp.toLowerCase();
// var upperCase=input.charAt(0).toUpperCase();
// document.write("User Input: " + input);
// document.write("<br>Upper case: " + upperCase.concat(lowerCase));

Task12

// var num=35.36;
// var string=num.toString();
// document.write("Number: " + num);
// document.write("<br>Result: " + string.replace(".",""));

Task13

// var userName=prompt("Please Enter Your Name");
// for(var i=0;i<userName.length;i++)
// {
//     if(userName.charCodeAt(i)===33 || userName.charCodeAt(i)===44 || userName.charCodeAt(i)===46 || userName.charCodeAt(i)===64)
//     { alert("Please enter a valid username");
//     break;
// }
// }

Task14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search=prompt("Welcome to ABC Bakery. What do you want to order Sir/ Ma'am?");
// var item=search.toLowerCase();
// var b,index;
// for(var i=0;i<A.length;i++)
// {
//     if(item===A[i])
//     {
//         b=1;
//         index=i;
//         break;
//     }
// }
// if(b===1)
// {
//     alert(item + " is available at index " + index + " in our bakery!");
// }
// else
// {
//     alert("We are sorry. "+item +" is not available in our bakery.");
// }

Task15

// var password=prompt("Please enter your password");
// alert("Entered password: "+ password)
// if(password.length<6)
// {
//     alert("\nPassword must atleast be 6 characters long\nPlease enter a valid password");
// }
// if(password.charCodeAt(0)>=48 && password.charCodeAt(0)<=57)
// {
//     alert("\nPassword cannot begin with a number\nPlease enter a valid password");
// }
// for(var i=0;i<password.length;i++)
// {
//     if((password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90) || (password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57) || (password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122))
//     {
        
//     }
//     else{
//         alert("\nPassword can only contain alphabets and numbers\nPlease enter a valid password");
//         break;
//     }
//     }

Task16

// var university="University of Karachi";
// var string=university.split("");
// for(var i=0;i<string.length;i++)
// document.write(string[i] + "<br>");

Task17

// var input=prompt("Enter your favorite country");
// var len=input.length;
// var lastInd=len-1;
// var lastChar=input.slice(lastInd);
// document.write("User Input: " + input);
// document.write("<br>Last character of input: " + lastChar);

Task18

// var string="The quick brown fox jumps over the lazy dog";
// var count=0;
// for(var i=0;i<string.length;i++)
// {
//     if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The"  ) 
//     count++;
// }
// document.write("Text: " + string);
// document.write("<br>There are " + count + " occurence(s) of the word 'the'");


Chapter26-30

Task1

// var num=+prompt("Enter a positive integer");
// if(num<0)
// {
//     alert("Enter a positive integer");
// }
//else {
// document.write("Number: " + num);
// document.write("<br>Round off value: " + Math.round(num));
// document.write("<br>Floor value: "+ Math.floor(num));
// document.write("<br>Ceil value: "+ Math.ceil(num));
//}

Task2

// var num=+prompt("Enter a negative floating point");
// if(num>0)
// {
//     alert("Enter a negative floating point");
// }
// else{
// document.write("Number: " + num);
// document.write("<br>Round off value: " + Math.round(num));
// document.write("<br>Floor value: "+ Math.floor(num));
// document.write("<br>Ceil value: "+ Math.ceil(num));
// }

Task3

// var num=+prompt("Enter a number");
// if(num<0)
// {
//  document.write("The absolute value of " + num + " is " + num*-1);
// }
// else
// {
//     document.write("The absolute value of " + num + " is " + num);
// }

Task4

// var random, improvedNum, dice;
// for(var i=0;i<3;i++) {
// random = Math.random();
// improvedNum = (random * 6) + 1;
// dice = Math.floor(improvedNum);

// document.write("<br>Random dice value: " + dice);
// }

Task5

// var random=Math.random()*2;
// var toss=Math.ceil(random);
// if(toss===2)
// {
//     document.write(toss);
//     document.write("<br>Random coin value: Heads");
// }
// else
// {
    
//     document.write(toss);
//     document.write("<br>Random coin value: Tails");
// }

Task6

// var random=(Math.random()*100) + 1;
// var floor=Math.floor(random);
// document.write("Random number between 1 and 100: "+floor);

Task7

// var input=prompt("Enter your weight in kg(s)");
// var weight=parseFloat(input);
// document.write("The weight of user is " + weight + " kilograms");

Task8

// var random=(Math.random()*10) + 1;
// var floor=Math.floor(random);
// var input=+prompt("Enter a number between 1 and 10");
// if(input===floor)
// {
//     alert("Congratulations! You guessed it correctly.")
// }
// else{
//     alert("Try again!");
// }

Chapter31-34

Task1

// var d=new Date();
// document.write(d);

Task2

// var d=new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"];
// var mon=d.getMonth();
// document.write("Current month: " + monthNames[mon]);

Task3

// var d=new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day=d.getDay();
// alert("Today is " + dayNames[day]);

Task4

// var d=new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day=d.getDay();
// if(dayNames[day]==="Sat" || dayNames[day]==="Sun")
// {
// alert("It's Fun day");
// }  

Task5

// var d=new Date();
// var day=d.getDate();
// if(day>=1 && day<=15)
// {
// alert("First fifteen days of the month");
// }  
// else if(day>=16 && day<=31)
// {
//     alert("Last fifteen days of the month");
// }

Task6

// var d=new Date();
// var today=d.getTime();
// document.write("Current Date: "+d);
// var d=new Date("January 1, 1970");
// var msec=today-d.getTime();
// var min=msec/(1000*60);
// document.write("<br>Elapsed milliseconds since January 1,1970: "+msec);
// document.write("<br>Elapsed minutes since January 1,1970: "+min);

Task7

// var d=new Date();
// var hours=d.getHours();
// if(hours>=0 && hours<=11)
// {
//     alert("It's AM");
// }
// else if(hours>=12 && hours<=23)
// {
//     alert("It's PM");
// }

Task8

// var laterDate=new Date("December 31, 2020");
// document.write("Later date: " + laterDate);

Task9

// var today=new Date();
// var t=today.getTime();
// var d=new Date("April 24, 2020");
// var msec=d.getTime();
// var todayMsec=t-msec;
// var days=todayMsec/(1000*60*60*24);
// document.write(Math.round(days) + " days have passed since 1st Ramadan, 2020");

Task10

// var d=new Date();
// var ref=d.getTime();
// var begin=new Date("January 1,2015");
// var sec=begin.getTime();
// var elapsed=(ref-sec)/1000;
// document.write("On reference date " + d);
// document.write("<br>" + elapsed + " seconds have passed since the beginning of 2015")

Task11

// var d=new Date();
// document.write("Current date: " + d);
// var hours=d.getHours()+1;
// var newHours=d.setHours(hours);
// document.write("<br>1 hour from now, it'll be " + d);

Task12

// var d=new Date();
// document.write("Current date: " + d);
// var year=d.getFullYear()-1001;
// var newYear=d.setFullYear(year);
// document.write("<br>100 years back, it was " + d);

Task13

// var d=new Date();
// var year=d.getFullYear();
// var input=+prompt("Enter your age");
// var birthYear=year-input;
// document.write("Your age is " + input);
// document.write("<br>Your birth year is " + birthYear);

Task14

// var customerName="ABC Customer";
// var d=new Date();
// var mon=d.getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"];
// var numOfUnits=410.9856;
// var chargesPerUnit=16;
// var netAmount=numOfUnits*chargesPerUnit;
// var fine=350;
// var grossAmount=netAmount+fine;
// var str="K-Electric Bill"

// document.write(str.bold().fontsize(30));
// document.write("<br><br>Customer Name: " + customerName.bold()+ "<br>Month: " + monthNames[mon] + "<br>Number of units: " + numOfUnits.toFixed(2) + "<br>Charges per unit: "+chargesPerUnit);
// document.write("<br><br>Net Amount Payable (within Due Date): "+netAmount.toFixed(2)+"<br>Late Payment Surcharge: " + fine+"<br> Gross Amount Payable (after Due Date): "+ grossAmount.toFixed(2));

Chapter35-38

Task1

// function date()
// {
//     var d=new Date();
//     document.write(d);
// }

// date();

Task2

// function name()
// {
//     var firstName=prompt("Enter your first name");
//     var lastName=prompt("Enter your last name");
//     alert("Hello " + firstName+" "+lastName);
// }
// name();

Task3

// function add(a,b)
// {
//     return a+b;
// }

// var num1=+prompt("Enter 1st number");
// var num2=+prompt("Enter 2nd number");
// var result=add(num1,num2);
// alert(num1 + " + " + num2 + " = " + result);

Task4

// function calculation(a,b,op)
// {
//     if(op==="+")
//     {
//         return a+b;
//     }
//     else if(op==="-")
//     {
//         return a-b;
//     }
//     else if(op==="*")
//     {
//         return a*b;
//     }
//     else if(op==="/")
//     {
//         return a/b;
//     }
//     else if(op==="%")
//     {
//         return a%b;
//     }
// }
// var num1=+prompt("Enter 1st number");
// var num2=+prompt("Enter 2nd num");
// var op=prompt("Enter operator");
// var result=calculation(num1,num2,op);
// alert(num1 + op + num2+"="+result);

Task5

// function square(a)
// {
//     return a*a;
// }
// var num=+prompt("Enter a number");
// var result=square(num);
// alert("Square of " + num + " = " + result);

Task6

// var input=prompt("Enter a number");

// function factorial(num)
// {   var f;
//     if(num===1)
//     {
//         return (1);
//     }
//     else
//     {
//       f=num*factorial(num-1);
//     }
   
//     return f;

// }

// var fact=factorial(input);
// alert("Factorial of " + input + " is " + fact);


Task7

// function counting(num1,num2)
// {
//     for(var i=num1;i<=num2;i++)
//     {
//         document.write(i + "<br>");
//     }
// }

// var num1=prompt("Enter first number");
// var num2=prompt("Enter last number");
// counting(num1,num2);

Task8

// function calculateHypotenuse(b,p)
// {   
//      var baseSq,perpSq;

//     function calculateSquare()
//     {
//        baseSq=b*b;
//        perpSq=p*p;
//     }
//     calculateSquare();
//    var hyp=Math.sqrt(baseSq+perpSq);
//    return hyp;
// }

// var base=+prompt("Enter the value of base");
// var perp=+prompt("Enter the value of perpendicular");

// var result=calculateHypotenuse(base,perp);
// alert("Hypotenuse= " + result.toFixed(2));


Task9

// function area(w,h)
// {
//     return w*h;
// }

// var width=10;
// var height=17;
// var result=area(width,height);
// var res=area(3,7);
// document.write("Area of 1st Rectangle= " + result + "<br>Area of 2nd Rectangle= " + res);

Task10

// var string=prompt("Enter a word/phrase");
// var check="";
// for(var i=string.length-1;i>=0;i--)
// {
//     check+=string[i];
// }
// if(string===check)
// {
//     alert(string + " is a palindrome word");
// }
// else{
//     alert(string + " is not a palindrome word");
// }

Task11
 
// var string=prompt("Enter a sentence");
// function capital(string)
// {
// var str=string.split(" ");

// for(i=0;i<str.length;i++)
// {
//     var s=str[i].slice(0,1);
//     var st=str[i].slice(1);
//     document.write(s.toUpperCase() + st + " ");
// }
// }
// capital(string);

Task12

// var string=prompt("Enter a sentence");
// function longest(string)
// {
//     var str=string.split(" ");
//     for(var i=0;i<str.length-1;i++)
// {
//    for(var j=1;j<str.length;j++)
//    {
//     if(str[i].length<str[j].length)
//     {
//         t=str[i];
//         str[i]=str[j];
//         str[j]=t;
//     }
// }
  
// }
// alert(str[0]);
// }

// longest(string);

Task13

// var string="JSResourceS.com";
// var letter="o";


// function countOcc(string,l)
// { var count=0;
// for(var i=0;i<string.length;i++)
// {
//     if (string.slice(i,i+1) === l) 
//     { count++; }
// }
// document.write("Text: " + string);
// document.write("<br>There are " + count + " occurence(s) of the letter " + l);
// }

// countOcc(string,letter);

Task14

// var r=7;
// function calcCircumference(rad)
// {
//     var result=2*3.142*rad;
//     document.write("The circumference of circle= " + result);
// }
// function calcArea(rad)
// {
//     var result=3.142*Math.pow(rad,2);
//     document.write("<br>The area of circle= " + result);
// }

// calcCircumference(r);
// calcArea(r);

