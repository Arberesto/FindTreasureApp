
let errorsFixed =  new Array(5);
for (let i = 0; i < 5; i++) {
    errorsFixed[i] = false
}

export function callAPI (url, destination) {

    // 1 error

    if ( ! url.includes('https') ) {
        errorsFixed[1]=true;
    } else {
        errorsFixed[2]=false;
        //alert('Здесь все слишком охраняется, нужно менее безопасное место');
    }

    // 2 error

    /*
    if (document.getElementById('button').onclick != '_3words') {
        errorsFixed[2]=true
    } else {
        errorsFixed[2]=false
    }
     */

    alert (document.title);

    // 3 error

    if (document.title != 'hat') {
        errorsFixed[3]=true
    } else {
        errorsFixed[3]=false
        //alert(‘Зачем мне сокровища, если есть роскошная шляпа?’)
    }

    // 4 error

    if (! url.includes('.com')) {
        errorsFixed[4]=true
    } else {
        errorsFixed[4]=false
        //alert('Каждый из наш в душе - настоящий пират, а не просто сотрудник компании')
    }


    // 5 error

    if (! url === 's://w') {
        errorsFixed[5]=true
    } else {
        errorsFixed[5]=false
        //alert('Я вижу мусор, сначало нужно прибраться')
    }


}

export function getSolvedIssuesNumber() {
    let result = 0;
    for (let i = 0; i < 5; i++) {
        if (errorsFixed[i]) {
            result +=1;
        }
    }
    return result;
}