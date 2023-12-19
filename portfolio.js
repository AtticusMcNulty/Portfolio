// Initialize EmailJS with your public key
emailjs.init('RG1PFDEtToZGxugYw');

// Function to send the email
function sendEmail(name, phone, email, subject) {
  const templateParams = {
    from_name: name,
    phone: phone,
    email: email,
    message: subject
  };

  emailjs.send("service_onmv9yr","template_yrln3lk", templateParams)
    .then(function(response) {
      console.log('Email sent:', response.status, response.text);
    }, function(error) {
      console.error('Error sending email:', error);
    });
}

function get_user_info() {
    const name = document.querySelector("#contact_input1").value;
    const phone = document.querySelector("#contact_input2").value;
    const email = document.querySelector("#contact_input3").value;
    const subject = document.querySelector("#contact_input4").value;

    sendEmail(name, phone, email, subject);
}

function add_border() {
    let headerButton = document.querySelector("#header_button");

    if (headerButton.classList.contains("clicked")) 
    {
        headerButton.classList.remove("clicked");
        remove_side_bar();
    } 
    else 
    {
        headerButton.classList.add("clicked");
        add_side_bar();
    }
}

function add_side_bar() {
    document.querySelector("#header_section").style.display = "block";
}

function remove_side_bar() {
    document.querySelector("#header_section").style.display = "none";
}

function handleWindowResize(event) {
    if (event.matches) {
        add_side_bar();
    }
    else {
        remove_side_bar();
    }
}
  
let mediaQuery = window.matchMedia('(min-width: 900px)');
mediaQuery.addEventListener('change', handleWindowResize);
handleWindowResize(mediaQuery);