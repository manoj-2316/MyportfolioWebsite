
(function(){
  emailjs.init("0ejRs3WwX8w0JLb8a");
})();

document.getElementById("contact-form1").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_9l6kquq", "template_9qzyn5p", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      console.log("FAILED...", error);
      alert("Failed to send. Try again.");
    });
});