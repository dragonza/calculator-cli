const { Command, flags } = require("@oclif/command");

class AddCommand extends Command {
  async run() {
    const { flags, argv } = this.parse(AddCommand);
    this.log("args", argv);
    this.log("flags", flags);

    const isValid = argv.every((item) => !!parseInt(item));

    if (!isValid) {
      return console.log(
        `Invalid numbers, please use --help to get all the available commands and flags.`
      );
    }

    if (flags.float) {
      const sum = argv.reduce((acc, next) => acc + parseFloat(next), 0);
      console.log(`The sum of floating numbers are:`, sum);
    } else {
      const sum = argv.reduce((acc, next) => acc + parseInt(next), 0);

      console.log("sum", sum);
      this.log(`The sum of the numbers is:`, sum);
    }
  }
}

AddCommand.description = `Add numbers
...
Calculate the sum of numbers
`;

AddCommand.flags = {
  float: flags.boolean({ char: "f", description: "name to print" }),
};

AddCommand.args = [];
AddCommand.strict = false;
module.exports = AddCommand;
