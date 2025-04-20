// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to DOM elements
    const priceInput = document.getElementById("price-per-liter");
    const litersInput = document.getElementById("liters");
    const calculateBtn = document.getElementById("calculate-btn");
    const totalCostDisplay = document.getElementById("total-cost");
  
    // Add click event to calculate button
    calculateBtn.addEventListener("click", function () {
      // Parse input values
      const pricePerLiter = parseFloat(priceInput.value);
      const liters = parseFloat(litersInput.value);
  
      // Calculate total cost
      const totalCost = pricePerLiter * liters;
  
      // Display result with 2 decimal places
      totalCostDisplay.textContent = `Total cost: $${totalCost.toFixed(2)}`;
    });
  });
  