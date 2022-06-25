const btnAdd = document.querySelector('#btn-add');
const place = document.querySelector('#text');

btnAdd.addEventListener('click', () => {
    let inputValue = document.querySelector('#textInput').value;
    let div = document.createElement('div');
    // const input = document.createElement('input');
    const span = document.createElement('span');
    const btnDelete = document.createElement('button');

    span.classList.add('font-normal', 'text-xl');
    div.classList.add('shadow-md', 'shadow-black', 'px-5', 'mb-4');
    // input.type = 'checkbox';
    // input.setAttribute('id', 'check');
    // input.setAttribute('onclick', 'validate()');
    btnDelete.setAttribute('type', 'button');
    btnDelete.classList.add('flex', 'bg-danger', 'text-white', 'ml-2', 'mt-5', 'p-1', 'mb-2', 'rounded-md');

    span.innerHTML = ' ' + inputValue;
    btnDelete.innerHTML = 'Delete';
    // div.appendChild(input);
    div.appendChild(span);
    div.appendChild(btnDelete);
    place.appendChild(div);

    div.addEventListener('click', () => {
        div.classList.add('bg-secondary');
        span.classList.add('text-textClick', 'line-through');

        const em = document.createElement('em');

        em.appendChild(span);
        div.appendChild(em);
        div.appendChild(btnDelete);
        place.appendChild(div);
    })

    btnDelete.addEventListener('click', () => {
        div.hidden = true;
    })
})


// function validate(){
//     if (document.querySelector('#check').checked == 1) {
//         document.querySelector('span').classList.add('line-through');
//     } else {
//         document.querySelector('span').classList.remove('line-through');
//     }
// }

