# Measure It Homework

Five short hands-on maths and science tasks for CBSE Grades 6–8, each built on an activity in the current NCERT books (Ganita Prakash and Curiosity).

Each task is about 5–6 short steps: predict, measure something at home, use your own numbers on a new case, decide, and explain in one sentence. An online checker verifies the answers and returns a signed result code, so the teacher marks nothing.

- **Students:** https://sujalpradhan.github.io/CBSE-Homework/
- **Teachers:** https://sujalpradhan.github.io/CBSE-Homework/teacher.html
- **Check a code:** https://sujalpradhan.github.io/CBSE-Homework/card.html
- **How it was designed and tested:** https://sujalpradhan.github.io/CBSE-Homework/checklist.html

| Grade | Subject | Task | NCERT |
|---|---|---|---|
| 6 | Science | How many handspans long is it? | Curiosity Ch. 5, Activity 5.1 |
| 7 | Science | Does a longer pendulum swing slower? | Curiosity Ch. 8, Activity 8.2 |
| 8 | Science | How much salt can water dissolve? | Curiosity Ch. 9, Activity 9.1 |
| 7 | Maths | How thick is one sheet of paper? | Ganita Prakash Ch. 3 |
| 8 | Maths | Same sweetness, more cups | Ganita Prakash Ch. 7, Example 2 |

Page references for each task are in [validation/ncert_sources.md](validation/ncert_sources.md).

## How it works
The site is static. Each student gets a 2-digit set number that picks their own numbers. Answers stay on the device until “Check my answers”, which sends them (no name) to a small Cloudflare Worker that scores the numbers by private rules, asks a lightweight model to validate one short sentence, and returns a signed code. Nothing is stored.
- `docs/assignments.js`: questions and each student's seeded case (public).
- `docs/teacher-notes.js`: expected results and a short rubric (public).
- `scripts/build_grader_data.mjs`: copies the questions into the checker so the two never drift apart. The checker's source and answer rules live in a separate private repository.

Design follows the tests in Anand S's [The Exam Is a Hypothesis](https://www.s-anand.net/blog/the-exam-is-a-hypothesis/).
