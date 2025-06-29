

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validInputs()
})

const setError = (element,message) =>{
    const inputControls = element.parentElement;
    const errorDisplay = inputControls.querySelector('.error')
    errorDisplay.innerHTML = message
}

const setSuccs = (element) => {
    const inputControls = element.parentElement;
    const errorDisplay = inputControls.querySelector('.error')
    errorDisplay.innerHTML = ''
}

const vaildName = (name) =>{
    const res = /^[a-zA-Z\-]+$/
    return res.test(name)
}

const vaildEmail = (email) =>{
    const res = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return res.test(email)
}

// const vaildpassword = (password) =>{
//     const res = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@.#$!%?&])[A-Za-z\d@.#$!%?&]{8,15}$/
//     return res.test(password)
// }


const validInputs = () =>{
    const userName = Username.value
    const userEmail = Useremail.value
    const userPassword = Userpassword.value
    const confrimPassword = Confirmpassword.value


    if(userName === ''){
        setError(Username,"Please enter your name")
    }else if (!vaildName(userName)){
        setError(Username,"Please enter valid name")
    }else{
        setSuccs(Username)
    }

    if(userEmail === ''){
        setError(Useremail,"Please enter your email")
    }else if (!vaildEmail(userEmail)){
        setError(Usereamil,"Please enter valid email")
    }else{
        setSuccs(Useremail)
    }

    if(userPassword === ''){
        setError(Userpassword,"Please enter your password")
    }
    // else if (!vaildpassword(userPassword)){
    //     setError(Userpassword,"Please enter storng password length should be 8 letter")
    // }
    else{
        setSuccs(Userpassword)
    }

    if(confrimPassword === ''){
        setError(Confirmpassword,"Please Confrim your password")
    }else if (confrimPassword != userPassword){
        setError(Confirmpassword,"Your password is mismacth")
    }else{
        setSuccs(Confirmpassword)
    }

    if(userName&&userEmail&&userPassword){
        createTable(userName,userEmail,userPassword)
    }
}

const createTable = (name,email,password) => {
    const tbody = document.getElementById('root')
    const Tablerow = document.createElement('tr')
    Tablerow.innerHTML += `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td><button onclick='delrow(this)' class='delete' style='background-color:red;border:2px solid red; color:white;padding: 10px 20px;border-radius:5px;'>Delete</button></td>`

    tbody.appendChild(Tablerow)
}

function delrow(e) {
    e.closest('tr').remove()
}

pdf.addEventListener('click',()=>{
    const {jsPDF} = window.jspdf
    const doc = new jsPDF
    const table = document.querySelector('.table')
    doc.autoTable({
        html:table
    })
    doc.save("studt.pdf")
})

xl.addEventListener('click',()=>{
    const table = document.querySelector('.table')
    const xl = XLSX.utils.table_to_book(table)
    XLSX.writeFile(xl,"stdt.xlsx")
})


