let count = 0

const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){

    btn.addEventListener('click', function(bt) {
        
        const b = bt.currentTarget.classList

        if (b.contains('decrease')) {
            
            count --
        }else if(b.contains('reset')){

            count = 0
        }else{

            count ++
        }

        if (count > 0) {
            
            value.style.color = '#4DF136'
        }else if(count < 0){

            value.style.color = '#DB0313'
        }else{

            value.style.color = '#222'
        }
        value.textContent = count
    })
})