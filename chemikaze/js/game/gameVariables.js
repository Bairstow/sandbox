define({
  labWidth: 10,
  labHeight: 10,
  maxStep: 0.05,
  labGrid: Object.create([]),
  placedGrid: Object.create([]),
  // game completion marker
  status: null,
  boardNumber: 1,
  // current game selection marker
  pillSelected: null,
  researchSelected: null,
  tabs: ["LAB", "CHAIRMAN", "ARCHIVES"],
  tabSelected: "LAB",
  tabs: ["lab", "chairman", "archives"],
  tabSelected: "lab",
  // initialise game variables
  clickValue: 0.5,
  researchProgress: 0.0,
  researchValue: 0.0,
  researchValuePrev: Object.create([]),
  tickLengthPrev: Object.create([]),
  researchPerSec: 0.0,
  researchTarget: 0.0,
  synthesisTarget: 200,
  pillList: ["alpha", "beta", "gamma", "delta", "epsilon"],
  pillBaseTargets: [20, 50, 150, 500, 2500],
  pillBaseTotals: [0, 0, 0, 0, 0],
  pillBaseValues: [0.05, 0.5, 2.0, 10.0, 100],
  pillTargets: [20, 50, 150, 500, 2500],
  pillTotals: [1, 1, 1, 1, 1],
  pillValues: [0.05, 0.5, 2.0, 10.0, 100],
  pillCurrencyValues: [10, 50, 500, 2500, 10000],
  pillSynthList: [0, 0, 0],
  currencyTotal: 0.0,
  // upgrade markers
  boardLevel: 0,
  synthLevel: 0,
  pillUpradeLevels: [0, 0, 0, 0, 0],
  pillResearchLevels: [0, 0, 0, 0, 0],
  pillSalesLevels: [0, 0, 0, 0, 0],
  pillAllocations: [0, 0, 0, 0, 0],
  quickUpgradeButton: "false",
  // possible tbimplemented life extension on hard mode.
  currencyTotal: 0.0,
  // upgrade markers
  boardLevel: 0
});
