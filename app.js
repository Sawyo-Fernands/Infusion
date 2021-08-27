

const menu=document.getElementById('bar')


menu.addEventListener('click',()=>{

    let opacidade=document.getElementById('head2')
    opacidade.style.cursor='pointer';
        if (opacidade.classList=='off'){
            
            opacidade.classList.remove('off')
            opacidade.classList.add('on')
            
            opacidade.style.width='300px';
            
        }else{

            opacidade.classList.remove('on')
            opacidade.classList.add('off')
            
            opacidade.style.width='0px';

        }


})


