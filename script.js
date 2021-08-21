



function clear () {

    arr = [];
    document.getElementById('hund-num').value = "";
    document.getElementById('tens-num').value = "";
    document.getElementById('units-num').value = "";
}

function turnChannel () {
    
    document.getElementById('video').innerHTML = 
    `<img src="img/${arr[0]}${arr[1]}${arr[2]}.jpg" class="pic4">`

    setTimeout("clear()", 750 );
}



function turnChannelDelay () {
    if (arr[0] !== undefined && arr[1] == undefined && arr[2] == undefined) {

        document.getElementById('video').innerHTML = 
        `<img src="img/${arr[0]}.jpg" class="pic1">`

    } else if (arr[0] !== undefined && arr[1] !== undefined && arr[2] == undefined) {

        document.getElementById('video').innerHTML = 
        `<img src="img/${arr[0]}${arr[1]}.jpg" class="pic1">`
    }

    setTimeout("clear()", 750 );
}

function turnChannelNow () {

    if (arr[0] !== undefined && arr[1] !== undefined && arr[2] !== undefined) {

        document.getElementById('video').innerHTML = 
        `<img src="img/${arr[0]}${arr[1]}${arr[2]}.jpg" class="pic4">`

    } else if (arr[0] !== undefined && arr[1] !== undefined && arr[2] == undefined) {

        document.getElementById('video').innerHTML = 
        `<img src="img/${arr[0]}${arr[1]}.jpg" class="pic1">`
    } else if (arr[0] !== undefined && arr[1] == undefined && arr[2] == undefined) {

        document.getElementById('video').innerHTML = 
        `<img src="img/${arr[0]}.jpg" class="pic1">`
    }

    setTimeout("clear()", 750 );
}

function delay () { 

    if (arr[0] !== undefined && arr[1] == undefined) {
        turnChannelDelay();
    } else if (arr[0] !== undefined && arr[1] !== undefined && arr[2] == undefined) {
        turnChannelDelay();
    }
};

let arr = [];

$(document).keydown(function (event) {
    
    let num = event.keyCode;

    if (num == 49) {
        arr.push(1);
    } else if (num == 50) {
        arr.push(2);
    } else if (num == 51) {
        arr.push(3);
    } else if (num == 52) {
        arr.push(4);
    } else if (num == 53) {
        arr.push(5);
    } else if (num == 54) {
        arr.push(6);
    } else if (num == 55) {
        arr.push(7);
    } else if (num == 56) {
        arr.push(8);
    } else if (num == 57) {
        arr.push(9);
    } else if (num == 48) {
        arr.push(0);
    } else if (num == 13) {
        turnChannelNow();
    }

    console.log(arr);
    
    // 控制頻道數字顯示
    document.getElementById('hund-num').value = arr[0];
    document.getElementById('tens-num').value = arr[1];
    document.getElementById('units-num').value = arr[2];

    if (arr[1] == undefined && arr[2] == undefined) {
        document.getElementById('tens-num').value = "_";
        document.getElementById('units-num').value = "_";
    } else if (arr[2] == undefined) {
        document.getElementById('units-num').value = "_";
    }

    //控制頻道畫面顯示
    if (arr[0] !== undefined && arr[1] !== undefined && arr[2] !== undefined) {
        turnChannel();
    }
    setTimeout("delay()", 1000); 

});


// Enter = 13
//setTimeOut, setInterVal, Delay



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 如果輸入 034 頻道，無法前往 34 頻道 
// 點數字以外的會出現錯誤
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



