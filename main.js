const header =document.getElementById('header');
const headerbg=document.getElementById('headerbg');
const title= document.getElementById('title');
const Titleco=document.getElementById('titleco');
const Title=document.getElementById('title2');
// change header background and title when click on headerbg  
headerbg.addEventListener("mouseover",(eo)=>{
  const random=Math.round( Math.random() * 360)
  header.style.backgroundColor=`hsl(${random},44%,50%)`
});
   //change color for main title
Titleco.addEventListener("mouseover",(eo)=>{
    const random=Math.round( Math.random() * 360)
    title.style.color=`hsl(${random},44%,50%)`
  });
      // change color for  introduce me
  Titleco.addEventListener("mouseover",(eo)=>{
    const random=Math.round( Math.random() * 360)
    Title.style.color=`hsl(${random},44%,50%)`
  });
//change color for sectionbg
const sectionbg = document.getElementById("sectionbg");
const Section=document.getElementById("section");
const section=document.getElementById("section2");


sectionbg.addEventListener("mouseover",(eo)=>{
  const random=Math.round( Math.random() * 360)
Section.style.backgroundColor=`hsl(${random},60%,80%)`
section.style.backgroundColor=`hsl(${random},80%,50%)`


})








            //autowriting for descriotion me
  let mydescription="I'm A Front End Developer "
  let count=1;
  function writedes() {
     document.querySelector("#mydes").innerHTML=mydescription.slice(0,count) ;
  count++;
  if(count>mydescription.length){
      clearInterval( stopAutofun)
  }}
  const stopAutofun= setInterval(writedes , 200);

           // change video by Arrow


const btnrandom=document.getElementById("btn-random");
const  containeriframe=document.getElementById("containeriframe");
 btnrandom.addEventListener  ("click",(eo) => {
    const randomArr=[
      `<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/s1Fq4gzNzrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/-JC-l92fxNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/ShKIDFa7c5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/nnHzE7s0sSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    ` <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/U4mIqzWe5y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/WjW4Mr_-cg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/S5mP7kMHd0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
     ` <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/lELwc6vQaAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/vQsV3lCuD4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
     `<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/4acd6vv4qjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    ]
    containeriframe.innerHTML= randomArr[Math.floor(Math.random()*randomArr.length)];
  })
 


                        //Quotes 
let i=0
     const btnQuote =document.getElementById('btn-Quote');                 
     const blockquote=document.getElementById('blockquote');
      
     btnQuote.addEventListener("click",(eo) => {
        const quoteArr=[
       ` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
         سقوط الانسان ليس فشلا انما الفشل ان يبقي الانسان حيث يسقط  &#128517; &#128517;`
        
        ,
    
    
        ` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
        مهما بلغت درجه اتقانك لن تستطيع التمثيل مدي الحياه &#128528;&#128528;
     `,
    
        ` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
        كلما ازداد الانسان غباء,ازداد يقينا انه افضل من غيره في كل شئ &#128076;&#128076;
     ` ,


        ` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
        لا علاقه للايام بالنضج,نحن نكبر بمرور الناس في حياتنا &#128531;&#128531;
        `,


        ` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
    عندما تتخطي مرحله صعبه من حياتك ,اكمل الحياه كناج منها وليس كضحيه &#128553;&#128553;
        `,



        ` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
ان العظيم عظيم في كل شئ حتي في أحزانه وآلامه &#128079;&#128079;
       `,

        
        ` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
                    هي اقدار وستجري مثلما كتبت ,  فالحمدلله 💗💗💗
        `,

        ` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
       اكره التفاهم مع شخص يري كل ما يفعله صحيحا &#128548;&#128548;
`,


` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">

          الناس معادن, تصدا بالملل, وتتمدد بالامل,  وتنكمش بالالم &#129309;&#129309;
`,

` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
          يمكن للانسان ان يعيش يلا بصر ولكنه لا يمكن ان يعيش بلا امل &#128170;&#128170;    
`,

` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
           اذا نظرت للحياه بروح مبتسمه حتما ستجدها مثيره للاهتمام &#128525;&#128525;
`,

` <blockquote dir="rtl" lang="ar" id="sidekick" class="blockquote">
المتشائم يبحث عن سبب ليخسر الفرصه💔💔   ,  علي عكس المتفائل 💞الذي يقرر النجاح من اول فرصه 
`,
    ]
    blockquote.innerHTML=quoteArr[i];
  
    i++;

if(i == quoteArr.length){
    i=0
}
})