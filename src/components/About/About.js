const About = () => (
  <main className="flex column root-about">
    <div className="about">
      I&apos;m a Javascript developer graduated in Information Systems at
      Estácio de Sá (Santa Catarina - Brazil) and currently living in Hamburg,
      Germany.
      <br />
      <br />
      I&apos;m a very positive person, always looking out for a light and
      flexible environment, good conversations, and a good music.
      <br />
      <br />
      I like to work with React, Redux, Babel, Webpack, Node, Typescript,
      Prettier, Eslint, Jest, Enzyme, Electron, and basically any other
      technology that makes my life as a developer simpler, or that adds value
      to the user experience.
      <br />
      <br />
      One of the traits I think that defines me the most, is curiosity. With it,
      I&apos;m always pushing myself further, always learning about new
      technologies, and always looking for new things using the technologies I
      like.
    </div>
    <style jsx>{`
      .root-about {
        margin: 80px 32px;
      }
      .flex {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .flex.column {
        flex-direction: column;
      }
      .about {
        margin-bottom: 55px;
      }
    `}</style>
  </main>
)

export default About
