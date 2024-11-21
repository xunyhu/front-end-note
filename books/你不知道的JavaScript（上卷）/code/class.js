class CoolGuy {
    specialTrick = ''

    CoolGuy(trick) {
      this.specialTrick = trick
    }

    showOff() {
      console.log("Here's my trick: ", this.specialTrick)
    }
}
Joe = new CoolGuy("jumping rope")

Joe.showOff()