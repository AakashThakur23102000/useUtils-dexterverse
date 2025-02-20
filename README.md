![dexterverse_logo](https://github.com/AakashThakur23102000/useUtils-dexterverse/blob/d513f183724c838ad133c65512e77e5a25cf0fdb/images/dexterverse_logo.png?raw=true)

# ⚡ Util Functions and Hooks (Dexterverse)
`useutils-dexterverse` is a utility library designed to simplify and streamline common tasks for developers. It offers a variety of utility functions for working. Also new util functions are currently being added.


# 📦 Installation
To install and set up the library, run:

```bash
npm i useutils-dexterverse
```

# 🏷️ Util Functions/Hooks Categories
- [Array Sorting](#📊-array-sorting-util-functions)
- [Currency Converter](#💰-currency-converter-util-functions)
- [Debounce](#⏳-debounce-util-function)
- [Throttle](#⏳-throttle-util-function)
- [Date Formatter](#📅-date-formatter-util-function)
- [Masked Data](#🔒-masked-data-util-function)

<br/>
<br/>
<br/>

# 📊 Array Sorting Util Functions
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

#### ⚠️ Note - Arguments are to be send with proper order.
```typescript
type arguments = {
  arr: (string | number)[]; // Array of strings or numbers
  reverse?: boolean;        // Optional: Sort in reverse order
}
```
<br/>
<br/>
<br/>

# 💰 Currency Converter Util Functions
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

#### ⚠️ Note - Arguments are to be send with proper order.
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

# ⏳ Debounce Util Function
The Debounce utility function in useutils-dexterverse helps in optimizing event handling by preventing a function from being executed too frequently. It ensures that the function is called only after a specified delay has passed since the last invocation, making it useful for search bars, input fields, and window resize events.

### 1. useCurrencyFormatter()
useDebounce() ensures that a function is executed only after a given delay, even if it is triggered multiple times in rapid succession. This prevents unnecessary API calls or computations.

```typescript
// full Usage
import { View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import UseApiHookContextStore from './context/UseApiHookContextStore';
import { useDebounceFunc } from "useutils-dexterverse";

const App = () => {

  // Create debounced functions once
  const debouncedSearch2000 = useDebounceFunc(() => {
    console.log("Call logic after 2 second of value change.");
  }, 2000);

  const debouncedSearch3000 = useDebounceFunc(() => {
    console.log("Call logic after 5 second of value change.");
  }, 5000);


  return (
    <View>
      <Text>Search Bar</Text>

      <TextInput
        onChangeText={(text) => {
          // Call debounced function
          debouncedSearch2000(); 
        }}
      />

      <TextInput
        onChangeText={(text) => {
          debouncedSearch3000(); // Call debounced function
        }}
      />
    </View>
  )
}

export default App
```

### ⚠️ Note

- Always declare useDebounceFunc above the return statement inside the functional component. Do not call it inside event handlers (e.g., onChangeText), loops, or conditionals, as it will cause an "Invalid hook call" error.      

    
<br/>
<br/>
<br/>



# ⏳ Throttle Util Function
The Throttle utility function in useutils-dexterverse ensures that a function is executed at most once within a given time interval. This is useful for optimizing performance in scenarios like button clicks, API calls, and window resize events.

### 1. useThrottleFunc()
useThrottleFunc() returns a throttled function that, when called repeatedly, ensures the actual function execution happens only once within the defined interval.

```typescript
// full Usage
import { View, Text, Button } from 'react-native';
import React from 'react';
import { useThrottleFunc } from "useutils-dexterverse";

const App = () => {
  // Create throttled functions
  const throttledSubmit5000 = useThrottleFunc(() => {
    console.log("Hit API at 2 sec interval.");
  }, 2000);

  const throttledSubmit8000 = useThrottleFunc(() => {
    console.log("Hit API at 4 sec interval.");
  }, 4000);

  return (
    <View>
      <Text>Submit Button</Text>

      <Button
        title='Call Submit API (5s)'
        onPress={throttledSubmit5000} // Correct way to call
      />

      <Button
        title='Call Submit API (8s)'
        onPress={throttledSubmit8000} // Correct way to call
      />
    </View>
  );
};

export default App;

```

### ⚠️ Note

- The useThrottleFunc must be initialized above the return statement in functional components.
- Calling it directly inside event handlers (like onPress) will cause an invalid hook call error.    
    
<br/>
<br/>
<br/>


# 📅 Date Formatter Util Function
The useDateFormatter() function allows you to format JavaScript Date objects into various human-readable formats.

### 1. useDateFormatter()
Formats a given date into the specified format.

```typescript
// import
import { useDateFormatter } from 'useutils-dexterverse'
```
```typescript
// // 🚀 Example Usage
// Using current date
console.log(useDateFormatter(new Date(), "DD/MM/YYYY HH:mm"));

// Using a custom date
console.log(useDateFormatter(new Date("2024-05-15T14:45:00"), "DD/MM/YYYY HH:mm"));

//second argument suggests all available formats so don't worry
```
```typescript
// output
20/02/2025 15:30  // Example output for current date
15/05/2024 14:45  // Example output for custom date
```
   
<br/>
<br/>
<br/>



# 🔒 Masked Data Util Function
The useMaskedData() function helps mask sensitive data, such as emails and phone numbers, for privacy and security.

### 1. useMaskedData()
Masks portions of a string to hide sensitive information.


```typescript
// import
import { useMaskedData } from 'useutils-dexterverse'
```
```typescript
// // 🚀 Example Usage
// Masked Email
  var maskedEmail = useMaskedData(
    "john.doe@gmail.com",
    "email",
    {
      maskChar: "*",
      maskBefore: true,
      maskAfter: true,
      visibleStart: 2,
      visibleEnd: 5,
    });
  console.log(maskedEmail);

  // Masked Number
  var maskedNumber = useMaskedData(
    "9876543210",
    "mobile",
    {
      maskChar: "*",
      visibleStart: 2,
      visibleEnd: 2
    });
  console.log(maskedNumber);

  // Masked Card
  var maskedCard = useMaskedData(
    "1234567812345678",
    "card",
    {
      maskChar: "#",
      visibleStart: 0,
      visibleEnd: 4
    });
  console.log(maskedCard);
```
```typescript
// output
jo******@gmail****  //Email
98******10          //Mobile Number
############5678    //Card
```
   
<br/>
<br/>
<br/>


# 📜 License
MIT License

## 👨‍💻 Authors
- [@AakashThakur23102000](https://github.com/AakashThakur23102000)

## 🚀 About Me
I'm a react native developer.


## 💬 Feedback
If you have any feedback, please mail at aakashthakur20001972@gmail.com.
