
let  Motivation=[

    {
     Image:"image/history.jpg",
     name:"History",
     details:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
    },
    {
     Image:"image/vision.jpg",
     name:" Vision",
     details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet urna in justo iaculis rutrum at at leo. Fusce risus diam, cursus ac aliquam eget, accumsan vitae sapien. Etiam rutrum egestas ex, tincidunt pharetra mauris faucibus vel. Vivamus ornare imperdiet justo quis hendrerit.",
    },
 
    {
     Image:"image/goals.jpg",
     name:"Goals",
     details:"Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product",
    }
];

let Motivation_details=document.getElementById('con-Detils');
let Motivation_name=document.getElementById("heading");
let Motivation_image=document.getElementById('Images');


console.log(Motivation_image);


let btn=document.querySelectorAll(".liContent");
// console.log(btns);


for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",()=>{

    Motivation_image.src=Motivation[i].Image;
    Motivation_name.textContent=Motivation[i].name;
    Motivation_details.textContent=Motivation[i].details;
  

    btn.forEach((Button,index)=>{
    console.log(index);
 
        if(i===index){
            Button.classList.add('active')
        }
        else{
            Button.classList.remove('active')
        }
       
    })
  });






};





// btns.forEach(btn => {
// btn.addEventListener("click",()=>{

//     // if (indexValue==Motivation.length-1){
//     //     indexValue++;
//     // }
//     // else{
//     //     indexValue+=1;
//     // }
//     Motivation_image.src=Motivation[indexValue].Image;
// Motivation_name.textContent=Motivation[indexValue].name;
// Motivation_details.textContent=Motivation[indexValue].details;

//   });


// });
// ;