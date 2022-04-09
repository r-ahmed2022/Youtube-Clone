$( document ).ready(setInterval(()=>{
      if(index==ads.length)
      {
          index=0
      }
      else{
          document.getElementById("ads").src="images/" + ads[index]
          index++
      }
  }, 2000));

let index =0
const ads =["ad-1.jpg", "ad-2.jpg", "ad-3.jpg", "ad-4.jpg", "ad-5.jpg"]
function runAds()
{

}
