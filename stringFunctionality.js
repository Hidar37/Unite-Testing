// Length of string
class ALLFUNCTION {
  stringLength = (string) => {
    return string.length;
  }

  reversString = (string) => {
    const myStringLength = (this.stringLength(string) - 1);
    let newString = '';
    for (let x = myStringLength; x >= 0; x--) {
      newString += string[x];
    }
    return newString;
  }
}
module.exports = ALLFUNCTION;