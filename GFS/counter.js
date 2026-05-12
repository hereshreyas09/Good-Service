/* =========================
   LIVE WEBSITE VISITOR COUNTER
========================= */

/*
--------------------------------
STEP 1
ADD THIS HTML WHERE YOU WANT
THE COUNTER TO SHOW
--------------------------------

<div class="counter-card reveal">

    <i class="fa-solid fa-users"></i>

    <h2 id="visitor-count">

        0

    </h2>

    <p>

        Website Visitors

    </p>

</div>

--------------------------------
STEP 2
PASTE THIS SCRIPT
INSIDE script.js
--------------------------------
*/

/* =========================
   VISITOR COUNTER
========================= */

const visitorElement =
document.getElementById(
    'visitor-count'
);

/* -------------------------
   CHECK STORED COUNT
------------------------- */

let visitCount =
localStorage.getItem(
    'website_visits'
);

/* -------------------------
   FIRST VISIT
------------------------- */

if(visitCount === null){

    visitCount = 1;

}

/* -------------------------
   RETURN VISIT
------------------------- */

else{

    visitCount =
    parseInt(visitCount) + 1;

}

/* -------------------------
   SAVE NEW COUNT
------------------------- */

localStorage.setItem(
    'website_visits',
    visitCount
);

/* -------------------------
   ANIMATE COUNTER
------------------------- */

let current = 0;

const updateCounter = ()=>{

    if(current < visitCount){

        current++;

        visitorElement.innerText =
        current;

        setTimeout(
            updateCounter,
            20
        );

    }

};

updateCounter();