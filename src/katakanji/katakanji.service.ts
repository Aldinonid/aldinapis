import { Injectable } from '@nestjs/common';
import { ResponseMessage, Result } from 'src/utils/enums';

@Injectable()
export class KatakanjiService {

  getAllArticle() {
    const articles = [
      {
        image: "https://firebasestorage.googleapis.com/v0/b/aldinportfolioapis.appspot.com/o/katakanji%2Ftrophy.png?alt=media&token=c2a3d72a-c7ea-4643-b716-63109be68f80",
        titleJP: "ダルビッシュが沢村賞選考にもの申す「今の時代にあった評価してあげるべき」",
        titleID: "Darvish berkata kepada pemilihan Penghargaan Sawamura \"Saya harus mengevaluasinya sesuai dengan era sekarang\"",
        level: "Pemula",
        topic: "Olahraga",
        articleJP: "パドレスのダルビッシュ有投手（35）が22日（日本時間23日）、沢村賞の選考にもの申した。22日に発表された沢村賞は、オリックス山本由伸投手（23）が満場一致で選出され、他の投手からライバルが出ない状況に選考委員から「レベルが低すぎる」と苦言が出たことを受け、自身のツイッターで意見を投稿。「時代が変わってきている分、起用法も変わりますから数字も変わりますよね。今の時代にあった評価をしてあげるべきでは？」と考えを述べた。この意見はファンの間で大きな反響を呼び、賛否両論の多数のコメントが寄せられた。",
        articleID: "Yu Darvish dari Padres (35} mengajukan permohonan Penghargaan Sawamura pada tanggal 22 (23 waktu Jepang}. Dalam Penghargaan Sawamura yang diumumkan pada tanggal 22, pelempar Yoshinobu Yamamoto (23} terpilih dengan suara bulat, dan panitia seleksi mengeluh bahwa levelnya terlalu rendah ketika tidak ada saingan dari pelempar lain. Terima dan posting pendapat Anda di Twitter Anda sendiri. \"Seiring waktu berubah, penggunaannya akan berubah, jadi jumlahnya akan berubah. Haruskah kita memberikan evaluasi yang sesuai dengan waktu?\" Pendapat ini menjadi hit besar di kalangan penggemar, dengan banyak komentar pro dan kontra.",
        articleSource: "https://news.yahoo.co.jp/articles/e60cf9fb883236bb93316b7ea9296d1f3d3a2d5b",
        isSeen: false,
        isQuizTaken: false,
        kanji: [
          { 
            kanji: "沢", kunyomi: "さわ", onyomi: "タク", meaning: "Kecemerlangan", level: "Mahir"
          },
          { 
            kanji: "村", kunyomi: "むら", onyomi: "ソン", meaning: "Desa, Kota", level: "Mahir"
          },
          { 
            kanji: "賞", kunyomi: "ほ.める", onyomi: "ショウ", meaning: "hadiah, penghargaan, pujian", level: "Mahir"
          },
          { 
            kanji: "選", kunyomi: "えら.ぶ", onyomi: "セン", meaning: "memilih", level: "Lanjut"
          },
          { 
            kanji: "考", kunyomi: "かんが.える", onyomi: "コウ", meaning: "pertimbangkan, pikirkan", level: "Pemula"
          },
          { 
            kanji: "申", kunyomi: "もう.す", onyomi: "シン", meaning: "monyet", level: "Lanjut"
          },
          { 
            kanji: "今", kunyomi: "いま", onyomi: "コン、 キン", meaning: "sekarang", level: "Pemula"
          },
          { 
            kanji: "時", kunyomi: "とき、 どき", onyomi: "ジ", meaning: "waktu, jam", level: "Pemula"
          },
          { 
            kanji: "代", kunyomi: "か.わる", onyomi: "ダイ、 タイ", meaning: "mengganti, mengubah, mengonversi", level: "Pemula"
          },
          { 
            kanji: "評", kunyomi: "-", onyomi: "ヒョウ", meaning: "evaluasi, kritik, komentar", level: "Mahir"
          },
          { 
            kanji: "価", kunyomi: "あたい", onyomi: "カ、 ケ", meaning: "value, price", level: "Mahir"
          },
          { 
            kanji: "有", kunyomi: "あ.る", onyomi: "ユウ、 ウ", meaning: "nilai, memiliki", level: "Pemula"
          },
          { 
            kanji: "投", kunyomi: "な.げる、 な.げ", onyomi: "トウ", meaning: "lempar, buang, tinggalkan", level: "Lanjut"
          },
          { 
            kanji: "手", kunyomi: "て", onyomi: "シュ、 ズ", meaning: "tangan", level: "Pemula"
          },
          { 
            kanji: "日", kunyomi: "ひ、 び、 か", onyomi: "ニチ、 ジツ", meaning: "hari, matahari", level: "Pemula"
          },
          { 
            kanji: "本", kunyomi: "もと", onyomi: "ホン", meaning: "buku, sekarang", level: "Pemula"
          },
          { 
            kanji: "間", kunyomi: "あいだ、 ま、 あい", onyomi: "カン、 ケン", meaning: "interval, spasi", level: "Pemula"
          },
          { 
            kanji: "発", kunyomi: "た.つ、 あば.く", onyomi: "ハツ、 ホツ", meaning: "keberangkatan, pelepasan", level: "Pemula"
          },
          { 
            kanji: "表", kunyomi: "おもて", onyomi: "ヒョウ", meaning: "permukaan, tabel", level: "Lanjut"
          },
          { 
            kanji: "山", kunyomi: "やま", onyomi: "サン、 セン", meaning: "gunung", level: "Pemula"
          },
          { 
            kanji: "由", kunyomi: "よし、 よ.る", onyomi: "ユ、 ユウ、 ユイ", meaning: "oleh karena itu, alasan", level: "Lanjut"
          },
          { 
            kanji: "伸", kunyomi: "の.びる、 の.ばす", onyomi: "シン", meaning: "memperluas, meregangkan", level: "Mahir"
          },
          { 
            kanji: "満", kunyomi: "み.ちる", onyomi: "マン、 バン", meaning: "penuh, kepenuhan,", level: "Lanjut"
          },
          { 
            kanji: "場", kunyomi: "ば", onyomi: "ジョウ、 チョウ", meaning: "lokasi, tempat", level: "Pemula"
          },
          { 
            kanji: "致", kunyomi: "いた.す", onyomi: "チ", meaning: "melakukan, melakukan", level: "Mahir"
          },
          { 
            kanji: "出", kunyomi: "で.る、 で", onyomi: "シュツ、 スイ", meaning: "keluar, menonjol", level: "Pemula"
          },
          { 
            kanji: "他", kunyomi: "ほか", onyomi: "タ", meaning: "lain, yang lain", level: "Lanjut"
          },
          { 
            kanji: "状", kunyomi: "-", onyomi: "ジョウ", meaning: "status quo, kondisi", level: "Lanjut"
          },
          { 
            kanji: "況", kunyomi: "まし.て", onyomi: "キョウ", meaning: "kondisi, situasi", level: "Mahir"
          },
          { 
            kanji: "委", kunyomi: "ゆだ.ねる", onyomi: "イ", meaning: "komite, mempercayakan", level: "Mahir"
          },
          { 
            kanji: "員", kunyomi: "-", onyomi: "イン", meaning: "karyawan, anggota", level: "Pemula"
          },
          { 
            kanji: "低", kunyomi: "ひく.い、 ひく.める", onyomi: "テイ", meaning: "lebih rendah, pendek", level: "Mahir"
          },
          { 
            kanji: "苦", kunyomi: "くる.しい", onyomi: "ク", meaning: "penderitaan, cobaan", level: "Lanjut"
          },
          { 
            kanji: "言", kunyomi: "い.う、 こと", onyomi: "ゲン、 ゴン", meaning: "katakan sesuatu", level: "Pemula"
          },
          { 
            kanji: "受", kunyomi: "う.ける", onyomi: "ジュ", meaning: "menerima, menjalani", level: "Lanjut"
          },
          { 
            kanji: "自", kunyomi: "みずか.ら", onyomi: "ジ、 シ", meaning: "diri", level: "Pemula"
          },
          { 
            kanji: "身", kunyomi: "み", onyomi: "シン", meaning: "seseorang, orang", level: "Pemula"
          },
          { 
            kanji: "意", kunyomi: "-", onyomi: "イ", meaning: "perasaan; pikiran, artinya", level: "Pemula"
          },
          { 
            kanji: "見", kunyomi: "み.る、 み.える", onyomi: "ケン", meaning: "lihat, harapan, peluang", level: "Pemula"
          },
          { 
            kanji: "稿", kunyomi: "わら、 したがき", onyomi: "コウ", meaning: "draft, copy, manuskrip", level: "Mahir"
          },
          { 
            kanji: "変", kunyomi: "か.わる", onyomi: "ヘン", meaning: "tidak biasa, perubahan", level: "Lanjut"
          },
          { 
            kanji: "分", kunyomi: "わ.ける、 わ.け", onyomi: "ブン、 フン、 ブ", meaning: "bagian, berbagi, menit", level: "Pemula"
          },
          { 
            kanji: "起", kunyomi: "お.きる、 お.こる", onyomi: "キ", meaning: "Bangui", level: "Pemula"
          },
          { 
            kanji: "用", kunyomi: "もち.いる", onyomi: "ヨウ", meaning: "memanfaatkan, bisnis", level: "Pemula"
          },
          { 
            kanji: "法", kunyomi: "のり", onyomi: "ホウ、 ハッ", meaning: "metode, hukum", level: "Lanjut"
          },
          { 
            kanji: "数", kunyomi: "かず、 かぞ.える", onyomi: "スウ、 ス", meaning: "nomor, kekuatan", level: "Lanjut"
          },
          { 
            kanji: "字", kunyomi: "あざ、 あざな", onyomi: "ジ", meaning: "karakter, huruf", level: "Pemula"
          },
          { 
            kanji: "述", kunyomi: "の.べる", onyomi: "ジュツ", meaning: "menyebutkan, menyatakan", level: "Mahir"
          },
          { 
            kanji: "大", kunyomi: "おお-、 おお.きい", onyomi: "ダイ、 タイ", meaning: "besar", level: "Pemula"
          },
          { 
            kanji: "反", kunyomi: "そ.る、 そ.らす", onyomi: "ハン、 ホン", meaning: "anti", level: "Lanjut"
          },
          { 
            kanji: "響", kunyomi: "ひび.く", onyomi: "キョウ", meaning: "gema, suara, bergema", level: "Mahir"
          },
          { 
            kanji: "呼", kunyomi: "よ.ぶ", onyomi: "コ", meaning: "memanggil, mengundang", level: "Lanjut"
          },
          { 
            kanji: "賛", kunyomi: "たす.ける", onyomi: "サン", meaning: "menyetujui, memuji", level: "Lanjut"
          },
          { 
            kanji: "否", kunyomi: "いな、 いや", onyomi: "ヒ", meaning: "meniadakan, tidak", level: "Lanjut"
          },
          { 
            kanji: "両", kunyomi: "てる、 ふたつ", onyomi: "リョウ", meaning: "keduanya, koin Jepang kuno", level: "Lanjut"
          },
          { 
            kanji: "論", kunyomi: "あげつら.う", onyomi: "ロン", meaning: "argumen, wacana", level: "Lanjut"
          },
          { 
            kanji: "多", kunyomi: "おお.い", onyomi: "タ", meaning: "banyak, sering", level: "Pemula"
          },
          { 
            kanji: "寄", kunyomi: "よ.る、 よ.り", onyomi: "キ", meaning: "mendekat, mampir", level: "Lanjut"
          }
        ],
        quiz: [
          {
            questionTitle: "Apa Makna Kanji", answers: ["Nanti", "Kemarin", "Sekarang", "Besok"], correctAnswerIndex: 2, isKanji: true, kanjitext: "今"
          },
          {
            questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["み", "り", "お", "ぶ"], correctAnswerIndex: 0, isKanji: true, kanjitext: "身"
          },
          {
            questionTitle: "Apa Makna Kanji", answers: ["Kecil", "Besar", "Kiri", "Kanan"], correctAnswerIndex: 1, isKanji: true, kanjitext: "大"
          },
          {
            questionTitle: "Apakah arti kanji ini", answers: ["Istirahat", "Buku", "Diri", "Orang"], correctAnswerIndex: 2, isKanji: true, kanjitext: "自"
          },
          {
            questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["まさ", "あげ", "ふた", "あざ"], correctAnswerIndex: 3, isKanji: true, kanjitext: "字"
          },
          {
            questionTitle: "Siapakah yang terpilih memenangkan penghargaan Sawamura", answers: ["沢村賞", "賛否両論", "山本由伸投手", "起用法", "時代"], correctAnswerIndex: 2, isKanji: false, kanjitext: ""
          },
          {
            questionTitle: "Apa Makna Kanji", answers: ["Hewan", "Orang", "Benda", "Kendaraan"], correctAnswerIndex: 1, isKanji: true, kanjitext: "身"
          },
          {
            questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["まさ", "せる", "ふた", "おおき"], correctAnswerIndex: 3, isKanji: true, kanjitext: "大"
          },
          {
            questionTitle: "Media sosial apakah yang disebutkan dalam bacaan?", answers: ["Facebook", "Twitter", "TikTok", "Instagram"], correctAnswerIndex: 1, isKanji: false, kanjitext: ""
          },
          {
            questionTitle: "Apa Makna Kanji", answers: ["Huruf", "Langit", "Bumi", "Buku"], correctAnswerIndex: 0, isKanji: true, kanjitext: "字"
          }
        ],
        quizscore: 0
      },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/aldinportfolioapis.appspot.com/o/katakanji%2Fkamera.png?alt=media&token=bf5cb87f-cedb-4843-8414-38e9dd27f7f2",
        titleJP: "光で写す",
        titleID: "Foto dengan cahaya",
        level: "Pemula",
        topic: "Teknologi",
        articleJP: "今日のブラックボックスは、カメラ。レンズから取り込まれた光は、さまざまな部品を通って映像になります。どのように光を映像に変えているのか、詳しく見ていきましょう。まず、レンズが目の前の風景の光をカメラの中に取り込み、イメージセンサのもとへ届けます。このイメージセンサには、なんと1000万以上の小さなセンサが規則正しく並んでいます。それぞれが、光の三原色、赤・青・緑の光の強さを読み取り、電気信号に変えることができます。 その電気信号が、画像処理エンジンと呼ばれるコンピュータに送られると、三色の光を認識します。画像処理エンジンは、この三色の光を組み合わせることで、フルカラーの映像を作っています。その映像は液晶画面に伝わり、表示されます。その映像を見て、私たちはシャッターボタンを押し、メモリカードに写真として記録しているのです",
        articleID: "Kotak hitam hari ini adalah kamera. Cahaya yang ditangkap dari lensa melewati berbagai bagian dan menjadi sebuah gambar. Mari kita lihat lebih dekat bagaimana cahaya diubah menjadi video. Pertama, lensa menangkap cahaya lanskap di depan Anda ke dalam kamera dan mengirimkannya ke sensor gambar. Sensor gambar ini memiliki lebih dari 10 juta sensor kecil yang berbaris secara teratur. Masing-masing dapat membaca tiga warna utama cahaya, intensitas cahaya merah, biru, dan hijau, dan mengubahnya menjadi sinyal listrik. Ketika sinyal listrik dikirim ke komputer yang disebut mesin pengolah gambar, ia mengenali tiga warna cahaya. Mesin pengolah gambar menciptakan gambar penuh warna dengan menggabungkan ketiga warna cahaya ini. Gambar ditransmisikan ke layar LCD dan ditampilkan. Setelah melihat video, kami menekan tombol rana dan merekamnya sebagai foto di kartu memori.",
        articleSource: "https://www2.nhk.or.jp/school/movie/bangumi.cgi?das_id=D0005250016_00000",
        isSeen: false,
        isQuizTaken: false,
        kanji: [
          {kanji: "今", kunyomi: "いま", onyomi: "コン、 キン", meaning: "sekarang", level: "Pemula"},
          {kanji: "日", kunyomi: "ひ、 び、 か", onyomi: "ニチ、 ジツ", meaning: "hari, matahari", level: "Pemula"},
          {kanji: "取", kunyomi: "と.る、 と.り", onyomi: "シュ", meaning: "ambil", level: "Lanjut"},
          {kanji: "込", kunyomi: "こ.む、 こ.む", onyomi: "-", meaning: "ramai, campuran,", level: "Lanjut"},
          {kanji: "光", kunyomi: "ひか.る", onyomi: "コウ", meaning: "sinar, cahaya", level: "Lanjut"},
          {kanji: "品", kunyomi: "しな", onyomi: "ヒン、 ホン", meaning: "barang, perbaikan", level: "Pemula"},
          {kanji: "通", kunyomi: "とお.る", onyomi: "ツウ、ツ", meaning: "lalu lintas", level: "Pemula"},
          {kanji: "映", kunyomi: "うつ.る", onyomi: "エイ", meaning: "mencerminkan", level: "Pemula"},
          {kanji: "像", kunyomi: "-", onyomi: "ゾウ", meaning: "patung", level: "Mahir"},
          {kanji: "変", kunyomi: "か.わる", onyomi: "ヘン", meaning: "tidak biasa", level: "Lanjut"},
          {kanji: "詳", kunyomi: "くわ.しい", onyomi: "ショウ", meaning: "detail", level: "Mahir"},
          {kanji: "見", kunyomi: "み.る", onyomi: "ケン", meaning: "lihat", level: "Pemula"},
          {kanji: "目", kunyomi: "め", onyomi: "モク、 ボク", meaning: "mata", level: "Pemula"},
          {kanji: "前", kunyomi: "まえ、-まえ", onyomi: "ゼン", meaning: "di depan, sebelum", level: "Pemula"},
          {kanji: "風", kunyomi: "かぜ、かざ-", onyomi: "フウ、フ", meaning: "angin, udara, gaya, cara", level: "Pemula"},
          {kanji: "景", kunyomi: "-", onyomi: "ケイ", meaning: "pemandangan", level: "Lanjut"},
          {kanji: "中", kunyomi: "なか、うち", onyomi: "チュウ", meaning: "di dalam, ditengah", level: "Pemula"},
          {kanji: "届", kunyomi: "とど.ける、-とど.け", onyomi: "カイ", meaning: "mengantarkan, mencapai", level: "Mahir"},
          {kanji: "万", kunyomi: "よろず", onyomi: "マン、バン", meaning: "sepuluh ribu, 10.000", level: "Pemula"},
          {kanji: "以", kunyomi: "もっ.て", onyomi: "イ", meaning: "dengan cara, karena", level: "Pemula"},
          {kanji: "上", kunyomi: "うえ、-うえ", onyomi: "ジョウ、ショウ、シャン", meaning: "atas, diatas", level: "Pemula"},
          {kanji: "小", kunyomi: "ちい.さい、こ-", onyomi: "ショウ", meaning: "kecil", level: "Pemula"},
          {kanji: "規", kunyomi: "-", onyomi: "キ", meaning: "standar, ukuran", level: "Lanjut"},
          {kanji: "則", kunyomi: "のっと.る、のり", onyomi: "ソク", meaning: "aturan, hukum", level: "Mahir"},
          {kanji: "正", kunyomi: "ただ.しい、ただ.す", onyomi: "セイ、ショウ", meaning: "benar, adil", level: "Pemula"},
          {kanji: "並", kunyomi: "な.み、なみ", onyomi: "ヘイ、ホウ", meaning: "baris, dan, selain itu", level: "Mahir"},
          {kanji: "三", kunyomi: "み、み.つ", onyomi: "サン、ゾウ", meaning: "tiga", level: "Pemula"},
          {kanji: "原", kunyomi: "はら", onyomi: "ゲン", meaning: "padang rumput", level: "Lanjut"},
          {kanji: "色", kunyomi: "いろ", onyomi: "ショク、シキ", meaning: "warna", level: "Pemula"},
          {kanji: "赤", kunyomi: "あか、あか-", onyomi: "セキ、シャク", meaning: "merah", level: "Pemula"},
          {kanji: "青", kunyomi: "あお、あお-、あお.い", onyomi: "セイ、ショウ", meaning: "biru, hijau", level: "Pemula"},
          {kanji: "緑", kunyomi: "みどり", onyomi: "リョク、ロク", meaning: "hijau", level: "Mahir"},
          {kanji: "強", kunyomi: "つよ.い、つよ.まる", onyomi: "キョウ、ゴウ", meaning: "kuat", level: "Pemula"},
          {kanji: "読", kunyomi: "よ.む、-よ.み", onyomi: "ドク、トク、トウ", meaning: "baca", level: "Pemula"},
          {kanji: "電", kunyomi: "-", onyomi: "デン", meaning: "listrik", level: "Pemula"},
          {kanji: "気", kunyomi: "き", onyomi: "キ、ケ", meaning: "semangat, pikiran, udara", level: "Pemula"},
          {kanji: "信", kunyomi: "-", onyomi: "シン", meaning: "iman, kebenaran", level: "Lanjut"},
          {kanji: "号", kunyomi: "さけ.ぶ、よびな", onyomi: "ゴウ", meaning: "nama panggilan, nomor", level: "Lanjut"},
          {kanji: "画", kunyomi: "えが.く、かく.する", onyomi: "ガ、カク、エ、カイ", meaning: "sapuan kuas, gambar", level: "Pemula"},
          {kanji: "処", kunyomi: "ところ、-こ、お.る", onyomi: "ショ", meaning: "membuang, mengelola", level: "Lanjut"},
          {kanji: "理", kunyomi: "ことわり", onyomi: "リ", meaning: "logika, pengaturan, alasan", level: "Pemula"},
          {kanji: "呼", kunyomi: "よ.ぶ", onyomi: "コ", meaning: "memanggil, mengundang", level: "Lanjut"},
          {kanji: "送", kunyomi: "おく.る", onyomi: "ソウ", meaning: "mengantar, mengirim", level: "Pemula"},
          {kanji: "認", kunyomi: "みと.める、したた.める", onyomi: "ニン", meaning: "mengakui, menyaksikan", level: "Lanjut"},
          {kanji: "識", kunyomi: "し.る、しる.す", onyomi: "シキ", meaning: "membedakan, tahu, menulis", level: "Lanjut"},
          {kanji: "組", kunyomi: "く.む、くみ、-ぐみ", onyomi: "ソ", meaning: "asosiasi, kepang, anyaman", level: "Lanjut"},
          {kanji: "合", kunyomi: "あ.う、-あ.う", onyomi: "ゴウ、ガッ、カッ", meaning: "cocok, bergabung", level: "Lanjut"},
          {kanji: "作", kunyomi: "つく.る、つく.り、-づく.り", onyomi: "サク、サ", meaning: "membuat, produksi", level: "Pemula"},
          {kanji: "液", kunyomi: "-", onyomi: "エキ", meaning: "cairan, jus", level: "Mahir"},
          {kanji: "晶", kunyomi: "-", onyomi: "ショウ", meaning: "berkilau, jernih, kristal", level: "Mahir"},
          {kanji: "面", kunyomi: "おも、おもて、つら", onyomi: "メン、ベン", meaning: "topeng, wajah, fitur", level: "Lanjut"},
          {kanji: "伝", kunyomi: "つた.わる、つた.える", onyomi: "デン、テン", meaning: "mengirimkan, ikut", level: "Lanjut"},
          {kanji: "表", kunyomi: "おもて、-おもて", onyomi: "ヒョウ", meaning: "permukaan, tabel", level: "Lanjut"},
          {kanji: "示", kunyomi: "しめ.す", onyomi: "ジ、シ", meaning: "menunjukkan, mengungkapkan", level: "Lanjut"},
          {kanji: "私", kunyomi: "わたくし、わたし", onyomi: "シ", meaning: "pribadi, saya", level: "Pemula"},
          {kanji: "押", kunyomi: "お.す、お.し-", onyomi: "オウ", meaning: "dorong, hentikan", level: "Lanjut"},
          {kanji: "写", kunyomi: "うつ.す、うつ.る", onyomi: "シャ、ジャ", meaning: "salin, difoto, deskripsikan", level: "Pemula"},
          {kanji: "真", kunyomi: "ま、ま-、まこと", onyomi: "シン", meaning: "benar, kenyataan", level: "Lanjut"},
          {kanji: "録", kunyomi: "しる.す、と.る", onyomi: "ロク", meaning: "catatan, rekam", level: "Mahir"},
        ],
        quiz: [
          {questionTitle: "Apa Makna Kanji", answers: ["Hidung", "Pipi", "Telinga", "Mata"], correctAnswerIndex: 3, isKanji: true, kanjitext: "目"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["いま", "しな", "いろ", "はら"], correctAnswerIndex: 2, isKanji: true, kanjitext: "色"},
          {questionTitle: "Apa Makna Kanji", answers: ["20.000", "10.000", "40.000", "30.000"], correctAnswerIndex: 1, isKanji: true, kanjitext: "万"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["よびな", "ところ", "つまび", "よろず"], correctAnswerIndex: 3, isKanji: true, kanjitext: "万"},
          {questionTitle: "Berapa jumlah sensor kecil yang menyusun sensor gambar pada kamera", answers: [">20jt", "<20jt", "<10jt", ">10jt"], correctAnswerIndex: 3, isKanji: false, kanjitext: ""},
          {questionTitle: "Apa Makna Kanji", answers: ["Manga", "Artikel", "Artikel", "Gambar"], correctAnswerIndex: 3, isKanji: true, kanjitext: "画"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["み", "ま", "き", "は"], correctAnswerIndex: 0, isKanji: true, kanjitext: "三"},
          {questionTitle: "Apa Makna Kanji", answers: ["Sedang", "Besar", "Jumbo", "Kecil"], correctAnswerIndex: 3, isKanji: true, kanjitext: "小"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["よびな", "ところ", "おくる", "つまび"], correctAnswerIndex: 2, isKanji: true, kanjitext: "送"},
          {questionTitle: "Ke bagian mana foto disimpan oleh kamera", answers: ["LCD", "Kartu Memori", "Harddisk", "USB"], correctAnswerIndex: 1, isKanji: false, kanjitext: ""}
        ],
        quizscore: 0
      },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/aldinportfolioapis.appspot.com/o/katakanji%2Fburger.png?alt=media&token=a262f03a-0861-48a1-8151-a036163da689",
        titleJP: "米マクドナルドが“代替肉”バーガー 販売へ",
        titleID: "McDonald's akan menjual burger \"daging alternatif\"",
        level: "Pemula",
        topic: "Kuliner",
        articleJP: "マクドナルドは２６日、カナダの２８店舗で新しいハンバーガー「Ｐ．Ｌ．Ｔ」を今月末から１２月下旬まで、試験的に販売すると発表しました。「Ｐ．Ｌ．Ｔ」は植物、レタス、トマトの略でその名の通り、肉を全く使わずにエンドウ豆のたんぱく質など植物性の原料で味やにおい、食感を再現した「代替肉」のバーガーです。アメリカの食品会社「ビヨンド・ミート」が開発した「代替肉」を使っていて、バーガーは１個当たり４６０キロカロリーで、価格は６．４９カナダドル、日本円でおよそ５３０円です。",
        articleID: "McDonald's mengumumkan pada tanggal 26 bahwa mereka akan menjual hamburger \"PLT\" baru di 28 toko di Kanada dengan basis percobaan dari akhir bulan ini hingga akhir Desember. \"PLT\" adalah singkatan dari tumbuhan, selada, dan tomat, dan seperti namanya, itu adalah \"daging alternatif\" yang mereproduksi rasa, bau, dan tekstur bahan nabati seperti protein kacang polong tanpa menggunakan daging sama sekali. adalah burger dari. \nMenggunakan \"daging alternatif\" yang dikembangkan oleh perusahaan makanan Amerika \"Beyond Meat\", setiap burger memiliki 460 kilokalori, dan harganya 6,49 dolar Kanada, sekitar 530 yen dalam yen Jepang.",
        articleSource: "http://easyjapanese.net/detail/cc0e2186b127ce29873d2c1489147a63?hl=en-US",
        isSeen: false,
        isQuizTaken: false,
        kanji: [
          {kanji: "日", kunyomi: "ひ、 -び、 -か", onyomi: "ニチ、 ジツ", meaning: "hari, matahari, Jepang", level: "Pemula"},
          {kanji: "店", kunyomi: "みせ、 たな", onyomi: "テン", meaning: "toko peralatan", level: "Pemula"},
          {kanji: "舗", kunyomi: "-", onyomi: "ホ", meaning: "toko, paving", level: "Mahir"},
          {kanji: "新", kunyomi: "あたら.しい、 あら.た", onyomi: "シン", meaning: "baru", level: "Lanjut"},
          {kanji: "今", kunyomi: "いま", onyomi: "コン、 キン", meaning: "sekarang", level: "Pemula"},
          {kanji: "月", kunyomi: "つき", onyomi: "ゲツ、 ガツ", meaning: "bulan", level: "Pemula"},
          {kanji: "末", kunyomi: "すえ、 うら、 うれ", onyomi: "マツ、 バツ", meaning: "akhir, tutup, tip, bedak", level: "Lanjut"},
          {kanji: "下", kunyomi: "した、 しも、 もと、 さ.げる", onyomi: "カ、 ゲ", meaning: "bawah, turun, memberi, rendah, inferior", level: "Pemula"},
          {kanji: "旬", kunyomi: "-", onyomi: "ジュン、 シュン", meaning: "musim (misalnya buah, ikan), periode sepuluh hari (dalam sebulan)", level: "Mahir"},
          {kanji: "試", kunyomi: "こころ.みる、 ため.す", onyomi: "シ", meaning: "tes, coba, percobaan, cobaan", level: "Pemula"},
          {kanji: "験", kunyomi: "あかし、 しるし、 ため.す、 ためし", onyomi: "ケン、 ゲン", meaning: "verifikasi, efek, pengujian", level: "Pemula"},
          {kanji: "的", kunyomi: "まと", onyomi: "テキ", meaning: "objek, akhiran kata sifat", level: "Pemula"},
          {kanji: "販", kunyomi: "-", onyomi: "ハン", meaning: "pemasaran, penjualan, perdagangan", level: "Mahir"},
          {kanji: "売", kunyomi: "う.る、 う.れる", onyomi: "バイ", meaning: "jual", level: "Pemula"},
          {kanji: "発", kunyomi: "た.つ、 あば.く", onyomi: "ハツ、 ホツ", meaning: "keberangkatan, pelepasan", level: "Pemula"},
          {kanji: "表", kunyomi: "おもて、 -おもて", onyomi: "ヒョウ", meaning: "permukaan, tabel, bagan, diagram", level: "Lanjut"},
          {kanji: "植", kunyomi: "う.える、 う.わる", onyomi: "ショク", meaning: "tanaman; vegetasi", level: "Mahir"},
          {kanji: "物", kunyomi: "もの、 もの-", onyomi: "ブツ、 モツ", meaning: "hal, objek, materi", level: "Pemula"},
          {kanji: "略", kunyomi: "ほぼ、 はぶ.く", onyomi: "リャク", meaning: "singkatan, kelalaian", level: "Mahir"},
          {kanji: "名", kunyomi: "な、 -な", onyomi: "メイ、 ミョウ", meaning: "nama, dicatat, dibedakan, reputasi", level: "Pemula"},
          {kanji: "通", kunyomi: "とお.る、 とお.り", onyomi: "ツウ、 ツ", meaning: "lalu lintas, melewati, jalan", level: "Pemula"},
          {kanji: "肉", kunyomi: "しし", onyomi: "ニク", meaning: "daging", level: "Pemula"},
          {kanji: "全", kunyomi: "まった.く、 すべ.て", onyomi: "ゼン", meaning: "seluruh, seluruh, semua, lengkap, memenuhi", level: "Lanjut"},
          {kanji: "使", kunyomi: "つか.う、 つか.い", onyomi: "シ", meaning: "gunakan, kirim misi, perintah", level: "Pemula"},
          {kanji: "豆", kunyomi: "まめ、 まめ-", onyomi: "トウ、 ズ", meaning: "kacang, kacang polong, cebol", level: "Mahir"},
          {kanji: "質", kunyomi: "たち、 ただ.す、 もと、 わりふ", onyomi: "シツ、 シチ、 チ", meaning: "substansi, kualitas, materi, temperamen", level: "Pemula"},
          {kanji: "性", kunyomi: "さが", onyomi: "セイ、 ショウ", meaning: "jenis kelamin, sifat", level: "Lanjut"},
          {kanji: "原", kunyomi: "はら", onyomi: "ゲン", meaning: "padang rumput, asli, primitif, bidang,", level: "Lanjut"},
          {kanji: "料", kunyomi: "-", onyomi: "リョウ", meaning: "biaya, bahan", level: "Lanjut"},
          {kanji: "味", kunyomi: "あじ、 あじ.わう", onyomi: "ショク、 ジキ", meaning: "rasa", level: "Pemula"},
          {kanji: "食", kunyomi: "く.う、 く.らう", onyomi: "イン", meaning: "makan, makanan", level: "Pemula"},
          {kanji: "感", kunyomi: "-", onyomi: "カン", meaning: "emosi, perasaan, sensasi", level: "Lanjut"},
          {kanji: "再", kunyomi: "ふたた.び", onyomi: "サイ、 サ", meaning: "lagi, dua kali, kedua kalinya", level: "Mahir"},
          {kanji: "現", kunyomi: "あらわ.れる、 あらわ.す", onyomi: "ゲン", meaning: "present, existing, actual", level: "Lanjut"},
          {kanji: "代", kunyomi: "か.わる、 かわ.る", onyomi: "ダイ、 タイ", meaning: "mengganti, mengubah, mengonversi,", level: "Pemula"},
          {kanji: "替", kunyomi: "か.える、 か.え-、 か.わる", onyomi: "タイ", meaning: "pertukaran, cadangan, pengganti, per-", level: "Mahir"},
          {kanji: "品", kunyomi: "しな", onyomi: "ヒン、 ホン", meaning: "barang, perbaikan, martabat", level: "Pemula"},
          {kanji: "会", kunyomi: "あ.う、 あ.わせる、 あつ.まる", onyomi: "カイ、 エ", meaning: "pertemuan, bertemu, pesta, ", level: "Pemula"},
          {kanji: "社", kunyomi: "やしろ", onyomi: "シャ", meaning: "perusahaan, firma, kantor, asosiasi, kuil", level: "Pemula"},
          {kanji: "開", kunyomi: "ひら.く、 ひら.き", onyomi: "カイ", meaning: "buka, buka segel", level: "Pemula"},
          {kanji: "個", kunyomi: "-", onyomi: "コ、 カ", meaning: "individu, counter untuk artikel", level: "Mahir"},
          {kanji: "当", kunyomi: "あ.たる、 あ.たり", onyomi: "トウ", meaning: "pukul, benar, tepat, dirinya sendiri", level: "Lanjut"},
          {kanji: "価", kunyomi: "あたい", onyomi: "カ、 ケ", meaning: "nilai, harga", level: "Mahir"},
          {kanji: "格", kunyomi: "-", onyomi: "カク、 コウ、 キャク、 ゴウ", meaning: "status, pangkat, kapasitas", level: "Lanjut"},
          {kanji: "本", kunyomi: "もと", onyomi: "ホン", meaning: "buku, sekarang, utama, asal, benar,", level: "Pemula"},
          {kanji: "円", kunyomi: "まる.い、 まる", onyomi: "エン", meaning: "lingkaran, yen, bulat", level: "Pemula"},
        ],
        quiz: [
          {questionTitle: "Apakah arti kanji berikut ini?", answers: ["Lingkaran", "Kotak", "Segitiga", "Silang"], correctAnswerIndex: 0, isKanji: true, kanjitext: "円"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["もと", "みせ", "しな", "もの"], correctAnswerIndex: 1, isKanji: true, kanjitext: "店"},
          {questionTitle: "Apakah arti kanji berikut ini?", answers: ["Olahraga", "Tidur", "Makan", "Minum"], correctAnswerIndex: 2, isKanji: true, kanjitext: "食"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["しな", "もの", "みせ", "もと"], correctAnswerIndex: 3, isKanji: true, kanjitext: "本"},
          {questionTitle: "Berapa kilokalori yang dimiliki setiap burger?", answers: ["450", "460", "470", "480"], correctAnswerIndex: 1, isKanji: false, kanjitext: ""},
          {questionTitle: "Apakah arti kanji berikut ini?", answers: ["Bulan", "Matahari", "Bintang", "Planet"], correctAnswerIndex: 0, isKanji: true, kanjitext: "月"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["もと", "しな", "もの", "まと"], correctAnswerIndex: 3, isKanji: true, kanjitext: "的"},
          {questionTitle: "Apakah arti kanji berikut ini?", answers: ["Sayur", "Daging", "Susu", "Buah"], correctAnswerIndex: 1, isKanji: true, kanjitext: "肉"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["まと", "もと", "う.る", "しな"], correctAnswerIndex: 2, isKanji: true, kanjitext: "売"},
          {questionTitle: "Kapan masa penjualan burger daging alternatif berakhir? ", answers: ["Desember", "November", "Oktober", "September"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""},
        ],
        quizscore: 0
      },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/aldinportfolioapis.appspot.com/o/katakanji%2Fstones.png?alt=media&token=28396c4d-2d05-430a-a672-c5cb146a36a6",
        titleJP: "宮城県　震災を伝えるために中学生が考えた石碑ができる",
        titleID: "Prefektur Miyagi: Sebuah monumen batu yang dianggap oleh siswa sekolah menengah pertama untuk menyampaikan bencana gempa bumi",
        level: "Pemula",
        topic: "Edukasi",
        articleJP: "2011年の東日本大震災のとき、宮城県女川町には高さ14.8mの津波が来ました。町の人口の8％、800人以上の人が亡くなりました。\nこの年に中学校に入学した生徒たちは、震災のことを未来に伝えるために、石碑を作ることを計画しました。津波がいちばん高い所まで来た21の場所に「女川いのちの石碑」を作ろうと考えて、1000万円を集めました。\n計画から10年が過ぎた21日、21番目の石碑ができました。この活動を続けた卒業生などが集まって、新しい石碑を発表する式を行いました。\n卒業生の鈴木智博さんは、修学旅行の生徒などを石碑に案内して、震災について伝えています。鈴木 @さんは「1000年後の人にも、僕のような経験をしてほしくないので、これからも伝え続けます」と話していました。。",
        articleID: "Pada saat Gempa Besar Jepang Timur tahun 2011, tsunami dengan ketinggian 14,8 m datang ke Kota Onagawa, Prefektur Miyagi. Lebih dari 800 orang, 8% dari populasi kota, telah meninggal. \nSiswa yang mendaftar di SMP tahun ini berencana membangun tugu batu untuk menyampaikan bencana ke masa depan. Saya mengumpulkan 10 juta yen untuk membuat \"Monumen Batu Kehidupan Onagawa\" di 21 tempat di mana tsunami mencapai titik tertinggi. \nPada tanggal 21, 10 tahun setelah rencana, monumen batu ke-21 selesai dibangun. Alumni yang melanjutkan kegiatan ini berkumpul dan mengadakan upacara pengukuhan monumen batu baru. \nTomohiro Suzuki, seorang lulusan, membimbing siswa dalam perjalanan sekolah ke monumen batu dan memberi tahu mereka tentang gempa bumi. Pak Suzuki berkata, \"Saya tidak ingin orang 1000 tahun dari sekarang memiliki pengalaman yang sama seperti saya, jadi saya akan terus menyampaikannya.\"",
        articleSource: "http://easyjapanese.net/detail/c841d46c3835d6457a48fc3b6a80347a?hl=en-US",
        isSeen: false,
        isQuizTaken: false,
        kanji: [
          {kanji: "年", kunyomi: "とし", onyomi: "ネン", meaning: "tahun", level: "Pemula"},
          {kanji: "東", kunyomi: "ひがし", onyomi: "トウ", meaning: "timur", level: "Pemula"},
          {kanji: "日", kunyomi: "ひ、 び、 か", onyomi: "ニチ、 ジツ", meaning: "hari, matahari, Jepang", level: "Pemula"},
          {kanji: "本", kunyomi: "もと", onyomi: "ホン", meaning: "buku, sekarang, utama, asal, benar", level: "Pemula"},
          {kanji: "大", kunyomi: "大おお-、 おお.きい、 おお.いに", onyomi: "ダイ、 タイ", meaning: "besar", level: "Pemula"},
          {kanji: "震", kunyomi: "ふる.う、 ふる.える", onyomi: " シン", meaning: "gempa, goyang, gemetar, bergetar, menggigil", level: "Lanjut"},
          {kanji: "災", kunyomi: "わざわ.い", onyomi: "サイ", meaning: "bencana, malapetaka, celaka, kutukan, kejahatan", level: "Mahir"},
          {kanji: "宮", kunyomi: "みや", onyomi: "キュウ、 グウ、 ク、 クウ", meaning: "uil Shinto, rasi bintang, istana, putri", level: "Mahir"},
          {kanji: "城", kunyomi: "しろ", onyomi: "ジョウ、 セイ", meaning: "kastil", level: "Lanjut"},
          {kanji: "県", kunyomi: "か.ける", onyomi: "ケン", meaning: "preferektur", level: "Lanjut"},
          {kanji: "女", kunyomi: "おんな、 め", onyomi: "ジョ、 ニョ、 ニョウ", meaning: "perempuan", level: "Pemula"},
          {kanji: "川", kunyomi: "かわ", onyomi: "セン", meaning: "sungai", level: "Pemula"},
          {kanji: "町", kunyomi: "まち", onyomi: "チョウ", meaning: "kota, desa, blok, jalan", level: "Pemula"},
          {kanji: "高", kunyomi: "たか.い、 たか", onyomi: ": コウ", meaning: "tinge, mahal", level: "Pemula"},
          {kanji: "津", kunyomi: "つ", onyomi: "シン", meaning: "surga, pelabuhan, feri", level: "Mahir"},
          {kanji: "波", kunyomi: "なみ", onyomi: "ハ", meaning: "embark, Polandia", level: "Lanjut"},
          {kanji: "来", kunyomi: "く.る、 きた.る", onyomi: "ライ、 タイ", meaning: " datang, karena, selanjutnya, penyebab, menjadi", level: "Pemula"},
          {kanji: "人", kunyomi: "ひと、 り、 と", onyomi: "ジン、 ニン", meaning: "orang", level: "Pemula"},
          {kanji: "口", kunyomi: "くち", onyomi: "コウ、 ク", meaning: "mulut", level: "Pemula"},
          {kanji: "以", kunyomi: "もっ.て", onyomi: "イ", meaning: "dengan cara, karena, mengingat, dibandingkan dengan", level: "Pemula"},
          {kanji: "上", kunyomi: "うえ、 うえ", onyomi: "ジョウ、 ショウ、 シャン", meaning: "atas", level: "Pemula"},
          {kanji: "亡", kunyomi: "な.い、 な.き-", onyomi: "ボウ、 モウ", meaning: "meninggal, terlambat, sekarat, binasa", level: "Lanjut"},
          {kanji: "中", kunyomi: "なか、 うち、 あた.る", onyomi: "チュウ", meaning: "di, di dalam, tengah, rata-rata, tengah", level: "Pemula"},
          {kanji: "学", kunyomi: "まな.ぶ", onyomi: "ガク", meaning: "belajar, sains", level: "Pemula"},
          {kanji: "校", kunyomi: "-", onyomi: "コウ、 キョウ", meaning: "ujian, sekolah, percetakan, bukti, koreksi", level: "Pemula"},
          {kanji: "入", kunyomi: "い.る、 い.り", onyomi: "ニュウ、 ジュ", meaning: "masukkan", level: "Pemula"},
          {kanji: "生", kunyomi: "い.きる、 い.かす", onyomi: "イ、 ショウ", meaning: "hidup, asli, lahir", level: "Pemula"},
          {kanji: "徒", kunyomi: "いたずら、 あだ", onyomi: "ト", meaning: "berjalan kaki, junior, kekosongan", level: "Lanjut"},
          {kanji: "未", kunyomi: "いま.だ、 ま.だ、 ひつじ", onyomi: "ミ、 ビ", meaning: "belum, sampai sekarang, masih", level: "Lanjut"},
          {kanji: "伝", kunyomi: "つた.わる、 つた.える", onyomi: "デン、 テン", meaning: "mengirimkan, ikut, berjalan bersama", level: "Lanjut"},
          {kanji: "石", kunyomi: "いし", onyomi: "セキ、 シャク、 コク", meaning: "batu", level: "Lanjut"},
          {kanji: "碑", kunyomi: "いしぶみ", onyomi: "ヒ", meaning: "batu nisan, monumen", level: "Mahir"},
          {kanji: "作", kunyomi: "つく.る、 つく.り、 づく.り", onyomi: "サク、 サ", meaning: "membuat, produksi, mempersiapkan, membangun", level: "Pemula"},
          {kanji: "計", kunyomi: "はか.る、 はか.らう", onyomi: "ケイ", meaning: "plot, rencana, skema, ukuran", level: "Pemula"},
          {kanji: "画", kunyomi: "えが.く、 かく.する", onyomi: "ガ、 カク、 エ、 カイ", meaning: "sapuan kuas, gambar", level: "Pemula"},
          {kanji: "所", kunyomi: "ところ、 ところ", onyomi: "ショ", meaning: "tempat, luas", level: "Pemula"},
          {kanji: "場", kunyomi: "ば", onyomi: "ジョウ、 チョウ", meaning: "lokasi, tempat", level: "Pemula"},
          {kanji: "考", kunyomi: "かんが.える、 かんが.えコウ", onyomi: "コウ", meaning: "pertimbangkan, pikirkan", level: "Pemula"},
          {kanji: "万", kunyomi: "よろず", onyomi: "マン、 バン", meaning: "10.000", level: "Pemula"},
          {kanji: "円", kunyomi: "まる.い、 まる", onyomi: "エン", meaning: "lingkaran, yen, bulat", level: "Pemula"},
          {kanji: "集", kunyomi: "あつ.まる、 あつ.める", onyomi: "シュウ", meaning: "berkumpul, bertemu, berkerumun, berduyun-duyun", level: "Pemula"},
          {kanji: "過", kunyomi: "す.ぎる、 す.ごす", onyomi: "カ", meaning: "berlebihan, melebihi, melampaui, kesalahan", level: "Lanjut"},
          {kanji: "番", kunyomi: "つが.い", onyomi: " バン", meaning: "giliran, nomor seri", level: "Lanjut"},
          {kanji: "目", kunyomi: "め、 め、 ま-", onyomi: "モク、 ボク", meaning: "mata, kelas, lihat, wawasan", level: "Pemula"},
          {kanji: "活", kunyomi: "い.きる、 い.かす", onyomi: "カツ", meaning: "hidup, resusitasi, dibantu, hidup", level: "Lanjut"},
          {kanji: "動", kunyomi: "うご.く、 うご.かす", onyomi: "ドウ", meaning: "bergerak, gerak, perubahan", level: "Pemula"},
          {kanji: "続", kunyomi: "つづ.く、 つづ.ける", onyomi: "ゾク、 ショク、 コウ", meaning: "lanjutkan, seri, sekuel", level: "Mahir"},
          {kanji: "卒", kunyomi: "そっ.する、 お.える", onyomi: " ソツ、 シュツ", meaning: "lulusan, tentara, swasta, mati", level: "Lanjut"},
          {kanji: "業", kunyomi: "わざ", onyomi: "ギョウ、 ゴウ", meaning: "bisnis, panggilan, seni, pertunjukan", level: "Pemula"},
          {kanji: "新", kunyomi: "あたら.しい、 あら.た", onyomi: "シン", meaning: "baru", level: "Pemula"},
          {kanji: "発", kunyomi: "た.つ、 あば.く", onyomi: "ハツ、 ホツ", meaning: "keberangkatan, pelepasan, publikasikan", level: "Pemula"},
          {kanji: "表", kunyomi: "おもて、 おもて", onyomi: "ヒョウ", meaning: "permukaan, tabel, bagan, diagram", level: "Lanjut"},
          {kanji: "式", kunyomi: "-", onyomi: "シキ", meaning: "gaya, upacara, ritus, fungsi,", level: "Lanjut"},
          {kanji: "行", kunyomi: "い.く、 ゆ.く", onyomi: "コウ、 ギョウ、 アン", meaning: "pergi, perjalanan, melaksanakan", level: "Pemula"},
          {kanji: "鈴", kunyomi: "すず", onyomi: "レイ、 リン", meaning: "bel kecil, bel", level: "Mahir"},
          {kanji: "木", kunyomi: "き、 こ-", onyomi: "ボク、 モク", meaning: "pohon, kayu", level: "Pemula"},
          {kanji: "智", kunyomi: "-", onyomi: "チ", meaning: "kebijaksanaan, kecerdasan, akal", level: "Mahir"},
          {kanji: "修", kunyomi: "おさ.める、 おさ.まる", onyomi: "シュウ、 シュ", meaning: "disiplin, berperilaku baik, belajar, menguasai", level: "Mahir"},
          {kanji: "旅", kunyomi: "たび", onyomi: "リョ", meaning: "perjalanan", level: "Lanjut"},
          {kanji: "案", kunyomi: "つくえ", onyomi: "アン", meaning: "rencana, saran, draf, merenungkan", level: "Mahir"},
          {kanji: "内", kunyomi: "うち", onyomi: "ナイ", meaning: "di dalam, di antara, di antara, rumah", level: "Lanjut"},
          {kanji: "後", kunyomi: "のち、 うし.ろ", onyomi: "ゴ、 コウ", meaning: "belakang, nanti", level: "Pemula"},
          {kanji: "僕", kunyomi: "しもべ", onyomi: "ボク", meaning: "saya, saya (laki-laki), hamba, hamba laki-laki", level: "Mahir"},
          {kanji: "経", kunyomi: "へ.る、 た.つ", onyomi: "ケイ、 キョウ、 キン", meaning: "sutra, garis bujur, melewati", level: "Lanjut"},
          {kanji: "験", kunyomi: "あかし、 しるし", onyomi: "ケン、 ゲン", meaning: "verifikasi, efek, pengujian", level: "Pemula"},
          {kanji: "話", kunyomi: "はな.す、 はなし", onyomi: "ワ", meaning: "cerita, bicara", level: "Pemula"},
        ],
        quiz: [
          {questionTitle: "Apakah arti kanji berikut ini?", answers: ["Bicara", "Bepergian", "Tidur", "Makan"], correctAnswerIndex: 0, isKanji: true, kanjitext: "話"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["のち", " すず", "いし", "のり"], correctAnswerIndex: 2, isKanji: true, kanjitext: "石 "},
          {questionTitle: "Apakah arti kanji berikut ini?", answers: ["Di luar", "Di dalam", "Di samping", "Di depan"], correctAnswerIndex: 1, isKanji: true, kanjitext: "内"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["し", "る", "ざ", "め"], correctAnswerIndex: 3, isKanji: true, kanjitext: "目"},
          {questionTitle: "Di manakah monumen batu kehidupan berada?", answers: ["Onagawa", "Yokohama", "Shinjuku", "Nagasaki"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""},
          {questionTitle: "Apakah arti kanji berikut ini?", answers: ["Seni", "Galeri", "Lagu", "Rekreasi"], correctAnswerIndex: 0, isKanji: true, kanjitext: "業 "},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["はなし", "はか.る", "つくえ", "つく.る"], correctAnswerIndex: 3, isKanji: true, kanjitext: "作"},
          {questionTitle: "Apakah arti kanji berikut ini?", answers: ["Besi", "Batu", "Kayu", "Beton"], correctAnswerIndex: 1, isKanji: true, kanjitext: "石"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["あか", "たび", "くち", "わざ"], correctAnswerIndex: 2, isKanji: true, kanjitext: "口"},
          {questionTitle: "Berapa orang yg meninggal dalam Tsunami yang melanda prefektur Miyagi tahun 2011?", answers: ["800 orang", "600 orang", "500 orang", "700 orang"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""}
        ],
        quizscore: 0
      },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/aldinportfolioapis.appspot.com/o/katakanji%2Fmarriage.png?alt=media&token=e1f31ccd-88bc-4685-9450-778227eba1ae",
        titleJP: "日本代表MF伊東純也、自身の公式SNSで結婚発表「これまで以上に努力していきたい」",
        titleID: "MF Tim nasional Jepang Junya Ito mengumumkan pernikahan di SNS resminya \"Saya ingin bekerja lebih keras dari sebelumnya\"",
        level: "Pemula",
        topic: "Olahraga",
        articleJP: "日本代表MFの伊東純也（ヘンク/ベルギー）が23日に自身の公式Instagramを更新し、お付き合いをしていた一般女性と結婚したことを報告した。現在28歳の伊東はヴァンフォーレ甲府でプロデビューを果たすと、2016年に柏レイソルへ移籍した。\n 在籍3シーズンで公式戦通算20得点を挙げた同選手は、2019年2月にヘンクへ入。今シーズンは公式戦18試合に出場し2ゴール7アシストを挙げている。\n 伊東は自身の公式Instagramを更新し、結婚を発表。以下のようにコメントを綴った。「ご報告。私事ではありますが、お付き合いしていた一般女性の方と結婚いたしました。これまで以上に努力していきたいと思います。今後ともよろしくお願いします」",
        articleID: "Gelandang tim nasional Jepang Junya Ito (Henk / Belgia) memperbarui Instagram resminya pada tanggal 23, melaporkan bahwa dia menikah dengan seorang wanita umum yang dia kencani. \n Ito, sekarang berusia 28 tahun, melakukan debut profesionalnya di Ventforet Kofu dan ditransfer ke Kashiwa Reysol pada 2016. Pemain yang mencetak 20 gol dalam pertandingan resmi dalam tiga musimnya itu bergabung dengan Genk pada Februari 2019. Musim ini, ia telah berpartisipasi dalam 18 pertandingan resmi dan telah mencetak 2 gol dan 7 assist. \n Ito memperbarui Instagram resminya dan mengumumkan pernikahannya. Saya mengeja komentar sebagai berikut.\"Laporkan. Ini masalah pribadi, tapi saya menikah dengan seorang wanita umum yang saya kencani. Saya ingin bekerja lebih keras dari sebelumnya. Terima kasih atas dukungan Anda yang berkelanjutan.\"",
        articleSource: "https://news.yahoo.co.jp/articles/741f4c51b5fdaf9b2ac27b6c6b6e2b3a84dd73e4",
        isSeen: false,
        isQuizTaken: false,
        kanji: [
          {kanji: "日", kunyomi: "ひ、 び、", onyomi: "ニチ", meaning: "hari, matahari", level: "Pemula"},
          {kanji: "本", kunyomi: "もと", onyomi: "ホン", meaning: "buku, sekarang, utama,", level: "Pemula"},
          {kanji: "代", kunyomi: " か.わる, 、 かわ.る", onyomi: "ダイ、 タイ", meaning: "mengganti, mengubah", level: "Pemula"},
          {kanji: "表", kunyomi: "おもて、 おもて", onyomi: "ヒョウ", meaning: "permukaan, tabel", level: "Lanjut"},
          {kanji: "伊", kunyomi: "かれ", onyomi: "イ", meaning: "Italia, yang itu", level: "Mahir"},
          {kanji: "東", kunyomi: "ひがし", onyomi: "トウ", meaning: "Timur", level: "Pemula"},
          {kanji: "純", kunyomi: "-", onyomi: " ジュン", meaning: "asli, kemurnian", level: "Mahir"},
          {kanji: "也", kunyomi: " なり、 か", onyomi: " ヤ、 エ", meaning: "menjadi (klasik)", level: "Mahir"},
          {kanji: "自", kunyomi: " みずか.ら", onyomi: " ジ、 シ", meaning: "diri", level: "Pemula"},
          {kanji: "身", kunyomi: "み", onyomi: "シン", meaning: "seseorang, orang", level: "Pemula"},
          {kanji: "公", kunyomi: " おおやけ", onyomi: "コウ、 ク", meaning: "publik, pangeran", level: "Pemula"},
          {kanji: "式", kunyomi: "-", onyomi: " シキ", meaning: "gaya, upacara", level: "Lanjut"},
          {kanji: "更", kunyomi: " さら、 さら.に", onyomi: "コウ", meaning: "baris terlambat", level: "Lanjut"},
          {kanji: "新", kunyomi: " あたら.しい", onyomi: "シン", meaning: "Baru", level: "Pemula"},
          {kanji: "付", kunyomi: "つ.ける、 つ.ける", onyomi: "フ", meaning: "mematuhi, melampirkan", level: "Lanjut"},
          {kanji: "合", kunyomi: "あ.う、 あ.う", onyomi: " ゴウ、 ガッ", meaning: "Cocok, Bergabung", level: "Lanjut"},
          {kanji: "一", kunyomi: "ひと-、 ひと.つ", onyomi: "イチ、 イツ", meaning: "satu, satu radikal (no.1)", level: "Pemula"},
          {kanji: "般", kunyomi: "般", onyomi: "ハン", meaning: "pembawa, membawa", level: "Mahir"},
          {kanji: "女", kunyomi: " おんな、 め", onyomi: "ジョ、 ニョ", meaning: "wanita, perempuan", level: "Pemula"},
          {kanji: "性", kunyomi: "さが", onyomi: "セイ、 ショウ", meaning: "jenis kelamin, sifat", level: "Lanjut"},
          {kanji: "結", kunyomi: "むす.ぶ、 ゆ.う", onyomi: "ケツ、 ケチ", meaning: "mengikat, kontrak", level: "Mahir"},
          {kanji: "婚", kunyomi: "-", onyomi: "コン", meaning: "pernikahan", level: "Lanjut"},
          {kanji: "報", kunyomi: "むく.いる", onyomi: "ホウ", meaning: "laporan, berita", level: "Lanjut"},
          {kanji: "告", kunyomi: "つ.げる", onyomi: "コク", meaning: "mengumumkan, menginformasikan", level: "Lanjut"},
          {kanji: "現", kunyomi: " あらわ.れる、 あらわ.す", onyomi: "ゲン", meaning: "sekarang, ada, aktual", level: "Lanjut"},
          {kanji: "在", kunyomi: "あ.る", onyomi: "ザイ", meaning: "ada, pinggiran", level: "Lanjut"},
          {kanji: "歳", kunyomi: "とし、 とせ", onyomi: "サイ、 セイ", meaning: "akhir tahun, usia", level: "Lanjut"},
          {kanji: "甲", kunyomi: "きのえ", onyomi: "コウ、 カン", meaning: "baju besi, tinggi (suara)", level: "Mahir"},
          {kanji: "府", kunyomi: "-", onyomi: "フ", meaning: "borough, prefektur perkotaan", level: "Mahir"},
          {kanji: "果", kunyomi: "てる、 は.て", onyomi: "カ", meaning: "buah, hadiah, laksanakan", level: "Lanjut"},
          {kanji: "年", kunyomi: "とし", onyomi: "ネン", meaning: "tahun, penghitung untuk tahun", level: "Pemula"},
          {kanji: "柏", kunyomi: "かしわ", onyomi: "ハク、 ヒャク", meaning: "ek, cemara", level: "Mahir"},
          {kanji: "移", kunyomi: "うつ.る、 うつ.す", onyomi: "イ", meaning: "bergeser, bergerak", level: "Mahir"},
          {kanji: "籍", kunyomi: "-", onyomi: "セキ", meaning: "mendaftar, daftar domisili", level: "Mahir"},
          {kanji: "通", kunyomi: "どお.し、 かよ.う", onyomi: "ツウ、 ツ", meaning: "lalu lintas, melewati", level: "Pemula"},
          {kanji: "算", kunyomi: "そろ", onyomi: "サン", meaning: "menghitung, meramal", level: "Mahir"},
          {kanji: "得", kunyomi: "え.る、 う.る", onyomi: "トク", meaning: "mendapatkan, menemukan, ", level: "Lanjut"},
          {kanji: "点", kunyomi: "とも.す、 ぼち", onyomi: " テン", meaning: "titik, titik desimal", level: "Lanjut"},
          {kanji: "挙", kunyomi: "あ.がる、 こぞ.る", onyomi: "キョ", meaning: "perilaku, tindakan", level: "Mahir"},
          {kanji: "同", kunyomi: "おな.じ", onyomi: "ドウ", meaning: "sama, setuju", level: "Pemula"},
          {kanji: "選", kunyomi: "え.る、 よ.る", onyomi: "セン", meaning: "memilih", level: "Pemula"},
          {kanji: "手", kunyomi: "て、 た-", onyomi: "シュ、 ズ", meaning: "tangan", level: "Pemula"},
          {kanji: "月", kunyomi: "つき", onyomi: "ゲツ、 ガツ", meaning: "bulan", level: "Pemula"},
          {kanji: "加", kunyomi: "くわ.える、 くわ.わる", onyomi: "カ", meaning: "tambahkan, tambah", level: "Lanjut"},
          {kanji: "入", kunyomi: "はい.る", onyomi: " ニュウ、 ジュ", meaning: "masukkan", level: "Lanjut"},
          {kanji: "今", kunyomi: "いま", onyomi: "コン、 キン", meaning: "sekarang", level: "Pemula"},
          {kanji: "試", kunyomi: "こころ.みる、 ため.す", onyomi: "シ", meaning: "uji, coba, percobaan, cobaan", level: "Pemula"},
          {kanji: "出", kunyomi: "い.でる、 い.だす", onyomi: "シュツ、 スイ", meaning: "keluar, menonjol", level: "Pemula"},
          {kanji: "場", kunyomi: "ば", onyomi: "ジョウ、 チョウ", meaning: "lokasi, tempat", level: "Pemula"},
          {kanji: "発", kunyomi: " はな.つ", onyomi: "ハツ、 ホツ", meaning: "keberangkatan, pelepasan, publikasikan", level: "Pemula"},
          {kanji: "以", kunyomi: "もっ.て", onyomi: "イ", meaning: "karena, mengingat", level: "Pemula"},
          {kanji: "下", kunyomi: "した、 お.りる", onyomi: "カ、 ゲ", meaning: "bawah, turun", level: "Pemula"},
          {kanji: "綴", kunyomi: "と.じる、 つづ.る", onyomi: "テチ、 ゲツ", meaning: "mengarang, mengejar", level: "Mahir"},
          {kanji: "私", kunyomi: "わたくし、 わたし", onyomi: "シ", meaning: "pribadi, saya", level: "Pemula"},
          {kanji: "事", kunyomi: "こと、 つか.う", onyomi: "ジ、 ズ", meaning: "masalah, hal, fakta", level: "Pemula"},
          {kanji: "方", kunyomi: "かた、 かた", onyomi: "ホウ", meaning: "arah, orang,", level: "Pemula"},
          {kanji: "上", kunyomi: "うえ、 うえ, がた", onyomi: "ジョウ、 ショウ", meaning: "atas", level: "Pemula"},
          {kanji: "努", kunyomi: "つと.める", onyomi: "ド", meaning: "jerih payah, rajin", level: "Lanjut"},
          {kanji: "力", kunyomi: "ちから", onyomi: "リョク、 リキ", meaning: "kuat, regangan", level: "Pemula"},
          {kanji: "思", kunyomi: "おも.う、 おもえら.く", onyomi: "シ", meaning: "pikir, memikirkan", level: "Pemula"},
          {kanji: "後", kunyomi: "のち、 うし.ろ", onyomi: "ゴ、 コウ", meaning: "belakang, nanti", level: "Pemula"},
          {kanji: "願", kunyomi: "ねが.う、 ねがい", onyomi: "ガン", meaning: "petisi, permintaan", level: "Lanjut"},
        ],
        quiz: [
          {questionTitle: "Apa Makna Kanji ini?", answers: ["Matahari","bulan","bintang","pelangi"], correctAnswerIndex: 0, isKanji: true, kanjitext: "日"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini? ", answers: ["ねがい","わたし","ちから","うえ"], correctAnswerIndex: 1, isKanji: true, kanjitext: "私"},
          {questionTitle: "Apa Makna Kanji ini?", answers: ["pensil", "penggaris","buku", "tas"], correctAnswerIndex: 2, isKanji: true, kanjitext: "本"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["おも", "がた", "いま","こと"], correctAnswerIndex: 3, isKanji: true, kanjitext: "事"},
          {questionTitle: "Berapa pertandingan yang telah dimainkan Junya Ito pada musim ini? ", answers: ["18","16","17","15"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""},
          {questionTitle: "Apa Makna Kanji ini?", answers: ["membayar","mengganti","menetapkan", "menggenapkan"], correctAnswerIndex: 1, isKanji: true, kanjitext: "代"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["いま","おも","がた","がた"], correctAnswerIndex: 3, isKanji: true, kanjitext: "方"},
          {questionTitle: "Apa Makna Kanji ini?", answers: ["timur", "barat", "utara", "selatan"], correctAnswerIndex: 0, isKanji: true, kanjitext: "東"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["がた","うえ", "いま", "かれ"], correctAnswerIndex: 0, isKanji: true, kanjitext: "上"},
          {questionTitle: "Di sosial media mana Junya Ito mengumumkan pernikahannya?", answers: [ "facebook", "twitter", "Instagram", "Tiktok"], correctAnswerIndex: 2, isKanji: false, kanjitext: ""},
        ],
        quizscore: 0
      },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/aldinportfolioapis.appspot.com/o/katakanji%2Fchrome.png?alt=media&token=cd5d8fdb-aafb-40e3-86b1-721e63abb4ed",
        titleJP: "Chromeを｢メモ帳化｣できるおすすめウェブツール3選",
        titleID: "3 Alat Web yang Direkomendasikan Yang Dapat Membuat Chrome \"Notepad\"",
        level: "Pemula",
        topic: "Teknologi",
        articleJP: "1. Papier \n Chromeをメモ代わりにするには、無料のブラウザ拡張機能｢Papier｣をインストールしましょう。インストールしたら、タブを開き、頭に浮かんだことを何でも書き留めます。\n 2. Litewrite \n 同じようなオプションとして、オープンソースのアプリ｢Litewrite｣もあります。 \n アドレスバーに｢[litewrite.net](http://litewrite.net/)｣を入力して開くだけで、Chromeがメモ帳になります。このアプリはオフラインでも使用できるので、インターネット接続ができない時にも使えます。\n 3. コードスニペット \n Chromeをメモ帳として使うもう1つの方法は、**以下のコードスニペットをアドレスバーにコピー＆ペーストするやり方 @**です。あとは｢**Enter**｣を押せば、タブがメモ帳になります。ただし、タブを閉じたら、書いたものが消えてしまうので気をつけてください。ブラウザのセッションを終える前に、タブに書いたテキストを普通のテキストエディタに移して、保存するのをお忘れなく。",
        articleID: "1. Papier \n Untuk menggunakan Chrome sebagai memo, pasang ekstensi peramban gratis \"Papier\". Setelah terinstal, buka tab dan tuliskan apa pun yang muncul di pikiran Anda. \n 2. Literate \n Opsi serupa adalah aplikasi open source \"Litewrite\". \n Cukup ketik \"[[litewrite.net](http://litewrite.net/)] ([http://litewrite.net/](http://litewrite.net/))\" di bilah alamat dan buka untuk mengubah Chrome menjadi Notepad. Aplikasi ini dapat digunakan secara offline, sehingga Anda dapat menggunakannya meskipun tidak dapat terhubung ke internet. \n 3. Cuplikan kode\n Cara lain untuk menggunakan Chrome sebagai notepad adalah dengan ** menyalin dan menempelkan cuplikan kode berikut ke bilah alamat **. \n Kemudian tekan \"** Enter **\" dan tab tersebut akan menjadi Notepad. Namun, perlu diketahui bahwa jika Anda menutup tab, tulisan Anda akan hilang. \n Jangan lupa untuk memindahkan teks yang Anda tulis di tab ke editor teks biasa dan simpan sebelum Anda mengakhiri sesi browser Anda.",
        articleSource: "https://www.lifehacker.jp/2021/11/2459413-quick-ways-to-turn-a-chrome-tab-into-a-notepad.html",
        isSeen: false,
        isQuizTaken: false,
        kanji: [
          {kanji: "代", kunyomi: "か.わる、 かわ.る", onyomi: "ダイ、 タイ", meaning: "mengganti, mengubah", level: "Pemula"},
          {kanji: "無", kunyomi: "な.い", onyomi: "ム、 ブ", meaning: "ketiadaan, tidak ada", level: "Pemula"},
          {kanji: "料", kunyomi: "-", onyomi: "リョウ", meaning: "biaya, bahan", level: "Pemula"},
          {kanji: "拡", kunyomi: "ひろ.がる、 ひろ.げる", onyomi: "カク、 コウ", meaning: "memperluas, memperbesar", level: "Mahir"},
          {kanji: "張", kunyomi: "は.る、 は.り", onyomi: "チョウ", meaning: "memperpanjang, meregangkan", level: "Mahir"},
          {kanji: "機", kunyomi: "はた", onyomi: "キ", meaning: "peluang, potensi", level: "Lanjut"},
          {kanji: "能", kunyomi: "よ.く、 あた.う", onyomi: "ノウ", meaning: "kemampuan, bakat", level: "Lanjut"},
          {kanji: "開", kunyomi: "ひら.く、 ひら.き", onyomi: "カイ", meaning: "buka, segel", level: "Pemula"},
          {kanji: "頭", kunyomi: "あたま、 かしら", onyomi: "トウ、 ズ、 ト", meaning: "kepala, pikiran", level: "Lanjut"},
          {kanji: "浮", kunyomi: "う.く、 う.かれる", onyomi: "フ", meaning: "mengambang, mengapung", level: "Lanjut"},
          {kanji: "何", kunyomi: "なに、 なん", onyomi: "カ", meaning: "apa", level: "Pemula"},
          {kanji: "書", kunyomi: "か.く、 が.き", onyomi: "ショ", meaning: "tulis", level: "Pemula"},
          {kanji: "留", kunyomi: "と.める、 と.まる", onyomi: "リュウ、 ル", meaning: "menahan, kencangkan", level: "Lanjut"},
          {kanji: "同", kunyomi: "おな.じ", onyomi: "ドウ", meaning: "sama, setuju", level: "Pemula"},
          {kanji: "入", kunyomi: "い.る、 い.る", onyomi: "ニュウ、 ジュ", meaning: "Masukan", level: "Pemula"},
          {kanji: "力", kunyomi: "ちから", onyomi: "リョク、 リキ", meaning: "kekuatan, kuat", level: "Pemula"},
          {kanji: "帳", kunyomi: "とばり", onyomi: "チョウ", meaning: "buku catatan, buku akun", level: "Mahir"},
          {kanji: "使", kunyomi: "つか.う、 つか.い", onyomi: "シ", meaning: "gunakan, kirim misi", level: "Pemula"},
          {kanji: "用", kunyomi: "もち.いる", onyomi: "ヨウ", meaning: "memanfaatkan, bisnis", level: "Pemula"},
          {kanji: "接", kunyomi: "つ.ぐ", onyomi: "セツ、 ショウ", meaning: "sentuh, hubungi", level: "Lanjut"},
          {kanji: "続", kunyomi: "つづ.く、 つづ.ける", onyomi: "ゾク、 ショク", meaning: "lanjutkan, seri", level: "Lanjut"},
          {kanji: "時", kunyomi: "とき、 どき", onyomi: "ジ", meaning: "waktu, jam", level: "Pemula"},
          {kanji: "方", kunyomi: "かた、 かた", onyomi: "ホウ", meaning: "arah, orang", level: "Pemula"},
          {kanji: "法", kunyomi: "のり", onyomi: "ホウ、 ハッ", meaning: "metode, hukum", level: "Lanjut"},
          {kanji: "以", kunyomi: "もっ.て", onyomi: "イ", meaning: "dengan cara, karena", level: "Pemula"},
          {kanji: "下", kunyomi: "した、 しも", onyomi: "カ、 ゲ", meaning: "bawah, turun", level: "Pemula"},
          {kanji: "押", kunyomi: "お.す、 お.し-", onyomi: "オウ", meaning: "dorong, hentikan", level: "Lanjut"},
          {kanji: "閉", kunyomi: "と.じる、 と.ざす", onyomi: "ヘイ", meaning: "tutup", level: "Lanjut"},
          {kanji: "消", kunyomi: "き.える、 け.す", onyomi: "ショウ", meaning: "memadamkan, meniup", level: "Lanjut"},
          {kanji: "気", kunyomi: "き", onyomi: "キ、 ケ", meaning: "semangat, pikiran", level: "Lanjut"},
          {kanji: "終", kunyomi: "お.わる、 お.わる", onyomi: "シュウ", meaning: "akhir, selesai", level: "Pemula"},
          {kanji: "前", kunyomi: "まえ、 まえ", onyomi: "ゼン", meaning: "di depan, sebelum", level: "Pemula"},
          {kanji: "普", kunyomi: "あまね.く、 あまねし", onyomi: "フ", meaning: "Universal", level: "Lanjut"},
          {kanji: "通", kunyomi: "とお.る", onyomi: "ツウ", meaning: "Lalu Lintas, melewati", level: "Pemula"},
          {kanji: "保", kunyomi: "たも.つ", onyomi: "ホ、 ホウ", meaning: "melindungi, menjamin", level: "Mahir"},
          {kanji: "存", kunyomi: " ながら.える、 あ.る", onyomi: "ソン、 ゾン", meaning: "ada, anggaplah", level: "Lanjut"},
          {kanji: "忘", kunyomi: "わす.れる", onyomi: "ボウ", meaning: "lupa", level: "Lanjut"},
        ],
        quiz: [
          {questionTitle: "Apa Makna Kanji ini?", answers: ["tidak ada", "tidak kecil", "tidak benar", "tidak bisa"], correctAnswerIndex: 0, isKanji: true, kanjitext: "無"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["tutup", "buka","mulai", "selesai"], correctAnswerIndex: 1, isKanji: true, kanjitext: "開"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["もち.いる", "とお.る", "ながら.える", "たも.つ"], correctAnswerIndex: 0, isKanji: true, kanjitext: "用"},
          {questionTitle: "Aplikasi mana yang bisa digunakan secara online", answers: ["Papier", "Chrome","Literate", "Office 360"], correctAnswerIndex: 2, isKanji: false, kanjitext: ""},
          {questionTitle: "Apa Makna Kanji ini?", answers: ["jika", "saya", "kata", "sama"], correctAnswerIndex: 3, isKanji: true, kanjitext: "同"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["たも", "かた", "れる", "まえ"], correctAnswerIndex: 1, isKanji: true, kanjitext: "方"},
          {questionTitle: "Apa Makna Kanji ini?", answers: ["Tulisan", "Telepon", "Waktu", "Musik"], correctAnswerIndex: 2, isKanji: true, kanjitext: "時"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["たも", "れる", "まえ","した"], correctAnswerIndex: 3, isKanji: true, kanjitext: "下"},
          {questionTitle: "Apa yang terjadi bila tab notepad ditutup?", answers: ["tulisan hilang", "tulisan tersimpan", "tulisan terpublikasi", "tulisan terkirim"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""}
        ],
        quizscore: 0
      },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/aldinportfolioapis.appspot.com/o/katakanji%2Fvolcano.png?alt=media&token=fb9761a2-284a-48a9-9d41-a4972104358e",
        titleJP: "火山のふん火と地形の変化",
        titleID: "Letusan vulkanik dan perubahan topografi",
        level: "Pemula",
        topic: "Edukasi",
        articleJP: "これは日本で起きた火山の噴火の様子です。火口から溶岩が勢いよく流れ出ているのがわかります。噴き出されるものは、溶岩だけではありません。石や火山灰、火山ガスなども出てくるのです。噴火で噴き出された、灰や石は山のまわりに積もります。また、溶岩が流れ出たあと、徐々に冷えて固まります。こうして、噴火によって吹き出た物は山やそのまわりの地形を変えていきます。地球上のいたるところでくり返されてきた火山の噴火。そのたびに、土地は形を変えてきたのです。",
        articleID: "Ini adalah letusan gunung berapi di Jepang. Anda dapat melihat bahwa lava mengalir keluar dari kawah dengan deras. Lava bukan satu-satunya yang dikeluarkan. Batu, abu vulkanik, dan gas vulkanik juga keluar. Abu dan batu yang meletus akibat letusan menumpuk di sekitar gunung. Juga, setelah lava mengalir keluar, secara bertahap mendingin dan mengeras. Dengan cara ini, benda-benda yang diledakkan oleh letusan mengubah medan gunung dan sekitarnya. Letusan gunung berapi berulang di seluruh dunia. Setiap kali, tanah telah berubah bentuk.",
        articleSource: "https://www.nhk.or.jp/school/",
        isSeen: false,
        isQuizTaken: false,
        kanji: [
          {kanji: "日", kunyomi: "ひ", onyomi: "ニチ、 ジツ", meaning: "hari, matahari", level: "Pemula"},
          {kanji: "本", kunyomi: "もと", onyomi: "ホン", meaning: "buku, sekarang", level: "Pemula"},
          {kanji: "起", kunyomi: "お.きる", onyomi: "キ", meaning: "bangun", level: "Pemula"},
          {kanji: "火", kunyomi: "ひ、 -び", onyomi: "カ", meaning: "api", level: "Pemula"},
          {kanji: "山", kunyomi: "やま", onyomi: "サン、 セン", meaning: "gunung", level: "Pemula"},
          {kanji: "噴", kunyomi: "ふ.く", onyomi: "フン", meaning: "meletus, menyemburkan", level: "Mahir"},
          {kanji: "様", kunyomi: "さま、 さん", onyomi: "ヨウ、 ショウ", meaning: "cara, situasi", level: "Lanjut"},
          {kanji: "子", kunyomi: "こ、 -こ", onyomi: "シ、 ス", meaning: "anak, tanda tikus", level: "Pemula"},
          {kanji: "口", kunyomi: "くち", onyomi: "コウ、 ク", meaning: "mulut", level: "Pemula"},
          {kanji: "溶", kunyomi: "と.ける、 と.かす", onyomi: "ヨウ", meaning: "meleleh, larut, mencair", level: "Mahir"},
          {kanji: "岩", kunyomi: "いわ", onyomi: "ガン", meaning: "batu besar, batu, tebing", level: "Mahir"},
          {kanji: "勢", kunyomi: "いきお.い", onyomi: "セイ、 ゼイ", meaning: "kekuatan, energi", level: "Mahir"},
          {kanji: "流", kunyomi: "なが.れる", onyomi: "リュウ、 ル", meaning: "arus, wastafel", level: "Lanjut"},
          {kanji: "出", kunyomi: "で.る", onyomi: "シュツ、 スイ", meaning: "keluar, menonjol", level: "Pemula"},
          {kanji: "石", kunyomi: "いし", onyomi: "セキ、 シャク", meaning: "batu", level: "Lanjut"},
          {kanji: "灰", kunyomi: "はい", onyomi: "カイ", meaning: "abu", level: "Mahir"},
          {kanji: "積", kunyomi: "つ.む、 -づ.み", onyomi: "セキ", meaning: "volume", level: "Lanjut"},
          {kanji: "徐", kunyomi: "おもむ.ろに", onyomi: "ジョ", meaning: "pelan-pelan, dengan sengaja", level: "Mahir"},
          {kanji: "冷", kunyomi: "つめ.たい、 ひ.える", onyomi: "レイ", meaning: "dingin, (bir, orang)", level: "Lanjut"},
          {kanji: "固", kunyomi: "かた.める", onyomi: "コ", meaning: "mengeras, mengatur", level: "Mahir"},
          {kanji: "吹", kunyomi: "ふ.く", onyomi: "スイ", meaning: "tiup, hirup", level: "Lanjut"},
          {kanji: "物", kunyomi: "もの、 もの-", onyomi: "ブツ、 モツ", meaning: "hal, objek, materi", level: "Pemula"},
          {kanji: "地", kunyomi: "-", onyomi: "チ、 ジ", meaning: "tanah, bumi", level: "Lanjut"},
          {kanji: "形", kunyomi: "かた", onyomi: "ケイ、 ギョウ", meaning: "bentuk, gaya", level: "Pemula"},
          {kanji: "変", kunyomi: "か.わる", onyomi: "ヘン", meaning: "tidak biasa, berubah", level: "Lanjut"},
          {kanji: "球", kunyomi: "たま", onyomi: "キュウ", meaning: "bola, bidang", level: "Pemula"},
          {kanji: "上", kunyomi: "うえ", onyomi: "ジョウ", meaning: "atas", level: "Pemula"},
          {kanji: "返", kunyomi: "かえ.す", onyomi: "ヘン", meaning: "kembali, jawab, pudar", level: "Lanjut"},
          {kanji: "土", kunyomi: "つち", onyomi: "ド、 ト", meaning: "tanah, bumi, Turki", level: "Pemula"},
        ],
        quiz: [
          {questionTitle: "Apakah arti kanji ini?", answers: ["Bawah", "Kiri","Atas", "Kanan"], correctAnswerIndex: 2, isKanji: true, kanjitext: "上"},
          {questionTitle: "Apa yang dikeluarkan gunung berapi saat meletus?", answers: ["Lava", "Logam", "Oksigen", "Air"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""},
          {questionTitle: "Apakah arti kanji ini?", answers: ["Api", "Air", "Udara", "Bumi"], correctAnswerIndex: 3, isKanji: true, kanjitext: "地"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["やま", "つち", "もの", "くち"], correctAnswerIndex: 0, isKanji: true, kanjitext: "山"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["もの", "たま", "はい", "もと"], correctAnswerIndex: 0, isKanji: true, kanjitext: "物"},
          {questionTitle: "Setelah lava keluar secara bertahap maka akan mendingin dan?", answers: ["Mengeras", "Mengendap", "Meleleh", "Menguap"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""},
          {questionTitle: "Apakah arti kanji ini?", answers: ["Bola", "Abu", "Arus", "Batu"], correctAnswerIndex: 3, isKanji: true, kanjitext: "石 "},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["ふ.く","つち", "つち", "もの", "くち"], correctAnswerIndex: 0, isKanji: true, kanjitext: "土"},
          {questionTitle: "Apakah arti kanji ini?", answers: ["Telinga", "Mata", "Mulut", "Hidung"], correctAnswerIndex: 2, isKanji: true, kanjitext: "口 "},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji ini?", answers: ["はい","ふ.く", "いわ,", "いし"], correctAnswerIndex: 1, isKanji: true, kanjitext: "吹"},
        ],
        quizscore: 0
      },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/aldinportfolioapis.appspot.com/o/katakanji%2Fautumn.png?alt=media&token=4074a984-9c16-4e61-ac6b-fc0853b7bb06",
        titleJP: "奈良市の公園　紅葉が今いちばんきれい",
        titleID: "Daun musim gugur di taman adalah yang paling indah sekarang",
        level: "Pemula",
        topic: "Pariwisata",
        articleJP: "奈良市にある奈良公園では、今月初めから紅葉が始まりました。公園には800本ぐらいのカエデの木があります。だんだん寒くなって、赤くなった葉は今いちばんきれいです。\n公園には、たくさんの人が朝早くから来ています。カエデの葉は、朝の日が当たって光っているように見えます。見に来た人は、カエデの写真を撮ったり、寒くて息が白くなっている鹿を見たりして楽しんでいました。\n東京から来た人は「新型コロナウイルスの問題で旅行に行かないようにしていました。こんなにいい景色を見ると、いつでも旅行ができるようになってほしいと思います」と話していました。\n奈良公園の紅葉は、12月上旬まで楽しむことができそうです。",
        articleID: "Di Taman Nara di Kota Nara, dedaunan musim gugur dimulai awal bulan ini. Ada sekitar 800 pohon maple di taman ini. Daun yang semakin dingin dan merah adalah yang paling indah sekarang. \nBanyak orang datang ke taman di pagi hari. Daun maple tampak bersinar di bawah sinar matahari pagi. Orang-orang yang datang untuk melihatnya senang mengambil gambar pohon maple dan melihat rusa yang dingin dan bernapas putih.\nSeseorang dari Tokyo berkata, \"Saya berusaha untuk tidak melakukan perjalanan karena masalah virus corona baru. Saya harap saya dapat bepergian kapan saja ketika saya melihat pemandangan yang begitu indah.\"\nDedaunan musim gugur di Nara Park bisa dinikmati hingga awal Desember.",
        articleSource: "http://easyjapanese.net/detail/c841d46c3835d6457a48fc3b6a8621b6?hl=en-US",
        isSeen: false,
        isQuizTaken: false,
        kanji: [
          {kanji: "奈", kunyomi: "いかん、 からなし", onyomi: "ナ、 ナイ、 ダイ", meaning: "Nara, apa?", level: "Mahir"},
          {kanji: "良", kunyomi: "よ.い、 -よ.い", onyomi: "リョウ", meaning: "baik, menyenangkan, terampil", level: "Lanjut"},
          {kanji: "市", kunyomi: "いち", onyomi: "シ", meaning: "pasar, kota", level: "Lanjut"},
          {kanji: "公", kunyomi: "おおやけ", onyomi: "コウ、 ク", meaning: "publik, pangeran, pejabat", level: "Pemula"},
          {kanji: "園", kunyomi: "その", onyomi: "エン", meaning: "taman, halaman, pertanian", level: "Lanjut"},
          {kanji: "今", kunyomi: "いま", onyomi: "コン、 キン", meaning: "sekarang", level: "Pemula"},
          {kanji: "月", kunyomi: "つき", onyomi: "ゲツ、 ガツ", meaning: "bulan", level: "Pemula"},
          {kanji: "初", kunyomi: "はじ.め、 はじ.めて", onyomi: "ショ", meaning: "pertama kali, awal", level: "Lanjut"},
          {kanji: "紅", kunyomi: "べに、 くれない", onyomi: "コウ、 ク", meaning: "merah tua", level: "Mahir"},
          {kanji: "葉", kunyomi: "は", onyomi: "ヨウ", meaning: "daun, pesawat, lobus, jarum", level: "Lanjut"},
          {kanji: "始", kunyomi: "はじ.める、 -はじ.める", onyomi: "シ", meaning: "mulai", level: "Pemula"},
          {kanji: "本", kunyomi: "もと", onyomi: "ホン", meaning: "buku, sekarang, utama, asal", level: "Pemula"},
          {kanji: "木", kunyomi: "き、 こ-", onyomi: "ボク、 モク", meaning: "pohon, kayu", level: "Pemula"},
          {kanji: "寒", kunyomi: "さむ.い", onyomi: "カン", meaning: "dingin", level: "Lanjut"},
          {kanji: "赤", kunyomi: "あか、 あか-", onyomi: "セキ、 シャク", meaning: "merah", level: "Penula"},
          {kanji: "人", kunyomi: "ひと、 -り、 -と", onyomi: "ジン、 ニン", meaning: "ジン、 ニン", level: "Pemula"},
          {kanji: "朝", kunyomi: "あさ", onyomi: "チョウ", meaning: "pagi, dinasti, rezim, zaman", level: "Pemula"},
          {kanji: "早", kunyomi: "はや.い、 はや", onyomi: "ソウ、 サッ", meaning: "awal, cepat", level: "Pemula"},
          {kanji: "来", kunyomi: "く.る、 きた.る", onyomi: "ライ、 タイ", meaning: "datang, karena, selanjutnya, penyebab", level: "Pmula"},
          {kanji: "日", kunyomi: "ひ、 -び、 -か", onyomi: "ニチ、 ジツ", meaning: "hari, matahari, Jepang", level: "Pemula"},
          {kanji: "当", kunyomi: "あ.たる、 あ.たり", onyomi: "トウ", meaning: "pukul, benar, tepat, dirinya sendiri", level: "Lanjut"},
          {kanji: "光", kunyomi: "ひか.る、 ひかり", onyomi: "コウ", meaning: "sinar, cahaya", level: "Lanjut"},
          {kanji: "見", kunyomi: "み.る、 み.える", onyomi: "ケン", meaning: "lihat, harapan, peluang, ide", level: "Lanjut"},
          {kanji: "写", kunyomi: "うつ.す、 うつ.る", onyomi: "シャ、 ジャ", meaning: "salin, difoto, deskripsikan", level: "Pemula"},
          {kanji: "真", kunyomi: "ま、 ま-、 まこと", onyomi: "シン", meaning: "benar, kenyataan, sekte Buddhis", level: "Pemuda"},
          {kanji: "撮", kunyomi: "と.る、 つま.む、 -ど.り", onyomi: "サツ", meaning: "snapshot, ambil gambar", level: "Mahir"},
          {kanji: "息", kunyomi: "いき", onyomi: "ソク", meaning: "nafas, pernafasan, anak", level: "Lanjut"},
          {kanji: "c", kunyomi: "しろ、 しら-、 しろ.い", onyomi: "ハク、 ビャク", meaning: "putih", level: "Pemula"},
          {kanji: "鹿", kunyomi: "しか、 か", onyomi: "ロク", meaning: "rusa", level: "Mahir"},
          {kanji: "楽", kunyomi: "たの.しい、 たの.しむ", onyomi: "ガク、 ラク", meaning: "musik, kenyamanan, kemudahan", level: "Pemula"},
          {kanji: "東", kunyomi: "ひがし", onyomi: "トウ", meaning: "timur", level: "Pemula"},
          {kanji: "京", kunyomi: "みやこ", onyomi: "キョウ、 ケイ", meaning: "modal, sepuluh kuadriliun", level: "Pemula"},
          {kanji: "新", kunyomi: "あたら.しい、 あら.た", onyomi: "シン", meaning: "baru", level: "Pemula"},
          {kanji: "型", kunyomi: "かた、 -がた", onyomi: "ケイ", meaning: "cetakan, jenis, model", level: "Mahir"},
          {kanji: "問", kunyomi: "と.う、 と.い、 とん", onyomi: "モン", meaning: "pertanyaan, masalah", level: "Pemula"},
          {kanji: "題", kunyomi: "-", onyomi: "ダイ", meaning: "topik, subjek", level: "Pemula"},
          {kanji: "旅", kunyomi: "たび", onyomi: "リョ", meaning: "perjalanan", level: "Pemula"},
          {kanji: "行", kunyomi: "い.く、 ゆ.く、 -ゆ.き", onyomi: "コウ、 ギョウ、 アン", meaning: "pergi, perjalanan, melaksanakan,", level: "Pemula"},
          {kanji: "景", kunyomi: "-", onyomi: "ケイ", meaning: "pemandangan", level: "Lanjut"},
          {kanji: "色", kunyomi: "いろ", onyomi: "ショク、 シキ", meaning: "warna", level: "Pemula"},
          {kanji: "思", kunyomi: "おも.う、 おもえら.く", onyomi: "シ", meaning: "memikirkan", level: "Pemula"},
          {kanji: "話", kunyomi: "はな.す、 はなし", onyomi: "ワ", meaning: "cerita, bicara", level: "Pemula"},
          {kanji: "上", kunyomi: "うえ、 -うえ、 うわ-", onyomi: "ジョウ、 ショウ、 シャン", meaning: "atas", level: "Pemula"},
          {kanji: "旬", kunyomi: "-", onyomi: "ジュン、 シュン", meaning: "decameron, periode sepuluh hari", level: "Mahir"},
        ],
        quiz: [
          {questionTitle: "Apa Makna Kanji", answers: ["publik", "swasta", "pemerintah", "lokal"], correctAnswerIndex: 0, isKanji: true, kanjitext: "公"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["みやこ", "はなし", "いかん", "まこと"], correctAnswerIndex: 0, isKanji: true, kanjitext: "京"},
          {questionTitle: "Foto apa yang sering diambil di musim gugur", answers: ["Maple", "Virus Corona", "Nara Park", "Desember"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""},
          {questionTitle: "Apa Makna Kanji", answers: ["timur", "barat", "utara", "selatan"], correctAnswerIndex: 0, isKanji: true, kanjitext: "東"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["おも.う", "つま.む", "み.える", "ひがし"], correctAnswerIndex: 0, isKanji: true, kanjitext: "思"},
          {questionTitle: "Apa Makna Kanji", answers: ["baru", "lama", "muda", "tua"], correctAnswerIndex: 0, isKanji: true, kanjitext: "新"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["と.う", "はな.す", "あか", "はじ"], correctAnswerIndex: 0, isKanji: true, kanjitext: "問"},
          {questionTitle: "Sampai kapan pemandangan di Nara Park bisa dinikmati", answers: ["Awal Desember", "Akhir Desember", "Pertengahan Desember", "Setelah Desember"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""}
        ],
        quizscore: 0
      },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/aldinportfolioapis.appspot.com/o/katakanji%2Fparis.png?alt=media&token=19c88b30-c857-43ac-9412-57029e6a9595",
        titleJP: "クリスマス恒例　パリのシャンゼリゼでイルミ点灯",
        titleID: "Lampu penerangan di Champs Elysees di Paris",
        level: "Pemula",
        topic: "Pariwisata",
        articleJP: "フランス、パリのシャンゼリゼ通りで、毎年恒例のクリスマスイルミネーションが点灯しました。\nシャンゼリゼ通りで21日夜、およそ2キロにわたり、400本の街路樹に飾り付けられたイルミネーションが一斉にともりました。\n点灯式では、パリのイダルゴ市長らがカウントダウンを行い、辺りは赤をベースにした華やかな光に彩られました。\n去年の式典は外出制限を伴うロックダウンの最中で、見物客が限られていましたが、今年は点灯の瞬間を見ようと多くの人が訪れました。",
        articleID: "Iluminasi Natal tahunan dinyalakan di Champs Elysees di Paris, Prancis. Pada malam tanggal 21 di Champs Elysees, iluminasi yang dihiasi dengan 400 pohon pinggir jalan menyala sekaligus selama sekitar 2 km.Pada upacara penerangan, walikota Hidalgo di Paris dan yang lainnya menghitung mundur, dan area itu diwarnai dengan cahaya indah berdasarkan warna merah. Upacara tahun lalu berada di tengah lockdown dengan pembatasan keluar, dan jumlah penonton dibatasi, tetapi tahun ini banyak orang datang untuk melihat momen pencahayaan.",
        articleSource: "http://easyjapanese.net/detail/c841d46c3835d6457a48fc3b6a82053a?hl=en-US",
        isSeen: false,
        isQuizTaken: false,
        kanji: [
          {kanji: "通", kunyomi: "とお.る、 とお.り", onyomi: "ツウ、 ツ", meaning: "lalu lintas, melewati", level: "Pemula"},
          {kanji: "毎", kunyomi: "ごと、 -ごと.に", onyomi: "マイ", meaning: "setiap", level: "Pemula"},
          {kanji: "年", kunyomi: "とし", onyomi: "ネン", meaning: "tahun, penghitung selama bertahun-tahun", level: "Pemula"},
          {kanji: "恒", kunyomi: "つね、 つねに", onyomi: "コウ", meaning: "keteguhan, selalu", level: "Mahir"},
          {kanji: "例", kunyomi: "たと.える", onyomi: "レイ", meaning: "contoh, kebiasaan, penggunaan", level: "Mahir"},
          {kanji: "点", kunyomi: "つ.ける、 つ.く", onyomi: "テン", meaning: "titik, tanda, titik desimal", level: "Lanjut"},
          {kanji: "灯", kunyomi: "ひ、 ほ-、 ともしび", onyomi: "トウ", meaning: "lampu, cahaya, penghitung untuk lampu", level: "Mahir"},
          {kanji: "日", kunyomi: "ひ、 -び、 -か", onyomi: "ニチ、 ジツ", meaning: "hari, matahari, Jepang", level: "Pemula"},
          {kanji: "夜", kunyomi: "よ、 よる", onyomi: "ヤ", meaning: "malam", level: "Pemula"},
          {kanji: "本", kunyomi: "もと", onyomi: "ホン", meaning: "buku, sekarang, utama", level: "Pemula"},
          {kanji: "街", kunyomi: "まち", onyomi: "ガイ、 カイ", meaning: "boulevard, jalan, kota", level: "Mahir"},
          {kanji: "路", kunyomi: "じ、 みち", onyomi: "ロ、 ル", meaning: "jalan, rute, jalan, jarak", level: "Lanjut"},
          {kanji: "樹", kunyomi: "き", onyomi: "ジュ", meaning: "kayu, pohon, membangun, mengatur", level: "Mahir"},
          {kanji: "飾", kunyomi: "かざ.る、 かざ.り", onyomi: "ショク", meaning: "manghiasi", level: "Mahir"},
          {kanji: "付", kunyomi: "つ.ける、 -つ.ける", onyomi: "フ", meaning: "mematuhi, melampirkan, merujuk", level: "Lanjut"},
          {kanji: "一", kunyomi: "ひと-、 ひと.つ", onyomi: "イチ、 イツ", meaning: "satu", level: "Pemula"},
          {kanji: "斉", kunyomi: "そろ.う、 ひと.しい", onyomi: "セイ、 サイ", meaning: "disesuaikan, serupa, sama, variasi serupa", level: "Mahir"},
          {kanji: "式", kunyomi: "-", onyomi: "シキ", meaning: "gaya, upacara, ritus, fungsi", level: "Lanjut"},
          {kanji: "市", kunyomi: "いち", onyomi: "シ", meaning: "pasar, kota", level: "Lanjut"},
          {kanji: "長", kunyomi: "なが.い、 おさ", onyomi: "チョウ", meaning: "panjang, pemimpin, atasan, senior", level: "Pemula"},
          {kanji: "行", kunyomi: "い.く、 ゆ.く、 -ゆ.き", onyomi: "コウ、 ギョウ", meaning: "pergi, perjalanan, melaksanakan", level: "Pemula"},
          {kanji: "辺", kunyomi: "あた.り、 ほと.り", onyomi: "ヘン", meaning: "ingkungan, batas, perbatasan, sekitar", level: "Mahir"},
          {kanji: "赤", kunyomi: "あか、 あか-", onyomi: "シャク", meaning: "merah", level: "Pemula"},
          {kanji: "華", kunyomi: "はな", onyomi: "カ、 ケ", meaning: "kemegahan, bunga, kelopak, ", level: "Mahir"},
          {kanji: "光", kunyomi: "ひか.る、 ひかり", onyomi: "コウ", meaning: "sinar, cahaya", level: "Lanjut"},
          {kanji: "彩", kunyomi: "いろど.る", onyomi: "サイ", meaning: "mewarnai, melukis, merias wajah", level: "Mahir"},
          {kanji: "去", kunyomi: "さ.る、 -さ.る", onyomi: "キョ、 コ", meaning: "pergi, masa lalu, berhenti, meninggalkan", level: "Pemula"},
          {kanji: "典", kunyomi: "ふみ、 のり", onyomi: "テン、 デン", meaning: "upacara; perayaan, kode, hukum, aturan", level: "Mahir"},
          {kanji: "外", kunyomi: "そと、 ほか、 はず.す", onyomi: "ガイ、 ゲ", meaning: "di luar", level: "Pemula"},
          {kanji: "出", kunyomi: "で.る、 -で、 だ .す", onyomi: "シュツ、 スイ", meaning: "keluar, menonjol", level: "Pemula"},
          {kanji: "制", kunyomi: "-", onyomi: "セイ", meaning: "sistem, hukum, aturan", level: "Lanjut"},
          {kanji: "限", kunyomi: "かぎ.る、 かぎ.り", onyomi: "ゲン", meaning: "membatasi, dengan kemampuan terbaik", level: "Lanjut"},
          {kanji: "伴", kunyomi: "ともな.う", onyomi: "ハン、 バン", meaning: "pendamping, menemani, membawa", level: "Mahir"},
          {kanji: "最", kunyomi: "もっと.も、 つま", onyomi: "サイ、 シュ", meaning: "paling, ekstrim", level: "Lanjut"},
          {kanji: "中", kunyomi: "なか、 うち、 あた.る", onyomi: "チュウ", meaning: "di dalam, tengah, rata-rata, tengah", level: "Pemula"},
          {kanji: "見", kunyomi: "み.る、 み.える", onyomi: "ケン", meaning: "lihat, harapan, peluang, ide", level: "Pemula"},
          {kanji: "物", kunyomi: "もの、 もの-", onyomi: "ブツ、 モツ", meaning: "hal, objek, materi", level: "Pemula"},
          {kanji: "客", kunyomi: "-", onyomi: "キャク、 カク", meaning: "amu, pengunjung, pelanggan", level: "Lanjut"},
          {kanji: "今", kunyomi: "いま", onyomi: "コン、 キン", meaning: "sekarang", level: "Pemula"},
          {kanji: "瞬", kunyomi: "またた.く、 まじろ.ぐ", onyomi: "シュン", meaning: "berkedip", level: "Mahir"},
          {kanji: "間", kunyomi: "あいだ、 ま、 あい", onyomi: "カン、 ケン", meaning: "interval, spasi", level: "Pemula"},
          {kanji: "多", kunyomi: "おお.い、 まさ.に", onyomi: "タ", meaning: "banyak, sering", level: "Pemula"},
          {kanji: "人", kunyomi: "ひと、 -り、 -と", onyomi: "ジン、 ニン", meaning: "orang", level: "Pemula"},
          {kanji: "訪", kunyomi: "おとず.れる", onyomi: "ホウ", meaning: "panggil, kunjungi, lihat", level: "Lanjut"},
        ],
        quiz: [
          {questionTitle: "Apa Makna Kanji", answers: ["merah", "putih", "kuning", "biru"], correctAnswerIndex: 0, isKanji: true, kanjitext: "赤"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["もと", "ひと", "いま", "なか"], correctAnswerIndex: 0, isKanji: true, kanjitext: "本"},
          {questionTitle: "Apa Makna Kanji", answers: ["tengah", "depan", "kanan", "kiri"], correctAnswerIndex: 0, isKanji: true, kanjitext: "中"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["ひと", "いま", "なか", "もと"], correctAnswerIndex: 0, isKanji: true, kanjitext: "人"},
          {questionTitle: "Mengapa orang tidak bisa datang ke upacara tahun lalu", answers: ["pandemi", "krisis ekonomi", "brexit", "perang nuklir"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""},
          {questionTitle: "Apa Makna Kanji", answers: ["malam", "siang", "pagi", "sore"], correctAnswerIndex: 0, isKanji: true, kanjitext: "夜"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["とお.る", "さ.る", "いま", "なか"], correctAnswerIndex: 0, isKanji: true, kanjitext: "通"},
          {questionTitle: "Apa Makna Kanji", answers: ["setiap", "kepada", "semua", "sendiri"], correctAnswerIndex: 0, isKanji: true, kanjitext: "毎"},
          {questionTitle: "Bagaimana cara membaca kunyomi kanji", answers: ["さ.る", "とお.る", "なか", "もと"], correctAnswerIndex: 0, isKanji: true, kanjitext: "去"},
          {questionTitle: "Berapa jumlah pohon yang dihiasi", answers: ["400", "200", "300", "500"], correctAnswerIndex: 0, isKanji: false, kanjitext: ""}
        ],
        quizscore: 0
      }
    ]
    return new Result(ResponseMessage.SUCCESS, articles)
  }

  getAllOnboardingQuestions() {
    const questions = [
      {kanji: "金", questionTitle: "Apakah arti dari kanji berikut ini?", answers: ["Emas", "Perak", "Perunggu", "Batu"], correctAnswer: "Emas"},
      {kanji: "数", questionTitle: "Apakah arti dari kanji berikut ini?", answers: ["Fisika", "Bagian", "Kimia", "Angka"], correctAnswer: "Angka"},
      {kanji: "史", questionTitle: "Apakah arti dari kanji berikut ini?", answers: ["Nyaman", "Sejarah", "Pakai", "Praktis"], correctAnswer: "Sejarah"},
      {kanji: "竹", questionTitle: "Apakah arti dari kanji berikut ini?", answers: ["Bambu", "Ladang", "Api", "Desa"], correctAnswer: "Bambu"},
      {kanji: "茶", questionTitle: "Apakah arti dari kanji berikut ini?", answers: ["Bunga", "Obat", "Matcha", "Teh"], correctAnswer: "Teh"},
      {kanji: "象", questionTitle: "Apakah arti dari kanji berikut ini?", answers: ["Ikan", "Gajah", "Jerapah", "Kuda"], correctAnswer: "Gajah"},
      {kanji: "動", questionTitle: "Apakah arti dari kanji berikut ini?", answers: ["Berlari", "Berjalan", "Bergerak", "Binatang"], correctAnswer: "Bergerak"},
      {kanji: "教", questionTitle: "Apakah arti dari kanji berikut ini?", answers: ["Diajar", "Baru", "Belajar", "Mengajar"], correctAnswer: "Mengajar"},
      {kanji: "強", questionTitle: "Apakah arti dari kanji berikut ini?", answers: ["Lemah", "Semangat", "Kuat", "Latihan"], correctAnswer: "Kuat"},
    ]
    return new Result(ResponseMessage.SUCCESS, questions)
  }

}
