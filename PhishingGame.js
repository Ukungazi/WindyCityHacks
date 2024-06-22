let end = false;
let index = 0;
let scrambledWord = "";
const wordList = ["laptop","mouse","screen","cable"];
const inputBox = document.getElementById("guess");
const outputText = document.getElementById("guessBox");
function newWord()
{
    if (index == wordList.size)
    {
        endGame();
    } else {
        scrambledWord = wordScramble(wordList[index]);
        outputText.innerHTML = scrambledWord;
        index++;
    }
}
function wordScramble(word)
{
    if (word.length == 0) {
        return "";
    } else {
        let start = (Math.random() * word.length);
        let newWord = word.substring(0,start) + word.substring(start+1);
        return word.substring(start,start+1) + wordScramble(newWord);
    }
}
function wordCheck()
{
        let guess = inputBox.innerHTML;
        if (wordList[index-1]===guess) {
        outputText.innerHTML = "Correct! Press 'Next Word' to keep playing";
        } else {
        outputText.innerHTML = "Stupid idiot";
        }
    
}
function endGame()
{
outputText.innerHTML = "Congrats! You scored 2000 points which is a site record! Enter your address below to receive your prize";
}


/*var score = 0;
var index = 0;
var wordList = ['laptop', 'mouse', 'screen', 'cable'];
const input = document.getElementById("guess");
const enter = document.getElementById("enter");

enter.addEventListener("submit", () => {
    if (index < wordList.size)
    {
        var scrambledWord = wordScramble(wordList[index])
        document.getElementById("guessBox").textContent=scrambledWord;
        index++;
        wordCheck();
    } else {
        endGame();
    }
  });
function wordCheck()
{
    var guess = input.innerHTML;
    if (scrambledWord == guess){
    points += 500;
    } else {
    document.getElementById("guessBox").innerHTML='Incorrect. Next word...';
    }
    document.getElementById("guessBox").innerHTML='Test';
}
function wordScramble(word)
{
    if (word.length == 0)
    {
        return;
    }
    var start = (Math.random() * word.length);
    var newWord = word.substring(0,start) + word.substring(start+1);
    return word.substring(start,start+1) + wordScramble(newWord);
}
function endGame()
{
    document.getElementById("guessBox").textContent='Incorrect. Next word...';
}
*/