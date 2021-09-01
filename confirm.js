// confirm mengembalikan nilai boolean true atau false
// true = oke, false = cancel

// var tes = confirm("beneran??");

// alert(tes); ------ 1
// biasanya untuk pengulangan

// if (tes === true) {
//   alert("user tekan OK");
// } else {
//   alert("user tekan Cancel");
// }

alert("selamat datang,,");
var lagi = true;
while (lagi === true) {
  var nama = prompt("masukkan nama");
  alert("halo " + nama);

  lagi = comfirm("coba lagi?");
}
alert("terima kasih");
