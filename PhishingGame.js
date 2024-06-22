var score = 0;
var index = 0;
var wordList = ['laptop', 'mouse', 'screen', 'cable'];
const input = document.getElementById("guess");
const enter = document.getElementById("enter");
enter.addEventListener("submit", () => {
    wordCheck();
  });
wordCheck();
function wordCheck()
{
    document.getElementById("guessBox").innerHTML= "hi";
    /* for (var i = 0; i<wordList.size; i++)
    {
        var scrambledWord = wordScramble(wordList[i])
        document.getElementById("guessBox").textContent=scrambledWord;
        var guess = input.textContent;
        if (scrambledWord == guess)
        {
            points += 500;
        } else {
            document.getElementById("guessBox").textContent='Incorrect. Next word...';
        }
    }
    */
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