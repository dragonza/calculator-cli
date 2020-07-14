const { Command, flags } = require("@oclif/command");

class AddEvenCommand extends Command {
  async run() {
    const { argv } = this.parse(AddEvenCommand);

    const isValid = argv.every((item) => !!parseInt(item));

    if (!isValid) {
      return console.log(
        `Invalid numbers, please use --help to get all the available commands and flags.`
      );
    }
    const sum = argv.reduce((acc, next) => {
      const isEven = parseInt(next) % 2 === 0;
      if (!isEven) return acc;
      return acc + parseInt(next);
    }, 0);
    console.log("sum", sum);
    this.log(`The sum of the even numbers is:`, sum);
  }
}

AddEvenCommand.description = `Add numbers
...
Calculate the sum of even numbers only
`;

AddEvenCommand.flags = {};

AddEvenCommand.args = [];
AddEvenCommand.strict = false;
module.exports = AddEvenCommand;
