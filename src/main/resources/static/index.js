
function kjøpBillett() {
    const billett = {
        film: $("#filmOversikt").val(),
        antall: $("#antallBilletter").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    }
    if(billett.antall == "" || billett.fornavn == "" || billett.etternavn == "" || billett.telefonnr == "" || billett.epost == "") {
        if (billett.antall == "") {
            document.getElementById("feilAntall").innerHTML = "Må skrive noe inn i antall";
        }
        if (billett.fornavn == "") {
            document.getElementById("feilFornavn").innerHTML = "Må skrive noe inn i fornavnet";
        }
        if (billett.etternavn == "") {
            document.getElementById("feilEtternavn").innerHTML = "Må skrive noe inn i etternavnet";
        }
        if (billett.telefonnr == "") {
            document.getElementById("feilTelefonnr").innerHTML = "Må skrive noe inn i telefonnr";
        }
        if (billett.epost == "") {
            document.getElementById("feilEpost").innerHTML = "Må skrive noe inn i epost";
        }
    }
    else {
        $.post("/lagre", billett, function () {
            hentBilletter();
        });
    }
}

function hentBilletter() {
    $.get("/hentAlle", function (billetter) {
        skrivUtBilletter(billetter);
    });
}
function slettBilletter() {
    $.get("/slett", function (billetter) {
        skrivUtBilletter(billetter);
    });
}

    function skrivUtBilletter(billetter) {
        let ut = "<table class='table table-striped'><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (let billett of billetter) {
                ut += "<tr>";
                ut += "<td>" + billett.film + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td><td>" +
                    billett.etternavn + "</td><td>" + billett.telefonnr + "</td><td>" + billett.epost + "</td>";
                ut += "</tr>";

            }
        document.getElementById("oversiktBilletter").innerHTML = ut;
        document.getElementById("antallBilletter").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
        document.getElementById("feilAntall").innerHTML = "";
        document.getElementById("feilFornavn").innerHTML = "";
        document.getElementById("feilEtternavn").innerHTML = "";
        document.getElementById("feilTelefonnr").innerHTML = "";
        document.getElementById("feilEpost").innerHTML = "";
        }

