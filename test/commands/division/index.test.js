const { expect, test } = require("@oclif/test");

describe("Division", () => {
  test
    .stdout()
    .command(["divide", "2", "0"])
    .it("runs division with invalid argument", (ctx) => {
      expect(ctx.stdout).to.contain(
        "Invalid divisor, please enter the number that is different than 0"
      );
    });

  test
    .stdout()
    .command(["divide", "43333", "2"])
    .it("runs division between two numbers", (ctx) => {
      expect(ctx.stdout).to.contain(
        "The quotient between 43333 and 2 is: 21666.5"
      );
    });
});
