const ctx = document.getElementById('myChart')

let botao = document.querySelector('#calcular')

botao.addEventListener('click', function(event){
    event.preventDefault()
    let a = Number(document.querySelector('#a').value)
    let b = Number(document.querySelector('#b').value)
    let c = Number(document.querySelector('#c').value)
    let xMin = Number(document.querySelector('#xMin').value)
    let xMax = Number(document.querySelector('#xMax').value)

    let x = xMin
    let y = []
    let labels = []
    while(x <= xMax){
       y.push(a*(x * x) + b * x + c)
       labels.push(x)
       x = x + 1
    }
    
    const data = {
        labels,
        datasets: [{
            data: y,
            label: 'Função exponencial',
            borderColor: "black",
            backgroundColor: "transparent",
        }]
    }

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true
        }
    };

    const myChart = new Chart(
        ctx,
        config
      );
    //document.querySelector('#resposta').textContent = y 
})