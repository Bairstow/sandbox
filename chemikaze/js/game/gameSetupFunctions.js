define({
  labTable: function() {
    for (var y = 0; y < this.labHeight; y++) {
      var labRow = Object.create([]);
      var placedRow = Object.create([]);
      for (var x = 0; x < this.labWidth; x++) {
        labRow.push(0);
        placedRow.push("empty");
      }
      this.labGrid.push(labRow);
      this.placedGrid.push(placedRow);
    }
  },
  labTableVariables: function() {
    // assign rand property values between min and max to each table element.
    for (var y = 0; y < this.labHeight; y++) {
      for (var x = 0; x < this.labWidth; x++) {
        var rValue = Math.random();
        this.labGrid[y][x] = rValue;
      }
    }
  }
});
