const About = () => (
  <main className="flex">
    <div className="about">
      My name is Gabriel Duarte, and I&apos;m a Javascript developer graduated
      in Information Systems at Estácio de Sá (Santa Catarina - BR) and
      currently living in Brazil.
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
      <div className="about-you">
        But enough about me.{" "}
        <div role="button" className="flex">
          <a className="mailto" href="mailto:gabrielqduarte@gmail.com">
            Tell me about you.
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      .flex {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .about {
        margin: 80px 32px;
      }
      .about-you {
        text-align: center;
        margin-top: 40px;
      }
      .mailto {
        text-decoration: none;
        color: #343e46;
        padding: 8px;
        border: solid;
        width: 240px;
        margin-top: 8px;
      }
      .mailto:hover {
        background-color: #343e46;
        color: white;
        border: solid #343e46;
      }
    `}</style>
  </main>
)

export default About
