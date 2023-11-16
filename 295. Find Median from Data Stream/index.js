/**
 * @author maneeshavenigalla
 * The median is the middle value in an ordered integer list. If the size of the list is even,
 * there is no middle value, and the median is the mean of the two middle values.
 */
var MedianFinder = function () {
  this.stream = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let left = 0;
  let right = this.stream.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (this.stream[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  this.stream.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let mid = Math.floor(this.stream.length / 2);

  if (this.stream.length % 2 == 0) {
    return (this.stream[mid] + this.stream[mid - 1]) / 2;
  } else {
    return this.stream[mid];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
module.exports = MedianFinder;
