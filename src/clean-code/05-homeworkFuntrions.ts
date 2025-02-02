;(() => {
    function isRedFrui(fruit: string): boolean {
        const redFruits = ["manzana", "fresa", "cereza", "granada", "frambuesa"]
        return redFruits.includes(fruit)
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor(color: string): string[] {
        
        const fruits = ["manzana", "fresa", "cereza", "granada", "frambuesa", "piña", "banana", "moras", "uvas"]
        const redFruits = ["manzana", "fresa", "cereza", "granada", "frambuesa"]
        const yellowFruits = ["piña", "banana"]
        const purpleFruits = ["moras", "uvas"]

        switch (color) {
            case "red":
                return redFruits
            case "yellow":
                return yellowFruits
            case "purple":
                return purpleFruits
            default:
                throw new Error("the color must be: red, yellow, purple")
        }


    }

    // Simplificar esta función
    let isFirstStepWorking = true
    let isSecondStepWorking = true
    let isThirdStepWorking = true
    let isFourthStepWorking = true

    function workingSteps() {
        if (isFirstStepWorking === true) {
            if (isSecondStepWorking === true) {
                if (isThirdStepWorking === true) {
                    if (isFourthStepWorking === true) {
                        return "Working properly!"
                    } else {
                        return "Fourth step broken."
                    }
                } else {
                    return "Third step broken."
                }
            } else {
                return "Second step broken."
            }
        } else {
            return "First step broken."
        }
    }

    // isRedFruit
    console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }) // true
    console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }) // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor("red") }) // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor("yellow") }) // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor("purple") }) // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }) // Cambiar los valores de la línea 31 y esperar los resultados
})()
