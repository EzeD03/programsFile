const calculador = {
    suma : function(a,b){
        return a + b
    },
    resta : function(a,b){
        return a - b
    },
    multiplicacion : function(a,b){
        if (a == 0 || b == 0){
            return "El resultado es 0"
        }
        return a * b
    },
    division : function(a,b){
        if (a == 0 || b == 0){
            return "No se puede dividir por cero"
        }
        return a / b
    },
    potenciacion : function (a,b) {
        if (a == 0 || b == 0){
            return "El resultado es 1"
        }
        return a ** b
    },
    resto : function (a,b) {
        return a % b
    }
}

module.exports = calculador