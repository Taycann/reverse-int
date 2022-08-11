module.exports = function reverse (n) {
    if((String(n))[0] === '-') {
        let result = String(Math.abs(n)).split('').reverse().join('');
        return Number(result);
      } else if((String(n))[0] !== '-') {
        let result = String(n).split('').reverse().join('');
        return Number(result);
      }
}

