/* ===== FILE INI UNTUK DIEDIT: nama, teks surat, caption foto, musik ===== */
const C={
 recipient:'Shanum', sender:'— Fajar',            // opsional (boleh dikosongkan)
 music:'musik/lagu.mp3',            // taruh file di folder musik/ lalu tulis namanya ('' = tanpa musik)
 photos:[                            // src: nama file di folder foto/ (kalau file belum ada, tampil placeholder hati)
  {src:'foto/foto1.jpg',caption:''},{src:'foto/foto2.jpg',caption:''},{src:'foto/foto3.jpg',caption:''},{src:'foto/foto4.jpg',caption:''},
  {src:'foto/foto5.jpg',caption:''},{src:'foto/foto6.jpg',caption:''},{src:'foto/foto7.jpg',caption:''},{src:'foto/foto8.jpg',caption:''}],
 // Video: tampil di bawah foto dengan bingkai polaroid. Contoh: videos:['video/video1.mp4','video/video2.mp4']. Kosong = tidak ada video.
 videos:['video/video1.mp4','video/video2.mp4','video/video3.mp4','video/video4.mp4','video/video5.mp4'],
 // Surat tambahan di bagian paling akhir (tombol 'Satu Pesan Lagi'). Satu tulisan = satu paragraf.
 finalLetter:[
 "Hi, Bubyyy! ♡",
 "Hehehe, ternyata sampai juga di bagian ini.",
 "Sebenarnya ada satu hal yang dari kemarin-kemarin pengin aku omongin, cuma rasanya belum nemu waktu dan cara yang pas aja.",
 "Kita udah lumayan sedikit lama saling kenal, walaupun kalau dihitung-hitung mungkin baru sekitar sebulan. Tapi rasanya kita udah banyak banget ngobrol, cerita ini itu, bahas hal random, sampai hal-hal yang mungkin awalnya nggak kepikiran buat diceritain.",
 "Jujur, aku senang bisa kenal kamu. Apalagi belakangan ini rasanya ada aja hal yang bikin aku pengin ngobrol sama kamu. Kadang sesederhana pengin tahu kamu lagi ngapain, gimana hari kamu, atau sekadar cerita sesuatu yang sebenarnya nggak terlalu penting, tapi rasanya lebih seru kalau diceritain ke kamu.",
 "Dan makin ke sini, aku ngerasa kalau kedekatan kita ini jadi sesuatu yang cukup spesial buat aku.",
 "Aku nggak tahu kamu ngerasain hal yang sama atau nggak, tapi aku sendiri mulai kepikiran, gimana ya kalau kita nggak cuma berhenti sampai di sini?",
 "Maksudku, gimana kalau kita coba kasih kesempatan buat hubungan ini berjalan sedikit lebih jauh? Bukan cuma jadi dua orang yang saling cerita dan ngobrol setiap hari, tapi juga jadi seseorang yang punya tempat lebih spesial satu sama lain.",
 "Aku nggak mau buru-buru atau bikin kamu merasa harus menjawab sesuatu sekarang. Aku cuma pengin jujur tentang apa yang belakangan ini aku pikirin. Dan kalau ternyata kamu juga punya keinginan yang sama, kayaknya akan menyenangkan kalau kita bisa mulai Jalaninnya sama-sama. ♡",
 "Nah Maka dari itu satu hal lagi yang nggak kalah penting nih supaya kita bisa mengenal jauh lebih dekat.",
 "dan Kita juga udah kenal sekitar sebulan, tapi komunikasi/ngbrol kita masih sebatas di TikTok sama Discord aja.",
 "Masa iya nggak kepikiran buat Move ke WhatsApp? WKWKWK.",
 "Gimana kalau setelah ini kita lanjut ngobrol di WhatsApp? Biar kalau ada apa-apa, mau cerita random, atau sekadar saling nyariin, nggak perlu pindah-pindah aplikasi lagi.",
 "So, what do you think? Hehehe.",
 "Once again, happy birthday!",
 "Semoga di umur yang baru ini ada banyak hal baik yang datang ke kehidupan kamu. Dan semoga, salah satu hal baik itu bisa jadi cerita baru yang kita mulai bareng-bareng.",
 "♡"
],
 letter:['Hai, Bubyyy!','Pertama-tama, selamat ulang tahun ya! ♡','Semoga hari ini mengingatkanmu betapa spesialnya kamu, dan betapa banyak kebahagiaan yang pantas kamu dapatkan.','Mungkin aku tidak selalu pandai merangkai kata yang sempurna, tapi aku tulus berharap hidup selalu baik padamu. Semoga kamu terus menemukan alasan untuk tersenyum, mengejar hal-hal yang kamu suka, dan menjadi sosok yang kamu impikan.','Terima kasih sudah menjadi seseorang yang membuat dunia terasa sedikit lebih indah hanya dengan ada di dalamnya.','Nikmati hari spesialmu ya, Shanum.','Kirim peluk virtual dari jauh. ♡'],
 final:['Semoga kejutan kecil ini bisa membuatmu tersenyum, walau hanya sebentar.','Tetap tersenyum, tetap bersinar, dan jangan pernah lupa betapa luar biasanya kamu.','Kamu pantas mendapatkan semua hal indah yang ada di dunia ini.','Semoga ulang tahunmu jadi yang paling manis! ♡']
};
/* ===== batas edit ===== */