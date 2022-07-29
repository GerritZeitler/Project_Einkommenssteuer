
let steuergesamt = document.getElementById("estgesamt")
let nettoAll = document.getElementById("nettogesamt")
let steuer = 0.54

function splitZuE() {
    let income = document.getElementById("einkommen").value
    let split = document.querySelector('input[name="ehegattensplittung"]:checked').value;

    if (split === "Ja") {
        income = income * 0.5
    }
    return income
}

function kSt() {
    let kirchen = document.getElementById("jahr").value

    if (kirchen = "nein") {
        steuer = steuer - 0.09
    }
    return steuer
}

function calculate1() {
    nettoAll.innerHTML = Math.floor(splitZuE() * kSt())
}




