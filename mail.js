function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        comments: document.getElementById("comments").value,
    };

    const serviceID = "service_6rgq2p8";
    const templateID = "template_y9s4tbw";

    emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("comments").value = "";
        console.log(res);
        alert("Your Message Sent Succesfully");
    })
    .catch((err)=>console.log(err));
}
