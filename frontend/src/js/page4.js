function makerequest_async () {
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", "http://localhost:5001/page4", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE){
            console.log(xmlhttp.response)
            text = xmlhttp.responseText
            sessionStorage.setItem("conversations_page4",text);
            writeconversations()
        }
    }
}

function submitform(){
    list = document.getElementsByClassName("page4")
    valid = true
    for (i=0;i<list.length;i++){
        form = list[i]
        valid = (valid && (form[0].checked || form[1].checked ))
    }

    if (valid === true){
        console.log("valid");
        results_page1 = [];
        json_text = sessionStorage.getItem("conversations_page4");
        dict = JSON.parse(json_text)
        counter = 0
        for (key in dict){
            if(dict.hasOwnProperty(key)){
                results_page1.push({
                    key:   key,
                    value: [ list[counter][0].checked, list[counter][1].checked]
                });
                counter +=1

            }
        }
        sessionStorage.setItem("conversations_page4_results", JSON.stringify(results_page1));
        window.location.href="../html/last.html";

     }
    else{
        alert("Please fill in all fields!")
    }
}

function checkboxing(param){
            pressedid =param.id;
            base_id = pressedid.split("_")[0];
            checkbox1 = document.getElementById(base_id+"_1")
            checkbox2 = document.getElementById(base_id+"_2")
            if (pressedid === checkbox1.id){
                checkbox1.checked = true;
                checkbox2.checked = false;
            }
            else{
                checkbox2.checked = true;
                checkbox1.checked = false;
            }
}

function writeconversations() {
    json_text = sessionStorage.getItem("conversations_page4");
    if (json_text != null){
    dict = JSON.parse(json_text)
    counter = 1
    mystring = ""
    for (key in dict){
        if(dict.hasOwnProperty(key)){
            mystring += "<br><span class=\"iconify\"" +
                " data-icon=\"fa-solid:robot\" data-inline=\"false\"></span>"
            mystring +=("<b> Conversation ")
            mystring +=(counter+"</b><br>")
            input = dict[key]["input"]
            mymodel = dict[key]["mymodel"]
            dodeca = dict[key]["dodeca"]
            emo = dict[key]["emo"]


            if (input.length === 1){
                mystring +=("<br><div style=\"color:green;\">Speaker:</div>")
                mystring +=(input[0])
                mystring +=("<br>")
                mystring +=("<br><div" +
                    " style=\"color:blue;\">Generated Response 1:</div>")
                mystring +=(mymodel)
                mystring +=("<br><br><div" +
                    " style=\"color:blue;\">Generated Response 2:</div>")
                mystring +=(dodeca)
                mystring +=("<br>")
                mystring +=("<br><div" +
                " style=\"color:orangered;\">Emotion :</div>")
                mystring +=(emo)
                mystring +=("<br>")
                mystring +=("<br>")
                mystring +=("Best Response: ")
                mystring +=("<form class=\"page4\">Response 1:" +
                " <input" + " type=\"checkbox\" " +
                "id=\"Response"+counter+"_1\" name=\"Response1\"" +
                " onclick=\"checkboxing(this)\">" +
                "Response 2:<input type=\"checkbox\" id=\"Response"+counter+"_2\" " +
                "name=\"Response2\"" +
                " onclick=\"checkboxing(this)\"></form>")
                mystring +=("<br>")

            }
            else{
                mystring +=("<br><div style=\"color:green;\">Speaker:</div>")
                mystring +=(input[0])
                mystring +=("<br>")
                mystring +=("<br><div" +
                    " style=\"color:blueviolet;\">Listener:</div>")
                mystring +=(input[1])
                mystring +=("<br>")
                mystring +=("<br><div style=\"color:green;\">Speaker:</div>")
                mystring +=(input[2])
                mystring +=("<br>")
                mystring +=("<br><div" +
                " style=\"color:blue;\">Generated Response 1:</div>")
                mystring +=(mymodel)
                mystring +=("<br><br><div" +
                " style=\"color:blue;\">Generated Response 2:</div>")
                mystring +=(dodeca)
                mystring +=("<br>")
                mystring +=("<br><div" +
                " style=\"color:orangered;\">Emotion :</div>")
                mystring +=(emo)
                mystring +=("<br>")
                mystring +=("<br>")
                mystring +=("Best Response: ")
                mystring +=("<form class=\"page4\">Response 1:" +
                " <input" + " type=\"checkbox\" " +
                "id=\"Response"+counter+"_1\" name=\"Response1\"" +
                " onclick=\"checkboxing(this)\">" +
                "Response 2:<input type=\"checkbox\" id=\"Response"+counter+"_2\" " +
                "name=\"Response2\"" +
                " onclick=\"checkboxing(this)\"></form>")
                mystring +=("<br>")
                mystring +=("<br>")
            }
        }
        counter +=1
    }
    }
    console.log(mystring)
    document.getElementById("add").innerHTML = mystring

}




