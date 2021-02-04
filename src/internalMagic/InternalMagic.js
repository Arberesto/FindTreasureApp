export function _3words () {
    alert('Так дайте металлоискатель')
};

//function call our API to get the treasure

export function findTheTreasure (url, destination) {
    let junk = callAPI(url, destination)
    return junk
};

function condAlert(text, isAlerted) {
    if (! isAlerted) {
        alert(text);
    }
}

export function callAPI (url, destination) {

    let isAlerted = false;
    let result = 0;

    // 1 error

    if (! (url.toString().includes('https'))) {
        result +=1;
    } else {
        condAlert('Здесь все слишком охраняется, нужно менее безопасное место', isAlerted)
        isAlerted = true;
    }

    // 2 error

    // if you call this method, you're not using _3words, so you get first issue fixed
    result +=1;

    //alert (document.title);

    // 3 error
    if (! document.title.toString().includes("hat")) {
        result +=1;
    } else {
        condAlert('Зачем мне сокровища, если есть роскошная шляпа?', isAlerted);
        isAlerted = true;
    }

    // 4 error
    if (url.includes('.com')) {
        condAlert('Каждый из нас в душе - настоящий пират, а не просто сотрудник КОМпании', isAlerted);
        isAlerted = true;
    } else {
        result +=1;
    }


    // 5 error

    if (! destination.includes("://w")) {
        result +=1;
    } else {
        condAlert('Я вижу мусор, сначала нужно прибраться', isAlerted);
        isAlerted = true;
    }
    condAlert('Йо-хо-хо! Кажется, вы собрали все кусочки головоломки', (result !== 5));

    alert( "Ошибок осталось: " + (5-result));

    return result;
}