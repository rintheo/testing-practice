# Testing Practice
A small practice involving creating a few scripts and their corresponding test scripts.

## Scripts
- ```capitalize(string)``` - capitalizes the first letter of ```string```.
- ```reverseString(string)``` - reverses the string ```string```.
- ```calculator``` - calculator Object with the following methods:
  - ```add(x, y)``` - returns ```x + y```.
  - ```subtract(x, y)``` - returns ```x - y```.
  - ```multiply(x, y)``` - returns ```x * y```.
  - ```divide(x, y)``` - returns ```x / y```.
- ```caesarCipher(plaintext, key)``` - encrypts ```plaintext``` by offsetting each character by ```key```. Ignores any non-alphabetic characters.
- ```analyzeArray(array)``` - analyzes an array of numbers (will throw an error if ```array``` is not an Array or if ```array``` contains any non-numeric data) and returns an Object with keys:
  - ```average``` - average of all numbers in the array.
  - ```min``` - minimum value of all numbers in the array.
  - ```max``` - maximum value of all numbers in the array.
  - ```length``` - length of the array.