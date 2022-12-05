var bmiCategory = require('@superkhau/bmi-category');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Height(cm): `, height => {
    readline.question(`Weight(kg): `, weight => {
        BMI = weight / ((height * height) / 10000)
        result = bmiCategory.get(BMI)
        console.log(`BMI = ${BMI} - ${result}`)
        readline.close()
    })
})