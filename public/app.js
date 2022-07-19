import * as FirebaseAuth from './controller/firebase_auth.js'
import * as HomePage from './view/home_page.js'
import * as AboutPage from './view/about_page.js'

FirebaseAuth.addEventListeners();
HomePage.addEventListeners();
AboutPage.addEventListeners();