///<reference types="../@types/jquery"/>


//######### First Section#####################//
$('.openicon').on('click',function(){
  $('#leftmenu').css('left','0px')
})
$('.close').on('click',function(){
  $('#leftmenu').css('left','-270px')
})
//######### First Section#####################//


//########## second section###########// 
$(".according h3").on('click',function(){
  $(this).next().slideToggle();
  $('.according div').not($(this).next()).slideUp()
})
//######### second sectin############// 


//########### third section #######///////// 
let countDownDate= new Date("Jan 5, 2025 15:37:25").getTime();
let x = setInterval(function(){
let now=new Date().getTime(); // date today
let distance=countDownDate-now;  // difference between countDownDate and now Date
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
 displayTime(days,hours,minutes,seconds);

},1000);


function displayTime(days,hours,minutes,seconds){
  let cartona="";
 cartona=`
 <div class="col-md-3 my-card">
              <div  >
                <div class="p-4 p-5 text-center border border-2">
                 ${days} D
                </div>
              </div>
            </div>
            <div class="col-md-3 my-card">
              <div>
                <div class="p-4 p-5 text-center border border-2">
                  ${hours} H
                </div>
              </div>
            </div>
            <div class="col-md-3 my-card">
              <div>
                <div class="p-4 p-5 text-center border border-2">
                ${minutes} M
                </div>
              </div>
            </div>
            <div class="col-md-3 my-card">
              <div>
                <div class="p-4 p-5 text-center border border-2">
                 ${seconds} S
                </div>
              </div>
            </div>

    `;
    document.getElementById('countDown').innerHTML=cartona;
}
//////////################ third section#########//////////// 

// ####### last section################//// 

$('textarea').on('keyup',function(){
  const mylength=$(this).val().length;
 //  console.log(mylength);
  $('.chars').text(
 
    100- mylength <=0 ? "your avilable character finished": 100- mylength
  ) 
 })
 //############ last section############///// 



