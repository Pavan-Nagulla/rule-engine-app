import React, { useState } from 'react';
import axios from 'axios';

/*ruleengine */
const RuleEngine = () => {
  const [ruleInput, setRuleInput] = useState('');
  const [userData, setUserData] = useState('');
  const [ruleString, setRuleString] = useState('');
  const [result, setResult] = useState('');

  const createRule = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/rules', { ruleString: ruleInput });
      alert('Rule created: ' + JSON.stringify(response.data.rule));
    } catch (error) {
      console.error(error);
      alert('Error creating rule');
    }
  };

  const evaluateRule = async () => {
    try {
      const userJsonData = JSON.parse(userData);
      const response = await axios.post('http://localhost:3000/api/evaluate', { userData: userJsonData, ruleString });
      setResult(response.data.eligible ? 'Eligible' : 'Not Eligible');
    } catch (error) {
      console.error(error);
      setResult('Error evaluating rule');
    }
  };

  return (
    <div>
      <h2>Create a Rule</h2>
      <input type="text" value={ruleInput} onChange={(e) => setRuleInput(e.target.value)} placeholder="Enter rule string" />
      <button onClick={createRule}>Create Rule</button>

      <h2>Evaluate User Data</h2>
      <input type="text" value={userData} onChange={(e) => setUserData(e.target.value)} placeholder="Enter user data as JSON" />
      <input type="text" value={ruleString} onChange={(e) => setRuleString(e.target.value)} placeholder="Enter rule string" />
      <button onClick={evaluateRule}>Evaluate</button>

      <h2>Result: <span>{result}</span></h2>
    </div>
  );
};



export default RuleEngine;
