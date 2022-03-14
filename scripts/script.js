let app = getAdvices();
app.then(data => {
    const el = document.querySelector(".advice");
    el.innerHTML = makeTemplate(data.advice, data.id);

    generateNewAdvice();
})

//===========FETCH ADVICES DATA====================
async function getAdvices() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const data = await response.json();

    const advice = data.slip.advice;
    const id = data.slip.id;

    return {
        advice, id
    }

}
//===========FETCH ADVICES DATA====================

function makeTemplate(advice, id) {
    return `
    <span>ADVICE #${id}</span>
    <q>${advice}</q>
    `
}

function generateNewAdvice() {

    const button = document.querySelector(".button");
    const advice_msg = document.querySelector(".advice > q");
    const id_num = document.querySelector(".advice > span");
 
    button.addEventListener("click", () => {
        let _adv = getAdvices();
        let _id = getAdvices();

        _adv.then(data => {
            advice_msg.textContent = data.advice;
        });

        _id.then(data => {
            id_num.textContent = "ADVICE #" + data.id;
        });

    });


}


