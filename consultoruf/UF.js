function consultauf() {
    var uf = document.getElementById('txtcep').value;
    var url = `https://brasilapi.com.br/api/ibge/uf/v1/${uf}`;
    var request = new XMLHttpRequest();

    request.open('GET', url);
    request.onerror = function (e) {
        document.getElementById('divresultado').innerHTML = 'UF não encontrada';
    };

    request.onload = () => {
        var tblcep = document.getElementById("tblcep").querySelector("tbody");
        tblcep.innerHTML = '';
        var response = JSON.parse(request.responseText);

        console.log(request.responseText);

        if (response.erro === true) {
            document.getElementById('divresultado').innerHTML = 'UF não encontrada';
        } else {
            document.getElementById('divresultado').innerHTML = '';

            // ID
            var coluna1 = document.createElement('td');
            var coluna2 = document.createElement('td');
            var linha = document.createElement('tr');

            coluna1.innerHTML = `ID`;
            coluna2.innerHTML = `${response.id}`;
            linha.appendChild(coluna1);
            linha.appendChild(coluna2);
            tblcep.appendChild(linha);

            // Sigla
            coluna1 = document.createElement('td');
            coluna2 = document.createElement('td');
            linha = document.createElement('tr');

            coluna1.innerHTML = `Sigla`;
            coluna2.innerHTML = `${response.sigla}`;
            linha.appendChild(coluna1);
            linha.appendChild(coluna2);
            tblcep.appendChild(linha);

            // Nome
            coluna1 = document.createElement('td');
            coluna2 = document.createElement('td');
            linha = document.createElement('tr');

            coluna1.innerHTML = `Nome`;
            coluna2.innerHTML = `${response.nome}`;
            linha.appendChild(coluna1);
            linha.appendChild(coluna2);
            tblcep.appendChild(linha);

            // Região
            coluna1 = document.createElement('td');
            coluna2 = document.createElement('td');
            linha = document.createElement('tr');

            coluna1.innerHTML = `Região`;
            coluna2.innerHTML = `${response.regiao.nome}`;
            linha.appendChild(coluna1);
            linha.appendChild(coluna2);
            tblcep.appendChild(linha);
        }
    };
    request.send();
}
