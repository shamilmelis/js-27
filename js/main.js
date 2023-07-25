const select = document.querySelector('#currency');
const input = document.querySelector('#number');
const convertSpan = document.querySelector('#convertRes')
const convertBtn = document.querySelector('#convertBtn')
const selectBase = document.querySelector('#baseCurr')
const currConvert = () => {
    fetch(`https://api.exchangerate.host/latest?base=${selectBase.value}&symbols=${select.value}&amount=${input.value}`)
        .then(res => res.json())
        .then(data => {
            convertSpan.innerHTML = `${input.value} ${selectBase.value} = ${Object.values(data.rates)} ${Object.keys(data.rates)}`
        })
}

convertBtn.addEventListener('click', () => {
    if (!!input.value) {
        if(selectBase.value === select.value) {
            alert('Выберите другую валюту!')
        } else {
            currConvert()
        }
    } else {
        alert('Напишите число!')
    }
})
