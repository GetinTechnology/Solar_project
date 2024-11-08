import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';

function Calculator() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ name: "TV", quantity: 1 });
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

  const powerUsage = { TV: 100, AC: 1500, Fan: 70, Light: 20 };
  const costPerUnit = 5; 

  const handleAddItem = () => {
    setItems([...items, currentItem]);
    setCurrentItem({ name: "TV", quantity: 1 });
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

    const multiplier = usageType === "home" ? 1 : usageType === "commercial" ? 2 : 1.5;
    const systemSize = Math.ceil(totalEnergy / 100) * multiplier;
    const spaceRequired = systemSize * 10; 
    const annualEnergy = totalEnergy * 12;
    const annualSavings = monthlyElectricityCost * 12 * 0.8;
    const price = systemSize * 50000;
    const subsidy = price * 0.3;

    setSystemSuggestions({
      systemSize,
      spaceRequired,
      annualEnergy: annualEnergy.toFixed(2),
      annualSavings: annualSavings.toFixed(2),
      price: price.toFixed(2),
      subsidy: subsidy.toFixed(2)
    });
  }, [items, usageType,powerUsage]);

  return (
    <Container>
      <div className="calculator">
        <Row>
          <h2>Calculate Your Savings</h2>
          <Col>
            <div className="calculate-box-1">
              <h2>Enter Electronic Items and Quantity</h2>
              <Form>
                <div className='d-flex align-items-center' style={{gap:'20px'}}>
                <Form.Group>
                  <Form.Label>Electronic</Form.Label>
                  <Form.Control
                    as="select"
                    value={currentItem.name}
                    onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                  >
                    <option value="TV">TV</option>
                    <option value="AC">AC</option>
                    <option value="Fan">Fan</option>
                    <option value="Light">Light</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={currentItem.quantity}
                    onChange={(e) => setCurrentItem({ ...currentItem, quantity: Number(e.target.value) })}
                    min="1"
                  />
                </Form.Group>
                <Button onClick={handleAddItem} variant="primary" style={{height:'50px',marginTop:'20px'}}>Add Item</Button>
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
              <p> Sed dolore a recusandae vitae eveniet ullam veritatis omnis! Ut adipisci fugit eveniet neque! Nostrum maiores blanditiis voluptatum, sunt totam eos impedit.
              </p>
            </div>
          </Col>
          <Col>
            <div className="calculate-box-2">
              <div className="calculate-box">
                <div><p>Monthly Electricity Cost</p></div>
                <p>₹{monthlyCost}</p>
              </div>
              <h3>Solar System Suggestions ({usageType})</h3>
              <div className="calculate-box">
                <div><p>System Size</p></div>
                <p>{systemSuggestions.systemSize} kW</p>
              </div>
              <div className="calculate-box">
                <div><p>Space Required</p></div>
                <p>{systemSuggestions.spaceRequired} sq ft</p>
              </div>
              <div className="calculate-box">
                <div>Annual Energy</div>
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
