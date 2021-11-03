import { Given, Then,When } from "@cucumber/cucumber";
import { assert } from "chai";

Given("a variable set to {int}", function (number: number) {
  this.setTo(number);
});

When("I increment the variable by {int}", function (number: number) {
  this.incrementBy(number);
});

Then("the variable should be {int}", function (number) {
  assert.equal(this.variable, number);
});
