$(document).ready(function () {
    var db = firebase.database();
    var ref = db.ref("FFBECharacters");
    let count =0;
    ref.orderByChild("charName").on("child_added", function (snapshot) {
        var name = snapshot.val().charName;
        var hp = snapshot.val().charHP;
        var mp = snapshot.val().charMP;
        var atk = snapshot.val().charATK;
        var def = snapshot.val().charDEF;
        var mag = snapshot.val().charMAG;
        var spr = snapshot.val().charSPR;
        var hits = snapshot.val().charHITS;
        var drp = snapshot.val().charDropCHK;
        count++;
        console.log(name);
         var tr = "<tr><td>"+count+"</td><td>"+name+"</td><td>"+hp+"</td><td>"+mp+"</td><td>"
         +atk+"</td><td>"+def+"</td><td>"+mag+"</td><td>"+spr+"</td><td>"+hits+"</td><td>"+drp+"</td></tr>";
        $(tr).appendTo($("#unit_all_Table"));
    });
   
    
});