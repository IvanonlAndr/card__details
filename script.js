let numberInput = document.querySelector('#number')
let cardNumber = document.querySelector('.card__number')
let nameInput = document.querySelector('#name')
let cardName = document.querySelector('.card__name')
let monthInput = document.querySelector('#month')
let cardMonth = document.querySelector('.month')
let yearInput = document.querySelector('#year')
let cardYear = document.querySelector('.year')
let cvcInput = document.querySelector('#cvc')
let cardCvc = document.querySelector('.card__cvc')
let button = document.querySelector('#confirm')
let letters = Array.from(Array(26)).map((_, i) => i + 97)
console.log(letters)
let charletters = letters.map(letter => String.fromCharCode(letter))
console.log(charletters)
let cardForm = document.querySelector('.card__inner-form')
let cardWrongText = document.querySelectorAll('#cardWrongText')
let cardHidden = document.querySelector('.card__inner-hidden')
nameInput.addEventListener('input', function () {
    cardName.textContent = nameInput.value
})

numberInput.addEventListener('input', function () {
    cardNumber.textContent = numberInput.value

    if (numberInput.value === '') {
        cardNumber.textContent = '0000 0000 0000 0000'
    }

})

monthInput.addEventListener('input', function () {
    cardMonth.textContent = monthInput.value
})

yearInput.addEventListener('input', function () {
    cardYear.textContent = yearInput.value

})


cvcInput.addEventListener('input', function () {
    cardCvc.textContent = cvcInput.value
})

button.addEventListener('click', function () {
    // console.log(charletters.map(charletter => numberInput.value.includes(charletter) ? console.log(charletter) : false))

    if (nameInput.value == '') {
        console.log(10)
        cardWrongText[0].classList.remove('hidden')
        nameInput.classList.add('wrongBorder')
    }

    charletters.map(charletter => {
        if (numberInput.value.includes(charletter)) {
            cardForm.classList.remove('hidden')
            cardHidden.classList.add('hidden')
            cardWrongText[1].classList.remove('hidden')
            numberInput.classList.add('wrongBorder')
        }
    })

    if (yearInput.value == '') {
        cardWrongText[2].classList.remove('hidden')
        yearInput.classList.add('wrongBorder')
    }

    if (monthInput.value == '') {
        cardWrongText[2].classList.remove('hidden')
        monthInput.classList.add('wrongBorder')
    }

    if (cvcInput.value == '') {
        cardWrongText[3].classList.remove('hidden')
        cvcInput.classList.add('wrongBorder')
    }



    if (nameInput.value !== '' && numberInput.value !== '' && Number(yearInput.value) && Number(monthInput.value) && Number(cvcInput.value) && yearInput.value !== '' && monthInput.value !== '' && cvcInput.value !== '') {
        cardForm.classList.add('hidden')
        cardHidden.classList.remove('hidden')
        charletters.map(charletter => {
            if (numberInput.value.includes(charletter)) {
                cardForm.classList.remove('hidden')
                cardHidden.classList.add('hidden')
                cardWrongText[1].classList.remove('hidden')
                numberInput.classList.add('wrongBorder')
            }
        })
    }



})