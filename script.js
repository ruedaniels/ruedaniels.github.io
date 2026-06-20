const icons = {
  hopfield: `<svg width="20" height="20" viewBox="0 0 48 48"><path d="M6 24 Q9 14 12 32 Q15 10 18 30 Q20 18 22 24" fill="none" stroke="#993556" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 24 L42 24" fill="none" stroke="#D4537E" stroke-width="3" stroke-linecap="round"/></svg>`,
  izhikevich: `<svg width="20" height="20" viewBox="0 0 48 48"><path d="M6 32 L13 32 L16 10 L19 32 L24 32 L27 20 L30 32 L42 32" fill="none" stroke="#D4537E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  som: `<svg width="20" height="20" viewBox="0 0 48 48"><line x1="12" y1="12" x2="22" y2="16" stroke="#ED93B1" stroke-width="2"/><line x1="22" y1="16" x2="36" y2="12" stroke="#ED93B1" stroke-width="2"/><line x1="12" y1="12" x2="16" y2="28" stroke="#ED93B1" stroke-width="2"/><line x1="22" y1="16" x2="26" y2="30" stroke="#ED93B1" stroke-width="2"/><line x1="16" y1="28" x2="26" y2="30" stroke="#ED93B1" stroke-width="2"/><line x1="26" y1="30" x2="38" y2="34" stroke="#ED93B1" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="#993556"/><circle cx="22" cy="16" r="3" fill="#993556"/><circle cx="36" cy="12" r="3" fill="#993556"/><circle cx="16" cy="28" r="3" fill="#D4537E"/><circle cx="26" cy="30" r="3" fill="#D4537E"/><circle cx="38" cy="34" r="3" fill="#D4537E"/></svg>`,
  ghk: `<svg width="20" height="20" viewBox="0 0 48 48"><line x1="24" y1="8" x2="24" y2="40" stroke="#ED93B1" stroke-width="2.5" stroke-dasharray="3 3"/><path d="M16 18 L22 18 M22 18 L19 15 M22 18 L19 21" fill="none" stroke="#993556" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 30 L26 30 M26 30 L29 27 M26 30 L29 33" fill="none" stroke="#D4537E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  lif: `<svg width="20" height="20" viewBox="0 0 48 48"><path d="M6 34 Q11 34 13 14" fill="none" stroke="#D4537E" stroke-width="3" stroke-linecap="round"/><line x1="13" y1="14" x2="13" y2="34" stroke="#993556" stroke-width="3" stroke-linecap="round"/><path d="M13 34 Q20 34 22 14" fill="none" stroke="#D4537E" stroke-width="3" stroke-linecap="round"/><line x1="22" y1="14" x2="22" y2="34" stroke="#993556" stroke-width="3" stroke-linecap="round"/><path d="M22 34 Q29 34 31 14" fill="none" stroke="#D4537E" stroke-width="3" stroke-linecap="round"/><line x1="31" y1="14" x2="31" y2="34" stroke="#993556" stroke-width="3" stroke-linecap="round"/><line x1="31" y1="34" x2="42" y2="34" stroke="#D4537E" stroke-width="3" stroke-linecap="round"/></svg>`,
  hebbian: `<svg width="20" height="20" viewBox="0 0 48 48"><path d="M10 24 L38 24" fill="none" stroke="#D4537E" stroke-width="1.5" stroke-linecap="round"/><path d="M16 24 L32 24" fill="none" stroke="#D4537E" stroke-width="4" stroke-linecap="round"/><circle cx="10" cy="24" r="4.5" fill="#993556"/><circle cx="38" cy="24" r="4.5" fill="#993556"/></svg>`,
  perceptron: `<svg width="20" height="20" viewBox="0 0 48 48"><line x1="8" y1="40" x2="40" y2="8" stroke="#ED93B1" stroke-width="2.5" stroke-dasharray="3 3"/><circle cx="15" cy="16" r="3" fill="#993556"/><circle cx="20" cy="22" r="3" fill="#993556"/><circle cx="13" cy="26" r="3" fill="#993556"/><circle cx="28" cy="26" r="3" fill="#D4537E"/><circle cx="33" cy="20" r="3" fill="#D4537E"/><circle cx="35" cy="32" r="3" fill="#D4537E"/></svg>`
};

const sections = [
  {
    label: "neural networks",
    items: [
      {
        n: "01",
        name: "hopfield-network",
        url: "https://ruedaniels.github.io/hopfield-network/",
        desc: "Recurrent neural network that stores memories as energy minima and retrieves them from noisy or partial inputs. Capacity ~0.138×N patterns; above this, spurious attractors dominate.",
        icon: "hopfield"
      },
      {
        n: "02",
        name: "izhikevich-network",
        url: "https://izhikevich-network.vercel.app",
        desc: "A two-variable dynamical system reproducing 20+ distinct firing patterns observed in real cortical neurons — regular spiking, bursting, chattering, fast spiking — rendered as a live multi-channel voltage raster.",
        icon: "izhikevich"
      },
    ]
  },
  {
    label: "simulations",
    items: [
      {
        n: "03",
        name: "som-demo",
        url: "https://som-demo-sigma.vercel.app",
        desc: "Teuvo Kohonen's self-organizing map: a 12×12 neuron grid learns topology-preserving representations of a 3-colour input space with decaying learning rate and neighbourhood radius.",
        icon: "som"
      },
      {
        n: "04",
        name: "ghk-membrane",
        url: "https://ghk-membrane.vercel.app",
        desc: "Goldman–Hodgkin–Katz biophysics — adjust K⁺ and Na⁺ concentrations and watch membrane potential respond in real time.",
        icon: "ghk"
      },
      {
        n: "05",
        name: "lif-neuron",
        url: "https://lif-neuron.vercel.app",
        desc: "Leaky integrate-and-fire model with tunable membrane time constant, threshold, and refractory period. Live voltage trace shows charge accumulation and reset on each spike.",
        icon: "lif"
      },
      {
        n: "06",
        name: "hebbian-learning-demo",
        url: "https://hebbian-learning-demo.vercel.app",
        desc: "Neurons that fire together wire together — synaptic weights strengthen between co-active units in real time, demonstrating Hebb's foundational learning rule.",
        icon: "hebbian"
      },
      {
        n: "07",
        name: "perception-demo",
        url: "https://perception-demo.vercel.app",
        desc: "Single-neuron perceptron learning to linearly separate two classes through gradient-free weight updates. Decision boundary visualized live as the network converges.",
        icon: "perceptron"
      },
    ]
  }
];

const list = document.getElementById('projects-list');

sections.forEach(section => {
  const lbl = document.createElement('p');
  lbl.className = 'section-label';
  lbl.textContent = section.label;
  list.appendChild(lbl);

  section.items.forEach(p => {
    const a = document.createElement('a');
    a.href = p.url;
    a.target = '_blank';
    a.className = 'project-row';

    a.innerHTML = `
      <div class="row-rank">
        <span class="row-num">${p.n}</span>
        <div class="row-orb"></div>
        <div class="row-line"></div>
      </div>
      <div class="row-body">
        <p class="row-name">${p.name}</p>
        <p class="row-desc">${p.desc}</p>
      </div>
      <div class="row-meta">
        <span class="icon-badge">${icons[p.icon]}</span>
      </div>
    `;
    list.appendChild(a);
  });
});
