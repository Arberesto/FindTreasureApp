export function _3words () {
    alert('Так дайте металлоискатель')
};

//function call our API to get the treasure

export function findTheTreasure (url, destination) {
    let junk = callAPI(url, destination)
};

function condAlert(text, isAlerted) {
    if (! isAlerted) {
        alert(text);
    }
}

window.result = 0;
let errorFixed = new Array(5);
for (let i = 0; i < 5; i++) {
    errorFixed[i] = false
}

window.errorFixed = errorFixed;


export function callAPI (url, destination) {

    let isAlerted = false;
    let result = 0;

    // 1 error

    if (! (url.toString().includes('https'))) {
        window.errorFixed[1]=true;
        result +=1;
    } else {
        window.errorFixed[2]=false;
        condAlert('Здесь все слишком охраняется, нужно менее безопасное место', isAlerted)
        isAlerted = true;
    }

    // 2 error
    let buttons = document.getElementsByClassName('main__button-answer');
    //alert(buttons.length)
    let button = buttons[0];
    //alert(button.onclick);

    if (! button.onclick.toString().includes("_3words")) {
        window.errorFixed[2]=true;
        result +=1;
    } else {
        window.errorFixed[2]=false;
        isAlerted = true;
    }

    //alert (document.title);

    // 3 error
    if (! document.title.toString().includes("hat")) {
        window.errorFixed[3]=true;
        result +=1;
    } else {
        window.errorFixed[3]=false;
        condAlert('Зачем мне сокровища, если есть роскошная шляпа?', isAlerted);
        isAlerted = true;
    }

    // 4 error
    if (url.includes('.com')) {
        window.errorFixed[4]=false;
        condAlert('Каждый из наш в душе - настоящий пират, а не просто сотрудник компании', isAlerted);
        isAlerted = true;
    } else {
        window.errorFixed[4]=true;
        result +=1;
    }


    // 5 error

    if (! destination.includes("://w")) {
        window.errorFixed[5]=true;
        result +=1;
    } else {
        window.errorFixed[5]=false;
        condAlert('Я вижу мусор, сначало нужно прибраться', isAlerted);
        isAlerted = true;
    }

    condAlert('Seems like you have all pieces of my map, enjoy', isAlerted)


    window.result = result;

    return result;
}

export function getSolvedIssuesNumber() {
    let result = 0;
    for (let i = 0; i < 5; i++) {
        //alert(window.errorFixed[i]);
        if (window.errorFixed[i]) {
            result +=1;
        }
    }
    return result;
}