// Given an array of integers, find if the array contains any duplicates. 
// Your function should return true if any value appears at least twice in the array, 
// and it should return false if every element is distinct.
var containsDuplicate = function(nums) {
  var freq = {};

  for (i=0; i<= nums.length; i++) {
    if (!freq[nums[i]]) {
      freq[nums[i]] = 1;
    } else {
      return true;
    }
  }

  return false;
};