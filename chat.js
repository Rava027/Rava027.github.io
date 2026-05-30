function inviaMessaggio() {
    // Prendi il contenuto del messaggio inserito
    let messaggio = document.getElementById("messaggio").value;

    if (messaggio.trim() !== "") {
      // Aggiungi il nuovo messaggio alla chat
      let chatBox = document.getElementById("chat-box");
      let nuovoMessaggio = document.createElement("p");
      nuovoMessaggio.classList.add("message");
      nuovoMessaggio.innerHTML = "Tu: " + messaggio;

      // Aggiungi il messaggio alla finestra della chat
      chatBox.appendChild(nuovoMessaggio);

      // Svuota il campo di input
      document.getElementById("messaggio").value = "";

      // Scrolla automaticamente verso il basso
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }