-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS rule_engine_db;

-- Use the newly created database
USE rule_engine_db;

-- Create a table to store rules and their AST representation
CREATE TABLE IF NOT EXISTS rules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rule_string VARCHAR(255) NOT NULL,
  ast_json TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example data insert for testing (optional)
INSERT INTO rules (rule_string, ast_json)
VALUES
('((age > 30 AND department = ''Sales'') OR (age < 25 AND department = ''Marketing'')) AND (salary > 50000 OR experience > 5)',
'{"type":"AND","left":{"type":"OR","left":{"type":"AND","left":{"type":"operand","value":"age > 30"},"right":{"type":"operand","value":"department = ''Sales''"}},"right":{"type":"AND","left":{"type":"operand","value":"age < 25"},"right":{"type":"operand","value":"department = ''Marketing''"}}},"right":{"type":"OR","left":{"type":"operand","value":"salary > 50000"},"right":{"type":"operand","value":"experience > 5"}}}');
