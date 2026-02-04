let soal=[
{
t:"1. Ibukota Indonesia?",
a:["Bandung","Jakarta","Surabaya","Medan"],
k:1
},
{
t:"2. 5 + 5 = ?",
a:["5","8","10","12"],
k:2
},
{
t:"3. Warna bendera Indonesia?",
a:["Merah Putih","Biru Putih","Merah Biru","Hijau Putih"],
k:0
}
];

let waktu=300;

function tampil(){
let html="";
soal.forEach((s,i)=>{
html+=`<p>${s.t}</p>`;
s.a.forEach((o,j)=>{
html+=`
<label>
<input type="radio" name="s${i}" value="${j}">
${o}
</label><br>`;
});
});
document.getElementById("soal").innerHTML=html;
}

function kirim(){
let nilai=0;
soal.forEach((s,i)=>{
let r=document.querySelector(`input[name=s${i}]:checked`);
if(r && r.value==s.k) nilai+=Math.round(100/soal.length);
});
alert("Nilai kamu: "+nilai);
}

setInterval(()=>{
waktu--;
document.getElementById("timer").innerHTML="Sisa waktu: "+waktu+" detik";
if(waktu<=0) kirim();
},1000);

tampil();
