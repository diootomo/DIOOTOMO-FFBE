$(document).ready(function () {
    console.log("this work in FFBE function");
    var database = firebase.database();
   
    $("#btnSubmitAddChar").click(function () {
        console.log("this work in writeFFBE");
        
        console.log(""+$("#charName").val());
        console.log(+$("#charHP").val());
        
        firebase.database().ref('FFBECharacters/' + ""+$("#charName").val()).set({
            charName: ""+$("#charName").val()
            , charHP: +$("#charHP").val()
            , charMP: +$("#charMP").val()
            , charATK: +$("#charATK").val()
            , charDEF: +$("#charDEF").val()
            , charMAG: +$("#charMAG").val()
            , charSPR: +$("#charSPR").val()
            , charHITS: +$("#charHITS").val()
            , charDropCHK: +$("#charDropCHK").val()
        });
        
    });
});