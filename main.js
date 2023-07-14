const membriDelTeam = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & CEO",
        fotoProfilo: "204-2043250_pepe-emote-png-download-pepe-png-transparent-png.png",
    },
    {
        nome: "Angela",
        cognome: "Caroll",
        ruolo: "Chief Editor",
        fotoProfilo: "225-2256254_pepe-the-frog-with-sunglasses-png-transparent-png.png",
    },
    {
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Office Manage",
        fotoProfilo: "11585265315cgqlabbxpg9rd44wtgih6bj5lmj9k2kklkj8ivsldlrq3q3n4vxjqfhsm91q9pwxykdtgbm8owuayvitx5mqbsay0se8p35vscxk.png",
    },
    {
        nome: "Angela",
        cognome: "Lopez",
        ruolo: "Social Media Manager",
        fotoProfilo: "pepehype-emote-11549535085phfevfijot.png",
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
        fotoProfilo: "png-transparent-pepe-the-frog-batman-internet-meme-pepe-frog-comics-mammal-cat-like-mammal.png",
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Designer",
        fotoProfilo: "107-1078168_disguised-toast-on-twitter-disguised-toast-twitch-emote.png",
    },
];

const listaMembri = document.querySelector(".lista-membri");


for (let i = 0; i < membriDelTeam.length; i++) {
    const singoloMembro = membriDelTeam[i];
    console.log(singoloMembro);

    listaMembri.innerHTML += `<div class="list-group-item">${singoloMembro.nome} ${singoloMembro.cognome} ${singoloMembro.ruolo} ${singoloMembro.fotoProfilo}</div>`;

}

