var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")
var b5 = document.getElementById("b5")
var b6 = document.getElementById("b6")
var b7 = document.getElementById("b7")
var b8 = document.getElementById("b8")
var b9 = document.getElementById("b9")

var reset = document.getElementById("but")

var i = 0

player_1 = "X"
player_2 = "O"

reset.addEventListener('click', () => {
    b1.value = ""
    b2.value = ""
    b3.value = ""
    b4.value = ""
    b5.value = ""
    b6.value = ""
    b7.value = ""
    b8.value = ""
    b9.value = ""
    i = 0

})
b1.addEventListener('click', () => {
    if (i == 0) {
        b1.value = player_1
        i = 1
    } else {
        b1.value = player_2
        i = 0


    }
    checkWinner();
})

b2.addEventListener('click', () => {
    if (i == 0) {
        b2.value = player_1
        i = 1
    } else {
        b2.value = player_2
        i = 0


    }
    checkWinner();

})

b3.addEventListener('click', () => {
    if (i == 0) {
        b3.value = player_1
        i = 1
    } else {
        b3.value = player_2
        i = 0
    }

})

b4.addEventListener('click', () => {
    if (i == 0) {
        b4.value = player_1
        i = 1
    } else {
        b4.value = player_2
        i = 0


    }
    checkWinner();
})

b5.addEventListener('click', () => {
    if (i == 0) {
        b5.value = player_1
        i = 1
    } else {
        b5.value = player_2
        i = 0


    }
    checkWinner();
})

b6.addEventListener('click', () => {
    if (i == 0) {
        b6.value = player_1
        i = 1
    } else {
        b6.value = player_2
        i = 0

    }
    checkWinner();

})

b7.addEventListener('click', () => {
    if (i == 0) {
        b7.value = player_1
        i = 1
    } else {
        b7.value = player_2
        i = 0


    }
    checkWinner();
})

b8.addEventListener('click', () => {
    if (i == 0) {
        b8.value = player_1
        i = 1
    } else {
        b8.value = player_2
        i = 0


    }
    checkWinner();
})

b9.addEventListener('click', () => {
    if (i == 0) {
        b9.value = player_1
        i = 1
    } else {
        b9.value = player_2
        i = 0

    }
    checkWinner();
})

function checkWinner() {

    if (b1.value == b2.value && b2.value == b3.value && b1.value != "") {
        alert("Player " + b1.value + " wins!");
        reset.click();
    } else if (b4.value == b5.value && b5.value == b6.value && b4.value != "") {
        alert("Player " + b4.value + " wins!");
        reset.click();
    } else if (b7.value == b8.value && b8.value == b9.value && b7.value != "") {
        alert("Player " + b7.value + " wins!");
        reset.click();
    }

    else if (b1.value == b4.value && b4.value == b7.value && b1.value != "") {
        alert("Player " + b1.value + " wins!");
        reset.click();
    } else if (b2.value == b5.value && b5.value == b8.value && b2.value != "") {
        alert("Player " + b2.value + " wins!");
        reset.click();
    } else if (b3.value == b6.value && b6.value == b9.value && b3.value != "") {
        alert("Player " + b3.value + " wins!");
        reset.click();
    }

    else if (b1.value == b5.value && b5.value == b9.value && b1.value != "") {
        alert("Player " + b1.value + " wins!");
        reset.click();
    } else if (b3.value == b5.value && b5.value == b7.value && b3.value != "") {
        alert("Player " + b3.value + " wins!");
        reset.click();
    }
}