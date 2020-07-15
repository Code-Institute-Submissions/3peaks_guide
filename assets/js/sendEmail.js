function sendMail(contactForm){
    emailjs.send("gmail","three_peaks",{
        "from_email": contactForm.emailaddress.value,
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("Failed", error);
        }
    );
    return false;
}