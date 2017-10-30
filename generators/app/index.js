'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {

    this.log(yosay(
      'Jumpstart your RevelDigital gadget creation with ' + chalk.green('generator-reveldigital-gadget') + '! ' +
      'This generator will create a ready-to-use gadget with a number of sample preferences'
    ));

    const prompts = [
    {
      type: 'input',
      name: 'filename',
      message: 'Gadget Filename?',
      default: 'my-gadget'
    },
    {
      type: 'input',
      name: 'title',
      message: 'Gadget Title?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Gadget Description?'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Gadget Author?'
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_gadget.xml'),
      this.destinationPath(this.props.filename + '.xml'), {
        title: this.props.title,
        description: this.props.description,
        author: this.props.author
      }
    );
  }

  install() {
    //this.installDependencies();
  }
};
