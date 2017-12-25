define({
  staticSelections: function() {
    // collect selectable elements
    var resPills = document.getElementsByClassName("researchSelectBtn");
    var placePills = document.getElementsByClassName("pillBtn");
    var tabs = document.getElementsByClassName("tab");
    // update pill related selection and associated variables
    for (var i = 0; i < resPills.length; i++) {
      // research pill-type selection
      if (resPills[i].getAttribute("data-selected") == "true") {
        var selectedPill = resPills[i].getAttribute("data-pillid");
        if (this.researchSelected != selectedPill) {
          // new research selection, change target and reset variables
          this.researchTarget = this.pillTargets[selectedPill];
          this.researchProgress = 0.0;
          this.researchSelected = selectedPill;
        }
      }
      // placement pill-type selection
      if (placePills[i].getAttribute("data-selected") == "true") {
        this.pillSelected = placePills[i].parentNode.getAttribute("data-pillid");
      }
    }
    // update tab selection game variables
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].getAttribute("data-selected") == "true") {
        this.tabSelected = tabs[i].textContent;
      }
    }
  },
  labSelection: function() {
    var labTabs = document.getElementsByClassName("labTableElt");
    for (var i = 0; i < labTabs.length; i++) {
      if (labTabs[i].getAttribute("data-selected") == "true") {
        // attempt to place a pill at selected location
        if (this.pillSelected == null) {
          // no selection to place at the moment
          labTabs[i].setAttribute("data-selected", false);
          return;
        }
        if (this.pillTotals[this.pillSelected] > 0) {
          // check for previous placement at this location.
          var placeX = i % this.labWidth;
          var placeY = Math.floor(i / this.labWidth);
          if (this.placedGrid[placeY][placeX] == "empty") {
            // update placement value, research values, pill totals and lab display;
            this.placedGrid[placeY][placeX] = this.pillSelected;
            this.pillTotals[this.pillSelected] -= 1;
          }
        }
        labTabs[i].setAttribute("data-selected", false);
      }
    }
  },
  researchValue: function(step) {
    var newResearch = 0;
    // calculate lab related research values
    for (var y = 0; y < this.labHeight; y++) {
      for (var x = 0; x < this.labWidth; x++) {
        // check each value in the placed grid and then calculate for each pill found.
        if (this.placedGrid[y][x] != "empty") {
          // pill found
          switch(this.placedGrid[y][x]) {
            case "0":
              newResearch += this.greenPillCalc(y,x);
              break;
            case "1":
              newResearch += this.bluePillCalc(y,x);
              break;
          }
        }
      }
    }
    // calculate manual research values
    var clickBlock = document.getElementsByClassName("clickBlock");
    if (clickBlock[0].getAttribute("data-selected") == "true") {
      newResearch += Number(clickBlock[0].getAttribute("data-count")) * this.clickValue;
      clickBlock[0].setAttribute("data-count", 0);
      clickBlock[0].setAttribute("data-selected", "false");
    }
    this.researchValue = newResearch;
    if (this.researchValuePrev.length >= 40) {
      this.researchValuePrev.shift();
      this.tickLengthPrev.shift();
    }
    this.researchValuePrev.push(newResearch);
    this.tickLengthPrev.push(step);
    var totalRPS = 0.0;
    var totalTime = 0.0;
    // tbd - can be optimised to just update single values per cycle negating need for the loop.
    for (var i = 0; i < this.researchValuePrev.length; i++) {
      totalRPS += this.researchValuePrev[i];
      totalTime += this.tickLengthPrev[i];
    }
    this.researchPerSec = totalRPS/totalTime;
  },
  researchProgress: function(step) {
    if (this.researchProgress > 1) {
      // full research for current project reached. increment and reset.
      var pill = this.researchSelected;
      this.pillTotals[pill] += 1;
      this.pillTargets[pill] *= 1.2;
      this.researchTarget = this.pillTargets[pill];
      this.researchProgress = 0.0;
    }
    var researchInc = 0;
    if (this.researchValue > 0 && this.researchTarget) {
      researchInc = this.researchValue / this.researchTarget;
    }
    this.researchProgress += researchInc;
  },
  pillSales: function() {
    // check user selecting sell options and update game state to reflect
    var pillSellBtns = document.getElementsByClassName("pillSell");
    var pillSellAllBtns = document.getElementsByClassName("pillSellAll");
    for (var i = 0; i < pillSellBtns.length; i++) {
      if (pillSellBtns[i].getAttribute("data-selected") == "true") {
        // check if there is available pills to sell for current selection
        if (this.pillTotals[i] > 0) {
          this.currencyTotal += this.pillCurrencyValues[i];
          this.pillTotals[i]--;
        }
        // reset button
        pillSellBtns[i].setAttribute("data-selected", "false");
      }
      if (pillSellAllBtns[i].getAttribute("data-selected") == "true") {
        if (this.pillTotals[i] > 0) {
          this.currencyTotal += this.pillTotals[i] * this.pillCurrencyValues[i];
          this.pillTotals[i] = 0;
        }
        // reset button
        pillSellAllBtns[i].setAttribute("data-selected", "false");
      }
    }
  },
  synthesise: function() {
    // if RPS exceeds current synthesis target then enable button and check for toggle
    // on toggle initiate pivot function.
    var synthBlock = document.getElementsByClassName("synthBlock");
    if (this.researchPerSec > this.synthesisTarget && synthBlock[0].getAttribute("data-enabled") == "false") {
      // enable selection of the synthesis option
      synthBlock[0].setAttribute("data-enabled", "true");
      // tba colour indicators showing button is selectable.
    }
    if(synthBlock[0].getAttribute("data-enabled") == "true" && synthBlock[0].getAttribute("data-selected") == "true") {
      // synthesis is available and has been selected by the player
      // triggers:
      // generation of special pill
      // emptying of the board and resetting relevant game and selection variables
      this.resetResearchVariables();
      synthBlock[0].setAttribute("data-enabled", "false");
      synthBlock[0].setAttribute("data-selected", "false");
      this.boardNumber += 1;
      // sell off of excess pills
      for (var i = 0; i < this.pillList.length; i++) {
        this.currencyTotal += this.pillTotals[i] * this.pillCurrencyValues[i];
        this.pillTotals[i] = 0;
      }
    }
  },
  upgradePurchases: function() {
    var upgradeBtns = document.getElementsByClassName("upgrade");
    for (var i = 0; i < upgradeBtns.length; i++) {
      if (upgradeBtns[i].getAttribute("data-selected") == "true") {
        // refactor upgrade handling to check each upgrade in list rather than individually.
      }
    }
    // individual upgrades
    var alpha1 = document.getElementsByClassName("pillAlphaUpgrade1")
    if (alpha1[0].getAttribute("data-selected") == "true") {
      var cost = 100;
      var buffValue = 1.2;
      if (this.currencyTotal >= cost) {
        this.currencyTotal -= cost;
        this.pillValues[0] *= buffValue;
        alpha1[0].setAttribute("data-selected", "false");
      }
    }
  }
});
