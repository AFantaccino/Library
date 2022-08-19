const addBook = document.querySelector(".addNewBook")
const lib = document.querySelector(".library")
let myLibrary = [];

addBook.addEventListener("click", () =>{
    const form = document.querySelector(".form")
    form.classList.toggle("hidden")
})

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(form) {
    const newbook = new Book(
        form.title.value,
        form.author.value,
        form.pages.value,
        form.read.checked
    )

    myLibrary.push(newbook)

    for (let i = 0; i<myLibrary.length; i++) {
        
        if(bookAlreadyInLibrary = document.getElementById(`${i}`)){ }

        else {
            const div = document.createElement("div")
            div.id = i;
            lib.appendChild(div)
            //
            const pname = document.createElement("p")
            pname.textContent = `${myLibrary[i].title}`
            div.appendChild(pname)
            //
            const pauthor = document.createElement("p")
            pauthor.textContent = `${myLibrary[i].author}`
            div.appendChild(pauthor)
            // 
            const ppages = document.createElement("p")
            ppages.textContent = `${myLibrary[i].pages}`
            div.appendChild(ppages)
            //
            const buttread = document.createElement("button")
            readStatus (i, buttread)
            buttread.addEventListener("click", (e)=>{
               const parentid = e.target.parentNode.id
               myLibrary[parentid].read ? myLibrary[parentid].read = false : myLibrary[parentid].read = true
               readStatus(parentid, buttread)
            })
            div.appendChild(buttread)
            // 
            const buttdelete = document.createElement("button")
            buttdelete.innerText = "Remove"
            div.appendChild(buttdelete)

            const child = document.getElementById(i)

            buttdelete.addEventListener("click", e =>{
                lib.removeChild(child)
                myLibrary.splice(lib.children.id, 1)
                for (let x = 0; x<lib.children.length; x++){
                    lib.children[x].id = x
                }
            })
        }
    }
}

function readStatus (i, button) {
    myLibrary[i].read ? read(button) : notRead(button) 
}

function read (button) {
    button.innerText = "Read"
    button.classList.remove("notread")
    button.classList.add("read")
}

function notRead (button) {
    button.innerText = "Not Read"
    button.classList.remove("read")
    button.classList.add("notread")
}