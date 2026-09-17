import React from 'react';

interface AccreditationsPageProps {
  onNavigate: (page: 'home' | 'accreditations', hash?: string) => void;
}

export default function AccreditationsPage({ onNavigate }: AccreditationsPageProps) {
  return (
    <main className="main-content" id="main-content">
      {/* PAGE HERO */}
      <header className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-icon"><i className="fas fa-certificate"></i></div>
          <div className="section-badge"><i className="fas fa-shield-alt"></i> Quality &amp; Governance</div>
          <h1 className="page-hero-title">Accreditations &amp; Quality Standards</h1>
          <p className="page-hero-sub">
            SRCAA maintains verifiable accreditations, institutional registry listings, and professional memberships that validate our dedication to international research ethics and academic excellence.
          </p>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="section reveal" aria-labelledby="overview-title">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-landmark"></i> Standards Framework</div>
          <h2 className="section-title" id="overview-title">Our Quality Commitment</h2>
          <p className="section-sub">A formal institutional commitment to international recognition, quality control, and persistent academic transparency.</p>
        </div>
        <div className="about-box reveal-scale">
          <p className="about-lead"><strong>Shakti Research Centre &amp; Academia (SRCAA)</strong> has demonstrated conformity with internationally recognized institutional standards through its accredited status under the <strong>International Trade Council (ITC) Conformity Assessment and Recognition Framework</strong>. In addition, SRCAA is formally registered with the <strong>Global Association of Online Trainers and Examiners (GAOTE)</strong>, ensuring operational excellence across modern digital learning and remote examination protocols.</p>
          <p className="about-lead">To ensure international discoverability and persistent institutional identification, SRCAA is indexed within the <strong>Research Organization Registry (ROR)</strong>. The institution also holds an accredited <strong>Certificate of Quality (85% Grade B)</strong> under the International Quality Certification Program for Quality Management Systems and Documentation Control.</p>
          <p className="about-lead">Beyond formal accreditations, SRCAA actively advances scholarly exchange through active professional engagement with the <strong>Research Council of India (RCI)</strong>, the <strong>American Psychological Association (APA)</strong>, the <strong>Commerce and Management Association of India (CMAOI)</strong>, and an official endorsement of the <strong>San Francisco Declaration on Research Assessment (DORA)</strong>.</p>
        </div>
      </section>

      {/* RECOGNISED ACCREDITATIONS GRID */}
      <section className="section reveal" aria-labelledby="accred-title">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-award"></i> Verification &amp; Registries</div>
          <h2 className="section-title" id="accred-title">Institutional Accreditations</h2>
          <p className="section-sub">Formal credentials recognized by international and national academic bodies.</p>
        </div>
        <div className="accred-grid">
          <div className="accred-card reveal-scale" id="accred-itc">
            <i className="fas fa-certificate"></i>
            <h3>ITC Accreditation</h3>
            <p>Accredited under the International Trade Council Conformity Assessment and Recognition Framework &mdash; establishing verified institutional quality and operational standards.</p>
          </div>

          <div className="accred-card reveal-scale reveal-delay-1" id="accred-gaote">
            <i className="fas fa-globe-asia"></i>
            <h3>GAOTE Registered Institution</h3>
            <p>Formally registered with the Global Association of Online Trainers and Examiners, certifying excellence in digital pedagogy, academic mentoring, and examination procedures.</p>
          </div>

          <div className="accred-card reveal-scale reveal-delay-2" id="accred-qib">
            <i className="fas fa-medal"></i>
            <h3>International Quality Certificate</h3>
            <p>International Quality Certificate (85% Grade B) accredited by ITC through QIB Certification &mdash; verifying our Quality Management System and Documentation Control Framework.</p>
            <div style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
              <a href="https://www.qibcertification.org/en/verify?cert=QIB-BASIC-1773566474897-G91BHQ" target="_blank" rel="noopener noreferrer" className="btn btn-outline" id="btnVerifyQIB"><i className="fas fa-check-circle"></i> Verify Certificate</a>
            </div>
          </div>

          <div className="accred-card reveal-scale reveal-delay-3" id="accred-ror">
            <i className="fas fa-database"></i>
            <h3>ROR Listed Organization</h3>
            <p>Listed within the Research Organization Registry (ROR), providing a globally unique, persistent institutional identifier for scholarly research output and international grant referencing.</p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL MEMBERSHIPS */}
      <section className="section reveal" aria-labelledby="memberships-title">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-handshake"></i> Academic Alliances</div>
          <h2 className="section-title" id="memberships-title">Professional Memberships</h2>
          <p className="section-sub">Active organizational engagement with specialized research associations across sciences and commerce.</p>
        </div>
        <div className="cards-grid">
          <div className="card reveal-scale" id="member-rci">
            <div className="card-header-row">
              <div className="card-avatar"><i className="fas fa-university"></i></div>
              <div>
                <h3 className="card-title">RCI Member</h3>
                <div className="card-sub">Research Council of India</div>
              </div>
            </div>
            <p className="card-bio">Institutional member supporting interdisciplinary research collaboration, academic development, and faculty seminars across Indian universities.</p>
          </div>

          <div className="card reveal-scale reveal-delay-1" id="member-apa">
            <div className="card-header-row">
              <div className="card-avatar"><i className="fas fa-brain"></i></div>
              <div>
                <h3 className="card-title">APA Affiliation</h3>
                <div className="card-sub">American Psychological Association</div>
              </div>
            </div>
            <p className="card-bio">Professional engagement advancing behavioural science research methodologies, pedagogical psychology, and ethical participant protocols.</p>
          </div>

          <div className="card reveal-scale reveal-delay-2" id="member-cmaoi">
            <div className="card-header-row">
              <div className="card-avatar"><i className="fas fa-balance-scale"></i></div>
              <div>
                <h3 className="card-title">CMAOI Partner</h3>
                <div className="card-sub">Commerce &amp; Management Association of India</div>
              </div>
            </div>
            <p className="card-bio">Partner institution dedicated to promoting applied research, corporate finance studies, and empirical business pedagogy.</p>
          </div>

          <div className="card reveal-scale" id="member-dora">
            <div className="card-header-row">
              <div className="card-avatar"><i className="fas fa-scroll"></i></div>
              <div>
                <h3 className="card-title">DORA Signatory</h3>
                <div className="card-sub">San Francisco Declaration</div>
              </div>
            </div>
            <p className="card-bio">Public endorser of DORA principles committed to evaluating scientific research based on intrinsic merit, methodology, and societal impact.</p>
          </div>
        </div>
      </section>

      {/* DORA STATEMENT CHARTER */}
      <section className="section reveal" aria-labelledby="dora-title">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-shield-alt"></i> Ethical Charter</div>
          <h2 className="section-title" id="dora-title">Responsible Research Assessment</h2>
          <p className="section-sub">Declaration of policy on transparent, equitable academic evaluation.</p>
        </div>
        <div className="dora-card reveal-scale">
          <div className="dora-icon-circle"><i className="fas fa-scroll"></i></div>
          <h3>SRCAA Institutional DORA Statement</h3>
          <p><strong>Effective from 01 March 2026</strong>, Shakti Research Centre &amp; Academia (SRCAA) publicly endorses the principles of the <strong>San Francisco Declaration on Research Assessment (DORA)</strong> and affirms its commitment to responsible, transparent, and equitable evaluation of scientific research and academic researchers.</p>
          <p>SRCAA maintains that scholarly inquiry must be appraised on its intrinsic quality, methodological soundness, originality, reproducibility, and real-world societal impact, rather than relying uncritically on journal-based impact metrics.</p>
          <p>Through its peer-review practices, internship mentorship, and research publishing standards, SRCAA actively contributes to cultivating a fairer and more meaningful global knowledge ecosystem.</p>
          <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
            <a href="https://sfdora.org/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" id="btnVerifyDORA"><i className="fas fa-external-link-alt"></i> Learn More About DORA Principles</a>
          </div>
        </div>
      </section>
    </main>
  );
}
