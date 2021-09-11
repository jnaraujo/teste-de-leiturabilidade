var silaba = require('./silaba');

module.exports = {
    fleschReadingEaseBR(text){
        var words = String(text).replace(/\n/g, " ").replace(/,/g, "").replace(/!/g, "").replace(/\?/g, "").replace(/;/g, "").replace(/\r/g, "").split(" ")
        words = words.filter( word=> word != "")
        
        const totalWords = words.length
        var totalSentences = String(text).replace(/\n/g, ".").replace(/\r/g, "").split(".")
        var totalSentences = totalSentences.filter( word=> (word != ".") && (word != ""))
        var nTotalSentences = totalSentences.length
    
        var totalSyllables =  0
    
        for (let index = 0; index < words.length; index++) {
            const word = words[index];
            // var ts = pronouncing.syllableCount(pronouncing.phonesForWord(word)[0])
            const ts = silaba.getSilabas(word).numeroSilaba;
            totalSyllables += ts
        }
    
        const formula = 248.835 - (1.015 * (totalWords/nTotalSentences)) - (84.6 * (totalSyllables/totalWords))
    
        return {
            totalWords: totalWords,
            nTotalSentences,
            totalSyllables,
            result: Math.max(Math.min(formula, 100), 0)
        }
    },
    fred(r){
        if(r<=25) return 0
        if(r>25 && r<= 50) return 1
        if(r>50 && r<= 75) return 2
        return 3
    }
};
