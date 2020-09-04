document.getElementById("check").addEventListener("click",check);

function check() {

    var errorMessage="You have an error.  Make sure all of your functions are named correctly and work in the test environment";
    var goodMessage="You did it!  Share this back with Albinson and continue to 11-20";

    if(
        all_even([-2,1,3,4,5,39,42])== [-2, 4, 42] &&
        no_space(["hi","foo","what the"]) == ["hi","foo"] &&
        all_positive([[1,3,6],[2,6,8],[5,8,24]]) == [[2,6,8]] &&
        same_vowels(['racecar', 'amalgam', 'oligopoly', 'zoom']) == ['amalgam', 'zoom'] &&
        times_ten([2,5,9,10]) == [20,50,90,100] &&
        shift_right([{ name: '' }, 10, "left-side"]) ==  ["left-side", { name: '' }, 10] &&
        no_vowels(['average', 'exceptional', 'amazing']) && ['aeae', 'eeioa', 'aai'] &&
        double_matrix([[1,2,3],[4,5,6],[7,8,9]]) == [[2,4,6],[8,10,12],[14,16,18]] &&
        sum_nums([10,15,20,25,30,35]) == 135 &&
        product_matrix([[1, 2, 3],[4, 5],[6]]) == 720 &&
        objectify([['Thundercats', '80s'],['The Powerpuff Girls', '90s'],['Sealab 2021', '00s']]) == {'Thundercats': '80s','The Powerpuff Girls': '90s','Sealab 2021':'00s'} &&
        lucky_numbers([30, 48, 11, 5, 32]) == 'Your lucky numbers are: 30, 48, 11, 5, and 32'

    ) {
        document.getElementById("output").innerHTML = goodMessage;
    } else {
        document.getElementById("output").innerHTML = errorMessage;
    }



}
