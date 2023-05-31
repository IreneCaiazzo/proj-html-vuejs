<script>

</script>

<template>
    <footer>
        <div class="container">

            <div class="title">
                <h4>LET'S WORK TOGETHER</h4>
            </div>
            <p>
                We work as a single united team with market leading firms around the world and give our clients the highest
                quality advice possible.
            </p>
            <button> MAKE ENQUIRY </button>
        </div>
        <div class="container-2">
            <div>
                <h6>CALL OUR EXPERTS TODAY 1.800.555.6789</h6>
            </div>
            <div class="copyAndSocial">
                <span class="copy">
                    &copy; Copyright 2012-2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powered by
                    WordPress
                </span>

                <div class="social">
                    <font-awesome-icon icon="fa-brands fa-square-facebook" />
                    <font-awesome-icon icon="fa-brands fa-square-twitter" />
                    <font-awesome-icon icon="fa-brands fa-square-instagram" />
                    <font-awesome-icon icon="fa-brands fa-square-youtube" />
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    height: 20rem;
    color: white;
    background-image: url('../../img/where-we-work-parallax.jpg');
    background-position: center;
}

footer .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 6.3rem 0;
}

footer .container-2 {
    width: 1200px;
    margin: 0 auto;
    font-weight: 100;
    font-size: small;
    color: black;
    padding: 3rem 0;
}

footer .title {
    border-bottom: 1px solid white;

}

button {
    padding: .5rem;
    border: none;
    background-color: #55A098;
    color: white;
}

.copyAndSocial {
    display: flex;
    justify-content: space-between;
}

.copy {
    color: lightslategray;
}

.social {
    display: flex;
    gap: 1rem;
    font-size: x-large;
    color: #55A098;
}
</style>