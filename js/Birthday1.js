let button = document.getElementById("button");

button.addEventListener('mouseover', movieTime);

button.addEventListener('mouseout', normal);

function movieTime() {
    button.innerText = "It's movie time...🍿";
}

function normal() {
    button.innerText = "What's next......";
}

let secret = document.getElementById("secret");

function wait() {
    document.getElementById("buttonProperty").style.visibility = "visible";
}

function sideview() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = "0";
    document.getElementById("bod").style.background = "gray";
    document.getElementById("rightSidebar").style.width = "65vw";
    const myTimeout = setTimeout(wait, 200);
}

let more = document.getElementById("more");

let s1 = `So many days have passed since we got into the relationship...i still remember the first time you said 
                                   I LOVE YOU SAMYAK❤️ 
that feeling after hearing i love you from you will be always precious for me...
who the hell wrote our story yrrr once everything was ended and now our love seems like it will never end...the small kid who saw you for that first time will be really happy if he knew one day you are going to be his life partner...
I never wanted someone who is extrovert or everyone's favourite like a star...I wanted someone who will love me as much as i do now i can finally say that i got the person who loves me as much as I do....
you asks me n find something what makes you happy seeing you smile keeping you happy makes me if I hurt you unwantedly it hurts me too...listening to your smile makes me happy your thoughts makes me happy...us makes me happy...you make me feel like complete...you make me feel alive...thank you my love for being in my life 
                    thank you for loving me so much❤️

                                     safar-e-zindagi me
                                     Manzil Ho Tum ! `

let s2 = `
I know we haven't met yet, our first meet will be something exicitatory thing I'm waiting for it will again give me butterflies
there is beautiful journey waiting for us that we both have to travel...nd I'm excited to share my life with you...
I love you more than anything in this entire world...

so many events have happened and so many events are yet to be happen but what matters is ki we are together
and we should always stay together...

                Ishq hai ya ibadat 
                ab kuch samaz nahi aata,
                Ek khoobsurat khayal ho tum 
                jo dil se nahi jaata...💕`;

more.addEventListener('click', changeText);

let camp = 0;
let imgShow = document.getElementById("show");

function changeText() {
    imgShow.style.cursor = "pointer";
    let message = document.getElementById('message');
    message.innerText = s1;
    document.getElementById('samyak').style.display = "none";
    imgShow.src = "../res/camping.gif";
    imgShow.style.bottom = "0";
    camp = 143;
    show.addEventListener('click', lastmessage);
}

function lastmessage() {
    document.getElementById('samyak').style.display = "block";
    let message = document.getElementById('message');
    message.innerText = s2;
    imgShow.src = "../res/Mochi.gif";
    secret.addEventListener('click', sideview);
    imgShow.style.cursor = "default";
}
