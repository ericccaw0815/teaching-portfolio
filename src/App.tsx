import { MapPin, History, Palette, Languages, Globe, ExternalLink, Mail, Phone, GraduationCap } from 'lucide-react';
import './App.css';

function App() {
  const teachingStyles = [
    {
      title: "字本位與部件拆解",
      desc: "擅長將漢字邏輯化。例如將『把』拆解為『手』，將『切』拆解為『刀』，幫助學生建立認讀直覺。",
      icon: <Languages className="icon" />
    },
    {
      title: "情境式沉浸教學",
      desc: "致力於營造自然開放的氛圍，透過真實生活對話與互動活動，引領學生在沉浸式環境中提升語言能力。",
      icon: <Globe className="icon" />
    },
    {
      title: "文化與歷史融入",
      desc: "將臺灣在地文化（如西門紅樓）與原住民歷史（如賽德克族）自然融入教材，提升學生的文化認同感。",
      icon: <Palette className="icon" />
    }
  ];

  const projects = [
    {
      title: "台北西區接待客廳：西門紅樓歷史與文化導覽",
      tag: "歷史觀光 x 實用生詞",
      desc: "帶領學生走進百年古蹟，認識從市場、劇場到文創中心與同志文化代表的轉變。結合關鍵生詞，將歷史轉化為流利的導覽語言。",
      pdfUrl: "/pdfs/ximen.pdf",
      tools: ["Canva", "文化講堂"]
    },
    {
      title: "漢字積木：院子前面切西瓜「把」字句教學",
      tag: "語法結構 x 具象邏輯",
      desc: "針對核心語法『把』字句設計。透過圖片排解與『切西瓜』的連貫動作，將抽象的公式轉化為可見的動態邏輯。",
      pdfUrl: "/pdfs/hanzi_jimu.pdf",
      tools: ["Wordwall", "互動學習單"]
    },
    {
      title: "福爾摩沙：賽德克族文化與手作教學",
      tag: "原民文化 x 手作體驗",
      desc: "深度介紹賽德克族歷史、圖騰與織布文化。結合『紙藝手作』剪貼菱形圖騰（祖靈的眼睛），實現在動手做中學華語。",
      pdfUrl: "/pdfs/sediq.pdf",
      tools: ["Padlet", "DIY 手作"]
    }
  ];

  const tools = [
    { name: "Wordwall", type: "互動遊戲與練習" },
    { name: "Padlet", type: "成果展示與共編" },
    { name: "Kahoot", type: "趣味測驗與評量" },
    { name: "Canva", type: "多媒體教材設計" }
  ];

  return (
    <div className="portfolio">
      {/* 頂部形象區 */}
      <header className="hero">
        <div className="container">
          <div className="badge">華語教學專業 | 碩士在學</div>
          <h1>王映晴 Erica Wang</h1>
          <p className="subtitle">「以實用性為核心，讓華語學習成為一場文化與生活的探索之旅。」</p>
          <div className="contact-info">
            <span><Mail size={16} /> ericaw0815@gmail.com</span>
            <span><Phone size={16} /> 0966-770-962</span>
            <span><MapPin size={16} /> 台北, 台灣</span>
          </div>
        </div>
      </header>

      {/* 第一部分：專業背景 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">專業背景</h2>
          <div className="cv-grid">
            <div className="cv-item highlight-card">
              <GraduationCap className="cv-icon" />
              <div>
                <h4>國立臺灣師範大學 華語文教學系</h4>
                <p>碩士在學 / 學士畢業</p>
              </div>
            </div>
            <div className="cv-item highlight-card">
              <History className="cv-icon" />
              <div>
                <h4>教學實績</h4>
                <p>臺師大 MTC 夏令營、說好語言中心、僑委會遠距教學、美國舊金山慧智中文學校</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 第二部分：教學作品 (直接顯示教材內容) */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">精選教學作品</h2>
          <div className="project-display">
            {projects.map((project, i) => (
              <div key={i} className="project-viewer-card">
                <div className="viewer-header">
                  <div className="viewer-info">
                    <span className="project-tag">{project.tag}</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>
                <div className="pdf-container">
                  <iframe 
                    src={`${project.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                    title={project.title}
                    width="100%"
                    height="700px"
                    className="pdf-viewer"
                  />
                  <div className="pdf-footer">
                    <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="download-link">
                      <ExternalLink size={14} /> 在新分頁中開啟完整教材
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 第三部分：教學方式與特色 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">教學方式與特色</h2>
          <div className="grid">
            {teachingStyles.map((style, i) => (
              <div key={i} className="card style-card">
                {style.icon}
                <h3>{style.title}</h3>
                <p>{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最後一部分：線上教學應用工具 */}
      <section className="section bg-dark">
        <div className="container">
          <h2 className="section-title light">線上教學應用工具</h2>
          <div className="tool-grid">
            {tools.map((tool, i) => (
              <div key={i} className="tool-card">
                <h4>{tool.name}</h4>
                <p>{tool.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 王映晴 Erica Wang. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
