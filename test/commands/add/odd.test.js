const { expect, test } = require("@oclif/test");

describe("add odd", () => {
  test
    .stdout()
    .command(["add:odd", "100", "2", "1", "7", "99"])
    .it("Sum of even numbers", (ctx) => {
      expect(ctx.stdout).to.contain("The sum of the odd numbers is: 107");
    });
});
