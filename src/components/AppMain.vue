<script>

import data from '../../data';


export default {
    data() {
        return {
            sec1: data.sec1,
            sec2: data.sec2,
            ourPeople: data.ourPeople,
            ourPracticeAreas: data.ourPracticeAreas,
            ourPublications: data.ourPublications,
            sec6: data.sec6,
        };
    },
};

</script>

<template>
    <!-- first section -->
    <section class="firstSec">
        <div class="container">
            <div class="card text-center" style="width: 25rem; border-top: 3px solid #55A098; padding: 1.5rem 3rem;"
                v-for="card in sec1" :key="card.id">
                <div class="card-body">
                    <h5 class="card-title">{{ card.title }}</h5>
                    <p class="card-text">{{ card.paragraph }}</p>
                    <a href="#" class="btn" style="background-color: #2b313c; color: white; border-radius: 3px;">{{
                        card.button.text }}</a>
                </div>
            </div>
        </div>
    </section>

    <!-- second section -->
    <section class="secondSec">
        <div class="container">
            <div class="shortP" style="width: calc(100% / 3); padding:1rem; text-align: center;" v-for="shortP in sec2"
                :key="shortP.id">
                <i :class="[shortP.icon]" style="font-size: 1.5rem; color:#55A098; margin-bottom: 1rem;"></i>
                <h5>{{ shortP.title }}</h5>
                <p>{{ shortP.paragraph }}</p>
            </div>
        </div>
    </section>

    <!-- third section -->
    <section class="thirdSec">
        <div class="container">
            <h3>QUESTIONS ABOUT A JUDICIAL ISSUE? ASK OUR EXPERTS.</h3>
            <a href="#" class="btn" style="background-color: #61ACA5; color: white; border-radius: 3px;">ASK AN EXPERT</a>
        </div>
    </section>

    <!-- fourth section -->
    <section class="fourthSec">

        <h3>GLOBAL CHALLENGE. WORLD CLASS RESPONSE</h3>

        <div class="container">

            <div class="subcontainer">

                <h5>OUR PEOPLE</h5>
                <div class="tag tag_container" v-for="tag in ourPeople" :key="tag.id">
                    <div class="tag-content">
                        <img :src="[tag.img]" alt="">
                        <h6>{{ tag.name }}</h6>
                    </div>
                </div>
            </div>

            <div class="subcontainer">

                <h5>OUR PRACTICE AREAS</h5>
                <div class="tag tag2 tag_container" v-for="tag2 in ourPracticeAreas" :key="tag2.id">
                    <div class="tag-content">
                        <img :src="[tag2.img]" alt="">
                        <h6>{{ tag2.name }}</h6>
                    </div>
                </div>
            </div>

            <div class="subcontainer">
                <h5>OUR PUBLICATIONS</h5>

                <div class="tag tag3 tag_container" v-for="tag3 in ourPublications" :key="tag3.id">
                    <div class="tag-content">
                        <img :src="[tag3.img]" alt="">
                        <h6>{{ tag3.name }}</h6>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- fifth section -->
    <section class="fifthSec">
        <div class="container">
            <img src="../../img/envato-logo.png" alt="">
            <p style="font-style: italic;">"We have worked with Avada Law for the past 15 years. As we have grown and
                evolved, what I have valued most
                about our relationship is that Avada Law know us and our business"</p>
            <h6>Nigel Rawlison &middot; Senior partner</h6>
        </div>
    </section>

    <!-- sixth section -->

    <section class="sixthSec">
        <div class="container">
            <div class="card" style="width: 18rem; border-top: 3px solid #55A098;" v-for="card in sec6" :key="card.id">
                <img :src="[card.img]" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ card.title }}</h5>
                    <p class="card-text">{{ card.paragraph }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* first section */
.firstSec {
    background-color: #f5f5f5;
}

.firstSec .container,
.secondSec .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    padding: 6rem 0;
}

.card {
    --bs-card-border-radius: 0;
    --bs-card-border-top: 3px solid #55A098;
}

/* third section */

.thirdSec {
    background-color: #55A098;
    color: white;
    padding: 4rem 2rem;
}

.thirdSec .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
}

/* fourth section */

.fourthSec {
    padding: 4rem 0;
}

.fourthSec h3 {
    text-align: center;
    margin-bottom: 3rem;
}

/* .fourthSec h3::after {
    content: "";
    width: 5rem;
    height: 1px;
    color: black;
} */

.fourthSec .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
}

.subcontainer {
    flex-basis: 30%;
    width: 30%;
    margin-bottom: 2rem;
}

.tag_container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.tag,
.tag2,
.tag3 {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    width: 100%;

}

.tag-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 0 2rem;
    background-color: #f5f5f5;
}

.tag img,
.tag2 img,
.tag3 img {
    display: block;
    width: 100px;
    padding: 1rem;
}

.tag h6,
.tag2 h6,
.tag3 h6 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}

/* fifth section */

.fifthSec {
    background-image: url('../../img/showeare-parallax.jpg');
    background-position: center;
    color: white;
    padding: 6rem 0;
    text-align: center;
}

.fifthSec img,
.fifthSec p {
    margin-bottom: 1rem;
}

.fifthSec img {
    width: 15%;
}

/* sixth section */

.sixthSec .container {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 6rem 0;
}

.sixthSec img {
    border-radius: 0%;
    padding: 2rem;
}

.sixthSec h5 {
    margin-bottom: 1rem;
}
</style>