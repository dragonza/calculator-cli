const { Command, flags } = require("@oclif/command");

class AddCommand extends Command {
  async run() {
    const { argv } = this.parse(AddCommand);
    console.log("argv", argv);
    const isValid = argv.every((item) => !!parseInt(item));

    if (!isValid) {
      return console.log(
        `Invalid numbers, please use --help to get all the available commands and flags.`
      );
    }
    const sum = argv.reduce((acc, next) => {
      const isOdd = parseInt(next) % 2 !== 0;
      if (!isOdd) return acc;
      return acc + parseInt(next);
    }, 0);
    this.log(`The sum of the odd numbers is:`, sum);
  }
}

AddCommand.description = `Add numbers
...
Calculate the sum of even numbers only
`;

AddCommand.flags = {};

AddCommand.args = [];
AddCommand.strict = false;
module.exports = AddCommand;
