function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function longestPalindromicSubstring(s, k) {
    let maxLength = 0; 
    let longestPalindrome = "";

    for (let start = 0; start <= s.length - k; start++) {
        for (let end = start + k; end <= s.length; end++) {
            let substring = s.substring(start, end);
            if (isPalindrome(substring) && substring.length > maxLength) {
                maxLength = substring.length;
                longestPalindrome = substring;
            }
        }
    }

    return longestPalindrome;
}

let s1 = "cbbd";
let k1 = 2;
console.log(longestPalindromicSubstring(s1, k1)); 