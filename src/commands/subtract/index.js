const { Command } = require("@oclif/command");

class SubtractCommand extends Command {
  async run() {
    const { argv } = this.parse(SubtractCommand);

    const isValid = argv.every((item) => !!parseInt(item));

    if (!isValid) {
      return console.log(
        `Invalid numbers, please use --help to get all the available commands and flags.`
      );
    }

    this.log(
      `The difference between ${argv[0]} and ${argv[1]} is:`,
      Math.abs(argv[0] - argv[1])
    );
  }
}

SubtractCommand.description = `Describe the command here
...
Difference between two numbers
`;

SubtractCommand.strict = false;

SubtractCommand.flags = {};

module.exports = SubtractCommand;
