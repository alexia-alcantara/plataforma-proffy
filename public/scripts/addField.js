//procurar o botao e quando clicar, executar a ação de duplicar
//os campos. Após, colocar na página, para cada campo limpá-os

document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}