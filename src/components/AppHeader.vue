<script>

</script>

<template>
    <header>

        <div class="container">
            <div class="subcontainer">

                <span class="company">Avada & Associates legal team announce deal to open up oil & gas</span>

                <div class="social">
                    <font-awesome-icon icon="fa-brands fa-square-facebook" />
                    <font-awesome-icon icon="fa-brands fa-square-twitter" />
                    <font-awesome-icon icon="fa-brands fa-square-instagram" />
                    <font-awesome-icon icon="fa-brands fa-square-youtube" />
                </div>
            </div>


            <div class="container-2">
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
        </div>

        <div class="jumbo">
            <img src="../../img/video_law_home_preview.jpg" alt="">
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
    /* position: fixed;
    top: 0; */
    width: 100%;
    margin: 0 auto;
    background-color: white;
}

header .container {
    width: 100%;
    height: 8rem;
    background-color: white;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
}

header .subcontainer {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    padding-top: 1rem;
    font-weight: 100;
    font-size: small;
    color: black;
}

.company {
    color: lightslategray;
}

.social {
    display: flex;
    gap: 1rem;
    font-size: x-large;
    color: #55A098;
}

header .container-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    width: 1200px;
    margin: 1rem auto;
    padding: 2rem 0;
}

li {
    list-style: none;
    margin-left: 1rem;
}

header .jumbo img {
    width: 100%;
    height: 20rem;
    display: block;
    object-fit: cover;
    margin-top: 8rem;
}
</style>
