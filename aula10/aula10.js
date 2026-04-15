const caixa = window.document.getElementById('area')

    caixa.addEventListener('click' , clicar)
    caixa.addEventListener('mouseenter' , entrar)
    caixa.addEventListener('mouseout' , sair)
        

        function clicar() {
            caixa.innerText = 'Clicou!' 
        }

        function entrar() { 
            caixa.innerText = 'Entrou!'
        }
        function sair() {
            caixa.innerText = "Saiu!"
        }

