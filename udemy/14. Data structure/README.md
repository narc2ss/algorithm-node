## Data structures

### What do they do?

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

### Why so many?

Differnt data structures excel at different things. Some are highly specialized, while ohters (like arrays) are more generally used.

### Why care?

- The more time you spend as a developer, the more likely you'll need to use one of these data struectures
- You've already worked with many of them unknowingly
- Interviews

### Case

- Working with map/location data? &#8594; Use a **graph**
- Need an ordered list with fast inserts/removals at the beginning and end? &#8594; Use a **linked list**
- Web scraping nested HTML? &#8594; Use a **tree**
- Need to write a scheduler? &#8594; Use a **binary heap**

---

## ES6 Class syntax overview

### Objectives

- Explain what a class is
- Understand how JavaScript implements the idea of classes
- Define terms like abstraction, encapsulation and polymorphism
- Use ES6 classes to implement data structures

### What is a class?

A blueprint for creating objects with pre-defined properties and methods

### Why do we need to learn this?

We're hoing to impolement data structures as classes!

---

## The syntax

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

- The method to create new objects **must** be called constructor
- The class keyword creates a constant, so yo can not redefine it
- Watch out for the syntax as well

### Creating objects from classes

We use the **new** keyword

```js
class Student {
  constructor(firstname, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let firstStudent = new Student("Colt", "Steele");
let SecondStudent = new Student("Blue", "Steele");
```

---

## Instance Methods

```js
class Student {
  constructor(firstname, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
}

let firstStudent = new Student("Colt", "Steele");
firstStudent.fullName(); // Your full name is Colt Steele
```
