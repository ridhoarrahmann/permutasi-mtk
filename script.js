function hitung_permutasi() {
    let n = document.getElementById('n').value;
    let r = document.getElementById('r').value;

    let atas = faktorial(n);
    let bawah_n = faktorial(n - r);

    let bawah_r = faktorial(r);

    let bawah = bawah_n;
    let hasil = atas / bawah;

    document.getElementById('hasil').innerHTML = hasil;
    document.getElementById('fN').innerHTML = atas;
    document.getElementById('fR').innerHTML = bawah;
    document.getElementById('valueN').innerHTML = n;
    document.getElementById('valueR').innerHTML = r;

}

function faktorial(a) {
    let hasil = a;
    for (let i = hasil - 1; i >= 1; i--) {
        // console.log(i);
        hasil = hasil * i;


    }

    return hasil;

}