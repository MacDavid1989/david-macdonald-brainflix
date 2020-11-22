export default function numFormat (string) {
    // splits the string param into an array of sub strings
    let stringArray = string.split('.');
    // gets the first index of the sub string array (which will be one number in this case as we're submitting a single large whole number)
    let newNum = stringArray[0];
    // literal regular expression capturing any digits [0-9] that are contained in exactly 3 digit groupings starting from the beginning of the string
    const threeNum = /(\d+)(\d{3})/;
    // checks if the expression set in threeNum is present in x1, as long as the condition is true for any string of numbers greater than 2 digits, the loop will run 
    while (threeNum.test(newNum)) {
        // replaces the expression found in newNum with the first group of 3 digits ($1) and places a ',' then replaces the second ($2) group
        newNum = newNum.replace(threeNum, ('$1,$2'));
    }
    return newNum;
}