import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

console.warn = jest.fn(warn => {
  throw new Error(warn)
})
console.error = jest.fn(error => {
  throw new Error(error)
})
