"use strict";
(function() {
    var inputArray = [];
    var longestArray = [];
    var longestListArray = [];
    // This function compares two numbers and returns the maximum of them

    function maxTwo(a, b) {
        if (a >= b) {
            console.log("max number is : " + a);
            return a;
        } else {
            console.log("max number is : " + b);
            return b;

        }
    }
    //This function returns a maximum value out of 3 numbers

    function maxThree(a, b, c) {
        let max = 0;
        if (a >= b) {
            if (a > c)
                return a;
            else
                return c;
        } else {
            if (b >= c)
                return b;
            else
                return c;
        }
    }

    /*
    	This function checks if an input is a vowel
    */
    function isVowel(ch) {
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U')
            return true;
        else
            return false;
    }

    // /*
    // 	This function sums the elements of an input array
    // */
    function sum(arr) {
        let sum = 0;
        for (const i of arr) {
            sum += i;
        }
        return sum;
    }

    // /*
    // 	This function multiply the elements of an input array
    // */
    function multiply(arr) {
        let mul = 1;
        for (const i of arr) {
            mul *= i;
        }
        return mul;
    }
    // /*
    // 	This function reverses a string input
    // */
    function stringReverse(input) {
        let reversedInput = "";
        for (let i = input.length - 1; i >= 0; i--) {
            reversedInput += input[i];
        }

        return reversedInput;
    }

    // /*
    // 	This function returns the longes word from an array of word inputs
    // */
    function findLongestWordLength(arr) {
        let longest = "";
        for (const i of arr) {
            if (i.length > longest.length)
                longest = i;
        }
        return longest.length;
    }
    // /*
    // 	This function returns the list of longes words from an array of word inputs lengths greater than  a given length
    // */
    function filterLongWords(arr, num) {
        let longestList = [];
        for (const i of arr) {
            if (num < i.length)
                longestList.push(i);
        }
        return longestList;
    }

    //calculating sum of squares of an array
    function computeSumOfSquares(arr) {
        let sum = 0;
        for (const i of arr) {
            sum += (i * i);
        }
        return sum;
    }

    function printOddNumbersOnly(arr) {
        let oddList = [];
        for (const i of arr) {
            if (i % 2 != 0)
                oddList.push(i);
        }
        return oddList;
    }


    function multiplyUsingReduce(a) {
        const d = a.reduce(function(prevValue, elem) {
            return prevValue * elem;
        });
        return d;
    }

    function sumUsingReduce(a) {
        const d = a.reduce(function(prevValue, elem) {
            return prevValue + elem;
        });
        return d;
    }

    function findSecondBiggest(a) {
        const biggest = Math.max.apply(null, a);
        const maxIndex = a.indexOf(biggest);
        a[maxIndex] = 0;
        const secondMax = Math.max.apply(null, a);
        return secondMax;
    }

    function printFibo(n, a, b) {
        let fibList = [];
        fibList[0] = a;
        fibList[1] = b;
        for (let i = 2; i < n; i++) {
            fibList[i] = fibList[i - 1] + fibList[i - 2];
        }
        return fibList;
    }

    function FunctionTest(expected, found) {
        if (expected === found) {
            return "Successful Test";
        } else {
            return "Failed Test";
        }
    }

    //max of two
    document.getElementById("max-of-two").addEventListener("click", function() {
        let n1 = parseInt(document.getElementById("input-1").value);
        let n2 = parseInt(document.getElementById("input-2").value);
        document.getElementById("result1").textContent = maxTwo(n1, n2);
    });
    //max of three
    document.getElementById("max-of-three").addEventListener("click", function() {
        let n3 = parseInt(document.getElementById("input-3").value);
        let n4 = parseInt(document.getElementById("input-4").value);
        let n5 = parseInt(document.getElementById("input-5").value);
        document.getElementById("result2").textContent = maxThree(n3, n4, n5);
    });
    //check out a character is vowel
    document.getElementById("is-vowel").addEventListener("click", function() {
        let n6 = document.getElementById("input-6").value;
        document.getElementById("result3").textContent = isVowel(n6) ? "is vowel" : "is not vowel";
    });
    //add , multiply array of elements
    document.getElementById("add-element").addEventListener("click", function() {
        let n7 = parseInt(document.getElementById("input-7").value);
        inputArray.push(n7);
        document.getElementById("input-7").value = "";
        document.getElementById("array-elements").textContent = inputArray;
    });

    document.getElementById("sum").addEventListener("click", function() {
        document.getElementById("result4").textContent = sum(inputArray);
        inputArray = [];
    });

    document.getElementById("multiply").addEventListener("click", function() {
        document.getElementById("result4").textContent = multiply(inputArray);
        inputArray = [];
    });

    document.getElementById("sum-of-squares").addEventListener("click", function() {
        document.getElementById("result4").textContent = computeSumOfSquares(inputArray);
        inputArray = [];
    });

    document.getElementById("print-odd").addEventListener("click", function() {
        document.getElementById("result4").textContent = printOddNumbersOnly(inputArray);
        inputArray = [];
    });

    document.getElementById("multiply-reduce").addEventListener("click", function() {
        document.getElementById("result4").textContent = multiplyUsingReduce(inputArray);
        inputArray = [];
    });

    document.getElementById("sum-reduce").addEventListener("click", function() {
        document.getElementById("result4").textContent = sumUsingReduce(inputArray);
        inputArray = [];
    });

    document.getElementById("second-biggest").addEventListener("click", function() {
        document.getElementById("result4").textContent = findSecondBiggest(inputArray);
        inputArray = [];
    });

    //Reverse String
    document.getElementById("reverse").addEventListener("click", function() {
        let n9 = document.getElementById("input-9").value;
        document.getElementById("result6").textContent = stringReverse(n9);
    });

    //String manipulation
    //get
    document.getElementById("add-element-3").addEventListener("click", function() {
        let n10 = document.getElementById("input-10").value;
        longestArray.push(n10);
        document.getElementById("input-10").value = "";
        document.getElementById("array-elements-3").textContent = longestArray;
    });

    document.getElementById("get-longest").addEventListener("click", function() {
        document.getElementById("result7").textContent = findLongestWordLength(longestArray);
        longestArray = [];
    });

    document.getElementById("add-element-4").addEventListener("click", function() {
        let n11 = document.getElementById("input-11").value;
        longestListArray.push(n11);
        document.getElementById("input-11").value = "";
        document.getElementById("array-elements-4").textContent = longestListArray;
    });

    document.getElementById("get-longest-list").addEventListener("click", function() {
        let n12 = parseInt(document.getElementById("input-12").value);
        document.getElementById("result8").textContent = filterLongWords(longestListArray, n12);
        longestListArray = [];
    });

    document.getElementById("multiply").addEventListener("click", function() {
        document.getElementById("result5").textContent = multiply(mulArray);
        mulArray = [];
    });

    //Generate Fibbonocci Serious 

    document.getElementById("generate-fib").addEventListener("click", function() {
        let n14 = parseInt(document.getElementById("input-14").value);
        let n15 = parseInt(document.getElementById("input-15").value);
        let n16 = parseInt(document.getElementById("input-13").value);
        document.getElementById("result10").textContent = printFibo(n16, n14, n15);
    });



    console.log("Expected output of max(30,15) is 30  " + FunctionTest(20, maxTwo(20, 10)));

    console.log("Expected output of maxOfThree(5,4,24) is 24  " + FunctionTest(44, maxThree(5, 4, 44)));

    console.log("Expected output of isVowel('o') is true  " + FunctionTest(true, isVowel("o")));

    console.log("Expected output of sum('[1,2,3,4,5]') is 15  " + FunctionTest(15, sum([1, 2, 3, 4, 5])));

    console.log("Expected output of multiply('[1,2,3,4]') is 24  " + FunctionTest(24, multiply([1, 2, 3, 4])));

    console.log("Expected output of reverse('kaleab') is 'baelak'  " + FunctionTest('baelak', stringReverse('kaleab')));

    console.log("Expected output of filterLongWords(['kaleab','girma','hailemariam','bekele'] , 6) is 'hailemariam'" + FunctionTest('hailemariam', filterLongWords(['kaleab', 'girma', 'hailemariam', 'bekele'], 6)));

    console.log("Expected output of findLongestWordLength(['kaleab','girma','hailemariam','bekele']) is '11'  " + FunctionTest(11, findLongestWordLength(['kaleab', 'girma', 'hailemariam', 'bekele'])));

    console.log("Expected output of computeSumOfSquares('[1,2,3]') is '14'  " + FunctionTest(14, computeSumOfSquares([1, 2, 3])));

    console.log("Expected output of printOddNumbersOnly('[1,2,3]') is ['1' , '3']  " + FunctionTest([1, 3].toString(), printOddNumbersOnly([1, 2, 3]).toString()));
    console.log("Expected output of multiplyUsingReduce('[1,2,3]') is '6'  " + FunctionTest(6, multiplyUsingReduce([1, 2, 3])));
    console.log("Expected output of sumUsingReduce('[1,2,3]') is '6'  " + FunctionTest(6, sumUsingReduce([1, 2, 3])));
    console.log("Expected output of findSecondBiggest('[1,2,3]') is '2'  " + FunctionTest(2, findSecondBiggest([1, 2, 3])));
    console.log("Expected output of printFibo('[5,0,1]') is ['0' , '1' , '1' , '2' , '3']  " + FunctionTest([0, 1, 1, 2, 3].toString(), printFibo([5, 0, 1])));

})()