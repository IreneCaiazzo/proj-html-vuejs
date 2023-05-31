<script>

import sec1 from '../../data';

export default {
    data() {
        return {
            sec1,
        };
    },
};

</script>

<template>
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
</template>

<style scoped>
.firstSec {
    background-color: #f5f5f5;
}

.firstSec .container {
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
</style>