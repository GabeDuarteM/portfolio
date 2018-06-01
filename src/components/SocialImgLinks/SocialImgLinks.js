import GithubImageLink from "../GithubImageLink"
import LinkedinImageLink from "../LinkedinImageLink"

const SocialImgLinks = () => (
  <div className="social-img-links-root">
    <div className="social-container">
      <GithubImageLink />
      <LinkedinImageLink />
    </div>
    <style jsx>{`
      .social-img-links-root {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 80px;
        margin-bottom: 50px;
      }
      .social-container {
        display: flex;
        justify-content: space-between;
        width: 140px;
      }
    `}</style>
  </div>
)

export default SocialImgLinks
