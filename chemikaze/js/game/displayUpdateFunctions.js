define(["game/displayVariables"], function(dVars) {
  return {
    tabsBlock: function() {
      // update tab colours to reflect current selection.
      var tabs = document.getElementsByClassName("tab");
      var indicators = document.getElementsByClassName("tabPolyInd");
      for (var i = 0; i < tabs.length; i++) {
        // update selection colours
        if (tabs[i].getAttribute("data-selected") == "true") {
          indicators[i].style.fill = dVars.clrTeal;
        } else {
          indicators[i].style.fill = dVars.clrDarkGrey;
        }
      }
    },
    labBlock: function() {
      // update board number in the title
      // tbd
      // update the lab table elements with appropriate colour values
      var labTableElts = document.querySelectorAll("td");
      for (var i = 0; i < labTableElts.length; i++) {
        var id = labTableElts[i].getAttribute("data-id");
        var gridY = Math.floor(id/this.game.labGrid.length);
        var gridX = id % this.game.labGrid.length;
        var placedColour = this.game.placedGrid[gridY][gridX];
        if (id) {
          var gridY = Math.floor(id/this.game.labGrid.length);
          var gridX = id % this.game.labGrid.length;
          var gridColour = dVars.gridClrMin  +
                          (this.game.labGrid[gridY][gridX] * (dVars.gridClrMax - dVars.gridClrMin));
          var newColour = String(Math.floor(gridColour));
          var newColourGreen = String(Math.floor(gridColour + 20));
          var newColourBlue = String(Math.floor(gridColour + 10));
          var placedColour = this.game.placedGrid[gridY][gridX];
          if (placedColour == "empty") {
            labTableElts[i].style.backgroundColor =
              "rgb(" + newColour + "," + newColourGreen + "," + newColourBlue + ")";
          }
          else {
            labTableElts[i].style.backgroundColor = dVars.pillColours[placedColour];
          }
        }
        // handle element highlighting when cursor 'hovers'
        if (labTableElts[i].getAttribute("data-hover") == "true") {
          if (placedColour == "empty") {
            labTableElts[i].style.backgroundColor = dVars.clrTeal;
          }
          else {
            labTableElts[i].style.backgroundColor = dVars.clrOffBlack;
          }
        }
      }
    },
    pillBlock: function() {
      // update pill totals and current selection.
      var pillBtns = document.getElementsByClassName("pillBtn");
      for (var i = 0; i < pillBtns.length; i++) {
        // update selection colours
        if (pillBtns[i].getAttribute("data-selected") == "true") {
          pillBtns[i].style.backgroundColor = dVars.clrTeal;
        }
        else {
          pillBtns[i].style.backgroundColor = dVars.clrMidGrey;
        }
        // update pill total text
        pillBtns[i].textContent = this.game.pillTotals[i];
      }
    },
    synthBlock: function() {
      // update synth button to show when synthesis is available.
      var synthBtn = document.getElementsByClassName("synthBlock");
      if (synthBtn[0].getAttribute("data-enabled") == "true") {
        synthBtn[0].style.backgroundColor = dVars.clrWood;
      }
      else {
        synthBtn[0].style.backgroundColor = dVars.clrMidGrey;
      }
    },
    researchBlock: function() {
      // update the current RPS value
      var newRPS = document.getElementsByClassName("researchPerSecond");
      var newRPSText = String(Math.round(this.game.researchPerSec)) + " RPS";
      newRPS[0].textContent = newRPSText;
      // update the current research progress value
      var newProgress = document.getElementsByClassName("researchProgress");
      var newProgressText = String(Math.round(this.game.researchProgress * 100)) + " %";
      newProgress[0].textContent = newProgressText;
      // update the current research absolute progress values
      var newAbs = document.getElementsByClassName("researchAbsProgress");
      var newAbsText =
        String(Math.round(this.game.researchProgress * this.game.researchTarget)) + " / " +
        String(Math.round(this.game.researchTarget));
      newAbs[0].textContent = newAbsText;
      // update research pill colour to reflect current selection
      var resPills = document.getElementsByClassName("researchSelectBtn");
      var pillColour = dVars.pillColours[0];
      for (var i = 0; i < resPills.length; i++) {
        if (resPills[i].getAttribute("data-selected") == "true") {
          resPills[i].style.backgroundColor = dVars.clrTeal;
          pillColour = dVars.pillColours[i];
        }
        else {
          resPills[i].style.backgroundColor = dVars.clrOffWhite;
        }
      }
      // update pill requirement text values
      var newPillReqs = document.getElementsByClassName("researchNPInfo");
      for (var i = 0; i < newPillReqs.length; i++) {
        newPillReqs[i].textContent = Math.round(this.game.pillTargets[i]);
      }
      // update circular research progress bar.
      var resArcStart = document.getElementsByClassName("researchArcStart");
      var resArcEnd = document.getElementsByClassName("researchArcEnd");
      var degProgress = this.game.researchProgress * 360;
      var quadrant = Math.floor(degProgress / 90);
      var degRemainder = degProgress % 90;
      // drawing process dependent on quadrant progress is in.
      switch(quadrant) {
        case 0:
          // end has to overlay with bg colour in q4 and start show progress through q1.
          resArcEnd[0].style.margin = "2px";
          resArcEnd[0].style.borderWidth = "8px";
          resArcEnd[0].style.borderColor = dVars.clrOffWhite + " transparent transparent transparent";
          resArcEnd[0].style.transform = "rotate(315deg)";
          resArcStart[0].style.borderColor = pillColour + " transparent transparent transparent";
          resArcStart[0].style.transform = "rotate(" + String(degRemainder - 45) + "deg)";
          break;
        case 1:
          // start covers q1 and end shows progress in q2.
          resArcStart[0].style.borderColor = pillColour + " transparent transparent transparent";
          resArcStart[0].style.transform = "rotate(45deg)";
          resArcEnd[0].style.margin = "4px";
          resArcEnd[0].style.borderWidth = "6px";
          resArcEnd[0].style.borderColor = pillColour + " transparent transparent transparent";
          resArcEnd[0].style.transform = "rotate(" + String(degRemainder + 45) + "deg)";
          break;
        case 2:
          // start covers q1-q2 and end shows progress in q3.
          resArcStart[0].style.borderColor = pillColour + " " + pillColour + " transparent transparent";
          resArcStart[0].style.transform = "rotate(45deg)";
          resArcEnd[0].style.margin = "4px";
          resArcEnd[0].style.borderWidth = "6px";
          resArcEnd[0].style.borderColor = pillColour + " transparent transparent transparent";
          resArcEnd[0].style.transform = "rotate(" + String(degRemainder + 135) + "deg)";
          break;
        case 3:
          // start covers q1-q3 and end shows progress in q4.
          resArcStart[0].style.borderColor = pillColour + " " + pillColour + " " + pillColour + " transparent";
          resArcStart[0].style.transform = "rotate(45deg)";
          resArcEnd[0].style.margin = "4px";
          resArcEnd[0].style.borderWidth = "6px";
          resArcEnd[0].style.borderColor = pillColour + " transparent transparent transparent";
          resArcEnd[0].style.transform = "rotate(" + String(degRemainder + 225) + "deg)";
          break;
        case 4:
          // start covers q1-q4.
          resArcStart[0].style.borderColor = pillColour;
          break;
        default:
          resArcEnd[0].style.borderColor = "red";
      }
    },
    holdingsBlock: function() {
      // update board number in the title
      var holdHead = document.getElementsByClassName("holdingsHead");
      holdHead[0].textContent = "Holdings - $ " + String(Math.round(this.game.currencyTotal));
    }
  };
});
