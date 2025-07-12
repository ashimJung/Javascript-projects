const apikey="254fae3e1fb4d21c0d11ab8932e06d81";

const searchbar=document.querySelector('.search-bar');

const temp=document.querySelector('.temp');
 
 searchbar.addEventListener('keydown',async(Event)=>{
  if(Event.key==='Enter'){
   let cityname=searchbar.value;
   const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;
    
   const response =await fetch(apiurl)
   let data = await response.json();
   console.log(data);

   if (data.cod !== 200) {
      console.error("API error:", data.message);
      temp.innerHTML = "City not found ❌";
      return;
    }

     document.querySelector('.city').innerHTML=data.name
     temp.innerHTML=data.main.temp+"°C"

     document.querySelector('.wind').innerHTML=data.wind.speed + " Km/h"
     document.querySelector('.humidity').innerHTML=data.main.humidity +"%"

     

     if(!(data.dt>=data.sys.sunrise && data.dt<data.sys.sunset)){
         document.querySelector('.card').style.background='black'
         document.querySelector('.weather-icon').src="nightimages/"+data.weather[0].main+".png"
         document.querySelector('.card').style.border='1px solid white'
     }else{
      document.querySelector('.weather-icon').src="images/"+data.weather[0].main+".png"
      document.querySelector('.card').style.background=''
     }
      
      
  }

   
   
  
});

    


 

 


 


 
