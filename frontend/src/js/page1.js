function makerequest_async () {
    let xmlhttp = new XMLHttpRequest()

    xmlhttp.open("GET", "http://localhost:5001/page1", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE){
            console.log(xmlhttp.response)
            text = xmlhttp.responseText
            sessionStorage.setItem("conversations_page1",text);
            writeconversations()
        }
    }
}

function submitform(event){
    list = document.getElementsByClassName("page1")
    valid = true
    for (i=0;i<list.length;i++){
        valid = (valid && list[i].checkValidity())
    }

    if (valid === true){
        console.log("valid");
        results_page1 = [];
        json_text = sessionStorage.getItem("conversations_page1");
        dict = JSON.parse(json_text)
        counter = 0
        for (key in dict){
            if(dict.hasOwnProperty(key)){
                results_page1.push({
                    key:   key,
                    value: [ list[counter].value, list[counter+1].value, list[counter+2].value ]
                });
                counter +=3
            }
        }
        sessionStorage.setItem("conversations_page1_results", JSON.stringify(results_page1));
        window.location.replace("../html/page2.html");

     }
    else{
        alert("Please fill in all fields!")
    }
}


const getFormJSON = (form) => {
   const data = new FormData(form);
   return Array.from(data.keys()).reduce((result, key) => {
       result[key] = data.get(key);
       return result;
   }, {});
};


function writeconversations() {
    json_text = sessionStorage.getItem("conversations_page1");
    document.getElementById("add1").innerHTML = ""
    dict = JSON.parse(json_text)
    counter = 1
    for (key in dict){
        if(dict.hasOwnProperty(key)){
            document.write("<br><b>Conversation ")
            document.write(counter+"</b><br>")
            input = dict[key]["input"]
            mymodel = dict[key]["mymodel"]

            if (input.length === 1){
                document.write("<br><div style=\"color:green;\">Speaker:</div>")
                document.write(input[0])
                document.write("<br>")
                document.write("<br><div" +
                    " style=\"color:blue;\">Generated Response:</div>")
                document.write(mymodel)
                document.write("<br>")
                document.write("<br>")
                document.write("Rate Empathy: ")
                document.write("<form>")
                document.write("<select id=emp"+counter+" class=page1" +
                    " required>\n" +
                    "   <option disabled selected value> -- select an option -- </option>" +
                    "   <option value=\"1\">1</option>" +
                    "   <option value=\"2\">2</option>" +
                    "   <option value=\"3\">3</option>" +
                    "   <option value=\"4\">4</option>" +
                    "   <option value=\"5\">5</option>  " +
                    " </select>")
                document.write("</form>")
                document.write("<br>")
                document.write("Rate Relevance: ")
                document.write("<form>")
                document.write("<select id=rel"+counter+" class=page1 " +
                    " required>\n" +
                    "   <option disabled selected value> -- select an option -- </option>" +
                    "   <option value=\"1\">1</option>" +
                    "   <option value=\"2\">2</option>" +
                    "   <option value=\"3\">3</option>" +
                    "   <option value=\"4\">4</option>" +
                    "   <option value=\"5\">5</option>  " +
                    " </select>")
                document.write("</form>")
                document.write("<br>")
                document.write("Rate Fluency: ")
                document.write("<form>")
                document.write("<select id=flu"+counter+" class=page1 " +
                    " required>\n" +
                    "   <option disabled selected value> -- select an option -- </option>" +
                    "   <option value=\"1\">1</option>" +
                    "   <option value=\"2\">2</option>" +
                    "   <option value=\"3\">3</option>" +
                    "   <option value=\"4\">4</option>" +
                    "   <option value=\"5\">5</option>  " +
                    " </select>")
                document.write("</form>")
                document.write("<br>")

            }
            else{
                document.write("<br><div style=\"color:green;\">Speaker:</div>")
                document.write(input[0])
                document.write("<br>")
                document.write("<br><div" +
                    " style=\"color:blueviolet;\">Listener:</div>")
                document.write(input[1])
                document.write("<br>")
                document.write("<br><div style=\"color:green;\">Speaker:</div>")
                document.write(input[2])
                document.write("<br>")
                                document.write("<br><div" +
                    " style=\"color:blue;\">Generated Response:</div>")
                document.write(mymodel)
                document.write("<br>")
                document.write("<br>")
                document.write("Rate Empathy: ")
                document.write("<form>")
                document.write("<select id=emp"+counter+" class=page1 " +
                    " required>\n" +
                    "   <option disabled selected value> -- select an option -- </option>" +
                    "   <option value=\"1\">1</option>" +
                    "   <option value=\"2\">2</option>" +
                    "   <option value=\"3\">3</option>" +
                    "   <option value=\"4\">4</option>" +
                    "   <option value=\"5\">5</option>  " +
                    " </select>")
                document.write("</form>")
                document.write("<br>")
                document.write("Rate Relevance: ")
                document.write("<form>")
                document.write("<select id=rel"+counter+" class=page1 " +
                    " required>\n" +
                    "   <option disabled selected value> -- select an option -- </option>" +
                    "   <option value=\"1\">1</option>" +
                    "   <option value=\"2\">2</option>" +
                    "   <option value=\"3\">3</option>" +
                    "   <option value=\"4\">4</option>" +
                    "   <option value=\"5\">5</option>  " +
                    " </select>")
                document.write("</form>")
                document.write("<br>")
                document.write("Rate Fluency: ")
                document.write("<form>")
                document.write("<select id=flu"+counter+" class=page1 " +
                    " required>\n" +
                    "   <option disabled selected value> -- select an option -- </option>" +
                    "   <option value=\"1\">1</option>" +
                    "   <option value=\"2\">2</option>" +
                    "   <option value=\"3\">3</option>" +
                    "   <option value=\"4\">4</option>" +
                    "   <option value=\"5\">5</option>  " +
                    " </select>")
                document.write("</form>")
                document.write("<br>")
            }
        }
        counter +=1

    }
}




