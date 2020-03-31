document.getElementById("btn-submit").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pword").value;
    let customerWebsite = document.getElementById("customerWebsite").value;

    alert("Email of user is : " + email + "\n Password of user is : " + password + "\n" + "Website of user is : " + customerWebsite);
});