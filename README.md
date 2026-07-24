# Assignment 9: Debug the UserProfileCard component

**Goal:** This component is broken on purpose. Every bug maps directly to a rule from the **[React Fundamentals](https://docs.google.com/presentation/d/1bXxlVQsf2W3svVpZWX9mzTJkCHjuSUC4/edit?usp=sharing&ouid=103720742826633184506&rtpof=true&sd=true)** guide. Don't run it in your head first — read it like a code reviewer, list what's wrong, *then* fix it.

**How to use this:**
1. Paste the broken component into a fresh CodeSandbox (react template) or your local react project.
2. Try to render it. It won't compile / won't behave correctly — that's expected.
3. Work through Part A (find the bugs) before Part B (fix them) and Part C (stretch goal).
4. After completing Parts A, B, and C, verify and test that everything works.
5. Follow the requirements in **[Assignment #9: Debug the UserProfileCard](https://docs.google.com/document/d/1tKKyUHWsTyRFGDCli_dGp3tziHtYsuMj/edit)**.

---

## The Broken Component

Open the `UserProfileCard.jsx`

User data to render it with:

```jsx
const userData = {
  name: "Elmer Alvarado",
  avatarUrl: "https://i.pravatar.cc/100", // sample avatar
  bio: "Appdev1 instructor.",
  skills: ["React", "JavaScript", "HTML", "CSS"],
  isOnline: true,
  lastUpdated: "2 hours ago",
};

// <UserProfileCard user={userData} />
```

---

## Part A — Find the bugs

Before touching the code, write your Name, Course & Year, Subject, and Date on a separate sheet of paper.

Then, carefully examine the `UserProfileCard.jsx` component and identify any bugs or issues you notice. On the same sheet of paper, list down all the bugs you can find.

**Do not proceed to Part B** until you have listed as many bugs as you can identify on your own.

---

## Part B — Fix it

Rewrite the component so that:
- It compiles without errors.
- Clicking **Send Message** increments the counter by exactly 1 per click (not on render).
- Clicking **Reset** correctly sets the counter back to 0.
- The online/offline status renders correctly based on `user.isOnline`.
- No console warnings about missing keys.

---

## Part C — Stretch goal (apply what you've learned, don't just fix)

Add a **"favorite" toggle** to the card:

- Add a new `useState` for `isFavorited` (starts as `false`).
- Add a button that says `☆ Favorite` when false and `★ Favorited` when true.
- Clicking it should toggle the state correctly (remember: never mutate state directly, always use the setter — and think about whether you need the *current* value or can just flip it).
- Only show the favorite button at all if `user.isOnline` is `true`, using `&&` rather than an `if` statement inside JSX.

This forces you to write new `useState` logic, a new event handler, and a new conditional render from scratch, instead of just repairing existing code.

---