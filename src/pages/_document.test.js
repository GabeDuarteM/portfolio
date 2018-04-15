import { shallow } from "enzyme"
import Doc from "./_document"

describe("_document", () => {
  it("should render without crashing", () => {
    shallow(<Doc />)
  })
  it("should render without crashing using the prod env", () => {
    const envBackup = process.env.NODE_ENV
    process.env.NODE_ENV = "production"
    shallow(<Doc />)
    process.env.NODE_ENV = envBackup
  })
  it("should match the snapshot", () => {
    expect(shallow(<Doc />)).toMatchSnapshot()
  })
  it("should match the snapshot using the prod env", () => {
    const envBackup = process.env.NODE_ENV
    process.env.NODE_ENV = "production"
    expect(shallow(<Doc />)).toMatchSnapshot()
    process.env.NODE_ENV = envBackup
  })
})
