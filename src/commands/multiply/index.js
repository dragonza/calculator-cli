const { Command, flags } = require("@oclif/command");

class MultiplyCommand extends Command {
  async run() {
    const { flags, argv } = this.parse(MultiplyCommand);

    const isValid = argv.every((item) => !!parseInt(item));

    if (!isValid) {
      return console.log(
        `Invalid numbers, please use --help to get all the available commands and flags.`
      );
    }

    if (flags.float) {
      const multiply = argv.reduce((acc, next) => acc * parseFloat(next), 1);
      console.log(`The sum of floating numbers are:`, multiply);
    } else {
      const multiply = argv.reduce((acc, next) => acc * parseInt(next), 1);

      this.log(`The multiplication of the numbers is:`, multiply);
    }
  }
}

MultiplyCommand.description = `Multiply numbers
...
Calculate the multiplication of numbers
`;

MultiplyCommand.flags = {
  float: flags.boolean({ char: "f", description: "name to print" }),
};

MultiplyCommand.args = [];
MultiplyCommand.strict = false;
module.exports = MultiplyCommand;
