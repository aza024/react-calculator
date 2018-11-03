import React, { Component } from 'react';
import './App.css';
import Equal from './components/Equal'

class Calculator extends Component {
  render() {
    return (
      <div className = "numbers">
          <div class="grid-item">=</div>
          <div class="grid-item">+</div>
          <div class="grid-item">-</div>  
          <div class="grid-item">%</div>
          <div class="grid-item">*</div>
          <div class="grid-item">9</div>  
          <div class="grid-item">8</div>
          <div class="grid-item">7</div>
          <div class="grid-item">6</div>  
          <div class="grid-item">5</div>
          <div class="grid-item">4</div>
          <div class="grid-item">3</div> 
          <div class="grid-item">2</div>
          <div class="grid-item">1</div>
          <div class="grid-item">0</div> 
      </div>
    );
  }
}

export default Calculator;
