const Navbar = () => (
  <nav className="flex no-select">
    <div className="gabriel">Gabriel</div>
    <div className="duarte">Duarte</div>
    <style jsx>{`
      .flex {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 22px;
      }
      .no-select {
        user-select: none;
      }
      nav {
        margin-top: 24px;
      }
      .gabriel {
        font-weight: 300;
      }
      .duarte {
        font-weight: 500;
        border-bottom: solid;
        padding-bottom: 4px;
        text-align: center;
        width: 96px;
      }
    `}</style>
  </nav>
)

export default Navbar
