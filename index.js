const inputn = document.querySelectorAll("input")[0];
const inputnn = document.querySelectorAll("input")[1];
const inputp = document.querySelectorAll("input")[2];
const h = document.querySelector("h1");
const t = localStorage.length

document.querySelector("button").addEventListener("click", function () {



    if (inputn.value == "" || inputnn.value == "" || inputp.value == "") {
        h.style.display = "block";
    }
    else {
        let inf = ''
        for (let p = 0; p < t; p++) {
            inf += localStorage.key(p)

        }
        console.log(inf)
        if (inf.includes(inputnn.value)) {
            Swal.fire({
                title: "Already taken",
              });
            console.log("bor")
            // console.log(inf)
        }
        else {
            h.style.display = "none";
            const users = {
                name: inputn.value,
                nn: inputnn.value,
                pssw: inputp.value,
            }
            inputn.value = "",
                inputnn.value = "",
                inputp.value = ""
            const ch = JSON.stringify(users)
            localStorage.setItem(users.nn, ch)
            console.log("yoq")
        }


    }

})
















inputn.addEventListener("keyup", () => {
    if (inputn.value == "") {
        inputn.style.outline = "2px solid red"
    }
    else {
        inputn.style.outline = "2px solid limegreen"
    }
})
inputnn.addEventListener("keyup", () => {
    if (inputnn.value == "") {
        inputnn.style.outline = "2px solid red"
    }
    else {
        inputnn.style.outline = "2px solid limegreen"
    }
})
inputp.addEventListener("keyup", () => {
    if (inputp.value == "") {
        inputp.style.outline = "2px solid red"
    }
    else {
        inputp.style.outline = "2px solid limegreen"
    }
})
