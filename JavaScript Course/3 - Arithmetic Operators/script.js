/*
Arithmetic Operators:
    - Operands (values, variables, etc.)
    - Operators (+ 0 * /)
    ex. x = 11 + 6 / 2 * 4
*/

// Let's pretend I'm a teacher and I have a group of students
let students = 28;
console.log(students);

// A new student joins the class, so I must increment students by 1
students = students + 1;
console.log(students);

// A student DIES, so I must decrement students by 1
students = students - 1;
console.log(students);

// I accidentally clone my students, so the number of them must double
students = students * 2;
console.log(students);

// I purposely MURDER my cloned students, so the number of them must half
students = students / 2;
console.log(students);

// Oh, and here's raising stuff to powers
students = students ** 2;
console.log(students);

// Here's modulus
students = students % 13;
console.log(students);


// Here's the arithmetic shortcuts (augmented assignment operators)

students = 28; // Just reassign the scenarios
console.log(students);

students += 1;
console.log(students);

students -= 1;
console.log(students);

students *= 2;
console.log(students);

students /= 2;
console.log(students);

students **= 2;
console.log(students);

students %= 2;
console.log(students);


// To most efficiently increase a variable by ONLY 1, you can use the ++ operator
let x = 5;
x++;
console.log(x);

// To most efficiently decrease a variable by ONLY 1, you can use the -- operator
let y = 5;
y--;
console.log(y);


/*
Operator Precendence (PEMDAS):
    1. Parentheses ()
    2. Expontnets
    3. Multiplication & Division & Modulo
    4. Addition & Subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
//         = 1 + (2*3) + (4**2)
//         = 1 + 6     + 16
//         = 7         + 16
//         = 23  
console.log(result);

let result2 = 12 % 5 + 8 / 2;
//          = (12%5) + (8/2)
//          = 2      + 4
//          = 6
console.log(result2);

let result3 = 6 / 2 ** (2 + 5);
//          = 6 / (2**7)
//          = 6 / 128
//          = 0.046875
console.log(result3);