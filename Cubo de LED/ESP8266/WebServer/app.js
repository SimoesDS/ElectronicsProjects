var formNetwork = document.getElementById('formNetwork');

formNetwork.addEventListener('submit', function(e){
    e.preventDefault();
    
    var data = new FormData(formNetwork);

    console.log(data);
    // console.log(data.get('inputNameNetwork'));
    // console.log(data.get('inputPassNetwork'));
})