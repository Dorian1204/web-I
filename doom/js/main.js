
const button = document.querySelector(".but");
const input = document.querySelector('input');
const list = document.querySelector('userlist');

button.addEventListener('click', function() {
        if (input.value !== "") {
            let list = document.createElement('list');
            let ldelete = document.createElement('BUTTON');
            ldelete.textContent = "❌";
            ldelete.addEventListener('click', function(){
                li.remove();
            });
            li.textContent = input.value;
            li.appendChild(ldelete);
            list.appendChild(li);
            input.focus();
            input.value = null;
        }
        else {
            input.focus();
        }
});