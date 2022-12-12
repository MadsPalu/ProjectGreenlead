const form = document.getElementById("mailForm");

    form.addEventListener("submit", e => {
        let name = document.querySelector(".formName").value;
        let email = document.querySelector(".formEmail").value;
        let tele = document.querySelector(".formTele").value;
        let subject = document.querySelector(".formSubject").value;
        let msg = document.querySelector(".formMsg").value;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "backupmailforbackup@gmail.com",
            Password: "6D8DD99823320B55344DBD9567B6EE823BE6",
            To: `${email}`,
            From: "backupmailforbackup@gmail.com",
            Subject: `${subject}`,
            Body: `${name} <br> ${email} <br> ${tele} <br> ${msg}`,
        }).then((success) => {
            alert("message sent to your mail!");
        }).catch((error) =>{
            alert("Something went wrong");
        })
    })