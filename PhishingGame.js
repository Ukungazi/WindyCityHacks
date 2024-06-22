var score = 0;
var index = 0;
var wordList = ['laptop', 'mouse', 'screen', 'cable'];


function wordCheck()
{
    for (var i = 0; i<wordList.size; i++)
    {
        var scrambledWord = wordScramble(wordList[i])
        document.getElementById("guessBox").textContent=scrambledWord;
        var guess = 
        if (scrambledWord == guess)
        {
            points += 500;
        } else {
            document.getElementById("guessBox").textContent='Incorrect. Next word...';
        }
    }
}
function wordScramble(String word)
{
    if (word.length == 0)
    {
        return;
    }
    int start = (Math.random() * word.length);
    String newWord = word.substring(0,start) + word.substring(start+1);
    return word.substring(start,start+1) + wordScramble(newWord);
}
function endGame()
{
    document.getElementById("guessBox").textContent='Incorrect. Next word...';
}