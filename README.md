# Measure It Homework

Hands-on maths and science homework for CBSE Grades 6–8. Each task is built on an activity in the current NCERT textbooks (Ganita Prakash and Curiosity).

Each task is designed to still teach something when a student uses an AI agent or works with friends. The student:
1. predicts, and the prediction is locked;
2. measures something real at home;
3. submits, and the server checks that the numbers could come from a real measurement;
4. teaches it back to someone at home, who writes one line in the notebook.

The next day, the class sees its pooled results, and the teacher runs a 2-minute check on a fresh case.

- **Students:** https://sujalpradhan.github.io/CBSE-Homework/
- **Teachers:** https://sujalpradhan.github.io/CBSE-Homework/teacher.html
- **How the tasks hold up against AI agents:** https://sujalpradhan.github.io/CBSE-Homework/checklist.html

## The six tasks
| Grade | Subject | Task | NCERT |
|---|---|---|---|
| 6 | Science | How many handspans long is your table? | Curiosity Ch. 5, Activity 5.1 |
| 6 | Maths | What is the area of your hand? | Ganita Prakash Ch. 6 |
| 7 | Science | Does a longer pendulum swing faster or slower? | Curiosity Ch. 8, Activity 8.2 |
| 7 | Maths | How thick is one sheet of paper? | Ganita Prakash Ch. 3 |
| 8 | Maths | Find the height of your door from its shadow | Ganita Prakash Ch. 7 |
| 8 | Science | Which hole squirts water farther? | Curiosity Ch. 6, Activity 6.2 |

Page references for each task are in [validation/ncert_sources.md](validation/ncert_sources.md).

## Privacy
Only a class code and roll numbers are stored. There are no names, photos, audio or accounts. The teach-back step stays on paper.

## How it is built
- `docs/` is the static site, served by GitHub Pages.
- The grading server is a Cloudflare Worker with a D1 database. Its source is kept in a separate private repository, so the acceptance rules cannot be read and gamed.

The design follows the six tests in Anand S's [The Exam Is a Hypothesis](https://www.s-anand.net/blog/the-exam-is-a-hypothesis/), extended for school use.
