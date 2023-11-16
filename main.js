let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
}
let inps = document.querySelectorAll('input')
let form = document.forms.login

inps.forEach(inp=> {
    inp.onkeyup = () => {
        console.log(
            patterns[inp.name].test(inp.value)
        );
        if(patterns[inp.name].test(inp.value)){
            inp.parentElement.classList.remove('errorField')
        } else {
            inp.parentElement.classList.add('errorField')
        }
    }
} )

form.onsubmit = (e) => {
    e.preventDefault()

    inps.forEach(inp => {
        if (inp.parentElement.calssList.contains('errorField' ) || inp.value.length === 0 && inp.parentElement.classList.contains ('requared')) {
            inp.parentElement.classList.add('errorField')
            error = true
        }
    })
    if(error) {
        alert('error')
    } else {
        submit()
    }
}
function submit() {
    let user = {}
    let fm = new FormData(form)
    fm.forEach((value,key) => {
        user[key] = value
    })
    inps.forEach(inp => inp.value === '')
    console.log(user);
}