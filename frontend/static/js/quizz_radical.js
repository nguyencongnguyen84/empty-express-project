let nb,sens,json,question,current,win,checked;
current = 0;
win = 0;

function startQuizz(){

   nb = $("#nb").val();
   
   sens  = $("#sens").val()
   fetch('http://localhost:3000/api/radical').then((res) => {
        
        return res.json();
    }).then((res) => {
        json = res;
        if($("#seeAll").is(":checked")){
            nb = json.length;
            checked=true;
        }
        $("#container").html('<h1>Quizz</h1><div id="quizzContainer" class="quizzContainer"></div>')
        generateQuizz();
    });

}

function generateQuizz(){
    question = []
    if(checked){
        for(var i = 0;i<json.length;i++){
            question.push([json[i]["radical"],json[i]["meaning"],i])
            console.log(json[i]["radical"],json[i]["meaning"],i)
        }
        question.sort(() => (Math.random() > .5) ? 1 : -1); //melange le tableau
        console.log(question)
    }else{
        for(var i=0;i<nb;i++){
            q = Math.floor(Math.random() * json.length);
            question.push([json[q]["radical"],json[q]["meaning"],q]);
            
        }
        console.log(question)

    }
    
    buildQuestion()
}

function genQuestion(voc){
    other = []
    for(var i=0;i<3;i++){
        alea = Math.floor(Math.random() * json.length);
        while(alea == voc[2]){
            alea = Math.floor(Math.random() * json.length);
        }
        if(sens == "fr-jp"){
            other.push(json[alea].radical)
        }else{
            other.push(json[alea].meaning)
        }
        
        
       
    }
    return other
}

function buildQuestion(){
    for(var i = 0;i<question.length;i++){

        res = genQuestion(question[i]);
        indice = Math.floor(Math.random() * 3);

        if(sens == "fr-jp"){
            res.splice(indice,0,question[i][0]);
        }else{
            res.splice(indice,0,question[i][1]);
        }
        
        res.push(indice+1)

        if(sens == "fr-jp"){
            question[i] = [question[i][1]].concat(res);
        }else{
            question[i] = [question[i][0]].concat(res);
        }
        
    }
    console.log(question)
    printQuestion(question[0])
}

function printQuestion(q){
    $("#quizzContainer").html('<h2>'+q[0]+'</h2><input onclick="check(this)" type="button" value="'+q[1]+'" res="1"><input onclick="check(this)" type="button" value="'+q[2]+'" res="2"><input onclick="check(this)" type="button" value="'+q[3]+'" res="3"><input onclick="check(this)" type="button" value="'+q[4]+'" res="4">');
}

function check(elem){
    $("input[type=button]").prop('disabled', true);
    if(parseInt($(elem).attr("res"))==question[current][5]){
        $(elem).addClass("correct");
        win++
    }else{
        $(elem).addClass("wrong");
    }
    current++;
    setTimeout(() => {

        if(current<nb){
            printQuestion(question[current]);
        }else{
            $("#container").html('<h1>Quizz</h1><h2>Bravo vous avez reussi '+win+' questions sur '+nb+' !</h2><input type="submit" onclick="reload()" class="final-submit" value="Revenir au quizz">')

        }

    },1000);
    
}

function reload(){
    location.reload()
}