const search = document.getElementById("input");
const list = document.getElementById("list");
const btn = document.querySelector("#btn")
btn.addEventListener('click', () => {
    if (search.value === '') {
        let li = document.createElement('li')
        li.innerHTML = "'List Cannot Be Empty!!!!'"
        list.appendChild(li)
        setTimeout(() => {
            li.innerHTML = "";
        }, 2000);
        save();
        return;
    } else {
        let val = document.createElement('li');
        val.innerHTML = `<div id="main">
    <i id="lis" class="fa-solid fa-circle-dot"></i>
     <p id="txt">${search.value}</p>
     <i id="edit" class="fa-solid fa-square-check"></i>
     <i id="delete" class="fa-solid fa-trash"></i>
     </div>`;
        list.appendChild(val)
        search.value = ''
        save();
        const lis = document.querySelectorAll('#lis')
        //to edit the list
        const edit = document.querySelectorAll('#edit')
        edit.forEach((e) => {
            e.addEventListener('click', () => {
                e.parentElement.style.textDecoration = 'line-through'
                save();
            })
        })
        const txt = document.querySelectorAll('#txt')
        //to delete the list
        const rem = document.querySelectorAll('#delete');
        rem.forEach((e) => {
            e.addEventListener('click', () => {
                e.parentElement.remove();
                save();
            })
        });
    }
    save();
})
function save() {
    localStorage.setItem('data', list.innerHTML)
}