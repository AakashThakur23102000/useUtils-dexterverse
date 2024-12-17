# Installation

To install and set up the library, run:

```bash
  npm i useutils-dexterverse
```
    
# Purpose
`useutils-dexterverse` is a utility library designed to simplify and streamline common tasks for developers. It offers a variety of utility functions for working. Also new util functions are currently being added.

# Util Functions Categories
- [Array Sorting Functions](#array-sorting-util-functions)
- [Currency Converter Functions](#currency-converter-util-functions)

<br/>
<br/>
<br/>

# Array Sorting Util Functions
The Array Sorting utility functions in `useutils-dexterverse` provide multiple methods to sort arrays efficiently based on different criteria. These functions allow for sorting arrays, making it easy to organize data in ascending or descending order.

### 1. useBubbleSortOptimized()
`useBubbleSortOptimized()` is an improved version of the traditional Bubble Sort algorithm. It sorts an array of numbers or strings in ascending/descending order. The function optimizes performance by checking if any swaps occur during a single pass. If no swaps are made, the array is already sorted, and the function terminates early. 

```typescript
//importing syntax
import { useBubbleSortOptimized } from 'useutils-dexterverse';
```
```typescript
//implementing syntax
console.log("log-->", useBubbleSortOptimized([654,6,10,5,-1]));
```
Output - log--> [-1, 5, 6, 10, 654]

#### *** Note - Arguments are to be send with proper order.
```typescript
type arguments = {
  arr: (string | number)[]; // Array of strings or numbers
  reverse?: boolean;        // Optional: Sort in reverse order
}
```
<br/>
<br/>
<br/>

# Currency Converter Util Functions
The Currency Converter utility functions in `useutils-dexterverse`  provide an easy and efficient way to convert string, number, or float values into different currency formats according to different countries.


### 1. useCurrencyFormatter()
The `useCurrencyFormatter()` utilizes the Intl.NumberFormat API, which is an inbuilt feature in JavaScript for internationalizing and formatting numbers, including currencies. It ensures proper currency formatting based on locale and currency codes.


```typescript
//importing syntax
import { useCurrencyFormatter } from "useutils-dexterverse";
```
```typescript
//implementing syntax
console.log("log-->",useCurrencyFormatter(123456, "India"));
```
Output - log--> ₹1,23,456.00

#### *** Note - Arguments are to be send with proper order.
```typescript
type Arguments = {
  value: number | `${number}`;           // A number or numeric string to be formatted
  country: CountryName;                  // Country name or locale for currency formatting
  options?: Intl.NumberFormatOptions;    // Optional: Additional Intl.NumberFormat options
};
```

<br/>
<br/>
<br/>

## Authors
- [@AakashThakur23102000](https://github.com/AakashThakur23102000)

## 🚀 About Me
I'm a react native developer.


## Feedback

If you have any feedback, please mail at aakashthakur20001972@gmail.com.
