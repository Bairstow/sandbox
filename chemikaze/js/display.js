// wrap display system in require.js module definition
define(["helper",
        "game/displayVariables",
        "game/displaySetupFunctions",
        "game/displaySetupHandlers",
        "game/displayUpdateFunctions"],
  function(_, dVars, dSetupFunc, dSetupHandler, dUpdateFunc) {
  // primary display constructor
  // -------------------------------------------------
  function DOMDisplay(parent, game) {
    // game element storage
    this.game = game;
    // game wrap dom element setup.
    this.wrap = parent.appendChild(elt("div", "wrap"));
    // game element creation
    // top level elements
    this.wrap.appendChild(this.setupHeadBlock());
    this.wrap.appendChild(this.setupAreaDividers());
    this.wrap.appendChild(this.setupTabsBlock());
    // lab related
    this.wrap.appendChild(this.setupLabBlock());
    this.wrap.appendChild(this.setupPillBlock());
    // upgrade related (chairman tab)
    this.wrap.appendChild(this.setupUpgradeBlock());
    // achievement related (archives tab)
    // general info
    this.wrap.appendChild(this.setupResearchBlock());
    this.wrap.appendChild(this.setupEconomyBlock());
    // add event handlers for interactable elements
    this.setupEventMouseDown();
    this.setupEventMouseUp();
    this.setupEventMouseOver();
    this.setupEventMouseOut();
    // initialise dynamic element views (lab table colours, research values, selection...)
    this.drawFrame();
  };
  DOMDisplay.prototype.setupHeadBlock = dSetupFunc.headBlock;
  DOMDisplay.prototype.setupAreaDividers = dSetupFunc.areaDividers;
  DOMDisplay.prototype.setupTabsBlock = dSetupFunc.tabsBlock;
  DOMDisplay.prototype.setupLabBlock = dSetupFunc.labBlock;
  DOMDisplay.prototype.setupPillBlock = dSetupFunc.pillBlock;
  DOMDisplay.prototype.setupUpgradeBlock = dSetupFunc.upgradeBlock;
  DOMDisplay.prototype.setupResearchBlock = dSetupFunc.researchBlock;
  DOMDisplay.prototype.setupEconomyBlock = dSetupFunc.economyBlock;
  DOMDisplay.prototype.setupEventMouseDown = dSetupHandler.mouseDown;
  DOMDisplay.prototype.setupEventMouseUp = dSetupHandler.mouseUp;
  DOMDisplay.prototype.setupEventMouseOver = dSetupHandler.mouseOver;
  DOMDisplay.prototype.setupEventMouseOut = dSetupHandler.mouseOut;
  DOMDisplay.prototype.drawFrame = function() {
    this.updateTabsBlock();
    this.updateLabBlock();
    this.updatePillBlock();
    this.updateResearchBlock();
    this.updateHoldingsBlock();
  };
  DOMDisplay.prototype.updateTabsBlock = dUpdateFunc.tabsBlock;
  DOMDisplay.prototype.updateLabBlock = dUpdateFunc.labBlock;
  DOMDisplay.prototype.updatePillBlock = dUpdateFunc.pillBlock;
  DOMDisplay.prototype.updateResearchBlock = dUpdateFunc.researchBlock;
  DOMDisplay.prototype.updateHoldingsBlock = dUpdateFunc.holdingsBlock;

  return DOMDisplay;
});
