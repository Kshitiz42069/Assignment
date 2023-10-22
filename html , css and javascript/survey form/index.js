document.getElementById('submitBtn').addEventListener('click', function() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value).join(', ');
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    if(firstName===''||lastName===''||dob===''||country===''||gender===''||profession===''||email===''||mobile===''){
        alert("Please fill all the details");
        return;
    }

    alert("Survey Results:\n" +
        "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Country: " + country + "\n" +
        "Gender: " + gender + "\n" +
        "Profession: " + profession + "\n" +
        "Email: " + email + "\n" +
        "Mobile Number: " + mobile);


    document.getElementById('surveyForm').reset();
});


document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('surveyForm').reset();
});