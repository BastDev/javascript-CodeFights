function firstNotRepeatingCharacter(s) {

    var mapLetter = new Map();

    for (var i = 0; i < s.length; i++) {
        if (!mapLetter.has(s[i])) {
        mapLetter.set(s[i], 1);
            }
        else {
           mapLetter.set(s[i], mapLetter.get(s[i]) + 1);
            }
    }
    for (var [key, value] of mapLetter) {
        if (value === 1)
            return key;
    }
    return '_';
}
