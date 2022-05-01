/**
 * This function checks if str1 is a substring of str2.
 * @param {string} str1 First String
 * @param {string} str2 Second String
 */
 export function is_substring(str1, str2) {
    for (let i = 0; i < str2.length; i++)
        if (str2[i] == str1[0])
            for (let j = 0; j < str1.length; j++) {
                if (str1[j] != str2[i + j])
                    break;
                else if (j == str1.length - 1)
                    return true;
            }
    return false;
}

/**
 * This function determines if there's at least one element common to both arrays.
 * @param {array} arr1 an array
 * @param {array} arr2 an array
 */
export function intersect(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++)
        for (let j = 0; j < arr2.length; j++)
            if (arr1[i] == arr2[j])
                return true;
    return false;
}