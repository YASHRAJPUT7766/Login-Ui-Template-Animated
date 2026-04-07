/* ════════════════════════════════════════════════════════════
   CRYSTAL AUTH — script.js
   All interactions · 3D gem · cursor · validation · v2.0
════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════
   THREE.JS — 3D CRYSTAL GEM
══════════════════════════════════════════════════════ */
(function initThree() {
  const canvas   = document.getElementById('three-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.2, 5.5);

  /* ── Resize ── */
  function resize() {
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── Lighting ── */
  scene.add(new THREE.AmbientLight(0xfff6e0, 0.4));

  const dir1 = new THREE.DirectionalLight(0xfff8f0, 1.4);
  dir1.position.set(5, 8, 6);
  dir1.castShadow = true;
  scene.add(dir1);

  const dir2 = new THREE.DirectionalLight(0xc9a84c, 1.0);
  dir2.position.set(-5, -3, 4);
  scene.add(dir2);

  const dir3 = new THREE.DirectionalLight(0x9bb8ff, 0.5);
  dir3.position.set(0, -6, -4);
  scene.add(dir3);

  const point1 = new THREE.PointLight(0xffd580, 2.0, 14);
  point1.position.set(3, 4, 3);
  scene.add(point1);

  const point2 = new THREE.PointLight(0xa0c4ff, 0.9, 10);
  point2.position.set(-4, -2, 2);
  scene.add(point2);

  /* ── Main Crystal Gem ── */
  const gemGeo = new THREE.OctahedronGeometry(1.25, 0);

  // Sculpt into elegant gem shape
  const posArr = gemGeo.attributes.position.array;
  for (let i = 0; i < posArr.length; i += 3) {
    posArr[i + 1] *= 1.55;   // tall Y
    posArr[i]     *= 0.82;   // narrow X
    posArr[i + 2] *= 0.82;   // narrow Z
  }
  gemGeo.computeVertexNormals();

  const gemMat = new THREE.MeshPhongMaterial({
    color:             0xfff4e0,
    emissive:          0xc9a84c,
    emissiveIntensity: 0.04,
    specular:          0xffffff,
    shininess:         280,
    transparent:       true,
    opacity:           0.82,
    side:              THREE.DoubleSide,
    flatShading:       true,
  });

  const gem = new THREE.Mesh(gemGeo, gemMat);
  gem.castShadow = true;
  scene.add(gem);

  /* ── Wireframe ── */
  const wireGeo = new THREE.EdgesGeometry(gemGeo);
  const wireMat = new THREE.LineBasicMaterial({
    color:       0xe8ca7a,
    transparent: true,
    opacity:     0.22,
  });
  const wire = new THREE.LineSegments(wireGeo, wireMat);
  scene.add(wire);

  /* ── Inner glow ── */
  const glowGeo = new THREE.SphereGeometry(0.42, 32, 32);
  const glowMat = new THREE.MeshBasicMaterial({
    color:       0xfff0a0,
    transparent: true,
    opacity:     0.28,
  });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  scene.add(glow);

  /* ── Second inner ring ── */
  const ring2Geo = new THREE.TorusGeometry(0.9, 0.006, 8, 80);
  const ring2Mat = new THREE.MeshBasicMaterial({
    color:       0xc9a84c,
    transparent: true,
    opacity:     0.18,
  });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.x = Math.PI / 3;
  scene.add(ring2);

  /* ── Orbiting mini gems ── */
  const orbiters = [];
  const orbitData = [
    { r: 0.27, speed: 1.4, phase: 0,    axis: new THREE.Vector3(0.4, 1, 0.2).normalize(),    color: 0xd4a84c },
    { r: 0.17, speed: 2.0, phase: 2.2,  axis: new THREE.Vector3(-0.3, 0.8, 0.5).normalize(), color: 0xb0c0f0 },
    { r: 0.21, speed: 0.8, phase: 4.4,  axis: new THREE.Vector3(0.7, 0.4, -0.4).normalize(), color: 0xf0d0b0 },
    { r: 0.13, speed: 1.7, phase: 1.1,  axis: new THREE.Vector3(-0.5, -0.6, 0.6).normalize(),color: 0xe0a0c0 },
  ];

  const smallGeo = new THREE.OctahedronGeometry(1, 0);
  orbitData.forEach(o => {
    const mat  = new THREE.MeshPhongMaterial({ color: o.color, flatShading: true, transparent: true, opacity: 0.7 });
    const mesh = new THREE.Mesh(smallGeo, mat);
    mesh.scale.set(o.r, o.r * 1.4, o.r);
    mesh.position.set(2.4, 0, 0);
    scene.add(mesh);
    orbiters.push({ mesh, ...o, t: o.phase });
  });

  /* ── Particles ── */
  const particleCount = 160;
  const pGeo  = new THREE.BufferGeometry();
  const pPos  = new Float32Array(particleCount * 3);
  const pVel  = [];
  for (let i = 0; i < particleCount; i++) {
    pPos[i * 3]     = (Math.random() - 0.5) * 9;
    pPos[i * 3 + 1] = (Math.random() - 0.5) * 9;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    pVel.push({
      x: (Math.random() - 0.5) * 0.0018,
      y:  Math.random() * 0.0028 + 0.0008
    });
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({
    color:       0xd4b060,
    size:        0.022,
    transparent: true,
    opacity:     0.45,
  });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  /* ── Mouse parallax ── */
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* ── Mode morph ── */
  let targetScaleY = 1;
  window.setGemMode = function(mode) {
    targetScaleY = mode === 'signup' ? 0.6 : 1;
  };

  /* ── Animate ── */
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.01;

    // gem
    gem.rotation.y  = t * 0.45 + mx * 0.25;
    gem.rotation.x  = Math.sin(t * 0.28) * 0.18 + my * 0.12;
    gem.position.y  = Math.sin(t * 0.65) * 0.14;
    gem.scale.y    += (targetScaleY - gem.scale.y) * 0.04;

    wire.rotation.copy(gem.rotation);
    wire.position.copy(gem.position);
    wire.scale.y = gem.scale.y * 1.002;

    ring2.rotation.z = t * 0.22;
    ring2.rotation.x = Math.PI / 3 + Math.sin(t * 0.4) * 0.1;

    // inner glow
    const gs = 1 + Math.sin(t * 1.4) * 0.14;
    glow.scale.set(gs, gs * gem.scale.y, gs);
    glow.rotation.y = t * 0.28;
    glowMat.opacity = 0.22 + Math.sin(t * 1.8) * 0.1;

    // orbiters
    orbiters.forEach(o => {
      o.t += 0.01 * o.speed;
      const q   = new THREE.Quaternion().setFromAxisAngle(o.axis, o.t);
      const pos = new THREE.Vector3(2.4, 0, 0).applyQuaternion(q);
      o.mesh.position.copy(pos);
      o.mesh.rotation.x = o.t * 1.4;
      o.mesh.rotation.z = o.t * 0.7;
    });

    // particles
    const positions = pGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     += pVel[i].x;
      positions[i * 3 + 1] += pVel[i].y;
      if (positions[i * 3 + 1] > 5) positions[i * 3 + 1] = -5;
    }
    pGeo.attributes.position.needsUpdate = true;

    // light orbit
    point1.position.x = Math.cos(t * 0.65) * 4.5;
    point1.position.z = Math.sin(t * 0.65) * 3.5;

    // camera drift
    camera.position.x += (mx * 0.28 - camera.position.x) * 0.035;
    camera.position.y += (0.2 - my * 0.18 - camera.position.y) * 0.035;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
  animate();
})();

/* ══════════════════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════════════════ */
(function initCursor() {
  const dotEl  = document.getElementById('cursorDot');
  const ringEl = document.getElementById('cursorRing');
  if (!dotEl || !ringEl) return;

  let rx = 0, ry = 0, mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dotEl.style.left = e.clientX + 'px';
    dotEl.style.top  = e.clientY + 'px';
  });

  // Smooth lag for ring
  function lagRing() {
    rx += (mouseX - rx) * 0.11;
    ry += (mouseY - ry) * 0.11;
    ringEl.style.left = rx + 'px';
    ringEl.style.top  = ry + 'px';
    requestAnimationFrame(lagRing);
  }
  lagRing();

  document.querySelectorAll('button, a, input, .switch-link, label').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });
})();

/* ══════════════════════════════════════════════════════
   MODE SWITCH — sign in ↔ sign up
══════════════════════════════════════════════════════ */
let currentMode = 'signin';
const wipe = document.getElementById('wipe');

function switchMode(mode) {
  if (mode === currentMode) return;
  currentMode = mode;

  wipe.classList.add('expand');
  setTimeout(() => wipe.classList.remove('expand'), 600);

  const isSignIn = mode === 'signin';
  document.getElementById('panelSignIn').classList.toggle('active', isSignIn);
  document.getElementById('panelSignUp').classList.toggle('active', !isSignIn);
  document.getElementById('btnSignIn').classList.toggle('active', isSignIn);
  document.getElementById('btnSignUp').classList.toggle('active', !isSignIn);

  if (window.setGemMode) window.setGemMode(mode);
}

/* ══════════════════════════════════════════════════════
   PASSWORD TOGGLE (eye button)
══════════════════════════════════════════════════════ */
function makeEyeToggle(inputId, btnId) {
  const inp = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  if (!inp || !btn) return;
  btn.addEventListener('click', () => {
    const show = inp.type === 'password';
    inp.type = show ? 'text' : 'password';
    btn.querySelector('svg').innerHTML = show
      ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
      : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  });
}
makeEyeToggle('si-pass', 'si-eye');
makeEyeToggle('su-pass', 'su-eye');

/* ══════════════════════════════════════════════════════
   PASSWORD STRENGTH METER
══════════════════════════════════════════════════════ */
const suPass        = document.getElementById('su-pass');
const strengthWrap  = document.getElementById('strengthWrap');
const strengthFill  = document.getElementById('strengthFill');
const strengthLabel = document.getElementById('strengthLabel');

suPass && suPass.addEventListener('input', () => {
  const v = suPass.value;
  strengthWrap.style.display = v ? 'block' : 'none';
  let score = 0;
  if (v.length >= 8)          score++;
  if (/[A-Z]/.test(v))        score++;
  if (/[0-9]/.test(v))        score++;
  if (/[^A-Za-z0-9]/.test(v)) score++;

  const levels = [
    { w: '22%',  bg: '#e05252', label: 'Weak' },
    { w: '48%',  bg: '#e09052', label: 'Fair' },
    { w: '72%',  bg: '#c9a84c', label: 'Good' },
    { w: '100%', bg: '#52a87a', label: 'Strong' },
  ];
  const l = levels[Math.max(score - 1, 0)];
  strengthFill.style.width      = l.w;
  strengthFill.style.background = l.bg;
  strengthLabel.textContent     = 'Strength: ' + l.label;
});

/* ══════════════════════════════════════════════════════
   VALIDATION HELPERS
══════════════════════════════════════════════════════ */
function showErr(inputEl, errEl, msg) {
  inputEl.classList.add('error');
  inputEl.classList.remove('valid');
  if (errEl) { errEl.textContent = msg; errEl.classList.add('show'); }
}
function showOk(inputEl, errEl) {
  inputEl.classList.remove('error');
  inputEl.classList.add('valid');
  if (errEl) errEl.classList.remove('show');
}
function clearState(inputEl, errEl) {
  inputEl.classList.remove('error', 'valid');
  if (errEl) errEl.classList.remove('show');
}

// Sign In validation
const siEmail = document.getElementById('si-email');
const siPass  = document.getElementById('si-pass');

siEmail && siEmail.addEventListener('blur', () => {
  const v = siEmail.value.trim();
  if (!v) return clearState(siEmail, document.getElementById('si-email-err'));
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
    ? showOk(siEmail, document.getElementById('si-email-err'))
    : showErr(siEmail, document.getElementById('si-email-err'), 'Please enter a valid email.');
});

siPass && siPass.addEventListener('blur', () => {
  const v = siPass.value;
  if (!v) return clearState(siPass, document.getElementById('si-pass-err'));
  v.length >= 6
    ? showOk(siPass, document.getElementById('si-pass-err'))
    : showErr(siPass, document.getElementById('si-pass-err'), 'Min. 6 characters required.');
});

// Sign Up validation
const suFirst = document.getElementById('su-first');
const suEmail = document.getElementById('su-email');

suFirst && suFirst.addEventListener('blur', () => {
  suFirst.value.trim().length >= 2
    ? showOk(suFirst, null)
    : showErr(suFirst, document.getElementById('su-first-err'), 'Enter your name.');
});

suEmail && suEmail.addEventListener('blur', () => {
  const v = suEmail.value.trim();
  if (!v) return clearState(suEmail, document.getElementById('su-email-err'));
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
    ? showOk(suEmail, document.getElementById('su-email-err'))
    : showErr(suEmail, document.getElementById('su-email-err'), 'Please enter a valid email.');
});

/* ══════════════════════════════════════════════════════
   FORM SUBMIT WITH LOADING STATE
══════════════════════════════════════════════════════ */
function handleSubmit(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');

    let ok = true;
    form.querySelectorAll('input[required]').forEach(inp => {
      if (!inp.value.trim() && inp.type !== 'checkbox') {
        inp.classList.add('error');
        ok = false;
      }
      if (inp.type === 'checkbox' && !inp.checked) {
        ok = false;
      }
    });
    if (!ok) return;

    btn.classList.add('loading');
    btn.disabled = true;
    await new Promise(r => setTimeout(r, 1800));
    btn.classList.remove('loading');
    btn.disabled = false;

    const overlay = document.getElementById('successOverlay');
    overlay.classList.add('show');
    setTimeout(() => overlay.classList.remove('show'), 3000);
  });
}

handleSubmit('formSignIn');
handleSubmit('formSignUp');

/* ══════════════════════════════════════════════════════
   RIPPLE EFFECT on social buttons
══════════════════════════════════════════════════════ */
document.querySelectorAll('.btn-social, .btn-submit').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect   = this.getBoundingClientRect();
    const x      = e.clientX - rect.left;
    const y      = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute;
      border-radius:50%;
      transform:scale(0);
      animation:ripple-anim 0.55s linear;
      background:rgba(201,168,76,0.18);
      width:100px;height:100px;
      left:${x - 50}px;top:${y - 50}px;
      pointer-events:none;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

// Inject ripple keyframe
const style = document.createElement('style');
style.textContent = `@keyframes ripple-anim { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(style);
