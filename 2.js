function hitungVoucher(namaVoucher, nominal) {
  let diskon;
  let kembalian;

  if (namaVoucher == "DumbWaysJos" && nominal >= 50000) {
    diskon = (nominal * 21.1) / 100;
    if (diskon >= 20000) {
      diskon = 20000;
    } else {
      diskon;
    }
    kembalian = diskon;
  } else if (namaVoucher == "DumbWaysMantap" && nominal >= 80000) {
    diskon = (nominal * 30) / 100;
    if (diskon >= 40000) {
      diskon = 40000;
    } else {
      diskon;
    }
    kembalian = diskon;
  } else {
    diskon = 0;
    kembalian = diskon;
  }

  console.log(`Uang Yang harus di bayar : ${nominal}`);
  console.log(`Diskon                   : ${diskon}`);
  console.log(`Kembalian                : ${kembalian}`);
}

hitungVoucher("DumbWaysJos", 100000);
console.log("----------------------------------");
hitungVoucher("DumbWaysMantap", 75000);