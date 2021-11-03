// features/support/world.js
import { setWorldConstructor } from "@cucumber/cucumber";

class CustomWorld {
  private variable = 0;

  setTo(number: number) {
    this.variable = number;
  }

  incrementBy(number: number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
