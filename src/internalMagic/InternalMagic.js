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
        condAlert('Каждый из наш в душе - настоящий пират, а не просто сотрудник компании', isAlerted);
        isAlerted = true;
    } else {
        result +=1;
    }


    // 5 error

    if (! destination.includes("://w")) {
        result +=1;
    } else {
        condAlert('Я вижу мусор, сначало нужно прибраться', isAlerted);
        isAlerted = true;
    }
    condAlert('Seems like you have all pieces of my map, enjoy', (result !== 5));

    alert( (5-result) + ' issue left');

    return result;
}

export function getSolvedIssuesNumber() {
    let result = 0;
    // for (let i = 0; i < 5; i++) {
    //     //alert(window.errorFixed[i]);
    //     if (window.errorFixed[i]) {
    //         result +=1;
    //     }
    // }
    return result;
}