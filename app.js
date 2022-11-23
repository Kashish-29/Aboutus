function talk() {
    var know = {
        "Who are you": "Hello, ThriveBot here ",
        "How are you": "Good :)",
        "Hello": "Hey!",
        "Hey": "Hello!",
        "hey": "Hello!",
        "hello": "Hello!",
        "My child is suffering from this and that": "Don't worry bring him/her to us.",
        "Your Location":
            "XYZ, Ghaizbad ",
            "Your location please?": "XYZ Ghaziabad",
            "Please book my appointment": "Sure,Your Id is 243",
        "can you book my appointment?":"Yes!, Our doctors are available from Monday to Friday and Sunday!",
         "Thankyou":"You're Welcome :)",
        "ok": "Thank You So Much ",
        "Bye": "Okay! Will meet soon..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}
