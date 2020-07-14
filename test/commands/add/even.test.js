const { expect, test } = require("@oclif/test");

describe("add even", () => {
  test
    .stdout()
    .command(["add:even", "100", "2", "1", "7", "99"])
    .it("Sum of even numbers", (ctx) => {
      expect(ctx.stdout).to.contain("The sum of the even numbers is: 102");
    });
});
