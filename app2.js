const seta1=document.getElementById('left')
const seta2=document.getElementById('right')


seta1.addEventListener('click',()=>{
    let alterar=document.getElementById('mudar')
    let novo=document.getElementById('cego')

    if(novo.classList=='vazio'){
        novo.classList.add('aparecendo')
        novo.classList.remove('vazio')
        alterar.classList.add('vazio')
        alterar.classList.remove('aparecendo')
    }else{
        novo.classList.remove('aparecendo')
        novo.classList.add('vazio')
        alterar.classList.remove('vazio')
        alterar.classList.add('aparecendo')
    }

})

seta2.addEventListener('click',()=>{

    let alterar=document.getElementById('mudar')
    let novo=document.getElementById('cego')

    if(novo.classList=='vazio'){
        novo.classList.add('aparecendo')
        novo.classList.remove('vazio')
        alterar.classList.add('vazio')
        alterar.classList.remove('aparecendo')
    }else{
        novo.classList.remove('aparecendo')
        novo.classList.add('vazio')
        alterar.classList.remove('vazio')
        alterar.classList.add('aparecendo')
    }


})