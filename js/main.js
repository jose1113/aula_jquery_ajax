function consultaCep() {
    $(".barra-progresso").show()
    let cep = document.getElementById('cep').value
    let url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(url)
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response)
            $("#logradouro").html(response.logradouro)
            // $("#uf").html(response.uf)
            $("#localidade").html(response.localidade + "/" + response.uf)
            $("#bairro").html(response.bairro)
            $("#titulo_cep").html("CEP " + response.cep)
            $(".cep").show()
            $(".barra-progresso").hide()
            // $("#logradouro").html(response.logradouro)
            // document.getElementById('logradouro').innerHTML = response.logradouro
            // document.getElementById('bairro').innerHTML = response.bairro
            // document.getElementById('localidade').innerHTML = response.localidade
            // document.getElementById('uf').innerHTML = response.uf
            // alert(response.logradouro)
        }
    })    
}

$(function() {
    $(".cep").hide()
    $(".barra-progresso").hide()
})
