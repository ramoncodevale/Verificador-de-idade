function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            pessoa = 'Homem'
            if (idade >= 0 && idade < 3) {
                // Bebê
                img.setAttribute('src', 'img/bebê-m.png')
            } else if (idade < 10) {
                //Criança
               img.setAttribute('src', 'img/criança.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 30) {
                //Adulto
                img.setAttribute('src', 'img/homem-jovem-adulto.png')
            } else if (idade < 40) {
                //Adulto menos 40
                img.setAttribute('src', 'img/homem-Adulto.png')
            } else if (idade < 50) {
                //Adulto menor ou igual a 50
                img.setAttribute('src', 'img/idoso-45.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //Bebê
                img.setAttribute('src', 'img/bebê-f.png')
            }else if(idade < 10){
                // Criança
                img.setAttribute('src', 'img/criança-menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/mulher-jovem.png')
                // Jovem
            } else if (idade < 30) {
                //Adulta
                img.setAttribute('src', 'img/mulher-jovem-adulta.png')
            }else if (idade < 40){
                //Adulta menos 40 anos
                img.setAttribute('src', 'img/mulher-adulta.png')
            }else if (idade < 50){
                //Idosa menos 50
                img.setAttribute('src', 'img/mulher-idosa-45.png')
            } else {
                // Idosa
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.width = "300px";
        img.style.height = "300px";
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}