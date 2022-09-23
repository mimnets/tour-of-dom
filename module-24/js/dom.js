console.log('hello dot js');
console.log(document.body); 

const liCollection = document.getElementsByTagName('li');
    for(const list of liCollection){
        console.log(list.innerText);
    }