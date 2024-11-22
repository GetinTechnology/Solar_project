import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';

function Calculator() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ name:"", quantity: 1 });
  const [usageType, setUsageType] = useState("home");
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [systemSuggestions, setSystemSuggestions] = useState({
    systemSize: 0,
    spaceRequired: 0,
    annualEnergy: 0,
    annualSavings: 0,
    price: 0,
    subsidy: 0
  });

  const powerUsage = { TV: 100, AC: 3160, Fan: 70, Light: 20,Refrigerator:350,"Washing Machine":350,"Microwave Oven":300,Computer:200,"Water Heater":400,Dishwasher:300,Iron:200 };
  const costPerUnit = 5; 

  const handleAddItem = () => {
    const itemIndex = items.findIndex(item => item.name === currentItem.name);
  
    if (itemIndex === -1) {
      setItems([...items, currentItem]);
    } else {
      const updatedItems = items.map((item, index) => 
        index === itemIndex ? { ...item, quantity: item.quantity + currentItem.quantity } : item
      );
      setItems(updatedItems);
    }
  
    setCurrentItem({ name: currentItem.name, quantity: 1 });
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };


  useEffect(() => {
    const totalEnergy = items.reduce((total, item) => {
      const power = (powerUsage[item.name] || 0) * item.quantity; 
      return total + (power * 30 * 5) / 1000; 
    }, 0);
  
    const monthlyElectricityCost = totalEnergy * costPerUnit;
    setMonthlyCost(monthlyElectricityCost.toFixed(2));
  
    // Apply the new logic for system size based on the monthly electricity cost range
    let systemSize = 0;
    let spaceRequired = 0;
    let annualEnergy = 0;
    let annualSavings = 0;
    let price = 0;
    let subsidy = 0;
  
    if (monthlyElectricityCost > 0 && monthlyElectricityCost <= 1000) {
      // If the cost is 0 - 1000, set everything to 0
      systemSize = 0;
      spaceRequired = 0;
      annualEnergy = 0;
      annualSavings = 0;
      price = 0;
      subsidy = 0;
    } else {
      // For costs above 1000, increment system size for each 1000 range
      const systemSizeMultiplier = Math.floor(monthlyElectricityCost / 1000); // This determines the system size (1, 2, 3, 4,...)
      systemSize = systemSizeMultiplier;
  
      // Now apply the fixed values for each 1 kW
      spaceRequired = systemSize * 95;  // 95 sqft per kW
      annualEnergy = systemSize * 1714;  // 1714 kWh per kW
      annualSavings = systemSize * 12000;  // ₹12,000 savings per kW
      price = systemSize * 96589;  // ₹96,589 per kW
      subsidy = systemSize * 30000;  // ₹30,000 subsidy per kW
    }
  
    setSystemSuggestions({
      systemSize,
      spaceRequired,
      annualEnergy: annualEnergy.toFixed(2),
      annualSavings: annualSavings.toFixed(2),
      price: price.toFixed(2),
      subsidy: subsidy.toFixed(2)
    });
  }, [items, usageType, powerUsage]);
  

  return (
    <Container>
      <div className="calculator">
        <Row>
          <h2>Calculate Your Savings</h2>
          <Col>
            <div className="calculate-box-1">
              <h3>Enter Electronic Items and Quantity</h3>
              <Form>
                <div className='d-flex align-items-center ' style={{gap:'20px'}}>
                <Form.Group>
                  <Form.Label>Electronic</Form.Label>
                  <Form.Control
                    as="select"
                    value={currentItem.name}
                    onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                  >
                    {Object.keys(powerUsage).map((elc,index)=>(
                     <option value={elc} key={index}>{elc}</option>
                    ))}
                  </Form.Control >
                </Form.Group>

                <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={currentItem.quantity}
                    onChange={(e) => setCurrentItem({ ...currentItem, quantity: Number(e.target.value) })}
                    min="1" max="10"
                  />
                </Form.Group>
                <Button onClick={handleAddItem} variant="primary" className='add-btn'>Add Item</Button>
                </div>
               

           
              </Form>

              <div className="mt-4" style={{height:'180px'}}>
                <h4>Items List</h4>
                <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
                  {
                    items.length === 0 ?<p>electriconic item list </p> : items.map((item, index) => (
                      <div key={index} style={{display:'flex'}}>
                        <p style={{ marginRight: '10px' }}>{item.quantity} x {item.name}</p>
                        <Button variant="danger" size="sm" onClick={() => handleRemoveItem(index)}>Remove</Button>
          
                      </div>
                    ))
                  }
        
                </div>

              </div>

              <Form.Group className="mt-3">
                <Form.Label>Usage Type</Form.Label>
                <Form.Control
                  as="select"
                  value={usageType}
                  onChange={(e) => setUsageType(e.target.value)}
                >
                  <option value="home">Home</option>
                  <option value="commercial">Commercial</option>
                  <option value="smallBusiness">Small Business</option>
                </Form.Control>
              </Form.Group>
              <p style={{padding:'10px'}}> Calculate your savings with solar energy and take a step towards a greener future. Discover how much you can reduce your electricity costs while getting tailored recommendations for the ideal solar system based on your needs.
              </p>
            </div>
          </Col>
          <Col>
            <div className="calculate-box-2">
            <h3>Optimized Solar Recommendations for Your  {usageType}</h3>
              <div className="calculate-box">
                <div><p>Monthly Electricity Cost</p></div>
                <p>₹{monthlyCost}</p>
              </div>
              <div className="calculate-box">
                <div><p>System Size</p></div>
                <p>{systemSuggestions.systemSize} kW</p>
              </div>
              <div className="calculate-box">
                <div><p>Space Required</p></div>
                <p>{systemSuggestions.spaceRequired} sq ft</p>
              </div>
              <div className="calculate-box">
                <div>
                  <p>Annual Energy</p>
                </div>
                <p>{systemSuggestions.annualEnergy} kWh</p>
              </div>
              <div className="calculate-box">
                <div><p>Annual Savings</p></div>
                <p>₹{systemSuggestions.annualSavings}</p>
              </div>
              <div className="calculate-box">
                <div><p>Price</p></div>
                <p>₹{systemSuggestions.price}</p>
              </div>
              <div className="calculate-box">
                <div><p>Subsidy</p></div>
                <p>₹{systemSuggestions.subsidy}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Calculator;
