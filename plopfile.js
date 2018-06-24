module.exports = plop => {
  // create your generators here
  plop.setGenerator("component", {
    description: "create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "name your component",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/component.js",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.js",
        template: `export { default } from "./{{pascalCase name}}"\r\n`,
      },
    ], // array of actions
  })
  plop.setGenerator("container", {
    description: "create a new container",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "name your container",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/containers/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/container.js",
      },
      {
        type: "add",
        path: "src/containers/{{pascalCase name}}/index.js",
        template: `export { default } from "./{{pascalCase name}}"\r\n`,
      },
    ], // array of actions
  })
}
