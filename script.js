
// Site Data
const PROJECTS = [
  { id: '1', name: "LOLA'S FINE HOT SAUCE", logo: 'images/lola-placeholder.png', url: 'https://lolasfinehotsauce.com/' },
  { id: '2', name: 'ALIGN YOGA', logo: 'images/align-dsm.png', url: 'https://aligndsm.com/' },
  { id: '3', name: 'ACAP HEALTHWORKS', logo: 'images/acap-healthworks.png', url: 'https://www.acaphealthworks.com/' },
  { id: '4', name: 'PINION PATHWAYS', logo: 'images/pinion-pathways.png', url: 'https://pinionpathways.com/' },
  { id: '5', name: 'KRM CUSTOM HOMES', logo: 'images/krm-custom-homes.png', url: 'https://krmcustomhomes.com/' },
  { id: '6', name: 'IVE MOTORS', logo: 'images/ime.png', url: 'https://innovative-me.com/' },
  { id: '7', name: 'WG LOGISTICS', logo: 'images/wg-provisions.png', url: 'https://wgprovisions.com/' },
  { id: '8', name: 'ROGERS OUTDOOR', logo: 'images/rogers-outdoors.png', url: 'https://rogers-outdoor.com/' },
];

const CAPABILITIES = [
  {
    title: 'WEB STUFF',
    description: 'Building websites that work. Sometimes even on the first try. Scalable, fast, and remarkably bug-free.'
  },
  {
    title: 'DESIGN STUFF',
    description: 'Displays, pamphlets, products, from digital to real life'
  },
  {
    title: 'MUSIC STUFF',
    description: 'When my eyes hurt, I close them and make noises. Here are a few projects where those noises actually ended up sounding like music.'
  }
];

// Initialize Site
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderCapabilities();
    setupRevealObserver();
    setupFooterYear();
    setupFormHandling();
});

// Render Project Grid
function renderProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;

    PROJECTS.forEach((project, index) => {
        const card = document.createElement('a');
        card.href = project.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.className = "project-card reveal group relative aspect-square bg-gray-50 flex flex-col items-center justify-center p-8 overflow-hidden border border-gray-100 rounded-lg";
        card.style.transitionDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="z-10 w-full h-full flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <div class="w-full h-1/2 flex items-center justify-center mb-4">
                <img src="${project.logo}" alt="${project.name}" class="project-logo max-w-full max-h-full object-contain">
              </div>
              <span class="text-[11px] font-bold text-gray-400 mt-3 block opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
                Visit Website
              </span>
            </div>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-5 bg-teal-accent transition-opacity duration-300"></div>
        `;
        grid.appendChild(card);
    });
}

// Render Capabilities List
function renderCapabilities() {
    const list = document.getElementById('capabilities-list');
    if (!list) return;

    CAPABILITIES.forEach((cap, index) => {
        const item = document.createElement('div');
        item.className = "reveal border-t-4 border-black pt-8 group";
        item.style.transitionDelay = `${index * 0.1}s`;
        
        item.innerHTML = `
            <h3 class="text-3xl font-black mb-4 group-hover:text-teal-600 transition-colors uppercase">
                ${cap.title}
            </h3>
            <p class="text-gray-600 text-lg leading-relaxed font-medium">
                ${cap.description}
            </p>
        `;
        list.appendChild(item);
    });
}

// Scroll Reveal Observer
function setupRevealObserver() {
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Dynamic Footer Year
function setupFooterYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// Netlify Form Handling
function setupFormHandling() {
    const form = document.querySelector('form[name="contact"]');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            form.innerHTML = `
                <div class="bg-teal-accent/10 border border-teal-accent p-10 text-teal-accent rounded-sm reveal active">
                    <h3 class="text-2xl font-bold mb-2 uppercase">Message Received</h3>
                    <p class="font-medium">The void will get back to you soon. Keep an eye on your inbox.</p>
                </div>
            `;
        })
        .catch((error) => alert("Submission failed: " + error));
    });
}
