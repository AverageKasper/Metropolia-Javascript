'use strict';

const string_list = ['monke', "rinne", "thunder", "agent47"];
function concat(string_array) {
    let new_string = '';
    for (let i = 0; i < string_array.length; i++) {
        new_string += string_array[i];
    }
    return new_string;
}

const concat_list = concat(string_list);
let p = document.getElementById("concat");
p.innerHTML = concat_list;