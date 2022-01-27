let arr1 = "aaa345fgfhj";

function countVowel(text) {
    let cnt = 0;
    let vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (vowel[j] == text[i]) {
                cnt++;
            }
        }
    }
    if (cnt > 0) {
        return cnt;
    }
    return false;
}

let test = countVowel(arr1);
console.log(test);