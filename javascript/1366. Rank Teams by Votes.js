// https://leetcode.com/problems/rank-teams-by-votes/
/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    if(!votes.length) {
        return "";
    }
    
    if(votes.length === 1){
        return votes[0];
    }
    
    let teams = votes[0];
    let rank = new Map();
    for(let i=0; i<teams.length; i++){
        rank.set(teams[i], new Array(teams.length).fill(0));
    }
    
    for(let voteIndex=0; voteIndex<votes.length; voteIndex++){
        for(let teamIndex=0; teamIndex<votes[voteIndex].length; teamIndex++){
            let team = votes[voteIndex][teamIndex];
            rank.get(team)[teamIndex]++;
        }
    }
    
    return teams.split("").sort((a, b)=>{
        let i=0;
        while(rank.get(a)[i] === rank.get(b)[i]){
            i++;
            if(i===votes.length){
                
                // Reverse as shorter the ASCII code is first as oppose to rank.
                return a.localeCompare(b);
            }
        }
        
        return rank.get(b)[i] - rank.get(a)[i];
    }).join("");
};