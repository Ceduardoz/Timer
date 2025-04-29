function contador(){
    function criaHora(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHora(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e){
        const el = e.target.closest("button");  
    
        if (el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
            document.body.classList.remove('modoPausado');
        }
        if (el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
            document.body.classList.add('modoPausado');   
        }
        if (el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            document.body.classList.remove('modoPausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    });
}

contador();