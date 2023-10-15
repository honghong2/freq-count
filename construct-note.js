// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const lettersFreq = {};
    const messageFreq = {};

    for (let char of letters)
    {
        if (lettersFreq[char] === 0)
            lettersFreq[char] = 1;
        else
            lettersFreq[char] += 1;
    }

    for (let char of message)
    {
        if (messageFreq[char] === 0)
            messageFreq[char] = 1;
        else
            messageFreq[char] += 1;
    }

    for (let char in messageFreq)
    {
        if (!lettersFreq[char])
        {
            return false;
        }
        if (messageFreq[char] > lettersFreq[char])
        {
            return false;
        }

    }
    return true;

}
