const About = () => {
  return (
    <section className="px-6 md:px-24 py-20 bg-gray-50 text-black" id="about">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Foto */}
        <div className="flex-1 flex justify-center">
          <img
            src="/image.jpeg"
            alt="About me"
            className="w-80 h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Teks */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Tentang Saya
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Halo! Saya Muhamad Tegar Setiawan, mahasiswa semester 5 jurusan
            Teknik Informatika di Universitas Hasyim Asy'ari. Saya memiliki
            ketertarikan di bidang pengembangan web dan game development. Saat
            ini, saya aktif mengembangkan project web menggunakan framework
            seperti Next.js dan Laravel. Di sisi lain, saya juga senang
            mengerjakan project game sederhana menggunakan Unity sebagai media
            ekspresi kreatif. Saya adalah pribadi yang suka belajar hal baru dan
            memiliki semangat besar untuk terus berkembang. Meskipun belum
            terbiasa bekerja dalam tim, saya terbuka untuk belajar kolaborasi
            dan meningkatkan kemampuan komunikasi melalui pengalaman nyata. Di
            luar kegiatan akademik, saya senang mengisi waktu dengan
            mengeksplorasi hal-hal baru, berjalan-jalan, dan mendaki gunung.
            Saya percaya bahwa keseimbangan antara belajar dan aktivitas di luar
            juga penting untuk membangun karakter yang kuat. Saat ini saya
            sedang mencari kesempatan magang untuk memperluas pengalaman saya di
            dunia kerja, khususnya di bidang web atau game development. Saya
            sangat antusias untuk belajar lebih jauh dan memberikan kontribusi
            terbaik di tempat saya berproses nanti.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4"></p>
        </div>
      </div>
    </section>
  );
};

export default About;
