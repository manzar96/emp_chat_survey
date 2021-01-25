function make_json_request_async () {
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.open("POST", "http://localhost:5001/savedb", true);
    convs1 = sessionStorage.getItem("conversations_page1");
    convs1_res = sessionStorage.getItem("conversations_page1_results");
    convs2 = sessionStorage.getItem("conversations_page2");
    convs2_res = sessionStorage.getItem("conversations_page2_results");
    convs3 = sessionStorage.getItem("conversations_page3");
    convs3_res = sessionStorage.getItem("conversations_page3");
    convs4 = sessionStorage.getItem("conversations_page4");
    convs4_res = sessionStorage.getItem("conversations_page4_results");

    xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var json = xmlhttp.responseText;
        console.log(json);
    }
};
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({"convs1": convs1, "convs1_res": convs1_res,
        "convs2":convs2, "convs2_res":convs2_res, "convs3": convs3, "convs3_res": convs3_res,
    "convs4": convs4, "convs4_res": convs4_res});
    xmlhttp.send(data);

}