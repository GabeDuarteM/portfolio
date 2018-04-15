import { shallow } from "enzyme"
import AboutPage from "./about"
import Layout from "../components/Layout"
import About from "../components/About/About"

describe("about", () => {
  it("should render without crashing", () => {
    shallow(<AboutPage />)
  })
  it("should match the snapshot", () => {
    expect(shallow(<AboutPage />)).toMatchSnapshot()
  })
  it("should render a Layout", () => {
    expect(
      shallow(<AboutPage />)
        .find(Layout)
        .exists(),
    ).toBe(true)
  })
  it("should render a About inside the Layout", () => {
    expect(
      shallow(<AboutPage />)
        .find(Layout)
        .find(About)
        .exists(),
    ).toBe(true)
  })
})
