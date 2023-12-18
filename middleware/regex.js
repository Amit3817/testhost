function checkPassword(str)
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

function checkAbbreviation(input) {
        const words = input.split(' ');
        const abbr = words.map(word => word.charAt(0)).join('').toUpperCase();
        const prohibitedAbbreviations = ['IIM', 'IIT', 'IISc', 'NIT', 'IISER', 'IIIT', 'IIEST', 'AICTE', 'UGC', 'MoE', 'GoI'];
        for (let i = 0; i < prohibitedAbbreviations.length; i++) {
          if (abbr===prohibitedAbbreviations[i]) {
            return true;
          }
        }
  }

  

module.exports={checkPassword,checkAbbreviation};
