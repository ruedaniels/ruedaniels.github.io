const sections = [
    {
      label: "neural networks",
      items: [
        {
          n: "01",
          name: "izhikevich-network",
          lang: "JS",
          desc: "A two-variable dynamical system reproducing 20+ distinct firing patterns observed in real cortical neurons — regular spiking, bursting, chattering, fast spiking — rendered as a live multi-channel voltage raster.",
          spikes: [5, 18, 7, 20, 9, 15, 11, 8]
        },
        {
          n: "02",
          name: "hopfield-network",
          lang: "Py",
          desc: "Recurrent neural network that stores memories as energy minima and retrieves them from noisy or partial inputs. Capacity ~0.138×N patterns; above this, spurious attractors dominate.",
          spikes: [14, 8, 17, 5, 19, 7, 12, 9]
        },
      ]
    },
    {
      label: "simulations",
      items: [
        {
          n: "03",
          name: "ghk-membrane",
          lang: "JS",
          desc: "Goldman–Hodgkin–Katz biophysics — adjust K⁺ and Na⁺ concentrations and watch membrane potential respond in real time.",
          spikes: [9, 13, 18, 6, 17, 10, 14, 7]
        },
        {
          n: "04",
          name: "som-demo",
          lang: "JS",
          desc: "Teuvo Kohonen's self-organizing map: a 12×12 neuron grid learns topology-preserving representations of a 3-colour input space with decaying learning rate and neighbourhood radius.",
          spikes: [6, 15, 9, 18, 7, 13, 10, 16]
        },
        {
          n: "05",
          name: "lif-neuron",
          lang: "JS",
          desc: "Leaky integrate-and-fire model with tunable membrane time constant, threshold, and refractory period. Live voltage trace shows charge accumulation and reset on each spike.",
          spikes: [11, 7, 16, 9, 14, 6, 13, 10]
        },
        {
          n: "06",
          name: "hebbian-learning-demo",
          lang: "JS",
          desc: "Neurons that fire together wire together — synaptic weights strengthen between co-active units in real time, demonstrating Hebb's foundational learning rule.",
          spikes: [8, 14, 6, 17, 10, 12, 7, 15]
        },
        {
          n: "07",
          name: "perception-demo",
          lang: "JS",
          desc: "Single-neuron perceptron learning to linearly separate two classes through gradient-free weight updates. Decision boundary visualized live as the network converges.",
          spikes: [13, 7, 15, 5, 17, 8, 11, 9]
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
      a.href = `https://github.com/ruedaniels/${p.name}`;
      a.target = '_blank';
      a.className = 'project-row';
  
      const bars = p.spikes.map(h => `<div class="spark" style="height:${h}px"></div>`).join('');
  
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
          <span class="lang-badge ${p.lang === 'Py' ? 'py' : ''}">${p.lang}</span>
          <div class="sparks">${bars}</div>
        </div>
      `;
      list.appendChild(a);
    });
  });