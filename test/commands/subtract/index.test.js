const { expect, test } = require("@oclif/test");

describe("subtract", () => {
  test
    .stdout()
    .command(["subtract", "1", "ggg"])
    .it("invalid arguments", (ctx) => {
      console.log("ctx", ctx);
      expect(ctx.stdout).to.contain("Invalid numbers");
    });

  test
    .stdout()
    .command(["subtract", "100", "2"])
    .it("subtraction", (ctx) => {
      console.log("ctx", ctx);
      expect(ctx.stdout).to.contain("The difference between 100 and 2 is: 98");
    });
});
