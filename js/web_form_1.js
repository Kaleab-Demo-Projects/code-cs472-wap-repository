document.getElementById("btn-submit").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pword").value;
    let customerWebsite = document.getElementById("customerWebsite").value;

    console.log("Email of user is : " + email);
    console.log("Password of user is : " + password);
    console.log("Website of user is : " + customerWebsite);

    alert("Email of user is : " + email + "\n Password of user is : " + password + "\n" + "Website of user is : " + customerWebsite);
});