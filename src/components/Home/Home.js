import IntroductionContainer from "../../containers/IntroductionContainer"
import ContactFormContainer from "../../containers/ContactFormContainer"
import ProjectList from "../ProjectList"
import SocialImgLinks from "../SocialImgLinks"
import About from "../About"

const Home = () => (
  <main>
    <IntroductionContainer />
    <About />
    <ProjectList />
    <ContactFormContainer />
    <SocialImgLinks />
  </main>
)

export default Home
