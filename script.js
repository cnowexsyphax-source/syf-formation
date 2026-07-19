const formations = [

{
nom:"Marketing Digital & Community Management",
icone:"fa-solid fa-bullhorn",
description:"Formation complète en Marketing Digital et Community Management.",
lien:"https://drive.google.com/drive/folders/1dxye7oND1UOUS301DAFqKVlfZMKEBNEP?usp=sharing"
},

{
nom:"Infographie & Design Graphique",
icone:"fa-solid fa-pen-ruler",
description:"Formation complète en Infographie et Design Graphique.",
lien:"https://drive.google.com/drive/folders/1AeBRHEHqJURCgTJp0CfrAM-NPh9GFs7K?usp=sharing"
},

{
nom:"Montage Vidéo",
icone:"fa-solid fa-film",
description:"Formation complète en Montage Vidéo.",
lien:"https://drive.google.com/drive/folders/1dsrcVjXlM7nMemShfAQbwDR2zrguuPzA?usp=sharing"
},

{
nom:"Canva",
icone:"fa-solid fa-palette",
description:"Formation complète en Design Graphique avec Canva.",
lien:"https://drive.google.com/drive/folders/1MU0yUUTZ-YOqlbAhgnHVxPP_Aub6TsjO?usp=sharing"
},

{
nom:"Programmation Informatique",
icone:"fa-solid fa-code",
description:"Formation complète en Programmation Informatique.",
lien:"https://drive.google.com/drive/folders/1CJGdYrAVzkWcqVtSRgSu7MLYRyM2ltia?usp=sharing"
},

{
nom:"Hacking & Cybersécurité",
icone:"fa-solid fa-shield-halved",
description:"Formation complète en Hacking et Cybersécurité.",
lien:"https://drive.google.com/drive/folders/1pG2KU-B1WLWfb0vTp2mDs5rS1I5y7ttA?usp=sharing"
},

{
nom:"Acheter en Chine depuis l'Afrique",
icone:"fa-solid fa-cart-shopping",
description:"Formation complète pour importer depuis la Chine.",
lien:"https://mega.nz/folder/be423LaT#LmklrokU8T50LrqkquAl_g"
},

{
nom:"Comptabilité & Gestion",
icone:"fa-solid fa-calculator",
description:"Formation complète en Comptabilité et Gestion.",
lien:"https://drive.google.com/drive/folders/1jVYVD9HruDdvGy4uKHG5tVz0JP8gX8dc?usp=sharing"
},

{
nom:"E-Commerce & Dropshipping",
icone:"fa-solid fa-store",
description:"Formation complète en E-Commerce et Dropshipping.",
lien:"https://mega.nz/folder/TX5hXBzR#m66sbfT4tyIxjrzrYXHtxA"
},

{
nom:"Gestion des Ressources Humaines",
icone:"fa-solid fa-users",
description:"Formation complète en Gestion des Ressources Humaines.",
lien:"https://drive.google.com/drive/folders/1jybCqWoFkjd057SIzjBhwiYAKoDphmYH?usp=sharing"
},

{
nom:"Intelligence Artificielle",
icone:"fa-solid fa-robot",
description:"Formation complète en Intelligence Artificielle.",
lien:"https://drive.google.com/drive/folders/1nM2nBRTklqzSTZfj3_NnB124uxbHIkc-?usp=sharing"
},

{
nom:"Management & Gestion de Projets",
icone:"fa-solid fa-diagram-project",
description:"Formation complète en Management et Gestion de Projets.",
lien:"https://drive.google.com/drive/folders/1KhWceAMpvI9PQoqT1rfI2Wnq4W7PIgbD?usp=sharing"
},

{
nom:"Développement Personnel",
icone:"fa-solid fa-brain",
description:"Formation complète en Développement Personnel et Professionnel.",
lien:"https://mega.nz/folder/GXxjCIgb#z0NthKjg_DEVwgneEv43mw"
},

{
nom:"Secrétariat & Bureautique",
icone:"fa-solid fa-keyboard",
description:"Formation complète en Secrétariat et Bureautique.",
lien:"https://drive.google.com/drive/folders/1-6Cw4CrvcHrbDHs9F02vXkK7_MMGt2P7?usp=sharing"
},

{
nom:"Art Oratoire & Éloquence",
icone:"fa-solid fa-microphone",
description:"Formation complète en Art Oratoire et Éloquence.",
lien:"https://mega.nz/folder/6WhgmTLI#BRLb1Ks-vyLEz_vPTYTfwA"
},

{
nom:"YouTube & Monétisation",
icone:"fa-brands fa-youtube",
description:"Formation complète YouTube et Monétisation.",
lien:"https://drive.google.com/drive/folders/1GefWZggyR0P_qmRtxpfha7LsMl1GVmkd?usp=sharing"
},

{
nom:"Fitness & Diététique",
icone:"fa-solid fa-dumbbell",
description:"Formation complète en Fitness et Diététique.",
lien:"https://mega.nz/folder/OHRCzJJD#H0XybkM1LWcLoDpEQvQ0rw"
},

{
nom:"Trading & Cryptomonnaie",
icone:"fa-solid fa-chart-line",
description:"Formation complète en Trading et Cryptomonnaie.",
lien:"https://mega.nz/folder/WLZynKJa#x-kEIhfMTudJg5Xyms36bw"
},

{
nom:"Copywriting Professionnel",
icone:"fa-solid fa-pen",
description:"Formation complète en Copywriting Professionnel.",
lien:"https://mega.nz/folder/7fIxxLRS#h6s6oRtlLE3ynvgSnkOeSA"
},

{
nom:"WordPress",
icone:"fa-brands fa-wordpress",
description:"Formation complète en création de sites avec WordPress.",
lien:"https://drive.google.com/drive/folders/1ysyzFzkQ0qTdJrlR79V-ksU-YQCUsSxg?usp=sharing"
}

];

const container = document.getElementById("formations");

function afficher(liste){

container.innerHTML="";

liste.forEach(f=>{

container.innerHTML += `
<div class="card">
<div class="icon">
<i class="${f.icone}"></i>
</div>

<h3>${f.nom}</h3>

<p>${f.description}</p>

<a href="${f.lien}" target="_blank" class="btn">
Accéder à la formation
</a>

</div>
`;

});

}

afficher(formations);

const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

const texte=search.value.toLowerCase();

const resultat=formations.filter(f=>
f.nom.toLowerCase().includes(texte)
);

afficher(resultat);

});