$(document).ready(function () {
    console.log("this work in FFBE function");
    $("#btnCheckChar").show();
    $("#btnHasChar").hide();
    $("#btnMissChar").hide();
    var database = firebase.database();
    $("#btnSubmitAddChar").click(function () {
        console.log("this work in writeFFBE");
        if ($("#charName").val() != "" && $("#charHP").val() != "") {
            console.log("" + $("#charName").val());
            console.log(+$("#charHP").val());
            firebase.database().ref("FFBECharacters/" + "" + $("#charName").val()).set({
                charName: "" + $("#charName").val()
                , charHP: +$("#charHP").val()
                , charMP: +$("#charMP").val()
                , charATK: +$("#charATK").val()
                , charDEF: +$("#charDEF").val()
                , charMAG: +$("#charMAG").val()
                , charSPR: +$("#charSPR").val()
                , charHITS: +$("#charHITS").val()
                , charDropCHK: +$("#charDropCHK").val()
            });
        }
        else {
            console.log("Please Input Data NOW.");
        }
    });
    $("#btnCheckChar").click(function () {
        ChkChar()
    });

    function ChkChar() {
        
        
        var chk = false;
        console.log("---- Check Character ----");
        var ref = firebase.database().ref("FFBECharacters");
        ref.orderByKey().equalTo("" + $("#charName").val()).on("child_added", function (snapshot) {
            console.log(snapshot.key);
            console.log("Have Unit into FFBEDB");
            chk = true;
            console.log(chk);
        });
        if (chk) {
            $("#btnHasChar").show();
            $("#btnMissChar").hide();
            chk = false;
        }
        else {
            $("#btnMissChar").show();
            $("#btnHasChar").hide();
            console.log("This Unit hasn't added in FFBEDB");
        }
    }

});