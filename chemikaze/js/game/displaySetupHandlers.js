define([], function() {
  return {
    mouseDown: function() {
      this.wrap.addEventListener("mousedown", function(event) {
        // prevent default text selection action associated with mousedown
        event.preventDefault();
      });
    },
    mouseUp: function() {
      // handle click events for all elements on the game board
      this.wrap.addEventListener("mouseup", function(event) {
        var targetNode = event.target;
        // pill selectors
        if (targetNode.className == "pillBtn") {
          var pillBtns = document.getElementsByClassName("pillBtn");
          for (var i = 0; i < pillBtns.length; i++) {
            if (pillBtns[i].parentNode.getAttribute("data-pillid") ==
                targetNode.parentNode.getAttribute("data-pillid")) {
              pillBtns[i].setAttribute("data-selected", true);
            }
            else {
              pillBtns[i].setAttribute("data-selected", false);
            }
          }
        }
        // pill sell options
        if (targetNode.className == "pillSell" || targetNode.className == "pillSellAll") {
          // if clicked set selected to true;
          targetNode.setAttribute("data-selected", "true");
        }
        // tab selection indicators (conditional on tab selection being different to current selection)
        if (targetNode.parentNode.getAttribute("class") == "tabG") {
          // console.log("tab clicked");
          var tabs = document.getElementsByClassName("tab");
          // target tab accessed via targetNode -> tabG -> tabSVG -> tab
          var targetTab = targetNode.parentNode.parentNode.parentNode;
          for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].getAttribute("data-tab") === targetTab.getAttribute("data-tab")) {
              tabs[i].setAttribute("data-selected", true);
            }
            else {
              tabs[i].setAttribute("data-selected", false);
            }
          }
          // handle element display for each of the tabs individually
          if (targetTab.getAttribute("data-tab") == tabs[0].getAttribute("data-tab")) {
            // lab interface - initial and default
            // associated elements:
            // lab board, pill selection buttons, manual research and synthesis buttons
            var labBlock = document.getElementById("labBlock");
            labBlock.style.display = "block";
            var pillBlock = document.getElementById("pillBlock");
            pillBlock.style.display = "block";
            var upgradeBlock = document.getElementById("upgradeBlock");
            upgradeBlock.style.display = "none";
          }
          if (targetTab.getAttribute("data-tab") == tabs[1].getAttribute("data-tab")) {
            // chairman interface - upgrades
            var labBlock = document.getElementById("labBlock");
            labBlock.style.display = "none";
            var pillBlock = document.getElementById("pillBlock");
            pillBlock.style.display = "none";
            var upgradeBlock = document.getElementById("upgradeBlock");
            upgradeBlock.style.display = "block";
          }
          if (targetTab.getAttribute("data-tab") == tabs[2].getAttribute("data-tab")) {
            // archives interface - achievement tracking
            var labBlock = document.getElementById("labBlock");
            labBlock.style.display = "none";
            var pillBlock = document.getElementById("pillBlock");
            pillBlock.style.display = "none";
            var upgradeBlock = document.getElementById("upgradeBlock");
            upgradeBlock.style.display = "none";
          }
        }
        // lab square selectors
        if (targetNode.className == "labTableElt") {
          targetNode.setAttribute("data-selected", true);
        }
        // research pill selectors
        if (targetNode.className == "researchSelectBtn") {
          var selectBtns = document.getElementsByClassName("researchSelectBtn");
          for (var i = 0; i < selectBtns.length; i++) {
            if (selectBtns[i].getAttribute("data-pillid") == targetNode.getAttribute("data-pillid")) {
              selectBtns[i].setAttribute("data-selected", "true");
            }
            else {
              selectBtns[i].setAttribute("data-selected", "false");
            }
          }
        }
      });
    },
    mouseOver: function() {
      // handle 'hover' events for all elements on the game board
      this.wrap.addEventListener("mouseover", function(event) {
        var targetNode = event.target;
        // use to highlight currently hovered lab table element
        if (targetNode.className == "labTableElt") {
          targetNode.setAttribute("data-hover", "true");
        }
      });
    },
    mouseOut: function() {
      /*
      // handle 'hover' events for all elements on the game board
      this.wrap.addEventListener("mouseout", function(event) {
        var targetNode = event.target;
        // use to highlight currently hovered lab table element
        if (targetNode.className == "labTableElt") {
          targetNode.setAttribute("data-hover", "false");
        }
      });
        if (targetNode.className == "upgrade pillAlphaUpgrade1") {
          targetNode.setAttribute("data-selected", "true");
        }
      });
      */
    }
  };
});
