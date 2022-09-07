// https://leetcode.com/problems/copy-list-with-random-pointer/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head){
        return null;
    }
    
    let visited = new Map();
    let oldNode = head;
    let newNode = new Node(oldNode.val);
    visited.set(oldNode, newNode);
    
    while(oldNode){
        newNode.random = cloneNode(oldNode.random, visited);
        newNode.next = cloneNode(oldNode.next, visited);
    
        newNode = newNode.next;
        oldNode = oldNode.next;
    }
    
    return visited.get(head);
};

var cloneNode = function(node, visited){
    if(!node){
        return null;
    }
    
    if(visited.has(node)){
        return visited.get(node);
    }
    
    let clonedNode = new Node(node.val);
    visited.set(node, clonedNode);
    return clonedNode;
}