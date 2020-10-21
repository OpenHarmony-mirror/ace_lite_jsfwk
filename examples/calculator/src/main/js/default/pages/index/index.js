import {calc, isOperator} from '../../common/calculator.js';
import app from '@system.app';

let pressedEqual = false;

export default {
    data: {
        expression: '',
        result: ''
    },
    onInit() {
        this.$watch(() => this.expression, (value)=> {
            if (value !== '') {
                this.result = calc(value).toString();
            }
        });
    },
    handleClear() {
        this.expression = '';
        this.result = '';
    },
    handleInput(value) {
        if (isOperator(value)) {
            if (pressedEqual) {
                pressedEqual = false;
            } else {
                const size = this.expression.length;
                if (size) {
                    const last = this.expression.charAt(size - 1);
                    if (isOperator(last)) {
                        this.expression = this.expression.slice(0, -1);
                    }
                }
            }
            if (!this.expression && (value == '*' || value == '/')) {
                return;
            }
            this.expression += value;
        } else {
            if (pressedEqual) {
                this.expression = value;
                pressedEqual = false;
            } else {
                this.expression += value;
            }
        }
    },
    handleBackspace() {
        if(pressedEqual) {
            this.expression = '';
            this.result = '';
            pressedEqual = false;
        } else {
            this.expression = this.expression.slice(0, -1);
            if (!this.expression.length) {
                this.result = '';
            }
        }
    },
    handleEqual() {
        if (this.result !== '') {
            this.expression = this.result;
            this.result = '';
            pressedEqual = true;
        }
    },
    handleTerminate(e) {
        if (e.direction === 'right') {
            app.terminate();
        }
    },
    handleExist() {
        app.terminate();
    },
}