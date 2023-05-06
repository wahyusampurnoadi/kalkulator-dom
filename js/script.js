// menampoung variabel
const inputFirst = document.getElementById("input-1");
const inputSecond = document.getElementById("input-2");

const tambah = document.getElementById("plus");
const kurang = document.getElementById("minus");
const kali = document.getElementById("times");
const bagi = document.getElementById("divide");

const result = document.getElementById("result");

// mengambil nilai input
function getValue1() {
  let value1 = inputFirst.value;
}

function getValue2() {
  let value2 = inputSecond.value;
}

//membuat fungsi tambah
function tambahkan(value1, value2) {
  if (value1 == "" || value2 == "") {
    return (document.getElementById("result").innerHTML = "Tidak boleh kosong!");
  } else {
    let hasilTambah = value1 + value2;
    document.getElementById("result").innerHTML = hasilTambah;
    return hasilTambah;
  }
}

// membuat fungsi kurang
function kurangkan(value1, value2) {
  if (value1 == "" || value2 == "") {
    return (document.getElementById("result").innerHTML = "Tidak boleh kosong!");
  } else {
    let hasilKurang = value1 - value2;
    document.getElementById("result").innerHTML = hasilKurang;
    return hasilKurang;
  }
}

// membuat fungsi kali
function kalikan(value1, value2) {
  if (value1 == "" || value2 == "") {
    return (document.getElementById("result").innerHTML = "Tidak boleh kosong!");
  } else {
    let hasilKali = value1 * value2;
    document.getElementById("result").innerHTML = hasilKali;
    return hasilKali;
  }
}

// mebuat fungsi bagi
function bagikan(value1, value2) {
  if (value1 == "" || value2 == "") {
    return (document.getElementById("result").innerHTML = "Tidak boleh kosong!");
  } else {
    let hasilBagi = value1 / value2;
    document.getElementById("result").innerHTML = hasilBagi;
    return hasilBagi;
  }
}

// membuat fungsi tombol reset
function reset() {
  inputFirst.value = "";
  inputSecond.value = "";
  result.innerHTML = "";
}
