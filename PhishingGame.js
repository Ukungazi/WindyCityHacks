var score = 0;
var index = 0;
var wordList = ['laptop', 'mouse', 'screen', 'cable'];


function wordCheck()
{
    for (var i = 0; i<wordList.size; i++)
    {
        wordScramble(wordList[i]);
        String guess = Scanner.nextLine();
        if ()
    }
}
function wordScramble(String word)
{
    int start = (Math.random() * word.length);
    String newWord = word.substring(0,start) + word.substring(start+1);
    return word.substring(start,start+1) + wordScramble(newWord);
}