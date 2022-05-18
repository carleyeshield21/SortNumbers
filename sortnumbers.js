// This is the link to this JavaScript challenge
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
function solution(nums){
    if(nums == null){
        console.log(nums)
    }

    arr = nums.sort((a, b) => a - b)
    console.log(arr)
}
solution([1, 2, 10, 50, 5])
console.log('=====')
solution([])