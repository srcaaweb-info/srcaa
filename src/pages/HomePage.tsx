import React, { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'accreditations', hash?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [boardFilter, setBoardFilter] = useState<'all' | 'scholar' | 'faculty' | 'advisory'>('all');

  return (
    <main className="main-content" id="main-content">
      {/* INSTITUTIONAL HERO */}
      <header id="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-award"></i>
            <span>ITC Accredited Institution &middot; Est. 2024</span>
          </div>
          <h1 className="hero-title">Shakti Research<br />Centre &amp; Academia</h1>
          <p className="hero-sub">
            Advancing scholarly excellence, ethical research assessment, and global interdisciplinary collaboration across academia, institutions, and emerging scholars.
          </p>
          <div className="hero-cta">
            <a
              href="#about"
              className="btn btn-primary"
              id="btnExplore"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home', '#about');
              }}
            >
              <i className="fas fa-university"></i> Institutional Overview
            </a>
            <a
              href="/accreditations.html"
              className="btn btn-outline"
              id="btnAccred"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('accreditations');
              }}
            >
              <i className="fas fa-certificate"></i> Accreditations
            </a>
            <a
              href="#press"
              className="btn btn-outline"
              id="btnPubs"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home', '#press');
              }}
            >
              <i className="fas fa-book"></i> Scholarly Press
            </a>
          </div>
          <div className="hero-trust-bar">
            <div className="trust-badge-item"><i className="fas fa-check-circle"></i> ITC Framework Accredited</div>
            <div className="trust-badge-item"><i className="fas fa-globe-asia"></i> GAOTE Registered Member</div>
            <div className="trust-badge-item"><i className="fas fa-database"></i> ROR Global Registry Listed</div>
            <div className="trust-badge-item"><i className="fas fa-scroll"></i> DORA Policy Signatory</div>
          </div>
        </div>
      </header>

      {/* KEY INSTITUTIONAL STATISTICS */}
      <section className="stats-section reveal" id="stats" aria-label="Institutional Highlights">
        <div className="stats-grid">
          <div className="stat-item reveal-scale">
            <div className="stat-number"><i className="fas fa-file-signature"></i> 100+</div>
            <div className="stat-label">Scholarly Papers</div>
          </div>
          <div className="stat-item reveal-scale reveal-delay-1">
            <div className="stat-number"><i className="fas fa-university"></i> 45+</div>
            <div className="stat-label">Institutional Partners</div>
          </div>
          <div className="stat-item reveal-scale reveal-delay-2">
            <div className="stat-number"><i className="fas fa-chalkboard-teacher"></i> 20+</div>
            <div className="stat-label">Distinguished Faculty</div>
          </div>
          <div className="stat-item reveal-scale reveal-delay-3">
            <div className="stat-number"><i className="fas fa-graduation-cap"></i> 16,000+</div>
            <div className="stat-label">Scholars &amp; Students Mentored</div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section reveal" aria-labelledby="about-title">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-landmark"></i> Institutional Profile</div>
          <h2 className="section-title" id="about-title">About Shakti Research Centre</h2>
          <p className="section-sub">A recognized digital academic research institute dedicated to ethical scholarship and cross-border innovation.</p>
        </div>
        <div className="about-box reveal-scale">
          <p className="about-lead"><strong>Shakti Research Centre and Academia (SRCAA)</strong> is an accredited digital academic and research institution established in 2024. The centre is committed to advancing research excellence, fostering interdisciplinary collaboration, and promoting innovation through rigorous scholarly engagement, institutional capacity building, and international academic partnerships.</p>
          <p className="about-lead">SRCAA serves as a collaborative platform for researchers, academicians, professionals, and students by facilitating peer-reviewed research initiatives, publication support, academic mentoring, research internship programmes, faculty development workshops, and global knowledge exchange.</p>
          <p className="about-lead">The institution operates under the <strong>International Trade Council (ITC) Conformity Assessment and Recognition Framework</strong> and maintains formal registration with the <strong>Global Association of Online Trainers and Examiners (GAOTE)</strong>. In addition, SRCAA is listed on the persistent <strong>Research Organization Registry (ROR)</strong> and actively collaborates with the Research Council of India (RCI), the American Psychological Association (APA), and the Commerce and Management Association of India (CMAOI).</p>
          
          <div className="about-badges">
            <div className="about-badge"><i className="fas fa-certificate"></i><span>ITC Accredited</span></div>
            <div className="about-badge"><i className="fas fa-globe-asia"></i><span>GAOTE Registered</span></div>
            <div className="about-badge"><i className="fas fa-university"></i><span>RCI Member</span></div>
            <div className="about-badge"><i className="fas fa-brain"></i><span>APA Affiliated</span></div>
            <div className="about-badge"><i className="fas fa-handshake"></i><span>CMAOI Partner</span></div>
            <div className="about-badge"><i className="fas fa-database"></i><span>ROR Listed</span></div>
          </div>

          <div className="mv-grid">
            <div className="mv-card mission reveal-left" id="cardMission">
              <div className="mv-icon-wrap"><i className="fas fa-compass"></i></div>
              <h3>Institutional Mission <span className="mv-tag">Core Purpose</span></h3>
              <p>To advance research excellence globally by fostering ethical scholarship, interdisciplinary collaboration, innovation, and academic capacity building. SRCAA empowers researchers, educators, students, and professionals through continuous research support, publication guidance, mentoring, international partnerships, and knowledge exchange.</p>
              <div className="mv-footer"><i className="fas fa-globe"></i> Global Research Excellence &amp; Ethics</div>
            </div>
            <div className="mv-card vision reveal-right" id="cardVision">
              <div className="mv-icon-wrap"><i className="fas fa-eye"></i></div>
              <h3>Institutional Vision <span className="mv-tag">Long-Term Horizon</span></h3>
              <p>To be an internationally recognized digital academic and research institution that inspires excellence in research, innovation, ethical scholarship, and cross-cultural academic collaboration, cultivating a sustainable and inclusive knowledge ecosystem that drives measurable societal impact.</p>
              <div className="mv-footer"><i className="fas fa-award"></i> Sustainable &amp; Inclusive Scholarship</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section id="founder" className="section reveal" aria-labelledby="founder-title">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-user-tie"></i> Institutional Leadership</div>
          <h2 className="section-title" id="founder-title">Founder's Desk</h2>
          <p className="section-sub">Guidance and leadership establishing an open, ethical, and collaborative research environment.</p>
        </div>
        <div className="founder-box reveal-scale">
          <div className="founder-grid">
            <div className="founder-img-wrap reveal-left">
              <img
                src="/founder.jpeg.jpeg"
                alt="Sudhakaran T — Founder of SRCAA"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600';
                }}
              />
            </div>
            <div className="reveal-right">
              <h3 className="profile-title">Sudhakaran T</h3>
              <div className="profile-sub">Founder &amp; Director, SRCAA &nbsp;|&nbsp; Academician &amp; Senior Researcher</div>
              <p className="profile-bio">Sudhakaran T is a distinguished academic professional, researcher, and educator with an extensive record of higher-education pedagogy, scholarly mentorship, and published research. Having identified systemic gaps in conventional research-focused environments, he established SRCAA to provide equitable, transparent, and high-quality research support to scholars across disciplines.</p>
              <p className="profile-bio">Under his direction, SRCAA achieved ITC accreditation, established international scholarly affiliations, and created structured fellowship and internship frameworks for hundreds of student scholars.</p>
              <blockquote className="founder-quote">
                <i className="fas fa-quote-left"></i> Bridging gaps in research-focused institutions through inclusive, collaborative, and ethically governed education.
              </blockquote>
              <div className="tag-row">
                <span className="tag"><i className="fas fa-certificate"></i> ITC Associate</span>
                <span className="tag"><i className="fas fa-book-reader"></i> SGRCR Founder</span>
                <span className="tag"><i className="fas fa-chalkboard-teacher"></i> Higher Education Mentor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR. ANJANA RADHAKRISHNA SECTION */}
      <section id="anjana" className="section reveal" aria-labelledby="anjana-title">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-user-graduate"></i> Academic Scholar</div>
          <h2 className="section-title" id="anjana-title">Dr. Anjana Radhakrishna</h2>
          <p className="section-sub">Senior academician providing higher education leadership, management scholarship, and institutional governance mentorship.</p>
        </div>
        <div className="founder-box reveal-scale">
          <div className="founder-grid">
            <div className="reveal-left scholar-meta-grid">
              <div className="exp-stats-box">
                <div className="num">20+</div>
                <div className="lbl">Years of Academic Tenure</div>
              </div>
              <div className="info-panel">
                <div className="info-panel-title"><i className="fas fa-university"></i> Academic Credentials</div>
                <div className="info-row"><i className="fas fa-graduation-cap"></i> Ph.D., MBA</div>
                <div className="info-row"><i className="fas fa-chalkboard-teacher"></i> Higher Education Professor</div>
                <div className="info-row"><i className="fas fa-award"></i> Senior Academic Scholar, SRCAA</div>
              </div>
              <div className="info-panel">
                <div className="info-panel-title"><i className="fas fa-landmark"></i> Domain Specialization</div>
                <div className="info-row"><i className="fas fa-balance-scale"></i> Corporate Governance</div>
                <div className="info-row"><i className="fas fa-chart-line"></i> Strategic Management</div>
                <div className="info-row"><i className="fas fa-book-reader"></i> Curriculum &amp; Evaluation</div>
              </div>
            </div>
            <div className="reveal-right">
              <h3 className="profile-title">Dr. Anjana Radhakrishna</h3>
              <div className="profile-sub">Ph.D., MBA &nbsp;|&nbsp; Senior Academic Scholar &amp; Advisory Board Member</div>
              <p className="profile-bio">Dr. Anjana Radhakrishna is a distinguished academician, doctoral researcher, and higher education specialist with over 20 years of higher education teaching tenure and published research in management and corporate governance.</p>
              <p className="profile-bio">Throughout more than two decades of dedicated academic service, Dr. Anjana has spearheaded curriculum design, postgraduate mentorship, institutional evaluation frameworks, and doctoral research guidance. At SRCAA, she guides strategic academic initiatives, interdisciplinary research design, and faculty development programmes.</p>
              <blockquote className="founder-quote">
                <i className="fas fa-quote-left"></i> Dedicated to fostering rigorous research excellence, ethical corporate governance, and pedagogical innovation across higher education.
              </blockquote>
              <div className="tag-row">
                <span className="tag"><i className="fas fa-balance-scale"></i> Corporate Governance</span>
                <span className="tag"><i className="fas fa-chart-line"></i> Management Studies</span>
                <span className="tag"><i className="fas fa-graduation-cap"></i> Doctoral Mentorship</span>
                <span className="tag"><i className="fas fa-award"></i> Advisory Board Member</span>
                <span className="tag"><i className="fas fa-chalkboard-teacher"></i> Faculty Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC BOARD & FACULTY ADVISORS */}
      <section id="board" className="section reveal" aria-labelledby="board-title">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-users"></i> Academic Board</div>
          <h2 className="section-title" id="board-title">Academic Board &amp; Faculty Advisors</h2>
          <p className="section-sub">A distinguished interdisciplinary council of educators, university researchers, and domain specialists.</p>
        </div>

        {/* Category Filter Controls */}
        <div className="board-filters" id="boardFilters" role="tablist" aria-label="Academic board category filter">
          <button
            type="button"
            className={`board-filter-btn ${boardFilter === 'all' ? 'active' : ''}`}
            onClick={() => setBoardFilter('all')}
          >
            <i className="fas fa-th-large"></i> All Members (12)
          </button>
          <button
            type="button"
            className={`board-filter-btn ${boardFilter === 'scholar' ? 'active' : ''}`}
            onClick={() => setBoardFilter('scholar')}
          >
            <i className="fas fa-user-graduate"></i> Scholars &amp; Leadership (1)
          </button>
          <button
            type="button"
            className={`board-filter-btn ${boardFilter === 'faculty' ? 'active' : ''}`}
            onClick={() => setBoardFilter('faculty')}
          >
            <i className="fas fa-chalkboard-teacher"></i> Faculty &amp; Doctoral Chairs (8)
          </button>
          <button
            type="button"
            className={`board-filter-btn ${boardFilter === 'advisory' ? 'active' : ''}`}
            onClick={() => setBoardFilter('advisory')}
          >
            <i className="fas fa-balance-scale"></i> Advisory &amp; Legal (3)
          </button>
        </div>

        <div className="cards-grid">
          {/* 1. Dr. Santosh Nelamakanahalli Chikkamari */}
          {(boardFilter === 'all' || boardFilter === 'scholar') && (
            <div className="card card-scholar-feature reveal-scale reveal-delay-1" id="faculty-santosh">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge badge-gold"><i className="fas fa-globe-asia"></i> Associate Researcher</span>
                  <span className="member-exp-badge"><i className="fas fa-university"></i> Australia Linkage</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar card-avatar-gold"><i className="fas fa-chart-pie"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Dr. Santosh Nelamakanahalli Chikkamari</h3>
                    <div className="card-sub" title="M.Com., Ph.D. | Associate Researcher">M.Com., Ph.D. &bull; Associate Researcher</div>
                  </div>
                </div>
                <p className="card-bio">Scholar associated with Charles Sturt University and the University of Sydney Business School, Australia. Domain expert in commerce, corporate finance, and quantitative research methodology, contributing international research linkage to SRCAA.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-chart-line"></i> Commerce &amp; Quantitative Finance</span>
              </div>
            </div>
          )}

          {/* 2. Dr. Narayana K.H */}
          {(boardFilter === 'all' || boardFilter === 'faculty') && (
            <div className="card reveal-scale reveal-delay-2" id="faculty-narayana">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-user-graduate"></i> Academic Board</span>
                  <span className="member-exp-badge"><i className="fas fa-university"></i> Professor</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-book-reader"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Dr. Narayana K.H</h3>
                    <div className="card-sub">MA, Ph.D. &bull; Academic Board Member</div>
                  </div>
                </div>
                <p className="card-bio">Experienced academician and researcher with extensive contributions to higher education pedagogy and scholarly literature review methodologies.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-book"></i> Literature &amp; Humanities</span>
              </div>
            </div>
          )}

          {/* 3. Dr. Lakshmi Bai D */}
          {(boardFilter === 'all' || boardFilter === 'faculty') && (
            <div className="card reveal-scale" id="faculty-lakshmi">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-user-graduate"></i> Academic Board</span>
                  <span className="member-exp-badge"><i className="fas fa-university"></i> Professor</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-chalkboard-teacher"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Dr. Lakshmi Bai D</h3>
                    <div className="card-sub">M.Com., Ph.D. &bull; Academic Board Member</div>
                  </div>
                </div>
                <p className="card-bio">Expert in commerce, business administration, and quantitative research methods with numerous publications in indexed peer-reviewed journals.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-coins"></i> Commerce &amp; Accountancy</span>
              </div>
            </div>
          )}

          {/* 4. Dr. Pruthvi N */}
          {(boardFilter === 'all' || boardFilter === 'faculty') && (
            <div className="card reveal-scale reveal-delay-1" id="faculty-pruthvi">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-user-graduate"></i> Academic Board</span>
                  <span className="member-exp-badge"><i className="fas fa-university"></i> Professor</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-flask"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Dr. Pruthvi N</h3>
                    <div className="card-sub">M.Sc., Ph.D. &bull; Academic Board Member</div>
                  </div>
                </div>
                <p className="card-bio">Specialist in science education, research design, and laboratory methodologies, supporting multidisciplinary research initiatives at SRCAA.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-atom"></i> Natural Sciences</span>
              </div>
            </div>
          )}

          {/* 5. Dr. Shashikala C.S */}
          {(boardFilter === 'all' || boardFilter === 'faculty') && (
            <div className="card reveal-scale reveal-delay-2" id="faculty-shashikala">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-user-graduate"></i> Academic Board</span>
                  <span className="member-exp-badge"><i className="fas fa-university"></i> Professor</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-brain"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Dr. Shashikala C.S</h3>
                    <div className="card-sub">MA, Ph.D. &bull; Academic Board Member</div>
                  </div>
                </div>
                <p className="card-bio">Senior scholar in social sciences and humanities, focused on qualitative research frameworks, ethics in academia, and community impact studies.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-users"></i> Social Sciences</span>
              </div>
            </div>
          )}

          {/* 6. Dr. Rajini K.S */}
          {(boardFilter === 'all' || boardFilter === 'faculty') && (
            <div className="card reveal-scale" id="faculty-rajini">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-user-graduate"></i> Academic Board</span>
                  <span className="member-exp-badge"><i className="fas fa-university"></i> Professor</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-graduation-cap"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Dr. Rajini K.S</h3>
                    <div className="card-sub">M.Sc., Ph.D. &bull; Academic Board Member</div>
                  </div>
                </div>
                <p className="card-bio">Researcher in applied sciences, data analysis, and academic writing. Guides postgraduate students and early-career researchers at SRCAA.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-microscope"></i> Applied Sciences</span>
              </div>
            </div>
          )}

          {/* 7. Mr. Ambarish C Abbaiah */}
          {(boardFilter === 'all' || boardFilter === 'faculty') && (
            <div className="card reveal-scale reveal-delay-1" id="faculty-ambarish">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-user-tie"></i> Faculty Advisor</span>
                  <span className="member-exp-badge"><i className="fas fa-university"></i> Senior Faculty</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-briefcase"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Mr. Ambarish C Abbaiah</h3>
                    <div className="card-sub">MBA, M.Com. &bull; Faculty Advisor</div>
                  </div>
                </div>
                <p className="card-bio">Management and commerce educator with over a decade of teaching experience in financial accounting, taxation, and business research methodologies.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-calculator"></i> Accounting &amp; Taxation</span>
              </div>
            </div>
          )}

          {/* 8. Mr. Dhasharatha T */}
          {(boardFilter === 'all' || boardFilter === 'faculty') && (
            <div className="card reveal-scale reveal-delay-2" id="faculty-dhasharatha">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-user-tie"></i> Faculty Advisor</span>
                  <span className="member-exp-badge"><i className="fas fa-university"></i> Faculty</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-chart-bar"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Mr. Dhasharatha T</h3>
                    <div className="card-sub">M.Com., B.Ed. &bull; Faculty Advisor</div>
                  </div>
                </div>
                <p className="card-bio">Commerce educator specializing in financial analysis, banking systems, and pedagogical research, actively mentoring SRCAA student cohorts.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-money-check-alt"></i> Banking &amp; Finance</span>
              </div>
            </div>
          )}

          {/* 9. Mr. Dileep R */}
          {(boardFilter === 'all' || boardFilter === 'faculty') && (
            <div className="card reveal-scale" id="faculty-dileep">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-user-tie"></i> Faculty Advisor</span>
                  <span className="member-exp-badge"><i className="fas fa-university"></i> Faculty</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-laptop-code"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Mr. Dileep R</h3>
                    <div className="card-sub">MCA, M.Phil. &bull; Faculty Advisor</div>
                  </div>
                </div>
                <p className="card-bio">Computer applications educator and IT researcher, guiding digital research infrastructure, data management, and research software at SRCAA.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-code"></i> Computer Applications</span>
              </div>
            </div>
          )}

          {/* 10. Ms. Bindu C */}
          {(boardFilter === 'all' || boardFilter === 'advisory') && (
            <div className="card reveal-scale reveal-delay-1" id="faculty-bindu">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-balance-scale"></i> Advisory Council</span>
                  <span className="member-exp-badge"><i className="fas fa-landmark"></i> Governance</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-user-check"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Ms. Bindu C</h3>
                    <div className="card-sub">MA, B.Ed. &bull; Advisory Board Member</div>
                  </div>
                </div>
                <p className="card-bio">Education administration specialist advising SRCAA on academic compliance, student welfare, institutional governance, and quality assurance frameworks.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-clipboard-check"></i> Academic Compliance</span>
              </div>
            </div>
          )}

          {/* 11. Mr. Anil Sulegai P */}
          {(boardFilter === 'all' || boardFilter === 'advisory') && (
            <div className="card reveal-scale reveal-delay-2" id="faculty-anil">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-balance-scale"></i> Advisory Council</span>
                  <span className="member-exp-badge"><i className="fas fa-landmark"></i> Legal</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-gavel"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Mr. Anil Sulegai P</h3>
                    <div className="card-sub">BA, LL.B &bull; Legal &amp; Compliance Advisor</div>
                  </div>
                </div>
                <p className="card-bio">Legal counsel specializing in education law, intellectual property, and institutional regulatory compliance, ensuring ethical and lawful operations at SRCAA.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-shield-alt"></i> Intellectual Property</span>
              </div>
            </div>
          )}

          {/* 12. Mr. Abhi C */}
          {(boardFilter === 'all' || boardFilter === 'advisory') && (
            <div className="card reveal-scale" id="faculty-abhi">
              <div>
                <div className="card-badge-row">
                  <span className="member-role-badge"><i className="fas fa-balance-scale"></i> Advisory Council</span>
                  <span className="member-exp-badge"><i className="fas fa-cogs"></i> Operations</span>
                </div>
                <div className="card-header-row">
                  <div className="card-avatar"><i className="fas fa-network-wired"></i></div>
                  <div className="card-identity">
                    <h3 className="card-title">Mr. Abhi C</h3>
                    <div className="card-sub">B.E., M.Tech. &bull; Technical Advisor</div>
                  </div>
                </div>
                <p className="card-bio">Engineering professional advising SRCAA on digital platforms, online learning technologies, research repositories, and institutional IT strategy.</p>
              </div>
              <div className="card-footer">
                <span className="card-domain-tag"><i className="fas fa-server"></i> Digital Infrastructure</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SCHOLARLY PUBLICATIONS & ARCHIVE */}
      <section id="press" className="section reveal" aria-labelledby="press-title">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-book-open"></i> Research Repository</div>
          <h2 className="section-title" id="press-title">Scholarly Press &amp; Publications</h2>
          <p className="section-sub">Official peer-reviewed journal portal, Abhijnana Prathiba archives, student dissertations, and institutional monographs.</p>
        </div>

        {/* SGRCR OFFICIAL JOURNAL PORTAL SHOWCASE (HIGHLIGHTED) */}
        <div className="sgrcr-showcase-card reveal-scale" id="sgrcr-portal-showcase">
          <div className="sgrcr-card-inner">
            <div className="sgrcr-icon-box">
              <i className="fas fa-book-journal-whills"></i>
            </div>
            <div className="sgrcr-meta">
              <div className="sgrcr-tag"><i className="fas fa-star"></i> Flagship Academic Journal</div>
              <h3 className="sgrcr-title">SGRCR &mdash; SRCAA Global Review of Contemporary Research</h3>
              <p className="sgrcr-desc">Our official open-access, multidisciplinary peer-reviewed international academic journal portal. Dedicated to disseminating high-impact original empirical research, scholarly treatises, faculty monographs, and graduate dissertations across multidisciplinary domains.</p>
            </div>
            <div className="sgrcr-action">
              <a
                href="https://www.sgrcr.srcaa.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sgrcr-highlight"
                id="btnSgrcrVisitPortal"
                aria-label="Visit SGRCR Journal Website (opens in new tab)"
                title="Visit https://www.sgrcr.srcaa.co.in/"
              >
                <span>Visit Journal Website</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
              <span className="sgrcr-url-hint"><i className="fas fa-globe"></i> www.sgrcr.srcaa.co.in</span>
            </div>
          </div>
        </div>

        <div className="press-box reveal-scale">
          <div className="press-grid">
            <div>
              <h3 className="press-cat-title"><i className="fas fa-newspaper"></i> Scholarly Press Releases</h3>
              <ul className="press-list">
                <li><a href="https://drive.google.com/file/d/1n1sMu2NsPUr3UaferauuANCxym-AciBk/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> Press Release 2 &mdash; Abhijnana Pratibha 12</a></li>
                <li><a href="https://drive.google.com/file/d/1pUVeA3TWKKTbA5EAQ_YEfSVA2BLNG4qn/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> Press Release 3 &mdash; Abhijnana Pratibha 13</a></li>
                <li><a href="https://drive.google.com/file/d/1O-1pVMt47ISVQZRnnyQgHHuwhARiB9pt/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> Press Release 4 &mdash; Abhijnana Pratibha 16</a></li>
                <li><a href="https://drive.google.com/file/d/1EOM7ABWub1dH37e6zr5h3pqvP7pYODGu/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> Press Release 5 &mdash; Abhijnana Pratibha 45</a></li>
              </ul>
            </div>
            <div>
              <h3 className="press-cat-title"><i className="fas fa-file-signature"></i> Internship Research Reports</h3>
              <ul className="press-list">
                <li><a href="https://drive.google.com/file/d/1YgV5i7Aw7otuxhchHEDPNv3Yl32F-ddV/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> Veena L. (BMS/204/01) &mdash; Empirical Study</a></li>
                <li><a href="https://drive.google.com/file/d/1edrKpmurU67u-wnRgGL_gSdRy7UQDIbn/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> Sushmitha (BMS/180/04) &mdash; Applied Research</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> Rajeshwari (205/02) &mdash; Project Report</a></li>
                <li><a href="https://drive.google.com/file/d/1edrKpmurU67u-wnRgGL_gSdRy7UQDIbn/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> Sneha (BMS/123/03) &mdash; Academic Thesis</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="press-box reveal-scale">
          <div className="press-grid">
            <div>
              <h3 className="press-cat-title"><i className="fas fa-book"></i> Institutional Books</h3>
              <ul className="press-list">
                <li><a href="https://drive.google.com/file/d/1jsELbresEJVvLmyL9m_e48WeCAj3B8im/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fas fa-book-reader"></i> Varalakshmi G. &mdash; ISBN 978-81-979976-4-8</a></li>
              </ul>
            </div>
            <div>
              <h3 className="press-cat-title"><i className="fas fa-bell"></i> Policy &amp; Documentation</h3>
              <ul className="press-list">
                <li>
                  <a
                    href="/accreditations.html"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('accreditations');
                    }}
                  >
                    <i className="fas fa-shield-alt"></i> Quality Assessment &amp; Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#cert"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('home', '#cert');
                    }}
                  >
                    <i className="fas fa-medal"></i> Quality Management System Certificate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INTERNSHIP PROGRAM BANNER */}
      <section id="internship" className="intern-banner reveal" aria-labelledby="intern-title">
        <div className="intern-icon-circle"><i className="fas fa-graduation-cap"></i></div>
        <div className="intern-label">Academic Fellowship &amp; Training</div>
        <h2 className="intern-topic" id="intern-title">SRCAA Research Internship Programme</h2>
        <p className="intern-desc">Collaborate with senior university faculty on real-world academic investigations, scientific research writing, statistical data modelling, and international publication preparation. Gain accredited institutional credentials to accelerate your scholarly career.</p>
        <a href="https://forms.gle/fjVx7ZD64Zm8vZqn8" className="apply-link" target="_blank" rel="noopener noreferrer" id="btnApplyInternship">Apply for Internship <i className="fas fa-arrow-right"></i></a>
      </section>

      {/* CERTIFICATE OF QUALITY */}
      <div id="cert" className="cert-card reveal-scale">
        <div className="cert-icon-circle"><i className="fas fa-medal"></i></div>
        <h3>Certificate of Quality</h3>
        <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>International Quality Certification Program</p>
        <p style={{ fontSize: '1.05rem', margin: '0.8rem 0' }}>Conferred to <strong>Shakti Research Centre &amp; Academia (SRCAA)</strong></p>
        <p>For demonstrable conformity with the Basic Quality Assessment in Academic Administration</p>
        <p style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)', fontWeight: 700, margin: '0.5rem 0' }}>Achievement Score: 85% &mdash; Grade B</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Quality Management System &middot; Documentation Control Framework</p>
        <p style={{ fontWeight: 600, color: 'var(--gold-dark)', margin: '0.5rem 0 1.5rem' }}>Accredited under the International Trade Council (ITC)</p>
        <a href="https://www.qibcertification.org/en/verify?cert=QIB-BASIC-1773566474897-G91BHQ" target="_blank" rel="noopener noreferrer" className="btn btn-outline" id="btnVerifyCert"><i className="fas fa-check-circle"></i> Verify Official Certificate</a>
      </div>

      {/* DORA STATEMENT */}
      <div id="dora" className="dora-card reveal-scale">
        <div className="dora-icon-circle"><i className="fas fa-scroll"></i></div>
        <h3>Statement on Responsible Research Assessment</h3>
        <p><strong>Effective from 01 March 2026</strong>, Shakti Research Centre &amp; Academia (SRCAA) publicly endorses the principles of the <strong>San Francisco Declaration on Research Assessment (DORA)</strong> and formally affirms its commitment to responsible, transparent, and equitable evaluation of scientific research and academic scholars.</p>
        <p>SRCAA maintains that research should be evaluated primarily on the basis of its intrinsic quality, methodology, intellectual rigor, originality, and societal impact, rather than solely on journal-based metrics or impact factors.</p>
        <p>Through its editorial policies, peer reviews, academic publications, and mentoring initiatives, SRCAA actively contributes to building a more balanced, fair, and meaningful global research ecosystem.</p>
      </div>

      {/* CONTACT SECTION */}
      <section id="contact" className="section reveal" aria-labelledby="contact-title">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-envelope-open-text"></i> Inquiries</div>
          <h2 className="section-title" id="contact-title">Academic Communications</h2>
          <p className="section-sub">Direct official correspondence, institutional partnership proposals, and academic inquiries.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card reveal-left" id="cardContactEmail">
            <i className="fas fa-envelope"></i>
            <h3>Institutional Secretariat</h3>
            <p><a href="mailto:srcaacontact@gmail.com">srcaacontact@gmail.com</a></p>
          </div>
          <div className="contact-card reveal-right" id="cardContactCommunity">
            <i className="fab fa-whatsapp"></i>
            <h3>Scholarly Community</h3>
            <p><a href="https://chat.whatsapp.com/LGCXLxBGFJJBmOolmmUYPX" target="_blank" rel="noopener noreferrer">Join Official WhatsApp Channel</a></p>
          </div>
        </div>
        <div className="social-links">
          <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://chat.whatsapp.com/LGCXLxBGFJJBmOolmmUYPX" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
      </section>
    </main>
  );
}
