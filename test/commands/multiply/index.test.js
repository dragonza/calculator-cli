const { expect, test } = require("@oclif/test");

describe("Multiplication", () => {
  test
    .stdout()
    .command(["multiply", "2", "gfgfg"])
    .it("runs multiplication with invalid arguments", (ctx) => {
      expect(ctx.stdout).to.contain(
        "Invalid numbers, please use --help to get all the available commands and flags."
      );
    });

  test
    .stdout()
    .command(["multiply", "43333", "2", "434343.43"])
    .it("runs multiplication of integer numbers", (ctx) => {
      expect(ctx.stdout).to.contain(
        "The multiplication of the numbers is: 37642770438"
      );
    });

  test
    .stdout()
    .command(["multiply", "43333", "2", "434343.43", "-f"])
    .it("runs multiplication of float numbers", (ctx) => {
      expect(ctx.stdout).to.contain(
        "The sum of floating numbers are: 37642807704.38"
      );
    });
});
