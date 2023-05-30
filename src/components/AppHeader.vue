<script>

</script>

<template>
    <header>

        <div class="container">
            <div class="logo">
                <img src="../../img/avada-law-logo.png" alt="">
            </div>

            <ul class="navbar">
                <li>Home</li>
                <li>Who We Are</li>
                <li>What We Do</li>
                <li>Where We Work</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
        </div>

        <div class="jumbo">

        </div>

    </header>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 8rem;
    margin: auto;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
}

li {
    list-style: none;
    margin-left: 1rem;
}

.jumbo {
    height: 38rem;
    background-image: url('../../img/video_law_home_preview.jpg');
    background-position: center;
}
</style>
