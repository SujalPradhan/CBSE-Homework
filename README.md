# Measure It Homework

Five hands-on maths and science homework tasks for CBSE Grades 6–8. Each is built on an activity in the current NCERT textbooks (Ganita Prakash and Curiosity).

Each task asks the student to:
1. predict;
2. measure or test something at home;
3. explain what happened;
4. teach it back to a family member.

The tasks are designed to still teach something when students use AI or work together. None of them is AI-proof. The real check is a 2-minute question in class the next day.

- **Students:** https://sujalpradhan.github.io/CBSE-Homework/ (tasks open directly; no login).
- **Teachers:** https://sujalpradhan.github.io/CBSE-Homework/teacher.html (link to send, answer key, rubric, misconceptions, class check, printable sheet).
- **Design notes:** https://sujalpradhan.github.io/CBSE-Homework/checklist.html (research, checklist, red-team, validation plan).

| Grade | Subject | Task | NCERT |
|---|---|---|---|
| 6 | Science | How many handspans long is your table? | Curiosity Ch. 5, Activity 5.1 |
| 7 | Science | Does a longer pendulum swing faster or slower? | Curiosity Ch. 8, Activity 8.2 |
| 8 | Science | Fix the AI’s explanation: how much salt can water dissolve? | Curiosity Ch. 9, Activity 9.1 |
| 7 | Maths | How thick is one sheet of paper? | Ganita Prakash Ch. 3 |
| 8 | Maths | Same sweetness, more cups | Ganita Prakash Ch. 7, Example 2 |

Page references for each task are in [validation/ncert_sources.md](validation/ncert_sources.md).

## How it works
The site is static, with no server. Answers stay on the student's own device, and students copy or print their answer sheet for the teacher.
- `docs/assignments.js`: what students see (instructions, questions, feedback hints).
- `docs/teacher-notes.js`: answer keys and rubrics. They are loaded only by the teacher page, but they are still public files.

Design follows the tests in Anand S's [The Exam Is a Hypothesis](https://www.s-anand.net/blog/the-exam-is-a-hypothesis/).
