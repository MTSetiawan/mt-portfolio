const About = () => {
  return (
    <section
      className="px-6 md:px-24 py-20 bg-gradient-to-br from-gray-50 to-blue-50 text-black relative"
      id="about"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-12 relative z-10">
        <div className="flex-1 flex justify-center group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img
              src="/image.jpeg"
              alt="About me"
              className="relative w-80 h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tentang Saya
            </h2>
            <div className="absolute -top-2 -left-2 w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
            <p className="text-gray-700 leading-relaxed">
              Halo! Saya Muhamad Tegar Setiawan, mahasiswa semester 5 jurusan
              Teknik Informatika di Universitas Hasyim Asy'ari. Saya memiliki
              ketertarikan di bidang pengembangan web dan game development. Saat
              ini, saya aktif mengembangkan project web menggunakan framework
              seperti Next.js dan Laravel. Di sisi lain, saya juga senang
              mengerjakan project game sederhana menggunakan Unity sebagai media
              ekspresi kreatif. Saya adalah pribadi yang suka belajar hal baru
              dan memiliki semangat besar untuk terus berkembang. Meskipun belum
              terbiasa bekerja dalam tim, saya terbuka untuk belajar kolaborasi
              dan meningkatkan kemampuan komunikasi melalui pengalaman nyata. Di
              luar kegiatan akademik, saya senang mengisi waktu dengan
              mengeksplorasi hal-hal baru, berjalan-jalan, dan mendaki gunung.
              Saya percaya bahwa keseimbangan antara belajar dan aktivitas di
              luar juga penting untuk membangun karakter yang kuat. Saat ini
              saya sedang mencari kesempatan magang untuk memperluas pengalaman
              saya di dunia kerja, khususnya di bidang web atau game
              development. Saya sangat antusias untuk belajar lebih jauh dan
              memberikan kontribusi terbaik di tempat saya berproses nanti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
