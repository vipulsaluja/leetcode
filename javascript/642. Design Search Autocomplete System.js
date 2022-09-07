// https://leetcode.com/problems/design-search-autocomplete-system/
/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    this.history = new Map();
    for(let i=0; i<sentences.length; i++){
        this.history.set(sentences[i], times[i]);
    }
    
    this.search = "";
    this.matches = [];
};

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    if(c === "#"){
        if(!this.history.has(this.search)){
            this.history.set(this.search, 0);
        }
        
        this.history.set(this.search, this.history.get(this.search)+1);
        this.search = "";
        this.matches = [];
        return [];
    }
    
    if(this.search === ""){
        let matches = [];
        this.history.forEach((frequency, sentence)=>{
            if(sentence[0] === c){
                matches.push({sentence: sentence, frequency: frequency});
            }
        });
        
        this.matches = matches.sort((a, b) => {
            if(a.frequency === b.frequency){
                return a.sentence.localeCompare(b.sentence);
            }
            
            return b.frequency - a.frequency;
        }).map(a => a.sentence);        
    } else {
        let i = this.search.length;
        this.matches = this.matches.filter(sentence => sentence[i] === c);
    }
    
    this.search += c;
    
    return this.matches.slice(0,3);
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */