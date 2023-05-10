const resp = fetch('https://reqres.in/api/users?page=1')

resp.then(res => res.json()).then(person => {
var bod = $('#body')
var items = ''
console.log(person.data)
    const per = person.data.map(x => 
       
        items += '<div class="col-sm-4">' +
        '<div class="card">'+
        '<div class="card-body">' +
        '<div class="card-title"> ' + x.first_name + ' ' + x.last_name + '</div>'+
        '<button class="btn btn-primary" onclick="especificGet( ' + x.id+ ')">Ver</button>'+
        '</div>'+
        '</div>' + 
        '</div>' )
        bod.append(items)
}).catch(console.log)



const especificGet = (userId) =>{
    const rest = fetch('https://reqres.in/api/users/' + userId)
    rest.then(response => response.json().then(ui => {
        $('#modalUser').show()
        $('#imgUser').attr('src',ui.data.avatar)
        $('#name').text(ui.data.first_name + ' ' + ui.data.last_name)
        $('#email').text(ui.data.email)
        console.log(ui.data)
    }))
}

const closeModal = () =>{
    $('#modalUser').hide()
}