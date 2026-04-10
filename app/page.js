'use client'

const marqueeItems = [
  'University of Montana',
  'College of Business',
  'MISA Club',
  'Artemis Connection',
  'The Buckle',
  'Rocky Mountain Agency',
]

export default function Home() {
  return (
    <main style={{ backgroundColor: '#FAFAFA', color: '#2B2B2B', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'rgba(250,250,250,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(124,106,158,0.1)',
        padding: '0 2rem',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.2rem', fontWeight: 500, color: '#7C6A9E' }}>
          Ben Stanton
        </span>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['About', 'Experience', 'Projects', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontSize: '0.9rem', color: '#2B2B2B', textDecoration: 'none',
              fontFamily: 'var(--font-inter)', fontWeight: 400,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#7C6A9E'}
              onMouseLeave={e => e.target.style.color = '#2B2B2B'}
            >{link}</a>
          ))}
          <a href="#contact" style={{
            backgroundColor: '#7C6A9E', color: '#FAFAFA',
            padding: '0.5rem 1.2rem', borderRadius: '6px',
            fontSize: '0.9rem', textDecoration: 'none',
            fontFamily: 'var(--font-inter)', fontWeight: 500,
          }}>Get In Touch</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        paddingTop: '160px', paddingBottom: '100px',
        paddingLeft: '2rem', paddingRight: '2rem',
        maxWidth: '900px', margin: '0 auto',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#7C6A9E', fontWeight: 500, marginBottom: '1.5rem',
          fontFamily: 'var(--font-inter)',
        }}>
          MIS Student · Consultant · Builder
        </p>
        <h1 style={{
          fontFamily: 'var(--font-fraunces)',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 400, lineHeight: 1.1,
          color: '#2B2B2B', marginBottom: '1.5rem',
        }}>
          Ben Stanton
        </h1>
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          color: '#5a5a5a', fontWeight: 300,
          fontFamily: 'var(--font-inter)',
          marginBottom: '2.5rem', lineHeight: 1.6,
        }}>
          Curiosity in. Results out.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            backgroundColor: '#7C6A9E', color: '#FAFAFA',
            padding: '0.85rem 2rem', borderRadius: '8px',
            fontSize: '1rem', textDecoration: 'none',
            fontFamily: 'var(--font-inter)', fontWeight: 500,
          }}>View My Work</a>
          <a href="#contact" style={{
            backgroundColor: 'transparent', color: '#7C6A9E',
            padding: '0.85rem 2rem', borderRadius: '8px',
            fontSize: '1rem', textDecoration: 'none',
            fontFamily: 'var(--font-inter)', fontWeight: 500,
            border: '1.5px solid #7C6A9E',
          }}>Get In Touch</a>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{
        overflow: 'hidden', borderTop: '1px solid rgba(124,106,158,0.15)',
        borderBottom: '1px solid rgba(124,106,158,0.15)',
        padding: '1.2rem 0', backgroundColor: '#FAFAFA',
      }}>
        <div style={{
          display: 'flex', gap: '4rem',
          animation: 'marquee 25s linear infinite',
          width: 'max-content',
        }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.85rem',
              fontWeight: 500, color: '#7C6A9E', letterSpacing: '0.08em',
              textTransform: 'uppercase', whiteSpace: 'nowrap',
            }}>
              {item} <span style={{ color: '#C2A878', marginLeft: '2rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{
        maxWidth: '1000px', margin: '0 auto',
        padding: '120px 2rem',
        display: 'flex', gap: '5rem', alignItems: 'flex-start',
        flexWrap: 'nowrap',
      }}>
        <div style={{ flex: '0 0 280px' }}>
          <div style={{
            width: '280px', height: '340px',
            borderRadius: '12px', overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(124,106,158,0.15)',
          }}>
            <img
              src="/headshot.jpg"
              alt="Ben Stanton"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <p style={{
            fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#C2A878', fontWeight: 500, marginBottom: '1rem',
            fontFamily: 'var(--font-inter)',
          }}>About</p>
          <h2 style={{
            fontFamily: 'var(--font-fraunces)', fontSize: '2.4rem',
            fontWeight: 400, marginBottom: '1.5rem', lineHeight: 1.2,
          }}>
            I think in systems.<br />I work with people.
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '1rem', fontFamily: 'var(--font-inter)' }}>
            I'm a Management Information Systems student at the University of Montana College of Business, with an Accounting double major in progress. I'm drawn to the overlap between how organizations work and how technology can make them work better.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#4a4a4a', marginBottom: '1rem', fontFamily: 'var(--font-inter)' }}>
            This summer I'm joining Artemis Connection as a Strategic Consulting Fellow, working on real client projects across communications, data analysis, and professional consulting frameworks. I'm also the Outreach Coordinator for MISA and a Sales & Management Intern at The Buckle.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#4a4a4a', fontFamily: 'var(--font-inter)' }}>
            Outside of work: I'm ranked #24 in Montana chess (USCF 1605), I spend time in the gym, and I'm genuinely excited about where AI is taking business. I also do occasional work with Rocky Mountain Agency.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{
        backgroundColor: '#F3F0F8',
        padding: '120px 2rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#C2A878', fontWeight: 500, marginBottom: '1rem',
            fontFamily: 'var(--font-inter)',
          }}>Experience</p>
          <h2 style={{
            fontFamily: 'var(--font-fraunces)', fontSize: '2.4rem',
            fontWeight: 400, marginBottom: '3rem', lineHeight: 1.2,
          }}>Where I've been building.</h2>

          {[
            {
              role: 'Strategic Consulting Fellow',
              org: 'Artemis Connection',
              date: 'Summer 2026',
              location: 'Remote',
              tags: ['Strategy', 'Operations', 'Communications'],
              description: 'Boutique consulting firm working with real clients on strategy and operations challenges. Working on projects across communications, data analysis, and professional consulting frameworks.',
              featured: true,
            },
            {
              role: 'Sales & Management Intern',
              org: 'The Buckle, Inc.',
              date: 'Jan 2026 – Present',
              location: 'Missoula, MT',
              tags: ['Sales', 'Management', 'Operations'],
              description: 'Managing 50–100+ daily guest interactions while balancing competing priorities across sales, training, and store operations. Developing real management skills in a high-volume retail environment.',
              featured: false,
            },
            {
              role: 'Model & Talent',
              org: 'Rocky Mountain Agency',
              date: 'Dec 2024 – Present',
              location: 'Missoula, MT',
              tags: ['Client Work', 'Professional'],
              description: 'Professional talent representation. Portfolio work across commercial and print. A different kind of client-facing experience that sharpens presence and communication.',
              featured: false,
            },
            {
              role: 'Operations & Hospitality Coordinator',
              org: "Sparky's Garage Bar and Grill",
              date: 'Summers 2023–2025',
              location: 'Dillon, MT',
              tags: ['Operations', 'Leadership'],
              description: 'Coordinated high-volume operations for a team of 20+. Developed stress management and prioritization skills in a fast-paced hospitality environment.',
              featured: false,
            },
          ].map((job, i) => (
            <div key={i} style={{
              backgroundColor: '#FAFAFA',
              border: job.featured ? '1.5px solid #7C6A9E' : '1px solid rgba(124,106,158,0.15)',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '1.5rem',
              position: 'relative',
            }}>
              {job.featured && (
                <span style={{
                  position: 'absolute', top: '1.2rem', right: '1.2rem',
                  backgroundColor: '#7C6A9E', color: '#FAFAFA',
                  fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em',
                  textTransform: 'uppercase', padding: '0.25rem 0.7rem',
                  borderRadius: '20px', fontFamily: 'var(--font-inter)',
                }}>Featured</span>
              )}
              <div style={{ marginBottom: '0.75rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-fraunces)', fontSize: '1.3rem',
                  fontWeight: 500, color: '#2B2B2B', marginBottom: '0.25rem',
                }}>{job.role}</h3>
                <p style={{
                  fontFamily: 'var(--font-inter)', fontSize: '0.95rem',
                  color: '#7C6A9E', fontWeight: 500,
                }}>{job.org} · <span style={{ color: '#888', fontWeight: 400 }}>{job.date} · {job.location}</span></p>
              </div>
              <p style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.95rem',
                color: '#4a4a4a', lineHeight: 1.7, marginBottom: '1rem',
              }}>{job.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {job.tags.map(tag => (
                  <span key={tag} style={{
                    backgroundColor: 'rgba(124,106,158,0.08)',
                    color: '#7C6A9E', fontSize: '0.78rem',
                    padding: '0.25rem 0.75rem', borderRadius: '20px',
                    fontFamily: 'var(--font-inter)', fontWeight: 500,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{
        padding: '120px 2rem',
        maxWidth: '900px', margin: '0 auto',
      }}>
        <p style={{
          fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#C2A878', fontWeight: 500, marginBottom: '1rem',
          fontFamily: 'var(--font-inter)',
        }}>Projects</p>
        <h2 style={{
          fontFamily: 'var(--font-fraunces)', fontSize: '2.4rem',
          fontWeight: 400, marginBottom: '3rem', lineHeight: 1.2,
        }}>Things I'm building.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              title: 'Missoula Demo Sites',
              subtitle: 'Web Agency Portfolio',
              description: 'Demo websites built for fictional Missoula businesses. Proof of concept for local web agency work. Two sites: a restaurant and a retail shop.',
              tag: 'Web Dev',
              status: 'active',
            },
            {
              title: 'InternU',
              subtitle: 'Coming Soon',
              description: 'A curated internship board for University of Montana students. Every listing manually vetted, every opportunity Montana-connected.',
              tag: 'Product',
              status: 'upcoming',
            },
          ].map((project, i) => (
            <div key={i} style={{
              backgroundColor: '#FAFAFA',
              border: '1px solid rgba(124,106,158,0.15)',
              borderRadius: '12px', padding: '1.75rem',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{
                  backgroundColor: project.status === 'active' ? 'rgba(124,106,158,0.1)' : 'rgba(194,168,120,0.1)',
                  color: project.status === 'active' ? '#7C6A9E' : '#C2A878',
                  fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em',
                  textTransform: 'uppercase', padding: '0.25rem 0.7rem',
                  borderRadius: '20px', fontFamily: 'var(--font-inter)',
                }}>{project.tag}</span>
                {project.status === 'upcoming' && (
                  <span style={{
                    fontSize: '0.72rem', color: '#aaa',
                    fontFamily: 'var(--font-inter)', fontWeight: 400,
                  }}>Coming Soon</span>
                )}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-fraunces)', fontSize: '1.2rem',
                fontWeight: 500, color: '#2B2B2B',
              }}>{project.title}</h3>
              <p style={{
                fontSize: '0.82rem', color: '#7C6A9E',
                fontFamily: 'var(--font-inter)', fontWeight: 500,
              }}>{project.subtitle}</p>
              <p style={{
                fontSize: '0.92rem', color: '#4a4a4a',
                fontFamily: 'var(--font-inter)', lineHeight: 1.7,
              }}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        backgroundColor: '#F3F0F8',
        padding: '120px 2rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <p style={{
              fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#C2A878', fontWeight: 500, marginBottom: '1rem',
              fontFamily: 'var(--font-inter)',
            }}>Contact</p>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)', fontSize: '2.4rem',
              fontWeight: 400, marginBottom: '1.5rem', lineHeight: 1.2,
            }}>Let's talk.</h2>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '1rem',
              color: '#4a4a4a', lineHeight: 1.8, marginBottom: '2rem',
            }}>
              Whether it's a project, an opportunity, or just a good conversation, I'm easy to reach.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:benjamin.stanton.31@gmail.com" style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                textDecoration: 'none', color: '#2B2B2B',
                fontFamily: 'var(--font-inter)', fontSize: '0.95rem',
              }}>
                <span style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  backgroundColor: 'rgba(124,106,158,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem',
                }}>✉</span>
                benjamin.stanton.31@gmail.com
              </a>
              <a href="https://linkedin.com/in/benstanton31" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                textDecoration: 'none', color: '#2B2B2B',
                fontFamily: 'var(--font-inter)', fontSize: '0.95rem',
              }}>
                <span style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  backgroundColor: 'rgba(124,106,158,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem',
                }}>in</span>
                linkedin.com/in/benstanton31
              </a>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: '260px' }}>
            <form onSubmit={async (e) => {
              e.preventDefault()
              const form = e.target
              const data = new FormData(form)
              const res = await fetch('https://formspree.io/f/xykbrgqg', {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' }
              })
              if (res.ok) {
                alert('Message sent! I will get back to you soon.')
                form.reset()
              } else {
                alert('Something went wrong. Try emailing me directly.')
              }
            }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text" placeholder="Your name" name="name"
                style={{
                  padding: '0.85rem 1rem', borderRadius: '8px',
                  border: '1px solid rgba(124,106,158,0.25)',
                  backgroundColor: '#FAFAFA', fontFamily: 'var(--font-inter)',
                  fontSize: '0.95rem', color: '#2B2B2B', outline: 'none',
                }}
              />
              <input
                type="email" placeholder="Your email" name="email"
                style={{
                  padding: '0.85rem 1rem', borderRadius: '8px',
                  border: '1px solid rgba(124,106,158,0.25)',
                  backgroundColor: '#FAFAFA', fontFamily: 'var(--font-inter)',
                  fontSize: '0.95rem', color: '#2B2B2B', outline: 'none',
                }}
              />
              <textarea
                placeholder="What's on your mind?" name="message" rows={5}
                style={{
                  padding: '0.85rem 1rem', borderRadius: '8px',
                  border: '1px solid rgba(124,106,158,0.25)',
                  backgroundColor: '#FAFAFA', fontFamily: 'var(--font-inter)',
                  fontSize: '0.95rem', color: '#2B2B2B', outline: 'none',
                  resize: 'vertical',
                }}
              />
              <button type="submit" style={{
                backgroundColor: '#7C6A9E', color: '#FAFAFA',
                padding: '0.85rem 2rem', borderRadius: '8px',
                fontSize: '1rem', fontFamily: 'var(--font-inter)',
                fontWeight: 500, border: 'none', cursor: 'pointer',
                alignSelf: 'flex-start',
              }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '2rem',
        borderTop: '1px solid rgba(124,106,158,0.1)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-fraunces)', fontSize: '1rem',
          color: '#7C6A9E', fontWeight: 500,
        }}>Ben Stanton</span>
        <span style={{
          fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#aaa',
        }}>© 2026 · Missoula, MT</span>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>

    </main>
  )
}