


const listsize = document.querySelector('listsize');
const Button = document.querySelector('button');
const list = document.querySelector('userlist');

button.addEventListener('click', function() {
        if (input.value !== "") {
            let li = document.createElement('li');
            let ldelete = document.createElement('Button');
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
        };
});