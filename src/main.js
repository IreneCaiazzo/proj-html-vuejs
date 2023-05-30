import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-solid-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-solid-svg-icons'
import { faSquareYoutube } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCheck, faSquareFacebook, faSquareTwitter, faSquareInstagram, faSquareYoutube, faChevronUp)



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
