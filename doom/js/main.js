const listsize = document.querySelector('#listsize');
const buildButton = document.querySelector('#button');
const list = document.querySelector('#userlist');

buildButton.addEventListener('click', () =>{
    //get the list size
    let size = Number(listsize.value);
    //build HTML
    let mylist = ``;
    for (le i =1; 1 <= size; i++){
        let li = document.createElement('li');
        li.innerHTML = `Item: <strong>$[i]</strong>`; 
        list.appendChild(li);   
    }
    //output to the DOM -that HTML
});