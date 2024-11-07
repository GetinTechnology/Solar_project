import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function Calculator() {
  const [electronic, setElectronic] = useState("TV");
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(0);
  const [usageType, setUsageType] = useState("home");
  const [systemSize, setSystemSize] = useState(100); // example initial system size in kW
  const [spaceRequired, setSpaceRequired] = useState(100); // example space in sq ft
  const [annualEnergy, setAnnualEnergy] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [price, setPrice] = useState(0);
  const [subsidy, setSubsidy] = useState(0);

  useEffect(() => {
    // Example power usage for different electronics in watts
    const powerUsage = { TV: 100, AC: 1500, Fan: 70, Light: 20 };
    const costPerUnit = 5; // Example cost per energy unit in currency

    // Calculate power based on quantity and electronic type
    const totalPower = (powerUsage[electronic] || 0) * quantity; // in watts
    const energyConsumption = (totalPower * 365 * 5) / 1000; // Convert to kWh/year assuming 5 hours/day

    const annualCost = energyConsumption * costPerUnit;
    const savings = annualCost * 0.8; // assume 80% savings with solar
    const estimatedPrice = systemSize * 50000; // estimated system price for size
    const estimatedSubsidy = estimatedPrice * 0.3; // assume 30% subsidy

    setAnnualEnergy(energyConsumption.toFixed(2));
    setAnnualSavings(savings.toFixed(2));
    setPrice(estimatedPrice);
    setSubsidy(estimatedSubsidy);
  }, [electronic, quantity, cost, usageType, systemSize]);

  return (
    <Container>
      <div className="calculator">
        <Row>
          <h2>Calculate Your Savings</h2>
          <Col>
            <div className="calculate-box-1">
              <h2>Calculate your current in your electronics</h2>
              <form>
                <label>Electronic Item</label>
                <select value={electronic} onChange={(e) => setElectronic(e.target.value)}>
                  <option value="TV">TV</option>
                  <option value="AC">AC</option>
                  <option value="Fan">Fan</option>
                  <option value="Light">Light</option>
                </select>

                <label>Number of Items</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />

                <label>Cost of Items</label>
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(Number(e.target.value))}
                />

                <label>Usage Type</label>
                <select value={usageType} onChange={(e) => setUsageType(e.target.value)}>
                  <option value="home">Home</option>
                  <option value="commercial">Commercial</option>
                  <option value="smallBusiness">Small Business</option>
                </select>
              </form>
            </div>
          </Col>
          <Col>
            <div className="calculate-box-2">
              <div className="calculate-box">
                <div><p>System Size</p></div>
                <p>{systemSize} kW</p>
              </div>
              <div className="calculate-box">
                <div><p>Space Required</p></div>
                <p>{spaceRequired} sq ft</p>
              </div>
              <div className="calculate-box">
                <div>Annual Energy</div>
                <p>{annualEnergy} kWh</p>
              </div>
              <div className="calculate-box">
                <div><p>Annual Savings</p></div>
                <p>₹{annualSavings}</p>
              </div>
              <div className="calculate-box">
                <div><p>Price</p></div>
                <p>₹{price}</p>
              </div>
              <div className="calculate-box">
                <div><p>Subsidy</p></div>
                <p>₹{subsidy}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Calculator;
