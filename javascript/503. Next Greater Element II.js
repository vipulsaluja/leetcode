// https://leetcode.com/problems/next-greater-element-ii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let nextG = new Array(nums.length);
    let st = [];
    for (let i = 2 * nums.length - 1; i >= 0; i--) {
        while (st.length && st[st.length - 1] <= nums[i % nums.length]) {
            st.pop();
        }

        nextG[i % nums.length] = st.length ? st[st.length - 1] : -1;

        st.push(nums[i % nums.length]);
    }

    return nextG;
};