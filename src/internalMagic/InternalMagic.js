let resultText = '';
let errorsText = '';
let url="https://api.findtreasure.com";
let destination='://w';
let wasFindTheTreasureExecuted = false;

export function f() {
    return resultText;
}

export function _3words () {
    alert('Так дайте металлоискатель')
}

//function call our API to get the treasure

export function findTheTreasure (urlVar, destinationVar) {
    url = urlVar;
    destination = destinationVar;
    wasFindTheTreasureExecuted = true;
}

export function checkCurrentState() {
    let result = 0;

    if (! wasFindTheTreasureExecuted) {
        resultText = 'Так дайте металлоискатель';
    }
    else {
        result +=1;
        // 2 error
        if (! (url.toString().includes('https'))) {
            result +=1;
            // 3 error
            if (! document.title.toString().includes("hat")) {
                result +=1;
                // 4 error
                if (url.includes('.com')) {
                    resultText = 'Каждый из нас в душе - настоящий пират, а не просто сотрудник КОМпании';
                } else {
                    result += 1;
                    // 5 error
                    if (!destination.includes("://w")) {
                        result += 1;
                        resultText = 'Йо-хо-хо! Кажется, вы собрали все кусочки головоломки';
                    } else {
                        resultText = 'Я вижу мусор, сначала нужно прибраться';
                    }
                }
            } else {
                resultText = 'Зачем мне сокровища, если есть роскошная шляпа?';
            }
        } else {
            resultText = 'Здесь все слишком охраняется, нужно менее безопасное место';
        }
        errorsText = result === 5 ? "" : "Ошибок осталось: " + (5 - result)

    }



    return resultText;
}

export function getErrorsText() {
    checkCurrentState();
    return errorsText;
}