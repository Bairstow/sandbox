// wrap game function in require.js module definition
define(["game/gameVariables", "game/gameSetupFunctions", "game/gameUpdateFunctions"],
function(gVars, gSetupFunc, gUpdateFunc) {
  // primary game constructor
  // -------------------------------------------------
  function ChemikazeGame() {
    // base var decs
    this.labWidth = gVars.labWidth;
    this.labHeight = gVars.labHeight;
    this.maxStep = gVars.maxStep;
    this.labGrid = gVars.labGrid;
    this.placedGrid = gVars.placedGrid;
    // game completion marker
    this.status = gVars.status;
    this.boardNumber = gVars.boardNumber;
    // current game selection marker
    this.pillSelected = gVars.pillSelected;
    this.researchSelected = gVars.researchSelected;
    this.tabs = gVars.tabs;
    this.tabSelected = gVars.tabSelected;
    // initialise game variables
    this.clickValue = gVars.clickValue;
    this.researchProgress = gVars.researchProgress;
    this.researchValue = gVars.researchValue;
    this.researchValuePrev = gVars.researchValuePrev;
    this.tickLengthPrev = gVars.tickLengthPrev;
    this.researchPerSec = gVars.researchPerSec;
    this.researchTarget = gVars.researchTarget;
    this.synthesisTarget = gVars.synthesisTarget;
    this.pillList = gVars.pillList;
    this.pillBaseTargets =  gVars.pillBaseTargets;
    this.pillBaseTotals = gVars.pillBaseTotals;
    this.pillBaseValues = gVars.pillBaseValues;
    this.pillTargets = gVars.pillTargets;
    this.pillTotals = gVars.pillTotals;
    this.pillValues = gVars.pillValues;
    this.pillCurrencyValues = gVars.pillCurrencyValues;
    this.pillSynthList = gVars.pillSynthList;
    this.currencyTotal = gVars.currencyTotal;
    // upgrade markers
    this.boardLevel = gVars.boardLevel;
    this.synthLevel = gVars.synthLevel;
    this.pillUpradeLevels = gVars.pillUpgradeLevels;
    this.pillResearchLevels = gVars.pillResearchLevels;
    this.pillSalesLevels = gVars.pillSalesLevels;
    this.pillAllocations = gVars.pillAllocations;
    this.quickUpgradeButton = gVars.quickUpgradeButton;
    this.currencyTotal = gVars.currencyTotal;
    // upgrade markers
    this.boardLevel = gVars.boardLevel;
  }

  ChemikazeGame.prototype.setupLabTable = gSetupFunc.labTable;
  ChemikazeGame.prototype.setupLabTableVariables = gSetupFunc.labTableVariables;
  ChemikazeGame.prototype.updateSelections = gUpdateFunc.staticSelections;
  ChemikazeGame.prototype.updateLabSelection = gUpdateFunc.labSelection;
  ChemikazeGame.prototype.updateResearchValue = gUpdateFunc.researchValue;
  ChemikazeGame.prototype.updateResearchProgress = gUpdateFunc.researchProgress;
  ChemikazeGame.prototype.updatePillSales = gUpdateFunc.pillSales;
  ChemikazeGame.prototype.updateSynthesise = gUpdateFunc.synthesise;
  ChemikazeGame.prototype.updateUpgradePurchases = gUpdateFunc.upgradePurchases;

  ChemikazeGame.prototype.initialise = function() {
    // initialise labGrid and placedGrid.
    this.setupLabTable();
    this.setupLabTableVariables();
  };
  ChemikazeGame.prototype.animate = function(step) {
    if (this.status != null) {
      // tba code for game completion
    }
    while (step > 0) {
      var thisStep = Math.min(step, this.maxStep);
      this.updateSelections();
      this.updateLabSelection();
      this.updateResearchValue(thisStep);
      this.updateResearchProgress(thisStep);
      this.updatePillSales();
      this.updateSynthesise();
      this.updateUpgradePurchases();
      step -= thisStep;
    }
  };
  ChemikazeGame.prototype.resetResearchVariables = function() {
    // reset all lab and research related variables to initial values.
    this.labGrid = Object.create([]);
    this.placedGrid = Object.create([]);
    this.setupLabTable();
    this.setupLabTableVariables();
    this.researchProgress = 0.0;
    this.researchValue = 0.0;
    this.researchValuePrev = Object.create([]);
    this.tickLengthPrev = Object.create([]);
    this.researchPerSec = 0.0;
    for (var i = 0; i < this.pillList.length; i++) {
      this.pillTargets[i] = this.pillBaseTargets[i];
      this.pillValues[i] = this.pillBaseValues[i];
    }
    this.researchTarget = this.pillTargets[this.researchSelected];
  };
  ChemikazeGame.prototype.greenPillCalc = function(pY, pX) {
    var researchValue = 0.0;
    // green pills return a base value for the square they are placed on and then a partial
    // value for any grid value found in each cardinal direction.
    // base
    researchValue += this.pillValues[0];
    // north
    if (pY > 0) {
      researchValue += this.labGrid[pY - 1][pX] * this.pillValues[0];
    }
    // east
    if (pX < (this.labWidth - 1)) {
      researchValue += this.labGrid[pY][pX + 1] * this.pillValues[0];
    }
    // south
    if (pY < (this.labHeight - 1)) {
      researchValue += this.labGrid[pY + 1][pX] * this.pillValues[0];
    }
    // west
    if (pX > 0) {
      researchValue += this.labGrid[pY][pX - 1] * this.pillValues[0];
    }
    return researchValue;
  };
  ChemikazeGame.prototype.bluePillCalc = function(pY, pX) {
    var researchValue = 0.0;
    // blue pills return a base value for the square they are placed on and then a partial
    // value for any grid value found in the 9 surrounding squares and a penalty for any
    // pills located in those squares.
    researchValue += this.pillValues[1];
    for (var y = -1; y < 2; y++) {
      for (var x = -1; x < 2; x++) {
        var yOff = pY + y;
        var xOff = pX + x;
        if (yOff >= 0 &&
            yOff < this.labHeight &&
            xOff >= 0 &&
            xOff < this.labWidth &&
            !(y == 0 && x == 0)) {
          researchValue += this.labGrid[pY + y][pX + x] * this.pillValues[1];
        }
      }
    }
    return researchValue;
  };

  return ChemikazeGame;
});
