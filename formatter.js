window.onload = function () {
    const input = document.querySelector('input')

    let previousValue = ''
    let firstThreeNumbers = ''
    input.addEventListener('input', (e) => {
        const inputvalue = e.target.value


        if (/\d+$/g.test(inputvalue)) {
            input.value = inputvalues
        } else {
            input.value = inputvalue.substring(0, inputvalue.length - 1)
        }

        if (inputvalue.length === 4 && previousValue.length < inputvalue.length) {
            firstThreeNumbers = inputvalue.substring(0, 3)
            input.value = `+(${inputvalue.substring(0, 3)}) - ${inputvalue[inputvalue.length - 1]}`
        } else if (inputvalue.length === 9 && previousValue.length > inputvalue.length) {
            input.value = firstThreeNumbers
        }
        previousValue = inputvalue
    })

}
