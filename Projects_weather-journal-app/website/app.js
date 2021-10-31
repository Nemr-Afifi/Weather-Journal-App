/* Global Variables */
const apiKey = "72cc9dda5a82dad2bfe69f105910248e"
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();



const zipButton = document.querySelector('#generate')

zipButton.addEventListener("click", async ()=> {
    try{
        const zipCode = document.querySelector("#zip").value 
        const logCont = document.querySelector("#feelings").value
        if(!zipCode){
            alert("Please enter your Zipcode!")
        }
        const fullUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`

        const apiRes = await fetch(fullUrl)
        const logData = await apiRes.json()
        const logTemp = logData.main.temp

        await fetch('/dataSave',{
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: newDate,
                temp: logTemp,
                content: logCont
            })
        })
        const mainRes = await fetch('/userTemp')
        const totalData = await mainRes.json()
        console.log(totalData);
    }catch(error){
        console.log("error",error);
    }
    const request = await fetch('/userTemp')
    try{
        const requestUI = await request.json()
        console.log(requestUI);
        document.getElementById('date').innerHTML = requestUI.date;
        document.getElementById('temp').innerHTML = requestUI.temp;
        document.getElementById('content').innerHTML = requestUI.content;
    }catch(error){
        console.log("error", error)
    }
})

/*
const updateUI = async ()=> {
    const request = await fetch('/userTemp')
    try{
        const updateUtotaliData = await request.json()
        console.log(updateUiData);
        document.getElementById('date').innerHTML = updateUiData[0].date;
        document.getElementById('temp').innerHTML = updateUiData[0].temp;
        document.getElementById('content').innerHTML = updateUiData[0].content;
    }catch(error){
        console.log("error", error)
    }
}
*/