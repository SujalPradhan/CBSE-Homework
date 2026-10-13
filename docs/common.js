// Shared helpers for the student and teacher pages.
const LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
const API = new URLSearchParams(location.search).get('api') || (LOCAL ? 'http://localhost:8787' : 'https://cbse-homework.WORKERS_SUBDOMAIN.workers.dev');
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
async function api(path, body) {
  const r = await fetch(API + path, body ? { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) } : {});
  const j = await r.json().catch(() => ({ error: 'Could not reach the homework server.' }));
  return { status: r.status, ...j };
}
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

// Dot plot: one dot per value, stacked in bins.
function dotplot(values, label, mark) {
  if (!values.length) return '<p class="muted">No accepted answers yet.</p>';
  const lo = Math.min(...values), hi = Math.max(...values), span = hi - lo || 1, bins = 14, W = 600, r = 7;
  const counts = {}, dots = [];
  for (const v of values) { const b = Math.min(bins - 1, Math.floor((v - lo) / span * bins)); counts[b] = (counts[b] || 0) + 1; dots.push([b, counts[b], v]); }
  const H = Math.max(...Object.values(counts)) * (2 * r + 2) + 40, X = b => 20 + (b + 0.5) * (W - 40) / bins;
  let s = dots.map(([b, k, v]) => `<circle cx="${X(b)}" cy="${H - 26 - (k - 0.5) * (2 * r + 2)}" r="${r}" fill="${v === mark ? 'var(--ok)' : 'var(--accent)'}"><title>${v}</title></circle>`).join('');
  s += `<line x1="16" x2="${W - 16}" y1="${H - 24}" y2="${H - 24}" stroke="var(--line)"/><text x="20" y="${H - 6}">${+lo.toFixed(3)}</text><text x="${W - 20}" y="${H - 6}" text-anchor="end">${+hi.toFixed(3)}</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}">${s}</svg>`;
}
// Scatter: points [x, y].
function scatter(pts, xl, yl) {
  if (!pts.length) return '<p class="muted">No accepted answers yet.</p>';
  const W = 600, H = 300, m = 40, xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
  const xm = Math.max(...xs) * 1.1, ym = Math.max(...ys) * 1.1, X = x => m + x / xm * (W - m - 10), Y = y => H - m + 10 - y / ym * (H - m);
  let s = `<line x1="${m}" y1="${H - m + 10}" x2="${W - 10}" y2="${H - m + 10}" stroke="var(--line)"/><line x1="${m}" y1="10" x2="${m}" y2="${H - m + 10}" stroke="var(--line)"/>`;
  s += pts.map(p => `<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="6" fill="var(--accent)" opacity=".8"><title>${p[0]}, ${p[1]}</title></circle>`).join('');
  s += `<text x="${W - 10}" y="${H - 4}" text-anchor="end">${esc(xl)}</text><text x="${m + 4}" y="20">${esc(yl)}</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(yl)} against ${esc(xl)}">${s}</svg>`;
}
// Horizontal bars for category counts.
function bars(counts, label) {
  const ks = Object.keys(counts);
  if (!ks.length) return '<p class="muted">Nothing yet.</p>';
  const W = 600, rh = 34, H = ks.length * rh, max = Math.max(...Object.values(counts));
  const s = ks.map((k, i) => `<text x="0" y="${i * rh + 21}">${esc(k)}</text><rect x="190" y="${i * rh + 7}" width="${Math.max(4, counts[k] / max * 360)}" height="20" rx="4" fill="var(--accent)"/><text x="${198 + counts[k] / max * 360}" y="${i * rh + 21}">${counts[k]}</text>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}">${s}</svg>`;
}
const tally = arr => arr.reduce((a, k) => (a[k] = (a[k] || 0) + 1, a), {});
