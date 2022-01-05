function formatTelefone(e) {
    console.log(e.key);

    let key = e.key;
    let isKeyBackspace = key !== 'Backspace';
    let isKeyDelete = key !== 'Delete';
    let isKeyEnter = key !== 'Enter';
    if(isKeyDelete && isKeyBackspace && isKeyEnter) {

        let phone = document.getElementById("telefone");
        console.log(phone.value.length);

        if(phone.value.length == 1){
            phone.value = "(" + phone.value;
        }
        else if(phone.value.length == 3){
            phone.value =phone.value + ") ";
        }
        else if(phone.value.length ==9){
            phone.value =phone.value + "-";
        }
    }
}