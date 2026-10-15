# Measure It Homework

Five short online maths and science tasks (a virtual lab or build tool on the page, no objects needed) for CBSE Grades 6–8, each built on an activity in the current NCERT books (Ganita Prakash and Curiosity).

Each task has 5–6 short questions on one page: guess first, use the lab or tool on the page, use your own numbers on a new case, and explain in one sentence. An online checker verifies the answers and returns a signed result code, so the teacher marks nothing.

- **Students:** https://sujalpradhan.github.io/CBSE-Homework/
- **Teachers:** https://sujalpradhan.github.io/CBSE-Homework/teacher.html
- **Check a code:** https://sujalpradhan.github.io/CBSE-Homework/card.html
- **How it was designed and tested:** https://sujalpradhan.github.io/CBSE-Homework/checklist.html

| Grade | Subject | Task | NCERT |
|---|---|---|---|
| 6 | Science | How long is the river? | Curiosity Ch. 5 §5.4 |
| 6 | Maths | Same fence, different field | Ganita Prakash Ch. 6 |
| 7 | Science | Pendulum on a mystery planet | Curiosity Ch. 8, Activity 8.2 |
| 8 | Science | How much salt will water hold? | Curiosity Ch. 9, Activities 9.1–9.2 |
| 8 | Maths | Same sweetness | Ganita Prakash Ch. 7, Example 2 |

Page references for each task are in [validation/ncert_sources.md](validation/ncert_sources.md).

## How it works
The site is static. The checker assigns each browser a 2-digit set number that picks their own numbers (and, in the pendulum and salt labs, hidden constants). Answers stay on the device until “Check my answers”, which sends them (no name) to a small Cloudflare Worker that scores the numbers by private rules, asks a lightweight model to validate one short sentence, and returns a signed code. Nothing is stored.
- `docs/assignments.js`: questions and each student's seeded case (public).
- `docs/teacher-notes.js`: expected results and a short rubric (public).
- `scripts/build_grader_data.mjs`: copies the questions into the checker so the two never drift apart. The checker's source and answer rules live in a separate private repository.

Design follows the tests in Anand S's [The Exam Is a Hypothesis](https://www.s-anand.net/blog/the-exam-is-a-hypothesis/).
