import { shallow } from "enzyme"
import Index from "./index"
import Layout from "../components/Layout"
import Home from "../components/Home/Home"

describe("index", () => {
  it("should render without crashing", () => {
    shallow(<Index />)
  })
  it("should match the snapshot", () => {
    expect(shallow(<Index />)).toMatchSnapshot()
  })
  it("should render a Layout", () => {
    expect(
      shallow(<Index />)
        .find(Layout)
        .exists(),
    ).toBe(true)
  })
  it("should render a Home inside the Layout", () => {
    expect(
      shallow(<Index />)
        .find(Layout)
        .find(Home)
        .exists(),
    ).toBe(true)
  })
})
