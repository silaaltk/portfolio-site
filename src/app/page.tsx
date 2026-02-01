import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
    <section id="about">
      <h2>Hakkımda</h2>
      <p>Ben Sıla. Yönetim Bilişim Sistemleri öğrencisiyim ve web geliştirme ile ilgileniyorum.</p>
    </section>
    <section id="projects">
      <h2>Projelerim</h2>
      <ul>
        <li>
          <a href="https://github.com/silaaltk/web-scraping-projects/blob/main/quotes.py" target="_blank">
         Quotes To Scrape
          </a>
        </li>
      </ul>
    </section>
    <section id="contact">
      <h2>İletişim</h2>
      <ul>
        <li>
          <p>
        Mail: <a href="mailto:silaaltunk1@gmail.com" target="_blank">silaaltunk1@gmail.com</a>
      </p>
      </li>
      <li>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/silaaltk/" target="_blank">silaaltk</a>
      </p>
      </li>
      </ul>
      <section>
        <p>Projeler, işbirlikleri ve portfolyom hakkındaki geri bildirimler için aşağıdaki form üzerinden benimle iletişime geçebilirsiniz.</p>
      {/* buraya form gelecek */}
      </section>
    </section>
    </div>

  
);
}
