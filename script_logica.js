var receber_value_vetor;
var receber_p_enviar = window.document.getElementById("textarea");
var vetor_global_1 = [];
var vetor_global_2 = [];
var simb_indi = "";

receber_p_enviar.innerHTML = receber_value_vetor == void(0) ? "0" : receber_value_vetor;

function apagar() {
    for (let i = 0; ; i++){
        vetor_global_2.pop([i])

        receber_value_vetor = 0;
        reset();

        if (vetor_global_2.length == 0){
            receber_value_vetor = 0;
            receber_p_enviar.innerHTML = 0;
            break;
        }
    }
}

function apagar_individual() {
    if (0 > receber_value_vetor){
        for (let a = vetor_global_1.length; ; a -= 1) {
            vetor_global_1.pop([a]);
            receber_value_vetor = vetor_global_1;
            receber_value_vetor = receber_value_vetor.join("");
            receber_p_enviar.innerHTML = receber_value_vetor;

            if (vetor_global_1[0] == null) {
                receber_p_enviar.innerHTML = vetor_global_1[0];
            }

            break;
        }
    }else{
        for (let a = vetor_global_1.length; ; a -= 1) {
            vetor_global_1.pop([a]);
            receber_value_vetor = vetor_global_1;
            receber_value_vetor = receber_value_vetor.join("");
            receber_p_enviar.innerHTML = receber_value_vetor;

            if (vetor_global_1[0] == null) {
                receber_p_enviar.innerHTML = 0;
            }
            
            break;
        }
    }
}

function deixar_negativo_one() {
    receber_value_vetor = receber_value_vetor - receber_value_vetor - receber_value_vetor;
    receber_p_enviar.innerHTML = receber_value_vetor;
}

function Primeiro_valor(a) {
    var a;
    switch (a) {
        case "+":
            simb_indi = "+";
            vetor_global_2.push(receber_value_vetor);
            reset();

            break;

        case "/":
            simb_indi = "/";
            vetor_global_2.push(receber_value_vetor);
            reset();

            break;

        case "X":
            simb_indi = "X";
            vetor_global_2.push(receber_value_vetor);
            reset();

            break;

        case "-":
            simb_indi = "-";
            vetor_global_2.push(receber_value_vetor);
            reset();

            break;

        case "ce":
            apagar_individual();
            break;
        default:
            vetor_global_1.push(a);
            receber_value_vetor = vetor_global_1;
            receber_value_vetor = receber_value_vetor.join("");
            receber_p_enviar.innerHTML = receber_value_vetor;
    } 
}

function reset() {
    for (let i = 0; ; i++){
        vetor_global_1.pop([i])

        if (vetor_global_1.length == 0){
            break;
        }
    }
}

function calcular_resultado() {
    switch (simb_indi) {
      case "+":
            resultado1 = Number.parseFloat(vetor_global_2[0]) + Number.parseFloat(receber_value_vetor);
            receber_p_enviar.innerHTML = vetor_global_2[0] + " + " + receber_value_vetor + " = " + Number.parseFloat(resultado1);

            break;
      case "/":
            resultado1 = Number.parseFloat(vetor_global_2[0]) / Number.parseFloat(receber_value_vetor);
            receber_p_enviar.innerHTML = vetor_global_2[0] + " / " + receber_value_vetor + " = " + Number.parseFloat(resultado1);


            break;
      case "X":
            resultado1 = Number.parseFloat(vetor_global_2[0]) * Number.parseFloat(receber_value_vetor);
            receber_p_enviar.innerHTML = vetor_global_2[0] + " x " + receber_value_vetor + " = " + Number.parseFloat(resultado1);

            break;
      case "-":
            resultado1 = Number.parseFloat(vetor_global_2[0]) - Number.parseFloat(receber_value_vetor);
            receber_p_enviar.innerHTML = vetor_global_2[0] + " - " + receber_value_vetor + " = " + Number.parseFloat(resultado1);
            
            break;
      default:
            window.document.alert("Digite um valor válido!!!");
    }
}
