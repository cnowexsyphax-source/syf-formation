// ==========================
// SUPABASE
// ==========================

const SUPABASE_URL = "https://tocpottsttcadhdbrcfn.supabase.co"
const SUPABASE_KEY = "sb_publishable_Lo64wJQ5FzNxDcK-tfP3TQ_tEDOsa1H"

const supabaseClient = supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

// ==========================
// VERIFICATION DU CODE
// ==========================

async function verifierCode(){

const code =
document.getElementById("code").value.trim().toUpperCase();

if(code===""){

alert("Entrez votre code.");

return;

}

const { data, error } = await supabaseClient

.from("access_codes")

.select("*")

.eq("code",code)

.eq("active",true)

.single();

if(error || !data){

document.getElementById("erreur").innerHTML="❌ Code invalide.";

return;

}

if(data.used){

document.getElementById("erreur").innerHTML="❌ Ce code a déjà été utilisé.";

return;

}

await supabaseClient

.from("access_codes")

.update({

used:true,

used_at:new Date()

})

.eq("id",data.id);

localStorage.setItem("syf_access","true");

window.location.href="formations.html";

}
async function dashboardStats(){

const formations =
await supabaseClient
.from("formations")
.select("*",{count:"exact",head:true});

const codes =
await supabaseClient
.from("access_codes")
.select("*",{count:"exact",head:true});

document.getElementById("nbFormations").innerHTML =
formations.count;

document.getElementById("nbCodes").innerHTML =
codes.count;

}

dashboardStats();