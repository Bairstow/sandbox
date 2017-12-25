define(["game/displayVariables"], function(dVars) {
  return {
    headBlock: function() {
      // setup bar header (two bars, one with header, smaller with related info...)
      // primary holder
      var headBlock = elt("div","", "headBlock");
      // sub elements
      var headSVG = eltNS("svg","", "headSVG");
      var headPoly = eltNS("polygon", "polyBorder");
      headPoly.setAttribute("points", "0,0 900,0 887,52 0,52");
      var headPoly2 = eltNS("polygon", "polyBorder");
      headPoly2.setAttribute("points", "920,0 960,0 947,52 907,52");
      var headText = eltNS("text", "svgText", "headText");
      headText.textContent = "CHEMIKAZE Inc."
      headText.setAttribute("x", "500");
      headText.setAttribute("y", "36");
      var headInfo = elt("div","", "headInfo");
      headInfo.textContent = "VERSION - 0.1A";
      // attach, order and return head element
      headSVG.appendChild(headPoly);
      headSVG.appendChild(headPoly2);
      headSVG.appendChild(headText);
      headBlock.appendChild(headInfo);
      headBlock.appendChild(headSVG);
      return headBlock;
    },
    areaDividers: function() {
      // add visual cues to the playing background that seperates each of the grouped areas.
      // the tab/chat section, current tab showing section, and research/progress section.
      var dividers = elt("div","", "dividers");
      var divNavShadow = elt("div","", "divNavShadow");
      var divNav = elt("div","", "divNav");
      var divCurr = elt("div","", "divCurr");
      var divProg = elt("div","", "divProg");
      dividers.appendChild(divNavShadow);
      dividers.appendChild(divNav);
      dividers.appendChild(divCurr);
      dividers.appendChild(divProg);
      return dividers;
    },
    tabsBlock: function() {
      // setup the tbexpanded tabs element
      // primary holder
      var tabsBlock = elt("div","","tabsBlock");
      var tabsList = this.game.tabs;
      // setup and attach new sub elements.
      for (var i = 0; i < tabsList.length; i++) {
        // setup
        var newTab = elt("div", "tab");
        newTab.setAttribute("data-tab", tabsList[i]);
        newTab.setAttribute("data-selected", "false");
        var newSVG = eltNS("svg", "tabSVG");
        var newG = eltNS("g", "tabG");
        var newPolyName = eltNS("polygon", "polyLabel");
        newPolyName.setAttribute("points", "0,0 202,0 192,40 0,40");
        var newPolyInd = eltNS("polygon","tabPolyInd", "polyBorder");
        newPolyInd.setAttribute("points", "210,0 260,0 260,40 200,40");
        var newText = eltNS("text", "svgText");
        newText.setAttribute("x", "14");
        newText.setAttribute("y", "28");
        newText.textContent = tabsList[i];
        // attach
        newG.appendChild(newPolyName);
        newG.appendChild(newPolyInd);
        newG.appendChild(newText);
        newSVG.appendChild(newG);
        newTab.appendChild(newSVG);
        tabsBlock.appendChild(newTab);
      }
      // setup message log holder under tabs
      var tabsMessageDiv = eltNS("svg","", "tabsMessageDiv");
      var tabsMessageBorderPoly = eltNS("polygon", "polyBorder");
      tabsMessageBorderPoly.setAttribute("points",
        "0,0 40,0 30,40 4,40 4,252 256,252 256,40 220,40 230,0 260,0 260,256 0,256");
      var tabsMessageHeadPoly = eltNS("polygon", "polyLabel");
      tabsMessageHeadPoly.setAttribute("points", "48,0 222,0 212,40 38,40");
      var tabsMessageHeadText = eltNS("text", "svgText");
      tabsMessageHeadText.textContent = "MESSAGE LOG";
      tabsMessageHeadText.setAttribute("x", "76");
      tabsMessageHeadText.setAttribute("y", "28");
      // holder for 220x60 pixel art for character
      var tabsMessageArtPoly = eltNS("polygon", "polyBorder");
      tabsMessageArtPoly.setAttribute("points", "12,176 248,176 248,244 12,244");
      tabsMessageDiv.appendChild(tabsMessageBorderPoly);
      tabsMessageDiv.appendChild(tabsMessageHeadPoly);
      tabsMessageDiv.appendChild(tabsMessageHeadText);
      tabsMessageDiv.appendChild(tabsMessageArtPoly);
      tabsBlock.appendChild(tabsMessageDiv);
      // setup area for quick upgrade button
      var tabsQuickUpgradeDiv = eltNS("svg","", "tabsQuickUpgradeDiv");
      var tabsQuickUpBtnPoly = eltNS("polygon", "polyLabel");
      tabsQuickUpBtnPoly.setAttribute("points", "0,0 162,0 152,40 0,40");
      var tabsQuickUpCostPoly = eltNS("polygon", "polyBorder");
      tabsQuickUpCostPoly.setAttribute("points", "170,0 260,0 260,40 160,40");
      var tabsQuickUpBtnText = eltNS("text", "svgText");
      tabsQuickUpBtnText.textContent = "Buff Alpha Pill";
      tabsQuickUpBtnText.setAttribute("x", "20");
      tabsQuickUpBtnText.setAttribute("y", "28");
      var tabsQuickUpCostText = eltNS("text", "svgText");
      tabsQuickUpCostText.textContent = "$ 0";
      tabsQuickUpCostText.setAttribute("x", "190");
      tabsQuickUpCostText.setAttribute("y", "28");
      tabsQuickUpgradeDiv.appendChild(tabsQuickUpBtnPoly);
      tabsQuickUpgradeDiv.appendChild(tabsQuickUpCostPoly);
      tabsQuickUpgradeDiv.appendChild(tabsQuickUpBtnText);
      tabsQuickUpgradeDiv.appendChild(tabsQuickUpCostText);
      tabsBlock.appendChild(tabsQuickUpgradeDiv);
      return tabsBlock;
    },
    labBlock: function() {
      // setup DOM table for the game lab.
      var labBlock = elt("div","", "labBlock");
      // lab graphics
      var labSVG = eltNS("svg","", "labSVG");
      var labSVGPolyFEnd = eltNS("polygon", "polyBorder");
      var labSVGPolyMid = eltNS("polygon", "polyBorder")
      var labSVGPolyBEnd = eltNS("polygon", "polyBorder");
      labSVGPolyFEnd.setAttribute("points",
        "0,0 40,0 30,40 4,40 4,456 40,456 30,496 0,496");
      labSVGPolyMid.setAttribute("points", "190,456 230,456 220,496 180,496");
      labSVGPolyBEnd.setAttribute("points",
        "394,0 424,0 424,496 384,496 394,456 420,456 420,40 384,40");
      // header info
      var labSVGPolyName = eltNS("polygon", "polyLabel");
      labSVGPolyName.setAttribute("points", "48,0 308,0 298,40 38,40");
      var labSVGPolyNumber = eltNS("polygon", "polyLabel");
      labSVGPolyNumber.setAttribute("points", "316,0 386,0 376,40 306,40");
      var labSVGTextName = eltNS("text", "svgText labSVGText");
      labSVGTextName.textContent = "LABARATUS";
      labSVGTextName.setAttribute("x", "120");
      labSVGTextName.setAttribute("y", "28");
      var labSVGTextNumber = eltNS("text", "svgText labSVGText");
      labSVGTextNumber.textContent = "1";
      labSVGTextNumber.setAttribute("x", "338");
      labSVGTextNumber.setAttribute("y", "28");
      // manual buttons
      var labSVGPolyResearch = eltNS("polygon", "polyLabel");
      var labSVGPolySynth = eltNS("polygon", "polyLabel");
      labSVGPolyResearch.setAttribute("points", "48,456 182,456 172,496 38,496");
      labSVGPolySynth.setAttribute("points", "238,456 386,456 376,496 228,496");
      var labSVGTextResearch = eltNS("text", "svgText");
      var labSVGTextSynth = eltNS("text", "svgText");
      labSVGTextResearch.textContent = "RESEARCH";
      labSVGTextResearch.setAttribute("x", "70");
      labSVGTextResearch.setAttribute("y", "484");
      labSVGTextSynth.textContent = "SYNTHESISE";
      labSVGTextSynth.setAttribute("x", "258");
      labSVGTextSynth.setAttribute("y", "484");
      // cleanup
      labSVG.appendChild(labSVGPolyFEnd);
      labSVG.appendChild(labSVGPolyMid);
      labSVG.appendChild(labSVGPolyBEnd);
      labSVG.appendChild(labSVGPolyName);
      labSVG.appendChild(labSVGPolyNumber);
      labSVG.appendChild(labSVGTextName);
      labSVG.appendChild(labSVGTextNumber);
      labSVG.appendChild(labSVGPolyResearch);
      labSVG.appendChild(labSVGPolySynth);
      labSVG.appendChild(labSVGTextResearch);
      labSVG.appendChild(labSVGTextSynth);
      labBlock.appendChild(labSVG);
      // table element
      var labTable = elt("table", "labTable");
      for (var y = 0; y < this.game.labHeight; y++) {
        var labTableRow = elt("tr", "labTableRow");
        for (var x = 0; x < this.game.labWidth; x++) {
          var labID = String(y * this.game.labWidth + x);
          var labTableElt = elt("td", "labTableElt");
          labTableElt.setAttribute("data-id", labID);
          labTableElt.setAttribute("data-hover", "false");
          labTableElt.setAttribute("data-selected", "false");
          labTableRow.appendChild(labTableElt);
        }
        labTable.appendChild(labTableRow);
      }
      labBlock.appendChild(labTable);
      return labBlock;
    },
    pillBlock: function() {
      // setup the pill selection elements for the lab
      var pillBlock = elt("div","", "pillBlock");
      // define basic pill holder area
      var pillBasicSVG = eltNS("svg","", "pillBasic");
      var pillBasicPolyDiv = eltNS("polygon", "polyBorder");
      pillBasicPolyDiv.setAttribute("points",
        "0,0 40,0 30,40 4,40 4,296 402,296 402,40 366,40 376,0 406,0 406,300 0,300");
      var pillBasicPolyTitle = eltNS("polygon", "polyLabel");
      pillBasicPolyTitle.setAttribute("points", "48,0 368,0 358,40 38,40");
      var pillBasicTextTitle = eltNS("text", "svgText");
      pillBasicTextTitle.textContent = "RESEARCHED PILLS";
      pillBasicTextTitle.setAttribute("x", "130");
      pillBasicTextTitle.setAttribute("y", "28");
      pillBasicSVG.appendChild(pillBasicPolyDiv);
      pillBasicSVG.appendChild(pillBasicPolyTitle);
      pillBasicSVG.appendChild(pillBasicTextTitle);
      // loop through and create pill selections for each pill type
      for (var i = 0; i < this.game.pillList.length; i++) {
        // create grouping for each pill
        var newPillG = eltNS("g", "pillG", ("pillG" + String(i)));
        // create pill swatch
        var newPillPolySwatch = eltNS("polygon", "pillPolySwatch");
        newPillPolySwatch.setAttribute("fill", dVars.pillColours[i]);
        var swatchCoords =
          "12," + String(48 + i * 50) + " " + // top-left
          "52," + String(48 + i * 50) + " " + // top-right
          "42," + String(88 + i * 50) + " " + // bottom-right
          "12," + String(88 + i * 50); // bottom-left
        newPillPolySwatch.setAttribute("points", swatchCoords);
        newPillG.appendChild(newPillPolySwatch);
        // create pill selector (with own grouping for click/hover behaviour)
        var newPillPolySelector = eltNS("polygon", "polyLabel");
        var selectorCoords =
          "60," + String(48 + i * 50) + " " + // top-left
          "222," + String(48 + i * 50) + " " + // top-right
          "212," + String(88 + i * 50) + " " + // bottom-right
          "50," + String(88 + i * 50); // bottom-left
        newPillPolySelector.setAttribute("points", selectorCoords);
        newPillG.appendChild(newPillPolySelector);
        var newPillTextCount = eltNS("text", "svgText");
        newPillTextCount.textContent = "0";
        newPillTextCount.setAttribute("x", "130");
        newPillTextCount.setAttribute("y", String(76 + i * 50));
        newPillG.appendChild(newPillTextCount);
        // create button for single pill selling
        var newPillPolySell = eltNS("polygon", "polyLabel");
        var sellCoords =
          "230," + String(48 + i * 50) + " " + // top-left
          "302," + String(48 + i * 50) + " " + // top-right
          "292," + String(88 + i * 50) + " " + // bottom-right
          "220," + String(88 + i * 50); // bottom-left
        newPillPolySell.setAttribute("points", sellCoords);
        newPillG.appendChild(newPillPolySell);
        var newPillTextSell = eltNS("text", "svgText");
        newPillTextSell.textContent = "Sell";
        newPillTextSell.setAttribute("x", "246");
        newPillTextSell.setAttribute("y", String(76 + i * 50));
        newPillG.appendChild(newPillTextSell);
        // create button for selling all pills of selected type
        var newPillPolySellAll = eltNS("polygon", "polyLabel");
        var sellAllCoords =
          "310," + String(48 + i * 50) + " " + // top-left
          "394," + String(48 + i * 50) + " " + // top-right
          "394," + String(88 + i * 50) + " " + // bottom-right
          "300," + String(88 + i * 50); // bottom-left
        newPillPolySellAll.setAttribute("points", sellAllCoords);
        newPillG.appendChild(newPillPolySellAll);
        var newPillTextSellAll = eltNS("text", "svgText");
        newPillTextSellAll.textContent = "Sell All";
        newPillTextSellAll.setAttribute("x", "326");
        newPillTextSellAll.setAttribute("y", String(76 + i * 50));
        newPillG.appendChild(newPillTextSellAll);
        // attach the finished new pill to the svg element.
        pillBasicSVG.appendChild(newPillG);
      }
      pillBlock.appendChild(pillBasicSVG);
      // define synth pill holder area
      var pillSynthSVG = eltNS("svg","", "pillSynth");
      var pillSynthPolyDiv = eltNS("polygon", "polyBorder");
      pillSynthPolyDiv.setAttribute("points",
        "0,0 40,0 30,40 4,40 4,108 402,108 402,40 366,40 376,0 406,0 406,112 0,112");
      var pillSynthPolyName = eltNS("polygon", "polyLabel");
      pillSynthPolyName.setAttribute("points", "48,0 368,0 358,40 38,40");
      var pillSynthTextHead = eltNS("text", "svgText");
      pillSynthTextHead.textContent = "SYNTHESISED PILLS";
      pillSynthTextHead.setAttribute("x", "130");
      pillSynthTextHead.setAttribute("y", "28");
      for (var i = 0; i < this.game.pillSynthList.length; i++) {
        var newPillHolderPoly = eltNS("ellipse", "pillSynthHolder");
        newPillHolderPoly.setAttribute("rx", "50");
        newPillHolderPoly.setAttribute("ry", "20");
        newPillHolderPoly.setAttribute("cx", String(74 + i * 128));
        newPillHolderPoly.setAttribute("cy", "74");
        pillSynthSVG.appendChild(newPillHolderPoly);
      }
      pillSynthSVG.appendChild(pillSynthPolyDiv);
      pillSynthSVG.appendChild(pillSynthPolyName);
      pillSynthSVG.appendChild(pillSynthTextHead);
      pillBlock.appendChild(pillSynthSVG);
      // define hover info display area
      var pillHoverInfo = eltNS("svg","", "pillHover");
      var pillHoverPolyLeft = eltNS("polygon", "polyBorder");
      var pillHoverPolyRight = eltNS("polygon", "polyBorder");
      pillHoverPolyLeft.setAttribute("points", "0,0 204,0 194,40 0,40");
      pillHoverPolyRight.setAttribute("points", "212,0 406,0 406,40 202,40");
      var pillHoverTextLeft = eltNS("text", "svgText");
      var pillHoverTextRight = eltNS("text", "svgText");
      pillHoverTextLeft.textContent = "+ 0 RPS";
      pillHoverTextLeft.setAttribute("x", "90");
      pillHoverTextLeft.setAttribute("y", "28");
      pillHoverTextRight.textContent = "+ $ 0";
      pillHoverTextRight.setAttribute("x", "290");
      pillHoverTextRight.setAttribute("y", "28");
      pillHoverInfo.appendChild(pillHoverPolyLeft);
      pillHoverInfo.appendChild(pillHoverPolyRight);
      pillHoverInfo.appendChild(pillHoverTextLeft);
      pillHoverInfo.appendChild(pillHoverTextRight);
      pillBlock.appendChild(pillHoverInfo);
      return pillBlock;
    },
    upgradeBlock: function() {
      var upgradeBlock = elt("div","", "upgradeBlock");
      var upgradeHead = elt("div", "head upgradeHead");
      upgradeHead.textContent = "Purchase Resources";
      upgradeBlock.appendChild(upgradeHead);
      var pillBaseUpgradeBlock = elt("div", "pillBaseUpgradeBlock");
      for (var i = 0; i < this.game.pillList.length; i++) {
        var pillBaseUpgrade = elt("div", "upgrade pillBaseUpgrade");
        pillBaseUpgrade.setAttribute("data-selected", "false");
        pillBaseUpgrade.setAttribute("data-pillid", i);
        pillBaseUpgrade.textContent = "Buff " + this.game.pillList[i] + " pill";
        pillBaseUpgradeBlock.appendChild(pillBaseUpgrade);
      }
      upgradeBlock.appendChild(pillBaseUpgradeBlock);
      var pillUpgradeBlock = elt("div", "pillUpgradeBlock");
      var pillAlphaUpgradeBlock = elt("div", "pillAlphaUpgradeBlock");
      var pillAlphaHead = elt("div", "head pillAlphaHead");
      var pillAlphaUpgrade1 = elt("div", "upgrade pillAlphaUpgrade1");
      pillAlphaHead.textContent = "Alpha pill upgrades";
      pillAlphaUpgrade1.textContent = "Buff alpha pill - $100";
      pillAlphaUpgrade1.setAttribute("data-selected", "false");
      pillAlphaUpgradeBlock.appendChild(pillAlphaHead);
      pillAlphaUpgradeBlock.appendChild(pillAlphaUpgrade1);
      pillUpgradeBlock.appendChild(pillAlphaUpgradeBlock);
      upgradeBlock.appendChild(pillUpgradeBlock);
      // on creation lab tab selected so upgrades will be hidden until chairman tab selection.
      upgradeBlock.style.display = "none";
      return upgradeBlock;
    },
    researchBlock: function() {
      // setup ui element to show current research progress.
      var researchBlock = elt("div","", "researchBlock");
      // research holder area
      var researchHolderDiv = eltNS("svg","", "researchHolderDiv");
      var researchHolderPoly = eltNS("polygon", "polyBorder");
      researchHolderPoly.setAttribute("points",
        "0,0 40,0 30,40 4,40 4,276 556,276 556,40 520,40 530,0 560,0 560,280 0,280");
      var researchLabelPoly = eltNS("polygon", "polyLabel");
      researchLabelPoly.setAttribute("points", "48,0 522,0 512,40 38,40");
      var researchLabelText = eltNS("text", "svgText");
      researchLabelText.textContent = "RESEARCH PROGRESS";
      researchLabelText.setAttribute("x", "200");
      researchLabelText.setAttribute("y", "28");
      researchHolderDiv.appendChild(researchHolderPoly);
      researchHolderDiv.appendChild(researchLabelPoly);
      researchHolderDiv.appendChild(researchLabelText);
      researchBlock.appendChild(researchHolderDiv);
      // current research progress indicator
      var researchDisplay = elt("div","", "researchDisplay");
      var researchArcStart = elt("div", "researchArc", "researchArcStart");
      var researchArcEnd = elt("div", "researchArc", "researchArcEnd");
      var researchArcBase = elt("div", "researchArc", "researchArcBase");
      var researchPerSecond = elt("div","", "researchPerSecond");
      researchPerSecond.textContent = "0 RPS"
      var researchProgress = elt("div","", "researchProgress");
      researchProgress.textContent = "0 %";
      var researchAbsProgress = elt("div","", "researchAbsProgress");
      researchAbsProgress.textContent = "0 / 0";
      researchDisplay.appendChild(researchArcStart);
      researchDisplay.appendChild(researchArcEnd);
      researchDisplay.appendChild(researchArcBase);
      researchDisplay.appendChild(researchPerSecond);
      researchDisplay.appendChild(researchProgress);
      researchDisplay.appendChild(researchAbsProgress);
      // current research selection panels
      var researchSelect = elt("div","","researchSelect");
      var researchSelectHolder = eltNS("svg","", "researchSelectHolder");
      var researchSelectBorderPoly = eltNS("polygon", "polyBorder");
      researchSelectBorderPoly.setAttribute("points",
        "0,0 30,0 22,30 4,30 4,216 296,216 296,30 270,30 278,0 300,0 300,220 0,220");
      var researchSelectLabelPoly = eltNS("polygon", "polyBorder");
      researchSelectLabelPoly.setAttribute("points", "36,0 272,0 264,30 28,30");
      var researchSelectLabelText = eltNS("text", "svgText researchSelectText");
      researchSelectLabelText.textContent = "RESEARCH SELECTION";
      researchSelectLabelText.setAttribute("x", "78");
      researchSelectLabelText.setAttribute("y", "20");
      researchSelectHolder.appendChild(researchSelectBorderPoly);
      researchSelectHolder.appendChild(researchSelectLabelPoly);
      researchSelectHolder.appendChild(researchSelectLabelText);
      researchSelect.appendChild(researchSelectHolder);
      for (var i = 0; i < this.game.pillList.length; i++) {
        var newResPill = eltNS("svg", "researchPill");
        var newResPillSwatch = eltNS("polygon");
        var pillSwatchCoords =
          "10," + String(36 + i * 36) + " " + // top-left
          "80," + String(36 + i * 36) + " " + // top-right
          "72," + String(66 + i * 36) + " " + // bottom-right
          "10," + String(66 + i * 36);// bottom-right
        newResPillSwatch.setAttribute("points", pillSwatchCoords);
        newResPillSwatch.setAttribute("fill", dVars.pillColours[i]);
        var newResPillBtn = eltNS("polygon", "polyLabel");
        var pillBtnCoords =
          "86," + String(36 + i * 36) + " " + // top-left
          "290," + String(36 + i * 36) + " " + // top-right
          "290," + String(66 + i * 36) + " " + // bottom-right
          "78," + String(66 + i * 36);// bottom-right
        newResPillBtn.setAttribute("points", pillBtnCoords);
        var newResPillBtnText = eltNS("text", "svgText researchSelectText");
        newResPillBtnText.textContent = "0";
        newResPillBtnText.setAttribute("x", "110");
        newResPillBtnText.setAttribute("y", String(56 + i * 36));
        newResPill.appendChild(newResPillSwatch);
        newResPill.appendChild(newResPillBtn);
        newResPill.appendChild(newResPillBtnText);
        researchSelectHolder.appendChild(newResPill);
      }
      // attach and return
      researchBlock.appendChild(researchDisplay);
      researchBlock.appendChild(researchSelect);
      return researchBlock;
    },
    economyBlock: function() {
      // setup ui element to show current financial progress.
      var economyBlock = elt("div","", "economyBlock");
      // financial holder area
      var economyHolderDiv = eltNS("svg","", "economyHolderDiv");
      var economyHolderPoly = eltNS("polygon", "polyBorder");
      economyHolderPoly.setAttribute("points",
        "0,0 40,0 30,40 4,40 4,276 556,276 556,40 520,40 530,0 560,0 560,280 0,280");
      var economyLabelPoly = eltNS("polygon", "polyLabel");
      economyLabelPoly.setAttribute("points", "48,0 522,0 512,40 38,40");
      var economyLabelText = eltNS("text", "svgText");
      economyLabelText.textContent = "FINANCIAL PROGRESS";
      economyLabelText.setAttribute("x", "200");
      economyLabelText.setAttribute("y", "28");
      economyHolderDiv.appendChild(economyHolderPoly);
      economyHolderDiv.appendChild(economyLabelPoly);
      economyHolderDiv.appendChild(economyLabelText);
      // current balance display
      var economyBalanceLabelPoly = eltNS("polygon", "polyBorder");
      economyBalanceLabelPoly.setAttribute("points", "12,48 180,48 170,88 12,88");
      var economyBalanceCountPoly = eltNS("polygon", "polyLabel");
      economyBalanceCountPoly.setAttribute("points", "188,48 548,48 548,88 178,88");
      var economyBalanceLabelText = eltNS("text", "svgText");
      economyBalanceLabelText.textContent = "BALANCE:";
      economyBalanceLabelText.setAttribute("x", "40");
      economyBalanceLabelText.setAttribute("y", "76");
      var economyBalanceCountText = eltNS("text", "svgText");
      economyBalanceCountText.textContent = "$ 0";
      economyBalanceCountText.setAttribute("x", "220");
      economyBalanceCountText.setAttribute("y", "76");
      economyHolderDiv.appendChild(economyBalanceLabelPoly);
      economyHolderDiv.appendChild(economyBalanceCountPoly);
      economyHolderDiv.appendChild(economyBalanceLabelText);
      economyHolderDiv.appendChild(economyBalanceCountText);
      // pill market graph area
      var economyPillMarketPoly = eltNS("polygon", "polyBorder");
      economyPillMarketPoly.setAttribute("points", "12,96 548,96 548,268 12,268");
      var economyPillMarketText = eltNS("text", "svgText");
      economyPillMarketText.textContent = "Pill Market Graph";
      economyPillMarketText.setAttribute("x", "180");
      economyPillMarketText.setAttribute("y", "200");
      economyHolderDiv.appendChild(economyPillMarketPoly);
      economyHolderDiv.appendChild(economyPillMarketText);
      economyBlock.appendChild(economyHolderDiv);
      return economyBlock;
    }
  };
});
