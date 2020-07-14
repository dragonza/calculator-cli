const { Command } = require("@oclif/command");

class DivideCommand extends Command {
  async run() {
    const { argv } = this.parse(DivideCommand);

    if (argv[1] === "0") {
      return console.log(
        `Invalid divisor, please enter the number that is different than 0`
      );
    }

    const isValid = argv.every((item) => !!parseInt(item));

    if (!isValid) {
      return console.log(
        `Invalid numbers, please use --help to get all the available commands and flags.`
      );
    }

    this.log(
      `The quotient between ${argv[0]} and ${argv[1]} is:`,
      argv[0] / argv[1]
    );
  }
}

DivideCommand.description = `Describe the command here
...
Find the quotient between the dividend and the divisor
`;

DivideCommand.strict = false;

DivideCommand.flags = {};

module.exports = DivideCommand;
