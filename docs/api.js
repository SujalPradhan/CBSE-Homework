// Address of the checker. Use ?api=http://localhost:8787 to test against a local one.
const API = new URLSearchParams(location.search).get('api')
  || (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) ? 'http://localhost:8787' : 'https://cbse-homework.cbse-homework-worker.workers.dev');
const LEVEL_TEXT = { got_it: 'Got it', partly: 'Partly', not_yet: 'Not yet' };
