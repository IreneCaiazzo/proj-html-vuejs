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
    padding: 2rem 0;
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
</style>