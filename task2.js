let nilai = [60, 85, 70, 80]

//destructuring
let [mtk, bind, bing, ipa] = nilai;

//cek apakah lolos validasi?
let isValid = true;

function validasi() {
    //jika ada yang kosong
    if (!mtk || !bind || !bing || !ipa) {
        console.log('Nilai tidak boleh ada yang kosong')
        isValid = false
    } else{
        //apakah bukan number?
        if(typeof mtk != 'number') {
            console.log('Nilai MTK bukan angka')
            isValid = false;
        } else if (typeof bind != 'number') {
            console.log('Nilai Bahasa Indonesia bukan angka')
            isValid = false;
        } else if (typeof bing != 'number') {
            console.log('Nilai Bahasa Inggris bukan angka')
            isValid = false;
        } else if (typeof ipa != 'number') {
            console.log('Nilai IPA bukan angka')
            isValid = false;
        }
    }
}

function hasilAkhir(){
    //validasi
    validasi();
    //apakah lolos validasi?
    if(isValid == true){
        rata = (mtk + bind + bing + ipa) / 4;
        //string literal
        console.log(`Rata-rata : ${rata}`);
    
        //grade
        if (rata >= 90 && rata <= 100) {
            console.log('Grade: A')
        } else if (rata >= 80 && rata <= 89) {
            console.log('Grade: B')
        } else if (rata >= 70 && rata <= 79) {
            console.log('Grade: C')
        } else if (rata >= 60 && rata <= 69) {
            console.log('Grade: D')
        } else if (rata >= 0 && rata <= 59) {
            console.log('Grade: E')
        } else{
            console.log('Nilai yang dimasukkan salah')
        }
    }
}

console.log(hasilAkhir());
