let block = document.getElementById("block")

function create(rows, cols) {
    let parent = document.createElement("div")
    parent.id = "child"
    for (let i = 0; i < rows; i++) {
        const div = document.createElement("div")
        div.id = i
        div.classList.add("row")
        for (let j = 0; j < cols; j++) {
            const div1 = document.createElement("div")
            div1.classList.add("col")
            if (Math.random() < 0.25) {
                div1.classList.add("red")
                div1.value = 'X'
            }

            div1.id = i.toString() + j.toString()
            div1.onclick = function() {
                colClicked(div1.id);
            }
            div.appendChild(div1)
        }
        parent.appendChild(div)
    }
    block.appendChild(parent)
    console.log(block)
}

create(5, 5)

let score = 0
localStorage.setItem("TopScore", 0)

function colClicked(col) {
    const element = document.getElementById(col)
    const para = document.getElementById("paragraph")
    const topscore = document.getElementById("topScore")
    element.style.color = "green"
    if (element.value == "X") {
        element.classList.add("over")
        alert("LOST GAME")
        Top = para.textContent.split(" ")
        if (localStorage.getItem("TopScore") < Top[1]) {
            localStorage.setItem("TopScore", Top[1])
            topscore.textContent = "Top Score: " + Top[1]
        }
        para.textContent = "Score: 0"
        score = 0
        let parent = document.getElementById("child")
        block.removeChild(parent)
        create(5, 5)
    } else {
        score = score + 1
        para.textContent = "Score: " + score.toString()
        const x = col.split("")
        let i = parseInt(x[0])
        let j = parseInt(x[1])
        if (i == 0 && j == 0) {
            let count = 0
            for (let k = i; k <= i + 1; k++) {
                for (let l = j; l <= j + 1; l++) {
                    if (document.getElementById(k.toString() + l.toString()).value == "X") {
                        count = count + 1
                    }
                }
            }
            element.textContent = count
        } else if (i == 0 && j == 4) {
            let count = 0
            for (let k = i; k <= i + 1; k++) {
                for (let l = j - 1; l <= j; l++) {
                    if (document.getElementById(k.toString() + l.toString()).value == "X") {
                        count = count + 1
                    }
                }
            }
            element.textContent = count
        } else if (i == 0) {
            let count = 0
            for (let k = i; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    if (document.getElementById(k.toString() + l.toString()).value == "X") {
                        count = count + 1
                    }
                }
            }
            element.textContent = count
        } else if (i == 4 && j == 0) {
            let count = 0
            for (let k = i - 1; k <= i; k++) {
                for (let l = j; l <= j + 1; l++) {
                    if (document.getElementById(k.toString() + l.toString()).value == "X") {
                        count = count + 1
                    }
                }
            }
            element.textContent = count

        } else if (j == 0) {
            let count = 0
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j; l <= j + 1; l++) {
                    if (document.getElementById(k.toString() + l.toString()).value == "X") {
                        count = count + 1
                    }
                }
            }
            element.textContent = count
        } else if (i == 4 && j == 4) {
            let count = 0
            for (let k = i - 1; k <= i; k++) {
                for (let l = j - 1; l <= j; l++) {
                    if (document.getElementById(k.toString() + l.toString()).value == "X") {
                        count = count + 1
                    }
                }
            }
            element.textContent = count
        } else if (i == 4) {
            let count = 0
            for (let k = i - 1; k <= i; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    if (document.getElementById(k.toString() + l.toString()).value == "X") {
                        count = count + 1
                    }
                }
            }
            element.textContent = count
        } else if (j == 4) {
            let count = 0
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j; l++) {
                    if (document.getElementById(k.toString() + l.toString()).value == "X") {
                        count = count + 1
                    }
                }
            }
            element.textContent = count
        } else {
            let count = 0
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    if (document.getElementById(k.toString() + l.toString()).value == "X") {
                        count = count + 1
                    }
                }
            }
            element.textContent = count
        }
    }

}