import Project from "../Project"

const ProjectList = () => (
  <div className="project-list">
    <Project
      title="copy-paste-component-vscode"
      href="https://marketplace.visualstudio.com/items?itemName=GabrielDuarteM.copy-paste-component-vscode"
    >
      A visual studio code extension for you to create new components, using the
      same structure of the ones you already have.
    </Project>
    <Project
      title="webplayer-hotkeys"
      href="https://chrome.google.com/webstore/detail/webplayer-hotkeys-shortcu/ikmkicnmahfdilneilgibeppbnolgkaf"
    >
      A Chrome extension that assigns hotkeys to play/pause, and switch musics
      (next and previous). Works with Spotify, Deezer, SoundCloud and Youtube.
    </Project>
    <Project
      title="youtube-autoclose-ads"
      href="https://chrome.google.com/webstore/detail/youtube-autoclose-ads/mppjhhbajcciljocgbadbhbgphjfdmhj"
    >
      Chrome extension to automatically close youtube ads after an amount of
      time.
    </Project>
    <Project
      title="spark-mediamanager"
      href="https://github.com/GabrielDuarteM/spark-mediamanager"
    >
      A Media manager that will give you the possibility to rename video
      filenames into something more friendly.
    </Project>
    <style jsx>{`
      .project-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 80px;
        user-select: none;
      }
    `}</style>
  </div>
)

export default ProjectList
