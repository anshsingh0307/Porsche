'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     DATA STRUCTURES: AUTHENTIC SPECIFICATIONS & ARCHIVES
     ========================================================================== */

  // SECTION G: MODEL EXPLORER DATA (Verified Factory Specifications)
  const MODEL_DATA = {
    '911': {
      title: 'Porsche 911 Carrera GTS',
      family: 'THE ICONIC 911 COUPE &bull; T-HYBRID',
      summary: 'Featuring the groundbreaking 3.6-liter boxer T-Hybrid system with electric exhaust gas turbocharger and integrated permanent magnet motor within the 8-speed PDK transmission.',
      badge: 'T-HYBRID PERFORMANCE',
      image: 'assets/images/models/model-911.jpg',
      alt: 'Porsche 911 Carrera GTS sports coupe in interactive showroom',
      accel: '3.0 s',
      accelSub: 'with Sport Chrono',
      power: '398 kW / 541 PS',
      powerSub: 'Combined System Output',
      speed: '312 km/h',
      speedSub: 'Official Track Velocity',
      drive: '8-speed PDK / RWD',
      driveSub: 'Dual-Clutch Transmission',
      soundTitle: 'Boxer Flat-Six Acoustic Profile',
      soundDesc: 'The unmistakable mechanical growl of the boxer flat-six: firing order 1-6-2-4-3-5, producing a resonant acoustic timbre shaped by equal-length exhaust manifolds and active twin bypass valves.',
      soundType: 'combustion',
      baseFreq: 180
    },
    'taycan': {
      title: 'Porsche Taycan Turbo S',
      family: 'ALL-ELECTRIC SPORTS SALOON &bull; 800V',
      summary: 'Industry-leading 800-volt high-performance architecture with launch control overboost producing up to 700 kW (952 PS) and dual permanent-magnet all-wheel drive.',
      badge: 'ALL-ELECTRIC 800V',
      image: 'assets/images/models/model-taycan.jpg',
      alt: 'Porsche Taycan Turbo S all-electric sports saloon in interactive showroom',
      accel: '2.4 s',
      accelSub: 'with Launch Control',
      power: '700 kW / 952 PS',
      powerSub: 'Overboost Output',
      speed: '260 km/h',
      speedSub: 'Electronically Limited',
      drive: 'Dual-Motor AWD',
      driveSub: '2-Speed Rear Transmission',
      soundTitle: 'Porsche Electric Sport Sound',
      soundDesc: 'Emotionally charged acoustic feedback composed from real electric motor frequencies, pitch-modulated dynamically with vehicle velocity and torque demand.',
      soundType: 'electric',
      baseFreq: 320
    },
    '718': {
      title: 'Porsche 718 Cayman GT4 RS',
      family: 'MID-ENGINE PURIST &bull; 9,000 RPM',
      summary: 'High-revving 4.0-liter naturally aspirated flat-six sourced directly from the 911 GT3 cup engine, titanium connecting rods, and process air intakes directly behind occupant ears.',
      badge: 'NATURALLY ASPIRATED 9,000 RPM',
      image: 'assets/images/models/model-718.jpg',
      alt: 'Porsche 718 Cayman GT4 RS mid-engine sports coupe',
      accel: '3.4 s',
      accelSub: '0–100 km/h Sprint',
      power: '368 kW / 500 PS',
      powerSub: 'Naturally Aspirated',
      speed: '315 km/h',
      speedSub: 'Aerodynamic Peak Speed',
      drive: '7-speed PDK / RWD',
      driveSub: 'Short Gear Ratios',
      soundTitle: 'High-Revving 9,000 RPM Flat-Six Scream',
      soundDesc: 'Screaming naturally aspirated induction roar breathing through carbon fiber airboxes positioned right beside the driver and passenger headrests.',
      soundType: 'combustion',
      baseFreq: 240
    },
    'panamera': {
      title: 'Porsche Panamera Turbo E-Hybrid',
      family: 'EXECUTIVE SPORTS SALOON &bull; HYBRID',
      summary: 'Combines a 4.0-liter twin-turbo V8 with an electric motor and revolutionary Porsche Active Ride suspension that maintains a flat vehicle plane across high-G cornering and harsh road irregularities.',
      badge: 'PORSCHE ACTIVE RIDE',
      image: 'assets/images/models/model-panamera.jpg',
      alt: 'Porsche Panamera Turbo E-Hybrid luxury sports saloon',
      accel: '3.2 s',
      accelSub: 'with Sport Chrono',
      power: '500 kW / 680 PS',
      powerSub: '930 Nm Combined Torque',
      speed: '315 km/h',
      speedSub: 'Top Track Velocity',
      drive: '8-speed PDK / AWD',
      driveSub: 'Porsche Traction Mgmt',
      soundTitle: 'Twin-Turbo 4.0L V8 Rumble',
      soundDesc: 'Deep cross-plane V8 baritone note with twin variable-vane turbochargers producing a thunderous exhaust signature.',
      soundType: 'combustion',
      baseFreq: 130
    },
    'macan': {
      title: 'Porsche Macan Turbo Electric',
      family: 'COMPACT ELECTRIC SUV &bull; PPE',
      summary: 'Built on the Premium Platform Electric (PPE) with 100 kWh gross battery capacity, rear-axle steering, and electronically controlled Porsche Traction Management.',
      badge: 'PPE 800V ARCHITECTURE',
      image: 'assets/images/models/model-macan.jpg',
      alt: 'Porsche Macan Turbo Electric compact performance SUV',
      accel: '3.3 s',
      accelSub: 'with Launch Control',
      power: '470 kW / 639 PS',
      powerSub: '1,130 Nm Instant Torque',
      speed: '260 km/h',
      speedSub: 'Top Track Velocity',
      drive: 'Dual-Motor e-PTM',
      driveSub: 'Active All-Wheel Drive',
      soundTitle: 'Modern E-Performance Acoustic Frequency',
      soundDesc: 'Precise acoustic composition tuned for modern grand touring and electric agility.',
      soundType: 'electric',
      baseFreq: 280
    }
  };

  // SECTION E: HERITAGE ARCHIVE DATA (Authentic Historical Milestones)
  const HERITAGE_DATA = {
    '1948': {
      year: '1948',
      cat: 'THE BIRTH OF THE BRAND',
      title: 'Porsche 356 "No. 1" Roadster',
      quote: '“In the beginning I looked around and could not find quite the car I was dreaming of. So I decided to build it myself.”',
      quoteBy: '— Ferry Porsche',
      text: 'On June 8, 1948, the Porsche 356 “No. 1” Roadster received its general operating permit in Carinthia, Austria. Hand-beaten out of lightweight aluminum over a tubular spaceframe with a mid-mounted air-cooled flat-four engine, it weighed merely 585 kilograms. It established Porsche’s founding mantra: performance achieved through agility and lightness rather than sheer mass.',
      significance: 'The very first sports car bearing the official Porsche nameplate.',
      image: 'assets/images/heritage/heritage-356.jpg',
      alt: '1948 Porsche 356 No. 1 Roadster on display in Porsche Museum'
    },
    '1963': {
      year: '1963',
      cat: 'THE TIMELESS ICON',
      title: 'Unveiling of the 911 (Type 901)',
      quote: '“A product that is coherent in form requires no embellishment; it is enhanced simply by its form.”',
      quoteBy: '— Prof. Ferdinand Alexander “Butzi” Porsche',
      text: 'Unveiled at the International Motor Show (IAA) in Frankfurt as the Type 901, the car soon renamed the 911 was designed by Ferry Porsche’s son, F.A. Porsche. Featuring an air-cooled 2.0-liter flat-six boxer engine mounted in the rear, 2+2 seating, and an aerodynamic fastback flyline, it established a visual identity that remains immediately recognizable sixty years later.',
      significance: 'Created the definitive benchmark for the modern sports car.',
      image: 'assets/images/heritage/heritage-911-classic.jpg',
      alt: 'Original 1960s Porsche 911 displaying the legendary flyline'
    },
    '1970': {
      year: '1970',
      cat: '24 HOURS OF LE MANS SUPREMACY',
      title: 'Maiden Overall Le Mans Victory: The 917 KH',
      quote: '“We drove through sheets of torrential rain at over 350 km/h down the Mulsanne straight. You only trusted the car.”',
      quoteBy: '— Hans Herrmann, 1970 Le Mans Winner',
      text: 'On June 14, 1970, Hans Herrmann and Richard Attwood drove the red-and-white Porsche Salzburg 917 KH (Short Tail) across the finish line to claim Porsche’s first-ever overall victory at the 24 Hours of Le Mans. Powered by a thunderous 4.5-liter flat-12 engine producing over 580 horsepower, the 917 began Porsche’s record-holding 19 outright Le Mans triumphs.',
      significance: 'Cemented Porsche as the ultimate force in world sports car endurance racing.',
      image: 'assets/images/heritage/heritage-917.jpg',
      alt: 'Porsche 917 KH Coupe in Salzburg livery at the Porsche Museum'
    },
    '1986': {
      year: '1986',
      cat: 'THE SUPERCAR BLUEPRINT',
      title: 'Porsche 959: Technological Pinnacle',
      quote: '“The 959 wasn’t just the fastest car of its era; it was a mobile electronics laboratory twenty years ahead of its time.”',
      quoteBy: '— Porsche R&D Weissach',
      text: 'Conceived for FIA Group B rally competition, the Porsche 959 pioneered sequential twin turbocharging, water-cooled cylinder heads, electronically controlled variable all-wheel drive (Porsche-Steuer-Kupplung), and Kevlar body panels. It claimed victory at the grueling Paris-Dakar rally in 1986, establishing the technological foundation for modern all-wheel-drive supercars.',
      significance: 'The world’s first technologically advanced 200 mph production supercar.',
      image: 'assets/images/heritage/heritage-959.jpg',
      alt: 'Porsche 959 technology pioneer'
    },
    '2019': {
      year: '2019',
      cat: 'THE ELECTRIC REVOLUTION',
      title: 'Porsche Taycan: 800-Volt Architecture',
      quote: '“A Porsche will always remain a Porsche—even when propelled purely by electrons.”',
      quoteBy: '— Oliver Blume, Chairman of the Executive Board',
      text: 'With the world premiere of the Taycan, Porsche became the first manufacturer to introduce a production electric vehicle utilizing an 800-volt system rather than the customary 400 volts. This engineering milestone enables continuous repeatable high performance, minimal charging times, and sports car handling with a low center of gravity.',
      significance: 'Pioneered high-voltage ultra-fast charging in automotive serial production.',
      image: 'assets/images/heritage/heritage-taycan.jpg',
      alt: 'Porsche Taycan premiering 800V electric vehicle architecture'
    }
  };

  // SECTION F: INNOVATION PILLARS DATA
  const INNOVATION_DATA = {
    'aero': {
      category: 'AERODYNAMIC DEVELOPMENT',
      title: 'Porsche Active Aerodynamics (PAA)',
      desc: 'Aerodynamics is the art of balancing high top-speed efficiency with downforce in cornering. PAA uses continuously variable cooling air flaps in the front apron, an extendable rear spoiler with multiple deployment angles, and an airbrake function that shortens braking distances from high speeds.',
      hud: 'PAA SYSTEM ACTIVE',
      image: 'assets/images/innovation/innovation-aero.jpg',
      alt: 'Porsche swan-neck rear wing with active aerodynamic surface',
      metrics: [
        { strong: 'Swan-Neck Wing:', text: 'Generates downforce on the lower surface with uninterrupted airflow.' },
        { strong: 'Active Air Flaps:', text: 'Close at high speed to lower drag coefficient (c_d) down to 0.25.' },
        { strong: 'Downforce at 285 km/h:', text: 'Up to 860 kg on GT-series competition models.' }
      ]
    },
    'brakes': {
      category: 'BRAKING TECHNOLOGY',
      title: 'Porsche Ceramic Composite Brakes (PCCB)',
      desc: 'Developed in motorsport, PCCB discs are made from carbon-fiber reinforced ceramic material cross-drilled and internally vented. Approximately 50% lighter than conventional cast-iron discs of comparable design, they dramatically reduce unsprung rotating mass for superior suspension response and zero thermal fade under track conditions.',
      hud: 'PCCB CERAMIC &bull; 0 FADE',
      image: 'assets/images/innovation/innovation-brakes.jpg',
      alt: 'Porsche yellow PCCB brake caliper and carbon ceramic disc',
      metrics: [
        { strong: '50% Lighter Discs:', text: 'Substantially reduces unsprung weight for razor-sharp steering feedback.' },
        { strong: 'Extreme Heat Tolerance:', text: 'Maintains optimal friction coefficient above 800°C without brake fade.' },
        { strong: 'Monobloc Calipers:', text: 'Six-piston aluminum fixed calipers painted in iconic Porsche yellow.' }
      ]
    },
    'electric': {
      category: 'E-PERFORMANCE ARCHITECTURE',
      title: '800-Volt High-Voltage System',
      desc: 'While most electric vehicles operate at 400 volts, Porsche engineered Taycan and Macan Electric with an 800-volt architecture. This allows cables with smaller cross-sections for weight reduction and enables continuous high-speed charging up to 320 kW DC, charging from 10% to 80% SoC in just 18 minutes.',
      hud: '800V DC CHARGE &bull; 320 KW',
      image: 'assets/images/innovation/innovation-electric.jpg',
      alt: 'Porsche Taycan 800V battery architecture and charging port',
      metrics: [
        { strong: '320 kW Peak DC Charge:', text: 'Adds up to 300 km of driving range in approximately 10 minutes.' },
        { strong: 'Hairpin Winding Motors:', text: 'Copper wire pins inserted into motor stator slots for 70% copper fill factor.' },
        { strong: 'Intelligent Thermal Pre-Conditioning:', text: 'Pre-heats or cools battery cells along route navigation.' }
      ]
    },
    'cockpit': {
      category: 'DRIVER ARCHITECTURE',
      title: 'The Porsche Driver-Centric Cockpit',
      desc: 'Inside every Porsche, the driver is the undisputed reference point. The instrument cluster curves gently around the driver’s natural visual axis. Physical toggle switches operate high-frequency functions with tactile feedback, while the Sport Chrono dial sits proudly at 12 o’clock atop the dashboard.',
      hud: 'DRIVER ERGONOMICS &bull; HUD ACTIVE',
      image: 'assets/images/innovation/innovation-cockpit.jpg',
      alt: 'Porsche driver-centric cockpit with curved digital instrument display and sport steering wheel',
      metrics: [
        { strong: 'Curved Digital Display:', text: '16.8-inch anti-reflective curved screen without a cowl.' },
        { strong: 'Left-Hand Ignition:', text: 'Honors the historic Le Mans running start tradition since 1951.' },
        { strong: 'Drive Mode Switch:', text: 'Rotary dial on steering wheel to toggle Normal, Sport, Sport Plus, and Individual.' }
      ]
    }
  };

  /* ==========================================================================
     1. GLOBAL NAVIGATION & MOBILE DRAWER
     ========================================================================== */
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile drawer
  const openMobileMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileDrawer.classList.add('open');
    document.body.classList.add('scroll-locked');
    drawerClose.focus();
  };

  const closeMobileMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileDrawer.classList.remove('open');
    document.body.classList.remove('scroll-locked');
    menuToggle.focus();
  };

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (drawerClose) {
      drawerClose.addEventListener('click', closeMobileMenu);
    }

    // Close on mobile link click
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close drawer on Escape key
    mobileDrawer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });

    // Close drawer when clicking outside content box
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open') && 
          !mobileDrawer.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  /* ==========================================================================
     2. HEADER SCROLL EFFECT & ACTIVE SECTION HIGHLIGHT
     ========================================================================== */
  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Scrollspy: update active link in navbar based on section in viewport
  const sections = document.querySelectorAll('section[id]');
  const updateScrollspy = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateScrollspy, { passive: true });

  /* ==========================================================================
     3. FEATURED MODELS FILTERING & SHOWROOM LINKING
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const modelCards = document.querySelectorAll('.model-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      modelCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     4. INTERACTIVE MODEL EXPLORER (SHOWROOM)
     ========================================================================== */
  const explorerButtons = document.querySelectorAll('.explorer-btn');
  const explorerImg = document.getElementById('explorer-img');
  const explorerBadge = document.getElementById('explorer-badge');
  const explorerFamily = document.getElementById('explorer-family');
  const explorerTitle = document.getElementById('explorer-title');
  const explorerSummary = document.getElementById('explorer-summary');
  const specAccel = document.getElementById('spec-accel');
  const specPower = document.getElementById('spec-power');
  const specSpeed = document.getElementById('spec-speed');
  const specDrive = document.getElementById('spec-drive');

  let activeModelKey = '911';

  const updateExplorer = (modelKey) => {
    const data = MODEL_DATA[modelKey];
    if (!data) return;

    activeModelKey = modelKey;

    // Update active button state
    explorerButtons.forEach(btn => {
      const match = btn.getAttribute('data-explorer-id') === modelKey;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    // Image crossfade transition
    explorerImg.style.opacity = '0';
    setTimeout(() => {
      explorerImg.src = data.image;
      explorerImg.alt = data.alt;
      explorerBadge.textContent = data.badge;
      explorerFamily.innerHTML = data.family;
      explorerTitle.textContent = data.title;
      explorerSummary.textContent = data.summary;
      specAccel.textContent = data.accel;
      specPower.textContent = data.power;
      specSpeed.textContent = data.speed;
      specDrive.textContent = data.drive;
      explorerImg.style.opacity = '1';
    }, 200);
  };

  explorerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modelId = btn.getAttribute('data-explorer-id');
      updateExplorer(modelId);
    });
  });

  // Connect "Explore In Showroom" buttons inside Featured Models cards
  const selectExplorerButtons = document.querySelectorAll('.select-explorer-btn');
  selectExplorerButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modelId = btn.getAttribute('data-model-id');
      if (modelId && MODEL_DATA[modelId]) {
        updateExplorer(modelId);
        const explorerSection = document.getElementById('explorer');
        if (explorerSection) {
          explorerSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Color Swatch Selector
  const colorDots = document.querySelectorAll('.color-dot');
  const colorNameDisplay = document.getElementById('color-name');

  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const colorName = dot.getAttribute('data-color');
      if (colorNameDisplay) {
        colorNameDisplay.textContent = colorName;
      }
    });
  });

  /* ==========================================================================
     5. INTERACTIVE HERITAGE TIMELINE (SECTION E)
     ========================================================================== */
  const milestoneButtons = document.querySelectorAll('.milestone-btn');
  const milestoneImg = document.getElementById('milestone-img');
  const milestoneYearPill = document.getElementById('milestone-year-pill');
  const milestoneCat = document.getElementById('milestone-cat');
  const milestoneTitle = document.getElementById('milestone-title');
  const milestoneQuote = document.getElementById('milestone-quote');
  const milestoneText = document.getElementById('milestone-text');
  const milestoneSignificance = document.getElementById('milestone-significance');

  const updateMilestone = (year) => {
    const data = HERITAGE_DATA[year];
    if (!data) return;

    milestoneButtons.forEach(btn => {
      const match = btn.getAttribute('data-year') === year;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    milestoneImg.style.opacity = '0';
    setTimeout(() => {
      milestoneImg.src = data.image;
      milestoneImg.alt = data.alt;
      milestoneYearPill.textContent = data.year;
      milestoneCat.textContent = data.cat;
      milestoneTitle.textContent = data.title;
      milestoneQuote.innerHTML = `${data.quote} <span class="milestone-quote-by">${data.quoteBy}</span>`;
      milestoneText.textContent = data.text;
      milestoneSignificance.textContent = data.significance;
      milestoneImg.style.opacity = '1';
    }, 200);
  };

  milestoneButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const year = btn.getAttribute('data-year');
      updateMilestone(year);
    });
  });

  /* ==========================================================================
     6. PERFORMANCE & INNOVATION TABS (SECTION F)
     ========================================================================== */
  const innoTabs = document.querySelectorAll('.inno-tab');
  const innoImg = document.getElementById('inno-img');
  const innoHud = document.getElementById('inno-hud');
  const innoCategory = document.getElementById('inno-category');
  const innoTitle = document.getElementById('inno-title');
  const innoDesc = document.getElementById('inno-desc');
  const innoMetrics = document.getElementById('inno-metrics');

  const updateInnovation = (key) => {
    const data = INNOVATION_DATA[key];
    if (!data) return;

    innoTabs.forEach(t => {
      const match = t.getAttribute('data-inno') === key;
      t.classList.toggle('active', match);
      t.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    innoImg.style.opacity = '0';
    setTimeout(() => {
      innoImg.src = data.image;
      innoImg.alt = data.alt;
      innoHud.innerHTML = data.hud;
      innoCategory.textContent = data.category;
      innoTitle.textContent = data.title;
      innoDesc.textContent = data.desc;

      // Rebuild metrics list
      innoMetrics.innerHTML = data.metrics.map(m => `
        <li><strong class="metric-strong">${m.strong}</strong> ${m.text}</li>
      `).join('');

      innoImg.style.opacity = '1';
    }, 200);
  };

  innoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const innoKey = tab.getAttribute('data-inno');
      updateInnovation(innoKey);
    });
  });

  /* ==========================================================================
     7. IMAGE GALLERY & ACCESSIBLE LIGHTBOX (SECTION H)
     ========================================================================== */
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');

  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTag = document.getElementById('lightbox-tag');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');

  let currentGalleryIndex = 0;
  let activeGalleryItems = [...galleryItems];
  let lastFocusedElement = null;

  // Filter gallery items
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });

      // Update active list for lightbox indexing
      activeGalleryItems = galleryItems.filter(item => item.style.display !== 'none');
    });
  });

  const updateLightboxContent = (index) => {
    if (activeGalleryItems.length === 0) return;
    currentGalleryIndex = (index + activeGalleryItems.length) % activeGalleryItems.length;

    const currentItem = activeGalleryItems[currentGalleryIndex];
    const imgEl = currentItem.querySelector('.gallery-thumbnail');
    const tagEl = currentItem.querySelector('.gallery-category-tag');
    const titleEl = currentItem.querySelector('.gallery-caption-title');
    const descEl = currentItem.querySelector('.gallery-caption-sub');

    lightboxImg.src = imgEl.src;
    lightboxImg.alt = imgEl.alt;
    lightboxTag.textContent = tagEl ? tagEl.textContent : '';
    lightboxTitle.textContent = titleEl ? titleEl.textContent : '';
    lightboxDesc.textContent = descEl ? descEl.textContent : '';
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${activeGalleryItems.length}`;
  };

  const openLightbox = (index) => {
    lastFocusedElement = document.activeElement;
    updateLightboxContent(index);
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('scroll-locked');
    lightboxClose.focus();
  };

  const closeLightbox = () => {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('scroll-locked');
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  // Attach click & enter key to gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = activeGalleryItems.indexOf(item);
      if (idx !== -1) openLightbox(idx);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = activeGalleryItems.indexOf(item);
        if (idx !== -1) openLightbox(idx);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      updateLightboxContent(currentGalleryIndex - 1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      updateLightboxContent(currentGalleryIndex + 1);
    });
  }

  // Keyboard navigation inside lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      updateLightboxContent(currentGalleryIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateLightboxContent(currentGalleryIndex + 1);
    }
  });

  /* ==========================================================================
     8. CLIENT-SIDE NEWSLETTER FORM VALIDATION (SECTION I)
     ========================================================================== */
  const newsletterForm = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('subscriber-email');
  const formFeedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  if (newsletterForm && emailInput && formFeedback) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailValue = emailInput.value.trim();

      // Check empty
      if (!emailValue) {
        showFeedback('Please enter your email address to continue.', 'error');
        emailInput.focus();
        return;
      }

      // Check format
      if (!emailRegex.test(emailValue)) {
        showFeedback('Please provide a valid email format (e.g. driver@porsche.com).', 'error');
        emailInput.focus();
        return;
      }

      // Successful demonstration feedback
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Verifying...</span>';

      setTimeout(() => {
        showFeedback(
          'Thank you for your interest! (Demonstration: Subscription registered successfully in client session).',
          'success'
        );
        newsletterForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Subscribed</span>
          <svg class="btn-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <polyline points="3 8 7 12 13 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;
      }, 600);
    });

    // Clear feedback when typing
    emailInput.addEventListener('input', () => {
      formFeedback.hidden = true;
      formFeedback.className = 'form-feedback';
      formFeedback.textContent = '';
    });
  }

  const showFeedback = (message, type) => {
    formFeedback.hidden = false;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.textContent = message;
  };

  /* ==========================================================================
     9. SCROLL-TRIGGERED REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade');
    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // If reduced motion is requested or IntersectionObserver not supported
    document.querySelectorAll('.reveal-up, .reveal-fade').forEach(el => {
      el.classList.add('reveal-visible');
    });
  }

  /* ==========================================================================
     10. BACK-TO-TOP BUTTON
     ========================================================================== */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     11. DYNAMIC FOOTER COPYRIGHT YEAR
     ========================================================================== */
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     12. GRACEFUL IMAGE LOADING ERROR FALLBACK
     ========================================================================== */
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    img.addEventListener('error', function handleImageError() {
      // Create a visually coherent fallback without broken image icon
      this.onerror = null;
      this.style.backgroundColor = '#161619';
      this.style.objectFit = 'contain';
      this.style.padding = '2rem';
      this.alt = 'Porsche media asset unavailable in local cache';
    });
  });

  /* ==========================================================================
     13. WEB AUDIO API: ACOUSTIC PROFILE SYNTHESIZER
     (Zero external audio files required, runs 100% offline via native browser DSP)
     ========================================================================== */
  const soundModal = document.getElementById('sound-modal');
  const soundModalClose = document.getElementById('sound-modal-close');
  const btnSoundToggle = document.getElementById('btn-sound-toggle');
  const soundTitle = document.getElementById('sound-title');
  const soundDesc = document.getElementById('sound-desc');
  const btnPlaySynth = document.getElementById('btn-play-synth');
  const synthBtnText = document.getElementById('synth-btn-text');

  let audioCtx = null;

  const openSoundModal = () => {
    const data = MODEL_DATA[activeModelKey];
    if (!data) return;

    soundTitle.textContent = data.soundTitle;
    soundDesc.textContent = data.soundDesc;
    soundModal.classList.add('active');
    soundModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('scroll-locked');
    soundModalClose.focus();
  };

  const closeSoundModal = () => {
    soundModal.classList.remove('active');
    soundModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('scroll-locked');
    if (btnSoundToggle) btnSoundToggle.focus();
  };

  if (btnSoundToggle) btnSoundToggle.addEventListener('click', openSoundModal);
  if (soundModalClose) soundModalClose.addEventListener('click', closeSoundModal);

  if (soundModal) {
    soundModal.addEventListener('click', (e) => {
      if (e.target === soundModal) closeSoundModal();
    });

    soundModal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSoundModal();
    });
  }

  // Pure Web Audio API Sound Generation
  if (btnPlaySynth) {
    btnPlaySynth.addEventListener('click', () => {
      const data = MODEL_DATA[activeModelKey];
      if (!data) return;

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioCtx) {
        audioCtx = new AudioContext();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      synthBtnText.textContent = 'Playing Acoustic Profile...';
      btnPlaySynth.disabled = true;

      const now = audioCtx.currentTime;
      const duration = 2.5;

      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.001, now);
      masterGain.gain.exponentialRampToValueAtTime(0.3, now + 0.3);
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      masterGain.connect(audioCtx.destination);

      if (data.soundType === 'electric') {
        // Synthesize smooth high-voltage electric motor frequency
        const osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(data.baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(data.baseFreq * 2.8, now + 1.2);
        osc.frequency.exponentialRampToValueAtTime(data.baseFreq * 1.5, now + duration);
        osc.connect(masterGain);
        osc.start(now);
        osc.stop(now + duration);
      } else {
        // Synthesize boxer flat-six combustion rumble with harmonics
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);
        filter.frequency.exponentialRampToValueAtTime(2400, now + 1.2);
        filter.frequency.exponentialRampToValueAtTime(800, now + duration);

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(data.baseFreq, now);
        osc1.frequency.exponentialRampToValueAtTime(data.baseFreq * 2.5, now + 1.2);
        osc1.frequency.exponentialRampToValueAtTime(data.baseFreq * 1.2, now + duration);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(data.baseFreq * 0.5, now);
        osc2.frequency.exponentialRampToValueAtTime(data.baseFreq * 1.25, now + 1.2);
        osc2.frequency.exponentialRampToValueAtTime(data.baseFreq * 0.6, now + duration);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(masterGain);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + duration);
        osc2.stop(now + duration);
      }

      setTimeout(() => {
        synthBtnText.textContent = 'Generate Engine Rev (Web Audio)';
        btnPlaySynth.disabled = false;
      }, duration * 1000);
    });
  }

});
