module.exports = function toReadable (num) {
    
  
        let digit = {
            0 : '',
            1 : 'one',
            2 : 'two',
            3 : 'three',
            4 : 'four',
            5 : 'five',
            6 : 'six',
            7 : 'seven',
            8 : 'eight',
            9 : 'nine',
            10 : 'ten',
            11 : 'eleven',
            12 : 'twelve',
            13 : 'thirteen',
            14 : 'fourteen',
            15 : 'fifteen',
            16 : 'sixteen',
            17 : 'seventeen',
            18 : 'eighteen',
            19 : 'nineteen',
            20 : 'twenty',
            30 : 'thirty',
            40 : 'forty',
            50 : 'fifty',
            60 : 'sixty',
            70 : 'seventy',
            80 : 'eighty',
            90 : 'ninety',
            },
            result = '';
        
        if (num == 0) { return 'zero'}
        
        if (num > 0 && num < 20 || num < 100 && num > 19 && num.toString()[1] == '0')
            { return  digit[num]}
        
        
        else if (num > 19 && num <100 && num.toString()[1] != '0') {
            return digit[num.toString()[0]*10] + ' ' + digit[num.toString()[1]];
            }
        
        else if (num > 99) {
            if (num.toString()[1] =='0' && num.toString()[2] =='0') {
                return digit[num.toString()[0]] + ' hundred';
            }
            else if (num.toString()[1] =='0') {
                return digit[num.toString()[0]] + ' hundred ' + 
                digit[num.toString()[2]];
            }

            else if (num.toString()[2] =='0') { 
                return digit[num.toString()[0]] + ' hundred ' + digit[num.toString()[1]*10];
            }

            else if (num.toString()[1] =='1') {
                return digit[num.toString()[0]] + ' hundred ' + 
                digit[Number(num.toString()[1]) + num.toString()[2]];
            }
            else {
                return digit[num.toString()[0]] + ' hundred ' + digit[num.toString()[1]*10] + ' ' + 
                digit[num.toString()[2]];
                
            }
        }
        
        console.log (result);
        return(result);
        };
