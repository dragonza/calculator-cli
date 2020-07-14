const { expect, test } = require("@oclif/test");

describe("add", () => {
  test
    .stdout()
    .command(["add", "1", "ggg"])
    .it("invalid arguments", (ctx) => {
      console.log("ctx", ctx);
      expect(ctx.stdout).to.contain("Invalid numbers");
    });

  test
    .stdout()
    .command(["add", "100", "2", "3", "6"])
    .it("Sum of all numbers", (ctx) => {
      expect(ctx.stdout).to.contain("The sum of the numbers: 111");
    });

  test
    .stdout()
    .command(["add:even", "100", "2", "1", "7", "99"])
    .it("Sum of even numbers", (ctx) => {
      expect(ctx.stdout).to.contain("The sum of the even numbers is: 102");
    });

  test
    .stdout()
    .command(["add:odd", "100", "2", "1", "7", "99"])
    .it("Sum of even numbers", (ctx) => {
      expect(ctx.stdout).to.contain("The sum of the even numbers is: 107");
    });
});
