let teacherForms = document.getElementsByClassName("teacher-contract")
for (let teacherForm of teacherForms) {
    teacherForm.addEventListener("submit", function(event) {
        event.preventDefault()

        let price = teacherForm.price.value
        let hours = teacherForm.hours.value

        let total = price * hours

        let message = `O valor total do contrato é de: R$ ${total}`
        alert(message)
    })
}