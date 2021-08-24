

let video = document.getElementById('video');
let hundNum = document.getElementById('hund-num');
let tensNum = document.getElementById('tens-num');
let unitsNum = document.getElementById('units-num');
let bg = document.getElementById('default');

let arr = [];
let cURL = ['' , ''];


// 轉台後重置
function clear () {

    arr = [];
    hundNum.value = "";
    tensNum.value = "";
    unitsNum.value = "";
}

// 完整輸入三位數轉台
function turnChannel () {

    if (arr[0] == 0 && arr[1] == 0) {
        video.innerHTML = `<iframe src="${cURL[`${arr[2]}`]}"></iframe>`
    } else if (arr[0] == 0) {
        video.innerHTML = `<iframe src="${cURL[`${arr[1]}${arr[2]}`]}"></iframe>`
    } else {
        video.innerHTML = `<iframe src="${cURL[`${arr[0]}${arr[1]}${arr[2]}`]}"></iframe>`
    };

    bg.classList.add('bg');

    setTimeout("clear()", 750 );
}
// 只輸入一、二碼轉台
function turnChannelDelay () {
    if (arr[0] !== undefined && arr[1] == undefined && arr[2] == undefined) {

        video.innerHTML = `<iframe src="${cURL[`${arr[0]}`]}"></iframe>`

    } else if (arr[0] !== undefined && arr[1] !== undefined && arr[2] == undefined) {

        video.innerHTML = `<iframe src="${cURL[`${arr[0]}${arr[1]}`]}"></iframe>`
    }

    bg.classList.add('bg');
    setTimeout("clear()", 750 );
}
// 按下 Enter 立刻轉台
function turnChannelNow () {

    if (arr[0] !== undefined && arr[1] !== undefined && arr[2] !== undefined) {

        video.innerHTML = `<iframe src="${cURL[`${arr[0]}${arr[1]}${arr[2]}`]}"></iframe>`

    } else if (arr[0] !== undefined && arr[1] !== undefined && arr[2] == undefined) {

        video.innerHTML = `<iframe src="${cURL[`${arr[0]}${arr[1]}`]}"></iframe>`

    } else if (arr[0] !== undefined && arr[1] == undefined && arr[2] == undefined) {

        video.innerHTML = `<iframe src="${cURL[`${arr[0]}`]}"></iframe>`

    }

    bg.classList.add('bg');
    setTimeout("clear()", 750 );
}

// 輸入一、二碼情況下延遲
function delay () { 

    if (arr[0] !== undefined && arr[1] == undefined) {
        turnChannelDelay();
    } else if (arr[0] !== undefined && arr[1] !== undefined && arr[2] == undefined) {
        turnChannelDelay();
    }
};

// 按下數字鍵
$(document).keydown(function (event) {
    
    let num = event.keyCode;

    if (num == 49) {
        arr.push('1');
    } else if (num == 50) {
        arr.push('2');
    } else if (num == 51) {
        arr.push('3');
    } else if (num == 52) {
        arr.push('4');
    } else if (num == 53) {
        arr.push('5');
    } else if (num == 54) {
        arr.push('6');
    } else if (num == 55) {
        arr.push('7');
    } else if (num == 56) {
        arr.push('8');
    } else if (num == 57) {
        arr.push('9');
    } else if (num == 48) {
        arr.push('0');
    } else if (num == 13) {
        turnChannelNow();
    } else {
        arr = ['O' , 'r' , 'z'];
    }

    // console.log(arr);
    
    // 控制頻道數字顯示
    hundNum.value = arr[0];
    tensNum.value = arr[1];
    unitsNum.value = arr[2];

    if (arr[1] == undefined && arr[2] == undefined) {
        tensNum.value = "_";
        unitsNum.value = "_";
    } else if (arr[2] == undefined) {
        unitsNum.value = "_";
    }

    //控制頻道畫面顯示
    if (arr[0] !== undefined && arr[1] !== undefined && arr[2] !== undefined) {
        turnChannel();
    }
    setTimeout("delay()", 1000); 
});


axios
    .get('https://api.giphy.com/v1/gifs/search?api_key=LGQIENgsIjHrErZUlZ4mz2D8xpwly9lm&q=cat&limit=50&offset=0&rating=pg&lang=en')
    .then(res => {
        // console.log('success' , res.data.data[0].embed_url);
        res.data.data.forEach( function (cat) {
            cURL.push(cat.embed_url)
        });
    })
    .catch( err => {
        console.log('error' , err);
    });

axios
    .get('https://api.giphy.com/v1/gifs/search?api_key=LGQIENgsIjHrErZUlZ4mz2D8xpwly9lm&q=cartoon&limit=50&offset=0&rating=pg&lang=en')
    .then(res => {
        // console.log('success' , res.data.data[0].embed_url);
        res.data.data.forEach( function (cartoon) {
            cURL.push(cartoon.embed_url);
        });
    })
    .catch( err => {
        console.log('error' , err);
    });

axios
    .get('https://api.giphy.com/v1/gifs/search?api_key=LGQIENgsIjHrErZUlZ4mz2D8xpwly9lm&q=hell&limit=49&offset=0&rating=pg&lang=en')
    .then(res => {
        // console.log('success' , res.data.data[0].embed_url);
        res.data.data.forEach( function (cartoon) {
            cURL.push(cartoon.embed_url);
        });
    })
    .catch( err => {
        console.log('error' , err);
    });

    // console.log('cURL' , cURL);

