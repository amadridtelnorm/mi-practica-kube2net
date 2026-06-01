/* ===========================================================
   Kube2net — Landing interactivity
   =========================================================== */

/* ---------- Nav scroll state ---------- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Default theme ---------- */
document.documentElement.setAttribute('data-theme', 'orange');

/* ---------- Models data ---------- */
const MODELS = [
  {
    title: 'Solo Networking',
    sub: 'Complementa torretas IPC o IPTrade existentes',
    desc: 'Para clientes que ya cuentan con torretas financieras físicas (IPC, IPTrade) o consolas instaladas. Kube2net Networking se conecta como complemento — añadiendo capacidades modernas sin reemplazar la inversión actual.',
    items: [
      'Federación con tu infraestructura de torretas existente',
      'Backbone de comunicación seguro entre sedes',
      'Monitoreo continuo de la red 24/7',
      'Capa unificada de grabación opcional'
    ],
    diagram: [
      { label: 'Torretas existentes', sub: 'IPC Unigy / IPTrade', icon: 'turret', dim: false },
      { label: 'K2N Networking', sub: 'Backbone cloud', icon: 'cloud', accent: true },
      { label: 'Sedes federadas', sub: 'Multi-región', icon: 'globe', dim: false }
    ]
  },
  {
    title: 'Comunicaciones + Consolas',
    sub: 'Respaldo y movilidad para torretas físicas',
    desc: 'Clientes con torretas físicas IPC o IPTrade pueden adquirir las comunicaciones y las consolas de Kube2net como respaldo o para añadir movilidad a sus traders — extendiendo el desk a cualquier dispositivo autorizado.',
    items: [
      'Consola por software que extiende el turret físico',
      'Movilidad para traders en remoto o en viaje',
      'Respaldo activo-activo ante incidentes',
      'Mismas líneas, presencia y conferencias'
    ],
    diagram: [
      { label: 'Torretas físicas', sub: 'IPC / IPTrade', icon: 'turret', dim: false },
      { label: 'K2N Comunicaciones', sub: 'Capa SIP segura', icon: 'cloud', accent: true },
      { label: 'Consolas K2N', sub: 'Desktop · mobile', icon: 'app', dim: false }
    ]
  },
  {
    title: 'Gateway + Torretas K2N',
    sub: 'Integra con tu PBX o SBC',
    desc: 'Clientes sin torretas financieras dedicadas pero con PBX o SBC existente — el K2N Gateway conecta Kube2net a tu infraestructura legacy y permite operar las torretas por software de K2N con tu numeración corporativa.',
    items: [
      'K2N Gateway sobre CentOS Stream 9 hardenizado',
      'Doble interfaz LAN — segmento privado aislado',
      'Conexión a PBX, SBC, líneas analógicas o SIP',
      'OpenVPN site-to-site para sedes remotas'
    ],
    diagram: [
      { label: 'PBX / SBC existente', sub: 'Telefonía corporativa', icon: 'pbx', dim: false },
      { label: 'K2N Gateway', sub: 'CentOS hardenizado', icon: 'gateway', accent: true },
      { label: 'Torretas K2N', sub: 'Por software', icon: 'app', dim: false }
    ]
  },
  {
    title: 'Plataforma completa',
    sub: 'Todo en la nube de K2N',
    desc: 'Para clientes sin infraestructura previa de PBX, SBC o torretas. Kube2net opera de extremo a extremo: torretas por software, red, gateway, grabación con IA y telefonía pública — con conectividad PSTN integrada para hoot & hooler con clientes, back office o brokers.',
    items: [
      'Torretas K2N por software · sin hardware',
      'Conectividad PSTN — entrante y saliente',
      'Conferencias, hoot & holler, intercom, hotlines',
      'Grabación con IA, cumplimiento y monitoreo incluidos'
    ],
    diagram: [
      { label: 'Traders & desks', sub: 'Browser · móvil', icon: 'app', dim: false },
      { label: 'Kube2net Cloud', sub: 'Kubernetes · todos los servicios', icon: 'cloud', accent: true },
      { label: 'PSTN / brokers / partners', sub: 'Red pública integrada', icon: 'globe', dim: false }
    ]
  }
];

const ICONS = {
  turret: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><line x1="7" y1="10" x2="7" y2="10"/><line x1="11" y1="10" x2="11" y2="10"/><line x1="15" y1="10" x2="15" y2="10"/><line x1="7" y1="14" x2="11" y2="14"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>',
  app: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  pbx: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="12" r="2"/><line x1="14" y1="10" x2="18" y2="10"/><line x1="14" y1="14" x2="18" y2="14"/></svg>',
  gateway: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><circle cx="8" cy="9" r="1" fill="currentColor"/><circle cx="8" cy="15" r="1" fill="currentColor"/></svg>'
};

function renderModel(idx) {
  const m = MODELS[idx];
  const panel = document.getElementById('model-panel');
  panel.innerHTML = `
    <div class="model-detail">
      <span class="eyebrow">Modelo 0${idx + 1}</span>
      <h3>${m.title}</h3>
      <p>${m.desc}</p>
      <ul class="model-checklist">
        ${m.items.map(it => `
          <li>
            <span class="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
            <span>${it}</span>
          </li>
        `).join('')}
      </ul>
    </div>
    <div class="model-diagram">
      <h5 class="diagram-h">Topología</h5>
      ${m.diagram.map((n, i) => `
        ${i > 0 ? '<div class="diagram-connector"></div>' : ''}
        <div class="diagram-node ${n.accent ? 'accent' : ''} ${n.dim ? 'dimmed' : ''}">
          <span class="icon">${ICONS[n.icon] || ''}</span>
          <div>
            <div style="font-weight: 500;">${n.label}</div>
            <div style="font-family: var(--font-mono); font-size: 10px; color: var(--muted); margin-top: 2px;">${n.sub}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
renderModel(0);

document.querySelectorAll('.model-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.model-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderModel(+tab.dataset.model);
  });
});

/* ---------- Feature table ---------- */
const FEATURES = [
  { name: 'Panel de control', cat: 'Operación', desc: 'Botones distribuidos en pantallas configurables. Cada botón soporta líneas privadas, marcación rápida, entrada/salida, conferencia o Hoot. Estado de líneas y presencia en tiempo real. Personalizable por el usuario.' },
  { name: 'Directorio', cat: 'Operación', desc: 'Directorio empresarial y personal. Cada contacto puede tener múltiples puntos de contacto asociados a tipos de medio (intercom, marcación rápida). Búsqueda integrada.' },
  { name: 'Historial de llamadas', cat: 'Operación', desc: 'Actividad reciente con filtros por categoría: todas, perdidas, entrantes, salientes, frecuentes. Incluye llamadas privadas y tonos contestados por otros operadores.' },
  { name: 'Altavoces', cat: 'Audio', desc: 'Asigna líneas a canales de altavoz. Push-to-Talk, Push-to-Hook, latch. Volumen por canal, grupos de altavoces, transferencia entre altavoz y auricular.' },
  { name: 'Silenciar llamada', cat: 'Audio', desc: 'Silencia desde auricular o manos libres mediante botón físico o interfaz gráfica. Interrumpe la transmisión de audio al extremo remoto.' },
  { name: 'Privacidad', cat: 'Compliance', desc: 'Evita que otros usuarios interfieran en una llamada en curso. Mantiene la conversación privada tanto activa como en espera.' },
  { name: 'Transferencia', cat: 'Operación', desc: 'Transfiere llamadas internas o externas, de líneas entrantes o salientes conectadas al PBX.' },
  { name: 'Intercambio de llamada', cat: 'Audio', desc: 'Mueve una llamada activa entre auricular y otro dispositivo disponible sin interrumpir la conversación.' },
  { name: 'Alertas visuales y audibles', cat: 'Operación', desc: 'Alertas distintivas al recibir llamadas de líneas y usuarios, permitiendo distinguir qué línea está timbrando.' },
  { name: 'Desvío de llamadas', cat: 'Operación', desc: 'Desvíos inmediatos, por ocupado o sin respuesta. Soporte para grupos de búsqueda preprogramados.' },
  { name: 'Conferencia', cat: 'Comunicaciones', desc: 'Agrega participantes a una llamada utilizando líneas privadas o tonos de marcación. Participantes pueden agregarse dinámicamente durante la conferencia.' },
  { name: 'Intercom', cat: 'Comunicaciones', desc: 'Llamadas internas sin líneas externas. Modos push-to-talk o latch para cualquier usuario autenticado con extensión asignada.' },
  { name: 'Botón de línea', cat: 'Operación', desc: 'Agrega un botón configurado con función de línea.' },
  { name: 'Botón de marcación rápida', cat: 'Operación', desc: 'Agrega un botón con marcación rápida programada al directorio.' },
  { name: 'Botón de Intercom o Hoot', cat: 'Operación', desc: 'Agrega un botón configurado con función de Hoot en modo push-to-talk o latch.' },
  { name: 'Notificaciones emergentes', cat: 'Operación', desc: 'Llamadas entrantes en ventanas emergentes, independientes de la pantalla activa.' },
  { name: 'Control de volumen', cat: 'Audio', desc: 'Aumento o disminución del volumen de las llamadas por canal.' },
  { name: 'Configuración de dispositivos de audio', cat: 'Audio', desc: 'Configura micrófonos, altavoces externos y auriculares USB o Bluetooth para cada botón.' },
  { name: 'Indicador de calidad de voz', cat: 'Audio', desc: 'Representación visual de la calidad de voz mediante barras indicadoras.' },
  { name: 'Identificación de llamada (CLI)', cat: 'Operación', desc: 'Muestra nombre, etiqueta o número telefónico del llamante en llamadas entrantes SIP, según configuración del usuario.' },
  { name: 'Operadora automática', cat: 'Comunicaciones', desc: 'Operador automático con mensajes personalizados definidos por el cliente.' },
  { name: 'Prioridad', cat: 'Operación', desc: 'Niveles de prioridad para llamadas entrantes mediante colores en las líneas favoritas.' },
  { name: 'Grabación en dos sitios', cat: 'Compliance', desc: 'Almacenamiento de grabaciones en dos sitios para redundancia y disponibilidad.' },
  { name: 'Altavoz → Auricular', cat: 'Audio', desc: 'Transfiere una llamada activa desde el altavoz hacia el auricular.' },
  { name: 'Auricular → Altavoz', cat: 'Audio', desc: 'Transfiere una llamada activa desde el auricular hacia el altavoz.' },
  { name: 'Llamadas SIP', cat: 'Comunicaciones', desc: 'Conecta líneas SIP de entrada y salida o PBX.' },
  { name: 'Llamadas de grupo', cat: 'Comunicaciones', desc: 'Llamadas grupales programadas que timbran simultáneamente a todos los participantes.' },
  { name: 'Cifrado WebRTC', cat: 'Compliance', desc: 'Cifrado de llamadas de la aplicación de trading a nivel WebRTC con SRTP.' },
  { name: 'Personalización de pantallas', cat: 'Operación', desc: 'Modifica la distribución de botones en diferentes paneles y páginas.' },
  { name: 'Reproducción de última llamada', cat: 'Compliance', desc: 'Reproduce la última llamada y la transcribe con motor de IA.' },
  { name: 'Control del micrófono', cat: 'Audio', desc: 'Configura el micrófono en modo abierto, cerrado, Push-to-Talk o latch.' },
  { name: 'Duración de llamada', cat: 'Operación', desc: 'Muestra la duración de las llamadas en tiempo real por línea.' },
  { name: 'Chat', cat: 'Comunicaciones', desc: 'Envía mensajes de chat a usuarios del sistema, integrado en la consola.' },
  { name: 'Presencia', cat: 'Comunicaciones', desc: 'Indicadores visuales por usuario para identificar quién está activo, también para participantes de conferencias.' },
  { name: 'Hoot & Holler', cat: 'Comunicaciones', desc: 'Canal abierto para anuncios simultáneos al floor, con push-to-talk o latch.' },
  { name: 'Búsqueda en grabaciones', cat: 'Compliance', desc: 'Búsqueda por metadata o por contenido (palabras, frases) usando motor de IA sobre transcripciones.' },
  { name: 'Hotline', cat: 'Comunicaciones', desc: 'Conexión instantánea con un solo botón a contraparte predefinida.' },
  { name: 'Resumen automático de llamada', cat: 'Compliance', desc: 'Kube2net genera resumen de la llamada y lo comparte con usuarios autorizados.' }
];

const CATS = ['Todas', ...Array.from(new Set(FEATURES.map(f => f.cat)))];
const FT_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';

function renderChips(active) {
  const root = document.getElementById('ft-chips');
  root.innerHTML = CATS.map(c => {
    const count = c === 'Todas' ? FEATURES.length : FEATURES.filter(f => f.cat === c).length;
    return `<button class="fchip ${active === c ? 'active' : ''}" data-cat="${c}">${c}<span class="count">${count}</span></button>`;
  }).join('');
  root.querySelectorAll('.fchip').forEach(chip => {
    chip.addEventListener('click', () => {
      currentCat = chip.dataset.cat;
      renderChips(currentCat);
      applyFilter();
    });
  });
}

function renderTable() {
  const root = document.getElementById('ftable');
  root.innerHTML = FEATURES.map((f, i) => `
    <div class="ftable-row" data-cat="${f.cat}" data-name="${f.name.toLowerCase()}" data-desc="${f.desc.toLowerCase()}">
      <div class="ft-name">
        <span class="ico">${FT_ICON}</span>
        <h5>${f.name}</h5>
      </div>
      <p class="ft-desc">${f.desc}</p>
      <span class="ft-cat">${f.cat}</span>
    </div>
  `).join('');
}

let currentCat = 'Todas';
function applyFilter() {
  const q = (document.getElementById('ft-search').value || '').trim().toLowerCase();
  document.querySelectorAll('.ftable-row').forEach(row => {
    const inCat = currentCat === 'Todas' || row.dataset.cat === currentCat;
    const inQuery = !q || row.dataset.name.includes(q) || row.dataset.desc.includes(q);
    row.classList.toggle('hidden', !(inCat && inQuery));
  });
}

renderChips('Todas');
renderTable();
document.getElementById('ft-search').addEventListener('input', applyFilter);

/* ---------- Tweaks panel ---------- */
const toggle = document.getElementById('tweaks-toggle');
const panel = document.getElementById('tweaks-panel');
const closeBtn = document.getElementById('tweaks-close');

toggle.addEventListener('click', () => panel.classList.toggle('open'));
closeBtn.addEventListener('click', () => panel.classList.remove('open'));

/* Theme swatches */
document.querySelectorAll('#theme-row .swatch').forEach(s => {
  s.addEventListener('click', () => {
    document.querySelectorAll('#theme-row .swatch').forEach(x => x.classList.remove('active'));
    s.classList.add('active');
    document.documentElement.setAttribute('data-theme', s.dataset.theme);
  });
});

/* Mode swatches */
document.querySelectorAll('#mode-row .swatch').forEach(s => {
  s.addEventListener('click', () => {
    document.querySelectorAll('#mode-row .swatch').forEach(x => x.classList.remove('active'));
    s.classList.add('active');
    document.documentElement.setAttribute('data-mode', s.dataset.mode);
  });
});

/* ---------- Smooth anchor scroll respecting sticky nav ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});
