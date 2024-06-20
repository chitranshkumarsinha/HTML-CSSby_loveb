const card = document.querySelector('.container');
card.addEventListener('click',function(e){
    if(e.target.id === 'cardimg'){
        card.style.backgroundColor = 'red'
    }
})