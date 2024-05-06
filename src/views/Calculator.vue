<template>
  <div class="calculator">
    <section class="kal">
      <h1>Mini Calculator</h1>
      <div class="display">
        <input type="text" v-model="display" readonly />
      </div>
      <div class="button-grid">
        <button @click="addNumber('7')">7</button>
        <button @click="addNumber('8')">8</button>
        <button @click="addNumber('9')">9</button>
        <button @click="addOperator('/')" operator="/">/</button>
        <button @click="addNumber('4')">4</button>
        <button @click="addNumber('5')">5</button>
        <button @click="addNumber('6')">6</button>
        <button @click="addOperator('*')" operator="*">*</button>
        <button @click="addNumber('1')">1</button>
        <button @click="addNumber('2')">2</button>
        <button @click="addNumber('3')">3</button>
        <button @click="addOperator('-')" operator="-">-</button>
        <button @click="addNumber('0')">0</button>
        <button @click="addDecimal">.</button>
        <button @click="clearDisplay">C</button>
        <button @click="addOperator('+')" operator="+">+</button>
      </div>
      <div class="result">
        <button @click="calculateResult" class="btn col8">Count</button>
        <p ref="resultText">{{ result }}</p>
        <!-- Tambahkan tombol reset di sini -->
        <button @click="resetCalculator">Reset</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CalculatorApp",
  data() {
    return {
      display: "0",
      previousValue: null,
      operator: null,
      result: null,
    };
  },
  methods: {
    addNumber(number) {
      if (this.display === "0") {
        this.display = number;
      } else {
        this.display += number;
      }
    },
    addOperator(operator) {
      this.previousValue = parseFloat(this.display);
      this.operator = operator;
      this.display = "0";
    },
    addDecimal() {
      if (!this.display.includes(".")) {
        this.display += ".";
      }
    },
    clearDisplay() {
      this.display = "0";
      this.previousValue = null;
      this.operator = null;
      // Menghapus baris berikut karena tidak diperlukan
      // this.$refs.resultText.style.opacity = 0;
    },
    calculateResult() {
      if (this.operator !== null && this.display !== "0") {
        const currentValue = parseFloat(this.display);
        if (isNaN(currentValue)) {
          alert("Error: Masukkan angka terlebih dahulu!");
          return;
        }
        let result;
        switch (this.operator) {
          case "+":
            result = this.previousValue + currentValue;
            break;
          case "-":
            result = this.previousValue - currentValue;
            break;
          case "*":
            result = this.previousValue * currentValue;
            break;
          case "/":
            if (currentValue === 0) {
              alert("Error: Division by zero!");
              return;
            }
            result = this.previousValue / currentValue;
            break;
        }
        this.display = result.toString();
        this.previousValue = null;
        this.operator = null;
        this.result = result;
      } else {
        alert("Error: Masukkan angka terlebih dahulu!");
      }
    },
    // Metode untuk mereset kalkulator
    resetCalculator() {
      this.display = "0";
      this.previousValue = null;
      this.operator = null;
      this.result = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Base styles */
body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.navbar-title {
  margin: 0;
  font-weight: bold;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5em;
  font-weight: bold;
  color: #feffff;
}

img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Calculator container */
.calculator {
  background-color: #0a47b6;
  /* Light blue */
  border-radius: 10px;
  padding: 20px;
  width: 1000px;
  height: 100vhs;
  margin: 80px auto 0 auto;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Display area */
.display {
  background-color: #0a47b6;
  border-radius: 5px;
  padding: 15px;
  font-size: 24px;
  margin-bottom: 15px;
  margin-top: 20px;
}

.display input[type="text"] {
  width: 70%;
  border: 20px;
  outline: none;
  text-align: center;
}

/* Button grid */
.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  height: calc(100% - 80px);
}

/* Buttons */
.button-grid button {
  font-size: 18px;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.button-grid button:hover {
  background-color: #4d6eac;
  transform: scale(1.01);
}

.button-grid button:active {
  background-color: #292e7a;
}

/* Operator buttons */
.operator-buttons button {
  background-color: #f0f8ff;
  color: #3f51b5;
}

.clearDisplay {
  background-color: #f3ffff;
  color: #fff;
}

.result {
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: #e0e0e0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.result button {
  font-size: 16px;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0a47b6;
  color: #f3ffff;
  transition: background-color 0.2s ease-in-out;
}

.result button:hover {
  background-color: #f3ffff;
  color: #0a47b6;
}

.result p {
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  margin-top: 10px;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}
</style>
