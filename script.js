//1.All_even
function all_even(element){
    return element % 2  == 0;
}
//2 no_space
function no_space(element){
    var arr2 = element.filter(function(element){
        return element.indexOf(" ") == -1;
    });
    return arr2;

}
//3 all_positive
function all_positive(arr){
    var newArr = [];
    newArr += arr.filter(element => { 
        return element[0] % 2 == 0 && element[1] % 2 == 0 && element[2] % 2 == 0; 
    }) 
        return newArr; 
}
//4 same_vowels
function same_vowels(words){
    var answer = words.filter( (word) =>{
        var vowels = "aieou";
        word = word.split("");
        var vowelarr = word.filter( (letter) => {
            return vowels.indexOf(letter) > -1;
        })
        return vowelarr.every( (elem) => {
            return elem == vowelarr[0]
        });
    })
    return answer
}
//5 times_ten
function ten(element){
    return element * 10;
}
function times_ten(element){
    return element.map(ten);
}
//6 shift_right
function shift_right(arr){
    var end = arr[arr.length-1];
    var shift = arr.map( (elem, index, array) => {
        return array[index-1]
    })
    shift[0] = end;
    return shift;

}
//7 no_vowels
function no_vowels(arr){
    var vowels = "aeiou";
    var x = arr.map( (word) => {
        word = word.split("");
        console.log(word)
        return word.filter( (letter) => {
            return vowels.indexOf(letter) != -1;

        })
    })
    return x.map( (arr) => {
        return arr.join("");
    })
}
//8 double_matrix
function double_matrix(arr){
    return arr.map ( (arr1) => {
      return arr1.map( (x) => {
          return x*2;
        })
    })
}
//9 sum_nums
function sum_nums(){ 
    var arr = [10,15,20,25,30,35]; 
    var total = arr.reduce((total, element) =>{ 
        return total + element; 
    }); 
    return total; 
}
//10 product_matrix
function product_matrix(arr){
    var sumArr = arr.map( (arr1) => {
        return arr1.reduce( (total, current) => {
            return total * current;
        })
    })
    return sumArr.reduce( (total, current) => {
        return total * current;
    })
}
//11 objectify
function objectify(arr){
    var obj = {};
    for(var i = 0; i < arr.length; i++){
        obj[arr[i][0]] = arr[i][1];
    }
    return obj;

}
//12 lucky_numbers
function lucky_numbers(arr){
    return arr.reduce( (total, current) => {
        return total + "," + current
    }, "your lucky number are ")
}
