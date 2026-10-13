// Five homework assignments for CBSE Grades 6–8. Each is built on an activity in the current NCERT textbooks.
// Student pages read: intro, materials, steps, together, questions. Feedback runs in the browser and never gives the answer.
// Teacher notes (answer key, rubric) are in teacher-notes.js, loaded only by teacher.html.

const ASSIGNMENTS = [
  {
    id: 'handspan', grade: 6, subject: 'Science', minutes: 20,
    title: 'How many handspans long is your table?',
    chapter: 'Curiosity (Grade 6), Ch. 5 Measurement of Length and Motion, Activity 5.1',
    concept: 'Why we need standard units of length',
    objective: 'Explain why measurements in body units (handspans) differ between people, and why a standard unit (cm) gives everyone the same answer.',
    pattern: 'Household measurement · Compare across people',
    intro: 'In your textbook, five friends measured one table with their hands and got different answers. Will that happen in your home too?',
    materials: ['A table, bed, door or floor mat', 'A ruler or measuring tape (a 15 cm school ruler is fine: move it along step by step)', 'One adult or older person at home'],
    steps: [
      'Spread your hand wide. Measure your handspan (thumb tip to little-finger tip) in cm.',
      'Count how many of your handspans cover the long side of the table. Halves are fine, like 7½.',
      'Ask the adult to do the same two steps.',
      'Measure the long side of the table in cm with the ruler or tape.',
    ],
    together: 'Working with a friend? Each of you measures a table in your OWN home, then compare: why are your numbers different?',
    questions: [
      { id: 'pred', phase: 'Predict', type: 'choice', label: 'Before you measure: who will need MORE handspans to cover the table?', options: ['Me', 'The adult', 'We will need the same number'] },
      { id: 'what', phase: 'Record', type: 'text', label: 'What did you measure, and what was kept on it?' },
      { id: 'hs1', phase: 'Record', type: 'number', label: 'Your handspan', unit: 'cm', min: 5, max: 30 },
      { id: 'n1', phase: 'Record', type: 'number', label: 'Your handspans along the table', unit: 'handspans', min: 1, max: 60 },
      { id: 'hs2', phase: 'Record', type: 'number', label: "The adult's handspan", unit: 'cm', min: 5, max: 35 },
      { id: 'n2', phase: 'Record', type: 'number', label: "The adult's handspans along the table", unit: 'handspans', min: 1, max: 60 },
      { id: 'L', phase: 'Record', type: 'number', label: 'Table length with the ruler or tape', unit: 'cm', min: 20, max: 500 },
      { id: 'gap', phase: 'Calculate', type: 'text', label: "Multiply the adult's handspan by their count. How close is it to the ruler length? Why is it not exactly the same?" },
      { id: 'why', phase: 'Explain', type: 'text', label: 'Was your prediction right? Why did you and the adult get different numbers for the same table?' },
      { id: 'shop', phase: 'Explain', type: 'text', label: 'A cloth seller measures cloth with her hand. Would you rather buy from a seller with a big hand or a small hand? Why?' },
      { id: 'family', phase: 'Teach it back', type: 'text', label: 'Explain your answer to the adult. Write the sentence THEY say back to you.' },
    ],
    feedback(a) {
      const f = [], check = (hs, n, who) => {
        const est = hs * n, off = Math.round(Math.abs(est / a.L - 1) * 100);
        f.push(off <= 15 ? ['ok', `${who}: handspan × count = ${+est.toFixed(1)} cm, close to the ${a.L} cm ruler length.`]
          : ['warn', `${who}: handspan × count = ${+est.toFixed(1)} cm, but the ruler says ${a.L} cm (${off}% different). Measure again: were the handspans touching end to end?`]);
      };
      if (a.L && a.hs1 && a.n1) check(a.hs1, a.n1, 'You');
      if (a.L && a.hs2 && a.n2) check(a.hs2, a.n2, 'The adult');
      if (a.hs1 && a.hs2 && a.n1 && a.n2 && a.hs1 !== a.hs2 && (a.hs2 > a.hs1) !== (a.n1 > a.n2)) f.push(['warn', 'The person with the bigger hand should need FEWER handspans. Check your numbers.']);
      return f;
    },
  },
  {
    id: 'pendulum', grade: 7, subject: 'Science', minutes: 30,
    title: 'Does a longer pendulum swing faster or slower?',
    chapter: 'Curiosity (Grade 7), Ch. 8 Measurement of Time and Motion, Activity 8.2 and “Think like a scientist”',
    concept: 'Time period of a pendulum depends on its length, not its mass',
    objective: 'Measure the time period of a pendulum at two lengths, change only one thing at a time, and describe how length affects the time period.',
    pattern: 'Repeat with one change',
    intro: 'Galileo is said to have timed a swinging lamp using his pulse. You will use a watch to find out what changes a pendulum’s swing.',
    materials: ['Thread about 1.5 m long', 'A small heavy object as the bob (stone, key, nut)', 'A watch or phone stopwatch', 'Ruler or tape', 'A place to hang the thread (ask an adult to tie it high, e.g. on a door frame or hook)'],
    safety: 'Do not climb to tie the thread. Ask an adult.',
    steps: [
      'Tie the bob to the thread and hang it 25 cm long (from where it hangs to the middle of the bob).',
      'Pull the bob a little to one side (not far) and let go. Time 10 oscillations. One oscillation = from one side, to the other side, and back again.',
      'Time it a second time. Write down both times.',
      'Make the thread 4 times longer: 100 cm. Time 10 oscillations, twice.',
      'Bonus: keep 100 cm but use a heavier bob. Does the time change?',
    ],
    together: 'Working with a friend? One of you counts while the other times, then swap jobs. Both of you write your own answers.',
    questions: [
      { id: 'pred', phase: 'Predict', type: 'choice', label: 'If you make the thread 4 times longer, the time for one oscillation (there and back) will…', options: ['Stay the same', 'Double', 'Become 4 times', 'Get shorter'] },
      { id: 't1a', phase: 'Record', type: 'number', label: '25 cm: time for 10 oscillations, try 1', unit: 's', min: 1, max: 100 },
      { id: 't1b', phase: 'Record', type: 'number', label: '25 cm: time for 10 oscillations, try 2', unit: 's', min: 1, max: 100 },
      { id: 't2a', phase: 'Record', type: 'number', label: '100 cm: time for 10 oscillations, try 1', unit: 's', min: 1, max: 100 },
      { id: 't2b', phase: 'Record', type: 'number', label: '100 cm: time for 10 oscillations, try 2', unit: 's', min: 1, max: 100 },
      { id: 'mass', phase: 'Record', type: 'choice', label: 'Bonus: with a heavier bob at 100 cm, the time…', options: ['Did not change much', 'Got longer', 'Got shorter', 'I did not try'] },
      { id: 'hard', phase: 'Record', type: 'text', label: 'What was hardest about counting or timing, and how did you fix it?' },
      { id: 'why', phase: 'Explain', type: 'text', label: 'Was your prediction right? What happened to the time when the thread became 4 times longer? Use your numbers.' },
      { id: 'apply', phase: 'Explain', type: 'text', label: 'A pendulum clock is running slow. Should the shopkeeper make its pendulum shorter or longer? Why?' },
      { id: 'family', phase: 'Teach it back', type: 'text', label: 'Show an adult both pendulums and explain. Write the sentence THEY say back to you.' },
    ],
    feedback(a) {
      const f = [], avg = (x, y) => (x && y ? (x + y) / 2 : x || y);
      const t1 = avg(a.t1a, a.t1b), t2 = avg(a.t2a, a.t2b);
      if (a.t1a && a.t1b && Math.abs(a.t1a - a.t1b) > 0.15 * avg(a.t1a, a.t1b)) f.push(['warn', 'Your two tries at 25 cm are quite different. Time it once more.']);
      if (a.t2a && a.t2b && Math.abs(a.t2a - a.t2b) > 0.15 * avg(a.t2a, a.t2b)) f.push(['warn', 'Your two tries at 100 cm are quite different. Time it once more.']);
      if (t1 && t2) {
        f.push(['info', `Time period: ${(t1 / 10).toFixed(2)} s at 25 cm and ${(t2 / 10).toFixed(2)} s at 100 cm. The longer pendulum took ${(t2 / t1).toFixed(1)} times as long.`]);
        const T = L => 2 * Math.PI * Math.sqrt(L / 981);
        if (Math.abs(t1 / 10 / T(25) - 1) > 0.2 || Math.abs(t2 / 10 / T(100) - 1) > 0.2) f.push(['warn', 'Your times look unusual for these lengths. Did you count full oscillations (there AND back)? Did you measure to the middle of the bob?']);
        if (a.pred) f.push(['info', `You predicted: “${a.pred}”. Compare that with your result.`]);
      }
      return f;
    },
  },
  {
    id: 'salt', grade: 8, subject: 'Science', minutes: 25,
    title: 'Fix the AI’s explanation: how much salt can water dissolve?',
    chapter: 'Curiosity (Grade 8), Ch. 9 The Amazing World of Solutes, Solvents, and Solutions, Activity 9.1',
    concept: 'Saturated solutions and solubility',
    objective: 'Find by experiment that a fixed amount of water can dissolve only a limited amount of salt (a saturated solution), and use the evidence to correct a wrong explanation.',
    pattern: 'Find the error in an AI explanation · Prediction then observation',
    intro: 'A student asked an AI chatbot about dissolving salt. Some of its answer is right and some is wrong. Do the experiment and decide which is which.',
    aiText: [
      '1. Salt dissolves in water because the salt particles spread out between the water particles.',
      '2. If you keep stirring long enough, half a glass of water can dissolve as much salt as you add.',
      '3. Once salt dissolves, it is gone. That is why you cannot see it any more.',
      '4. Temperature never changes how much of any solid can dissolve in water.',
    ],
    materials: ['A glass tumbler', 'Water', 'Salt (about 10 teaspoons)', 'A teaspoon', 'A spoon to stir'],
    steps: [
      'Fill the glass half with water.',
      'Add 1 level teaspoon of salt. Stir until it disappears.',
      'Keep adding 1 level teaspoon at a time, stirring well each time (about 1 minute).',
      'Stop when some salt stays at the bottom even after stirring. Count only the spoons that fully dissolved (do not count the last one).',
      'Dip a clean finger in the clear part and taste one drop (do not drink it). Is the salt really gone?',
      'Add 2 spoons of water to the glass and stir. Watch the salt at the bottom.',
      'Afterwards, use the salt water for cleaning or pour it on a waste patch, not on plants.',
    ],
    together: 'Working with a friend? Each of you does the experiment at home with your own glass and spoon, then compare your spoon counts: why are they different?',
    questions: [
      { id: 'pred', phase: 'Predict', type: 'number', label: 'Before you start: how many teaspoons of salt do you think half a glass of water can dissolve?', unit: 'spoons', min: 0, max: 1000 },
      { id: 'n', phase: 'Record', type: 'number', label: 'Spoons that fully dissolved', unit: 'spoons', min: 0, max: 100 },
      { id: 'bottom', phase: 'Record', type: 'text', label: 'What did the salt at the bottom look like? What happened to it when you added 2 more spoons of water?' },
      { id: 'taste', phase: 'Record', type: 'choice', label: 'The clear water tasted…', options: ['Salty', 'Like plain water'] },
      { id: 'off', phase: 'Explain', type: 'text', label: 'How far off was your prediction? Why do you think so?' },
      { id: 'wrong', phase: 'Explain', type: 'checks', label: 'Which AI sentences does YOUR experiment show are wrong? Tick them.', options: ['1', '2', '3', '4'] },
      { id: 'fix', phase: 'Explain', type: 'text', label: 'Rewrite ONE wrong sentence so it is correct. Use what you saw.' },
      { id: 'untested', phase: 'Explain', type: 'text', label: 'Which sentence could you NOT check with this experiment? Describe an experiment that would check it.' },
      { id: 'family', phase: 'Teach it back', type: 'text', label: 'Explain "saturated solution" to an adult using your glass. Write the sentence THEY say back to you.' },
    ],
    feedback(a) {
      const f = [];
      if (a.n !== '' && a.n != null) {
        if (a.n < 2) f.push(['warn', 'Very few spoons dissolved. Were they level teaspoons, and did you stir for about a minute each time?']);
        else if (a.n > 20) f.push(['warn', 'That is a lot of salt for half a glass. Was there really no salt at the bottom after each spoon?']);
        else f.push(['info', `${a.n} spoons dissolved. What does it mean that the next spoon would not dissolve, however long you stirred?`]);
      }
      if (a.taste === 'Like plain water') f.push(['warn', 'Taste again: dissolved salt is still in the water, even though you cannot see it.']);
      const w = a.wrong || [];
      if (w.length) {
        if (w.includes('1')) f.push(['warn', 'Look again at sentence 1. Did anything you saw go against it?']);
        if (!w.includes('2') && a.n) f.push(['warn', 'Your salt stopped dissolving after a few spoons. Which sentence does that disagree with?']);
        if (!w.includes('3') && a.taste === 'Salty') f.push(['warn', 'You tasted salt in the clear water. Which sentence does that disagree with?']);
        if (w.includes('4')) f.push(['info', 'You ticked sentence 4. Did your experiment change the temperature? If not, can it show that sentence is wrong?']);
      }
      return f;
    },
  },
  {
    id: 'paper', grade: 7, subject: 'Maths', minutes: 20,
    title: 'How thick is one sheet of paper?',
    chapter: 'Ganita Prakash (Grade 7), Ch. 3 A Peek Beyond the Point (tenths, hundredths, thousandths)',
    concept: 'Decimals for very small measurements; dividing to find one part',
    objective: 'Find the thickness of one sheet by measuring a stack and dividing, write it in thousandths of a mm, and explain why a bigger stack gives a better answer.',
    pattern: 'Estimate, measure, apply to a new case',
    intro: 'A sheet of paper is too thin for your ruler. A stack of sheets is not.',
    materials: ['A textbook or notebook with at least 200 pages', 'A ruler with mm marks'],
    steps: [
      'A sheet is one leaf of paper. It has 2 pages (front and back). 200 pages = 100 sheets.',
      'Try to measure ONE sheet with your ruler. What happens?',
      'Squeeze together 50 sheets (100 pages). Measure the stack in mm.',
      'Squeeze together 100 sheets (200 pages). Measure the stack in mm.',
      'Divide to find the thickness of one sheet from each stack. Write it with three decimal places, like 0.085 mm.',
    ],
    together: 'Working with a friend? Use DIFFERENT kinds of paper (notebook, textbook, newspaper) and compare. Whose paper is thickest?',
    questions: [
      { id: 'pred', phase: 'Predict', type: 'number', label: 'Guess the thickness of one sheet, in mm.', unit: 'mm', min: 0, max: 10 },
      { id: 'book1', phase: 'Record', type: 'text', label: 'Which book or notebook did you use?' },
      { id: 'h50', phase: 'Record', type: 'number', label: 'Height of 50 sheets', unit: 'mm', min: 0.5, max: 50 },
      { id: 'h100', phase: 'Record', type: 'number', label: 'Height of 100 sheets', unit: 'mm', min: 0.5, max: 100 },
      { id: 't50', phase: 'Calculate', type: 'number', label: 'One sheet, from the 50-sheet stack', unit: 'mm', min: 0, max: 2 },
      { id: 't100', phase: 'Calculate', type: 'number', label: 'One sheet, from the 100-sheet stack', unit: 'mm', min: 0, max: 2 },
      { id: 'diff', phase: 'Explain', type: 'text', label: 'Your two answers are probably not exactly the same. Why not?' },
      { id: 'better', phase: 'Explain', type: 'text', label: 'Your ruler can be off by about half a mm. Which stack gives the more correct answer, and why?' },
      { id: 'book', phase: 'Explain', type: 'text', label: 'Take a DIFFERENT book. Write its name and its last page number. Measure its thickness without the covers. Use your sheet thickness to estimate its pages. How close did you get? Show your working.' },
      { id: 'family', phase: 'Teach it back', type: 'text', label: 'Explain to an adult why you measured 100 sheets instead of one. Write the sentence THEY say back to you.' },
    ],
    feedback(a) {
      const f = [];
      if (a.h50 && a.t50 !== '' && a.t50 != null && Math.abs(a.t50 - a.h50 / 50) > 0.002) f.push(['warn', 'Check your division for the 50-sheet stack: height ÷ 50.']);
      if (a.h100 && a.t100 !== '' && a.t100 != null && Math.abs(a.t100 - a.h100 / 100) > 0.002) f.push(['warn', 'Check your division for the 100-sheet stack: height ÷ 100.']);
      if (a.h50 && a.h100) {
        const r = a.h100 / a.h50, t = a.h100 / 100;
        if (r < 1.6 || r > 2.5) f.push(['warn', '100 sheets should be about twice as tall as 50 sheets. Did you count sheets (not pages) and squeeze each stack?']);
        if (t < 0.06) f.push(['warn', 'That is thinner than school paper. Did you count pages instead of sheets? Or measure in cm instead of mm?']);
        if (t > 0.3) f.push(['warn', 'That is thick for book paper. Did you squeeze the stack tightly?']);
        if (a.pred) f.push(['info', `You guessed ${a.pred} mm. Your 100-sheet stack says about ${t.toFixed(3)} mm.`]);
      }
      return f;
    },
  },
  {
    id: 'sweet', grade: 8, subject: 'Maths', minutes: 25,
    title: 'Same sweetness, more cups',
    chapter: 'Ganita Prakash (Grade 8), Ch. 7 Proportional Reasoning-1 (Example 2: Kesang’s lemonade; a : b :: c : d)',
    concept: 'Proportional ratios',
    objective: 'Use a : b :: c : d to scale a recipe, solve a version with a fixed amount of sugar, and test with a family taste test why adding the same amount is not the same as multiplying.',
    pattern: 'Design under a constraint · Household experiment · Family as the judge',
    intro: 'In your textbook, Kesang makes lemonade for a party. Now it is your turn, with a real taste test.',
    materials: ['Small cups or glasses (all the same size)', 'Water', 'Sugar (about 10 teaspoons) and a teaspoon', 'Lemon (optional)', 'One person at home to taste'],
    safety: 'Ask before using sugar. Use a clean spoon for each taste and do not share cups. If someone cannot have sugar, use a pinch of turmeric or a little tea in water and compare the COLOUR instead of the taste. Drink or use the sweet water afterwards; do not waste it.',
    steps: [
      'Make drink A: 1 cup of water + the number of spoons of sugar your family likes (try 2). Stir well.',
      'Work out how much sugar 2 cups of water need for the SAME sweetness. Make drink B in a jug.',
      'Make drink C: 2 cups of water with the SAME number of spoons as drink A (do not double it).',
      'Pour a little of A, B and C into three cups. Ask someone at home to taste without knowing which is which.',
      'Design drink D yourself: choose a number of cups, work out the sugar, make it, and test it against A.',
    ],
    together: 'Working with a friend? Each of you makes your own drink A with a different recipe. Swap recipes: can your friend scale YOUR recipe correctly?',
    questions: [
      { id: 'a', phase: 'Record', type: 'number', label: 'Spoons of sugar in drink A (1 cup of water)', unit: 'spoons', min: 0.5, max: 10 },
      { id: 'pred', phase: 'Predict', type: 'choice', label: 'Before tasting: which drink will taste LESS sweet than A?', options: ['B', 'C', 'Both the same as A'] },
      { id: 'b', phase: 'Calculate', type: 'number', label: 'Spoons for drink B (2 cups) so it tastes the same as A', unit: 'spoons', min: 0, max: 40 },
      { id: 'words', phase: 'Record', type: 'text', label: 'What words did the taster use for each cup? (e.g. "watery", "same as the first one")' },
      { id: 'dcups', phase: 'Record', type: 'number', label: 'Drink D: cups of water you chose', unit: 'cups', min: 0.5, max: 20 },
      { id: 'dspoons', phase: 'Calculate', type: 'number', label: 'Drink D: spoons of sugar you worked out', unit: 'spoons', min: 0, max: 100 },
      { id: 'dtaste', phase: 'Record', type: 'text', label: 'Did drink D taste the same as A? What did the taster say?' },
      { id: 'cups', phase: 'Calculate', type: 'number', label: 'Challenge: you have only 5 spoons of sugar. How many cups of water can you sweeten exactly like drink A?', unit: 'cups', min: 0, max: 100 },
      { id: 'ratios', phase: 'Explain', type: 'text', label: 'Write cups : spoons for A, B and C. Which two are in the same ratio? Show how you know.' },
      { id: 'why', phase: 'Explain', type: 'text', label: 'C had the same sugar as A. Explain why it tasted different. Use the words "per cup".' },
      { id: 'family', phase: 'Teach it back', type: 'text', label: 'Explain to your taster why C tasted different. Write the sentence THEY say back to you.' },
    ],
    feedback(a) {
      const f = [], has = x => x !== '' && x != null;
      if (a.a && has(a.b)) f.push(Math.abs(a.b - 2 * a.a) < 0.01 ? ['ok', `1 : ${a.a} :: 2 : ${a.b}. Both numbers were multiplied by the same factor.`] : ['warn', 'Drink B has twice the water. For the same sweetness, what must happen to the sugar?']);
      if (a.a && a.dcups && has(a.dspoons)) f.push(Math.abs(a.dspoons - a.a * a.dcups) < 0.05 ? ['ok', `Drink D: ${a.dcups} cups with ${a.dspoons} spoons is ${a.a} spoons per cup, like A.`] : ['warn', `Drink D: how many spoons per cup is that? Compare with drink A (${a.a} per cup).`]);
      if (a.a && has(a.cups)) f.push(Math.abs(a.cups - 5 / a.a) < 0.05 ? ['ok', `Yes: 5 spoons is ${+(5 / a.a).toFixed(2)} times ${a.a} spoons, so the water also goes up ${+(5 / a.a).toFixed(2)} times.`] : ['warn', `Your recipe uses ${a.a} spoons per cup. By what number do you multiply ${a.a} to get 5? Do the same to 1 cup. (The answer does not have to be a whole number.)`]);
      return f;
    },
  },
];
