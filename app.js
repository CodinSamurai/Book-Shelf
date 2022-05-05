// var titles = document.getElementsByClassvalueee('title');
// Array.from(titles).forEach(function(item){
//     console.log(item);
// })
// for (let i = 0; i < titles.length; i++) {
//     console.log(titles[i])
    
// }

// Array.from(titles).forEach(element => {
//     console.log(element)
// });
// deletes a book
// var spans = document.querySelectorAll('#book-list .delete');
// spans.forEach(function(hello){
//     hello.addEventListener("click", function(e){
//         // sepeprate code
//         hello.classList.add('removee');
//         // ends here
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     })
// })

// this code adds a class with hidden visibility,gives asort of deletes a book function
// for (let i = 0; i < spans.length; i++) {
//     spans[i].addEventListener("click", function(e){
        // code 1
        // const list = e.target.parentElement;
        // list.parentNode.removeChild(list);
        // code 2
        // spans[i].classList.add("removee");
        // code 3
        //   const li = e.target.parentElement;
        //   li.classList.add('removee');
    // });
// }
var ul = document.querySelector('ul');
ul.addEventListener('click', function(v){
    // console.log(v.target)
        if (v.target.className == "delete"){
            const li = v.target.parentElement;
            li.parentNode.removeChild(li);
            // ul.removeChild(li);
        }
})

var addBook = document.forms['add-book'];
addBook.addEventListener('submit', function(e){
    e.preventDefault();
    var value = addBook.querySelector('input[type="text"]').value;
      var value1 = value.slice(0,1).toUpperCase();
       var value2 = value.slice(1,value.length).toLowerCase();
       var newValue = value1 + value2;
       var neww = newValue.replace(/\s/g,'');
    
       if (neww.length == 0 && neww == ''){
           console.log('write');
           confirm('write a title');
       }else if(neww.length == 0 && neww == 1){
        console.log('wrte');
       }else {

        // try a && to the if and check 2 conditions
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    var newSpan2 = document.createElement('span');
    var deleteBtn = document.createElement('button')

    newLi.appendChild(newSpan);
    newLi.appendChild(newSpan2);
    // ul.appendChild(deleteBtn);


    ul.appendChild(newLi);

    newSpan.textContent = neww;
    newSpan2.textContent = "delete";
    newSpan2.classList.add('delete');
    newSpan.classList.add('name');
    // deleteBtn.textContent = "reload";
    // deleteBtn.classList.add('displayBlock');

    addBook.reset(); }
})

var checkBox = document.querySelector('.check');
checkBox.addEventListener('change', function(e){
    if(e.target.checked){
        // if (checkBox.checked)
        ul.style.display = 'none'
    }else {
        ul.style.display = 'block'
    }
})

var searchBox = document.forms[0].querySelector('input');
searchBox.addEventListener('keyup', function(e){
    var text = e.target.value.toLowerCase();
    var li = document.querySelectorAll('li');
    li.forEach(function(books){
       var title = books.firstElementChild.textContent.toLowerCase();
        if(title.indexOf(text) != -1){
            books.style.display = 'flex';
            // books.classList.add('#book-list ul li');
        } else {
            books.style.display = 'none';
        }
    })
})

// const searchBox = document.forms['search-books'].querySelector('input');
// searchBox.addEventListener('keyup', function(e){
//     const term = e.target.value.toLowerCase();
//     const books = ul.getElementsByTagName('li');
//     Array.from(books).forEach(function(book){
//         const title = book.firstElementChild.textContent;
//         if (title.toLowerCase().indexOf(term) != -1) {
//             book.style.display = 'block'
//         }else {
//             book.style.display = 'none'
//         }
//     })
// })

var scrollBtn = document.querySelector('.icon');
window.onscroll = () => scrollUP();
scrollUP = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        scrollBtn.style.display = 'block';
    }else {
        scrollBtn.style.display = 'none';
        
    }
}

scrollBtn.addEventListener("click", function(){
    document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})