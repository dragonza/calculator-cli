const { Command, flags } = require("@oclif/command");

class AddOddCommand extends Command {
  async run() {
    const { argv } = this.parse(AddOddCommand);
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

AddOddCommand.description = `Add numbers
...
Calculate the sum of even numbers only
`;

AddOddCommand.flags = {};

AddOddCommand.args = [];
AddOddCommand.strict = false;
module.exports = AddOddCommand;
