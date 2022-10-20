
class Calc{
    static somar(num1, num2){
        return parseInt(num1) + parseInt(num2)
    }
    static multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }
    static dividir(num1, num2){
        return parseInt(num1) / parseInt(num2)
    }
    static subtrair(num1, num2){
        return parseInt(num1) - parseInt(num2)
    }
}

module.exports = Calc