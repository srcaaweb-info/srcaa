import React, { useState, useRef, useEffect } from 'react';

interface CopilotProps {
  onNavigate: (page: 'home' | 'accreditations', hash?: string) => void;
}

interface Message {
  text: string;
  isUser: boolean;
}

export default function AcademicCopilot({ onNavigate }: CopilotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Greetings. I am the SRCAA Academic Copilot. How may I assist you with our accreditations, SGRCR journal portal, academic publications, faculty directory, or research internship programmes?',
      isUser: false,
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const getReply = (msg: string) => {
    const l = msg.toLowerCase();
    const srcaaKw = ['src','shakti','srcaa','research centre','academia','internship','intern','publication','press','team','faculty','founder','sudhakaran','santosh','anjana','scholar','quality','certificate','itc','dora','assessment','contact','email','whatsapp','mission','vision','abhijnana','prathiba','accreditation','accredited','sgrcr','journal','review'];
    const greetings = ['hi','hello','hey','help','what can you do','about you'];
    
    if (greetings.some((g) => l.includes(g))) {
      return "Greetings! I am the SRCAA academic assistant. How may I assist you with our accreditations, SGRCR journal portal, research publications, faculty board, or internship programs?";
    }
    if (l.includes('sgrcr') || l.includes('journal') || l.includes('contemporary research')) {
      return "SGRCR (SRCAA Global Review of Contemporary Research) is our official open-access, multidisciplinary peer-reviewed international academic journal. You can explore published papers and submit manuscripts directly at our dedicated journal portal: https://www.sgrcr.srcaa.co.in/";
    }
    if (!srcaaKw.some((k) => l.includes(k))) {
      return "Thank you for reaching out. I can assist specifically with SRCAA's academic programs, SGRCR journal portal, accreditations, faculty directory, research publications, or DORA commitment. What topic may I help clarify?";
    }
    if ((l.includes('what') || l.includes('about') || l.includes('tell')) && (l.includes('src') || l.includes('institution'))) {
      return "Shakti Research Centre and Academia (SRCAA) is an accredited digital academic and research institution established in 2024 by Sudhakaran T. Operating under the International Trade Council (ITC) Framework and registered with GAOTE, SRCAA advances interdisciplinary research, ethical scholarship, and global academic collaboration.";
    }
    if (l.includes('accreditation')) {
      return "SRCAA is accredited under the International Trade Council (ITC) Conformity Assessment and Recognition Framework, registered with GAOTE, listed with ROR, and holds memberships with RCI, APA, and CMAOI. View the Accreditations page for full documentation.";
    }
    if (l.includes('internship')) {
      return "The SRCAA Research Internship Programme offers university students hands-on experience in empirical research writing, data analysis, and publication support with senior faculty mentorship. You can apply directly through the Internship section.";
    }
    if (l.includes('contact') || l.includes('email')) {
      return "Official Institutional Secretariat Email: srcaacontact@gmail.com. You can also join our verified WhatsApp academic network via the Contact section.";
    }
    if (l.includes('publication') || l.includes('press') || l.includes('abhijnana')) {
      return "SRCAA publishes 'Abhijnana Prathiba' press releases, peer-reviewed dissertations, and academic monographs. You can also access our flagship journal portal at https://www.sgrcr.srcaa.co.in/";
    }
    if (l.includes('team') || l.includes('faculty') || l.includes('board')) {
      return "Our interdisciplinary Academic Board includes Dr. Anjana Radhakrishna (Senior Academic Scholar), Dr. Santosh Nelamakanahalli Chikkamari (Associate Researcher), Dr. Narayana K.H, Dr. Lakshmi Bai D, Dr. Pruthvi N, Mr. Ambarish C Abbaiah, and esteemed scholars across commerce, sciences, and governance.";
    }
    if (l.includes('founder') || l.includes('sudhakaran')) {
      return "Founder: Sudhakaran T — esteemed educator, academic researcher, and ITC Associate dedicated to fostering transparent research environments.";
    }
    if (l.includes('anjana') || l.includes('scholar')) {
      return "Dr. Anjana Radhakrishna (Ph.D., MBA) is SRCAA's Senior Academic Scholar and Advisory Board Member with over 20 years of higher education teaching tenure and published research in management and corporate governance.";
    }
    if (l.includes('santosh')) {
      return "Dr. Santosh Nelamakanahalli Chikkamari (M.Com., Ph.D.) is an Associate Researcher at SRCAA, associated with Charles Sturt University and the University of Sydney Business School, Australia, specializing in commerce, corporate finance, and quantitative research methodology.";
    }
    if (l.includes('quality') || l.includes('certificate')) {
      return "SRCAA holds an International Quality Certificate (85% Grade B) under the International Quality Certification Program, accredited by ITC.";
    }
    if (l.includes('dora')) {
      return "Effective 01 March 2026, SRCAA formally endorses the San Francisco Declaration on Research Assessment (DORA), committing to evaluate research based on quality, rigor, and impact rather than journal metrics alone.";
    }
    if (l.includes('mission')) {
      return "Mission: Advance research excellence globally by fostering ethical scholarship, interdisciplinary collaboration, innovation, and academic capacity building.";
    }
    if (l.includes('vision')) {
      return "Vision: To be an internationally recognized digital academic institution creating a sustainable and inclusive knowledge ecosystem.";
    }
    return "Thank you for contacting SRCAA. Feel free to browse our sections, explore the SGRCR Journal portal (https://www.sgrcr.srcaa.co.in/), or ask specific questions regarding our research programs.";
  };

  const handleSendMessage = (textToSend?: string) => {
    const q = (textToSend || inputQuery).trim();
    if (!q) return;

    setMessages((prev) => [...prev, { text: q, isUser: true }]);
    if (!textToSend) setInputQuery('');

    setTimeout(() => {
      const reply = getReply(q);
      setMessages((prev) => [...prev, { text: reply, isUser: false }]);
    }, 250);
  };

  const renderMessageContent = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}
          >
            {part} <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem' }}></i>
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      <button
        id="copilotFab"
        className="copilot-fab"
        aria-label="Open Academic AI Assistant"
        title="SRCAA Academic Copilot"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={isOpen ? 'fas fa-times' : 'fas fa-brain'}></i>
        <span className="copilot-fab-pulse"></span>
      </button>

      <div id="copilotWindow" className={`copilot-window ${isOpen ? 'open' : ''}`} role="dialog" aria-labelledby="copilotHeaderTitle">
        <div className="copilot-header">
          <div className="copilot-header-info">
            <div className="copilot-avatar">
              <i className="fas fa-landmark"></i>
            </div>
            <div>
              <h3 id="copilotHeaderTitle">SRCAA Academic Copilot</h3>
              <span>Institutional Knowledge Assistant</span>
            </div>
          </div>
          <button
            className="copilot-close"
            id="closeCopilotWindow"
            aria-label="Close Assistant"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="copilot-quick-prompts" id="copilotQuickPrompts">
          <span className="quick-chip" onClick={() => handleSendMessage('What is SRCAA?')}>About SRCAA</span>
          <span className="quick-chip" onClick={() => handleSendMessage('Accreditations?')}>Accreditations</span>
          <span className="quick-chip" onClick={() => handleSendMessage('Who is the founder?')}>Founder</span>
          <span className="quick-chip" onClick={() => handleSendMessage('Tell me about Dr. Anjana')}>Dr. Anjana</span>
          <span className="quick-chip" onClick={() => handleSendMessage('Tell me about the team')}>Faculty Board</span>
          <span className="quick-chip" onClick={() => handleSendMessage('Tell me about internships')}>Internships</span>
          <span className="quick-chip" onClick={() => handleSendMessage('What is the DORA statement?')}>DORA Policy</span>
          <span className="quick-chip" onClick={() => handleSendMessage('Tell me about SGRCR Journal')}>SGRCR Journal</span>
        </div>

        <div className="copilot-messages" id="copilotMessages">
          {messages.map((m, idx) => (
            <div key={idx} className={`message ${m.isUser ? 'user-msg' : 'bot-msg'}`}>
              {!m.isUser && (
                <div className="avatar-bot">
                  <i className="fas fa-landmark"></i>
                </div>
              )}
              <div className="bubble">{renderMessageContent(m.text)}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="copilot-input-area">
          <input
            type="text"
            id="copilotQuery"
            placeholder="Ask about SRCAA, accreditations, journals..."
            aria-label="Query institutional copilot"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <button
            id="sendCopilotMsg"
            aria-label="Send query"
            onClick={() => handleSendMessage()}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
}
