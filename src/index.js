module.exports = function toReadable (number) {
    let result;
    let str = number.toString() 
    let hun;
    let dec;
    let un;
    let teen;
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const decimals = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]
    
    switch (number) {
       case 0: result = "zero"; break
       case 10: result =  "ten"; break;
       case 20:result = "twenty"; break  
       default: 
            if (number < 10) {
                for (let i = 1; i <= 9; i++) {
                    if (str[0] == i) un = units[i] 
                    result = un
                }
            }
            if ((number>=11)&&(number<=19)){
                for (i =0; i<=9; i++) {
                    if (str[1] == i) teen = teens[i]
                    result = teen
                }
            }
            if ((number > 20)&&(number<100)) {
                for (i = 0; i<=9; i++) {
                    if (str[0] == i) dec = decimals[i]
                    if (str[1] == i) un = units[i]
                    if (str[1] === "0")  un = ""
                    
                    result = dec + " " + un

                    if (un === "") result = dec
              }
           }
             
           if ((number >= 100)&&(number<=999)) {
                 for (i = 0; i<=9; i++) {
                     if (str[0] == i) hun = units[i] + " hundred"
                     if (str[1] == i) dec = decimals[i]
                     if (str[2] == i) un = units[i] 
                     if ((str[1] === "0")&&(str[2] == i))  dec = "";
                     if ((str[1] === "1")&&(str[2] == i)) {
                          dec = teens[i]
                          un = units[0]
                         }
                     if ((str[1] === "0")&&(str[2] === "0")) dec = decimals[0]
                     
                     result = hun + " " + dec + " " + un
                     
                     if (un === "")  result = hun + " " + dec;
                     if (dec === "") result = hun + " " + un;
                     if ((dec === "")&&(un === "")) result = hun; 
                 }
             } 
    }
    return result
}

