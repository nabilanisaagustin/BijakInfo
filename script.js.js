// ==========================================
// 1. SISTEM NAVIGASI TAB (DENGAN ANIMASI)
// ==========================================
function gantiTab(tabId) {
    // Sembunyikan semua tab pane
    const semuaPane = document.querySelectorAll('.tab-pane');
    semuaPane.forEach(pane => pane.classList.remove('active-pane'));
    
    // Matikan semua keaktifan tombol navigasi
    const semuaLink = document.querySelectorAll('.nav-link');
    semuaLink.forEach(link => link.classList.remove('active'));
    
    // Tampilkan tab yang dipilih
    document.getElementById(tabId).classList.add('active-pane');
    
    // Cari tombol mana yang memicu fungsi ini lalu aktifkan
    event.currentTarget.classList.add('active');
}

// ==========================================
// 2. INTERACTIVE EMERGENCY RESPONSE SYSTEM
// ==========================================
function pemicuPanic(jenis) {
    const boxOutput = document.getElementById('panic-output-box');
    boxOutput.classList.remove('hidden');
    
    let templateKonten = "";
    
    if (jenis === 'dana') {
        templateKonten = `
            <strong style="color: var(--danger-terracotta); display: block; margin-bottom: 8px;">🚨 TINDAKAN DARURAT PENIPUAN REKENING/DANA:</strong>
            <ol style="margin-left: 20px; font-size: 14px;">
                <li>Segera telepon call center Bank atau Penyedia Dompet Digital Anda untuk memblokir akun.</li>
                <li>Simpan seluruh bukti transfer, nomor rekening pelaku, dan tangkapan layar percakapan.</li>
                <li>Laporkan nomor rekening penipu ke situs resmi <span style="text-decoration: underline;">cekrekening.id</span> milik Kominfo agar dibekukan massal.</li>
            </ol>
        `;
    } else if (jenis === 'data') {
        templateKonten = `
            <strong style="color: #C29351; display: block; margin-bottom: 8px;">🔒 TINDAKAN DARURAT KEBOCORAN DATA:</strong>
            <ol style="margin-left: 20px; font-size: 14px;">
                <li>Lakukan penggantian kata sandi (password) akun Anda secara massal dan aktifkan 2FA (Two-Factor Authentication).</li>
                <li>Putuskan sesi perangkat asing yang masuk melalui pengaturan keamanan akun platform Anda.</li>
                <li>Buat pengumuman singkat ke kontak terdekat agar mengabaikan pesan asing yang mengatasnamakan diri Anda.</li>
            </ol>
        `;
    } else if (jenis === 'hoaks') {
        templateKonten = `
            <strong style="color: var(--brand-navy); display: block; margin-bottom: 8px;">⚖️ TINDAKAN DARURAT ANCAMAN & FITNAH SIBER:</strong>
            <ol style="margin-left: 20px; font-size: 14px;">
                <li>Ambil tangkapan layar penuh (screenshot) yang memuat nama akun pelaku, tautan (URL) profil, dan isi chatnya dengan jelas.</li>
                <li>Jangan membalas ancaman tersebut dengan makian baru agar posisi hukum Anda tetap kuat.</li>
                <li>Adukan konten atau akun pelaku ke platform resmi pengaduan konten siber pemerintah.</li>
            </ol>
        `;
    }
    
    boxOutput.innerHTML = templateKonten;
}

// ==========================================
// 3. FITUR CARI INSTAN (LIVE SEARCH FILTER)
// ==========================================
function filterPilar() {
    const nilaiCari = document.getElementById('cari-pilar').value.toLowerCase();
    const semuaCard = document.querySelectorAll('#daftar-pilar .pkn-card');
    
    semuaCard.forEach(card => {
        const keywordCard = card.getAttribute('data-keyword').toLowerCase();
        const isiTeksCard = card.innerText.toLowerCase();
        
        if (keywordCard.includes(nilaiCari) || isiTeksCard.includes(nilaiCari)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// ==========================================
// 4. DETEKTOR TEKS HOAKS
// ==========================================
function setContoh(kalimat) {
    document.getElementById('input-berita').value = kalimat;
}

function analisisTeks() {
    const teks = document.getElementById('input-berita').value.trim();
    const boxHasil = document.getElementById('hasil-detektor');
    
    if (teks === "") {
        alert("Silakan ketik atau tempel teks terlebih dahulu!");
        return;
    }
    
    boxHasil.classList.remove('hidden');
    
    // Kamus kata kunci pemicu hoaks sederhana
    const pemicuHoaks = ["hadiah", "saldo", "lipat", "dimatikan total", "ketik 123", "menyebarkan berita"];
    let mengandungHoaks = false;
    
    pemicuHoaks.forEach(kata => {
        if (teks.toLowerCase().includes(kata)) { mengandungHoaks = true; }
    });
    
    if (mengandungHoaks) {
        boxHasil.style.background = "var(--danger-bg)";
        boxHasil.style.border = "1px solid var(--danger-terracotta)";
        boxHasil.innerHTML = `
            <strong style="color: var(--danger-terracotta);">⚠️ Terdeteksi Indikasi Manipulasi!</strong>
            <p style="margin-top: 5px; font-size: 14px; color: var(--text-main);">Teks memuat pola kalimat persuasif tanpa sumber resmi, klaim hadiah berlebih, atau kepanikan massal. Disarankan untuk memverifikasi ulang ke kanal berita terpercaya sebelum menyebarkannya.</p>
        `;
    } else {
        boxHasil.style.background = "var(--success-bg)";
        boxHasil.style.border = "1px solid var(--success-olive)";
        boxHasil.innerHTML = `
            <strong style="color: var(--success-olive);">🟢 Format Teks Tergolong Standar</strong>
            <p style="margin-top: 5px; font-size: 14px; color: var(--text-main);">Tidak ditemukan indikasi kata kunci manipulatif yang biasa dipakai pada hoaks berantai. Tetap pastikan validitas informasi bersumber dari lembaga pemerintahan atau media resmi.</p>
        `;
    }
}

// ==========================================
// 5. DATA DAN LOGIKA SIMULASI KASUS BERTAHAP
// ==========================================
const dataKuis = [
    {
        teks: "Kasus 1: Seseorang menyebarkan foto editan wajah teman kelas Anda dengan narasi fitnah di grup WhatsApp angkatan. Apa tindakan etis terbaik yang harus diambil?",
        jawabanBenar: true,
        umpanBalikBenar: "Benar sekali! Kumpulkan bukti tangkapan layar, dukung mental korban, dan laporkan secara internal ke pihak kampus atau pihak berwajib untuk penegakan UU ITE.",
        umpanBalikSalah: "Kurang tepat. Mendiamkan tindakan fitnah siber terstruktur dapat memperparah dampak psikologis korban dan membiarkan pelaku terus melanggar hukum siber."
    },
    {
        teks: "Kasus 2: Anda menerima pesan berantai yang mengklaim bahwa tanggul kota jebol hebat, namun tidak ada satu pun media nasional atau akun resmi BMKG yang memberitakannya. Apakah Anda akan meneruskan pesan ini ke grup keluarga?",
        jawabanBenar: false, // Menjawab 'Laporkan/Langkah Hukum' dianggap salah karena konteks pertanyaannya adalah menyebarkan hoaks atau menghentikannya (dalam pilihan biner di web kita petakan false = abaikan/jangan sebar).
        umpanBalikBenar: "Luar biasa! Jangan pernah ikut menyebarkan berita yang belum tervalidasi kebenarannya demi mencegah kepanikan massal di masyarakat.",
        umpanBalikSalah: "Kurang tepat. Menyebarkan kepanikan tanpa validasi resmi berpotensi melanggar pasal penyebaran berita bohong yang memicu keonaran."
    },
    {
        teks: "Kasus 3: Sebuah situs belanja online tidak dikenal meminta Anda mengunggah foto KTP dan foto selfie untuk mencairkan hadiah kupon undian 10 juta rupiah. Apakah Anda akan memenuhinya?",
        jawabanBenar: false,
        umpanBalikBenar: "Tepat sekali! Menolak memberikan dokumen penting ke situs asing adalah proteksi utama dalam menjaga keamanan data pribadi (UU PDP) Anda.",
        umpanBalikSalah: "Sangat berbahaya! Memberikan foto identitas dan selfie ke pihak tidak resmi membuka peluang besar terjadinya kejahatan penipuan pinjaman online atas nama Anda."
    }
];

let indeksKuisSekarang = 0;

function muatKasusKuis() {
    const kuisSekarang = dataKuis[indeksKuisSekarang];
    document.getElementById('teks-kasus').innerText = kuisSekarang.teks;
    document.getElementById('quiz-progress-text').innerText = `KASUS ${indeksKuisSekarang + 1} DARI ${dataKuis.length}`;
    
    // Atur persentase progress bar
    const persentase = ((indeksKuisSekarang + 1) / dataKuis.length) * 100;
    document.getElementById('indeks-progress').style.width = `${persentase}%`;
    
    // Sembunyikan panel feedback dari pertanyaan sebelumnya
    document.getElementById('panel-feedback').classList.add('hidden');
}

function jawabKuis(pilihanUser) {
    const kuisSekarang = dataKuis[indeksKuisSekarang];
    const panelFeedback = document.getElementById('panel-feedback');
    panelFeedback.classList.remove('hidden');
    
    if (pilihanUser === kuisSekarang.jawabanBenar) {
        panelFeedback.style.background = "var(--success-bg)";
        panelFeedback.style.border = "1px solid var(--success-olive)";
        panelFeedback.innerHTML = `
            <strong style="color: var(--success-olive); display:block; margin-bottom: 5px;">🎉 Keputusan Anda Sangat Tepat!</strong>
            <p style="color: var(--text-main); font-size: 14.5px;">${kuisSekarang.umpanBalikBenar}</p>
            <button onclick="lanjutKuis()" style="margin-top: 15px; padding: 8px 16px; border-radius: 8px; border: 1px solid var(--success-olive); background: #FFFFFF; font-weight:600; cursor:pointer;">Lanjut Kasus Berikutnya &raquo;</button>
        `;
    } else {
        panelFeedback.style.background = "var(--danger-bg)";
        panelFeedback.style.border = "1px solid var(--danger-terracotta)";
        panelFeedback.innerHTML = `
            <strong style="color: var(--danger-terracotta); display:block; margin-bottom: 5px;">❌ Pilihan Langkah Kurang Tepat</strong>
            <p style="color: var(--text-main); font-size: 14.5px;">${kuisSekarang.umpanBalikSalah}</p>
            <button onclick="lanjutKuis()" style="margin-top: 15px; padding: 8px 16px; border-radius: 8px; border: 1px solid var(--danger-terracotta); background: #FFFFFF; font-weight:600; cursor:pointer;">Coba Kasus Berikutnya &raquo;</button>
        `;
    }
}

function lanjutKuis() {
    if (indeksKuisSekarang < dataKuis.length - 1) {
        indeksKuisSekarang++;
        muatKasusKuis();
    } else {
        // Jika kuis sudah selesai semua
        const panelFeedback = document.getElementById('panel-feedback');
        panelFeedback.style.background = "var(--brand-navy-light)";
        panelFeedback.style.border = "1px solid var(--brand-navy)";
        panelFeedback.innerHTML = `
            <strong style="color: var(--brand-navy); display:block; margin-bottom: 5px;">🏆 Simulasi Selesai!</strong>
            <p style="color: var(--text-main); font-size: 14.5px;">Hebat! Kamu telah menyelesaikan seluruh rangkaian simulasi kasus hukum siber dan etika literasi digital dengan baik.</p>
            <button onclick="resetKuis()" style="margin-top: 15px; padding: 8px 16px; border-radius: 8px; border: 1px solid var(--brand-navy); background: var(--brand-navy); color: #FFFFFF; font-weight:600; cursor:pointer;">Ulangi Simulasi</button>
        `;
    }
}

function resetKuis() {
    indeksKuisSekarang = 0;
    muatKasusKuis();
}

// Jalankan kuis pertama kali saat halaman web dimuat
window.onload = function() {
    muatKasusKuis();
};