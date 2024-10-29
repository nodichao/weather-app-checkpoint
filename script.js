


//fonction qui permet d avoir les coordonnees geographiques d une ville
async function geoCoding(city) {
    
    let response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=b5001e9a88f9f210df5e02f6e54f91c1`);
    let lat = response.data[0].lat;
    let  lon = response.data[0].lon; 
    
    return {lat,lon};
} 


//fonction qui permet d avoir des informations de climat sur base des coordonnees geographiques
async function getWeatherData({lat,lon}){
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b5001e9a88f9f210df5e02f6e54f91c1`);
    return response.data;
}



//fonction de gestion de gestion du submit du formulaire
document.getElementById('form').addEventListener('submit',async (e)=>{
    e.preventDefault()
    const city = document.getElementById("city").value;
    let coord = await geoCoding(city)
    let Wdata = await getWeatherData(coord);
    console.log(Wdata);
   
   document.getElementById('temp').innerText = Wdata.main.temp;
   document.getElementById('desc').innerText = Wdata.weather[0].description;
   document.getElementById("loc").innerText = Wdata.name;


})

