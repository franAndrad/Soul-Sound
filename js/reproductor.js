let reproductorMusica = document.getElementById("reproductorMusica"); // Consigo con el id la seccion donde va a ir el reproductor de musica

let linkCompratir = "https://open.spotify.com/track/6YHhepf1cmBjPryOBZd38o?si=6888415202ef45a8"; // Linkeamos el link de la cancion

let corteCodigo = linkCompratir.substring(31,53); // Corta el link de la cancion para obtener el id de la musica

let iframeLink = "https://open.spotify.com/embed/track/" + corteCodigo + "?utm_source=generator" // Une todo el link con el id de la musica para poder linkearlo en el Iframe del reproductor

reproductorMusica.innerHTML = `
    <iframe style="border-radius:12px" src="${iframeLink}" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
` // Reproductor de spotify 

// Realizar cambios necesarios de id para la insercion de codigo.
// Linkear al link de la cancion obtenido del localStorage