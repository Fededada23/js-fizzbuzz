const container = document.querySelector('.container')
for(let i = 1; i<=100; i++){
    let box;
    if(i % 3 == 0 && i % 5 == 0){
        console.log('fizzbuzz')
        box = `<div class="box box-red">fizzbuzz</div>`
    }

    else if(i % 3 == 0){
        console.log('fizz')
        box = `<div class="box box-green">fizz</div>`

    }

    else if(i % 5 == 0){
        console.log('buzz')
        box = `<div class="box box-yellow">buzz</div>`

    }

    else{
    console.log(i)
    box = `<div class="box">${i}</div>`
    }
    
    container.innerHTML += box;
} 



