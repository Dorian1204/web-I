const button = document.querySelector(".but");
const input = document.querySelector('input');
const userList = document.querySelector('ul');

button.addEventListener('click', function() {
        if (input.value !== "") {
            let list = document.createElement('list');
            let listDelete = document.createElement('BUTTON');
            listDelete.textContent = "❌";
            listDelete.addEventListener('click', function(){
                list.remove();
            });
            list.textContent = input.value;
            list.appendChild(listDelete);
            userList.appendChild(list);
            input.focus();
            input.value = null;
        }
        else {
            input.focus();
        }
});