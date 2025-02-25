Data Model

• One document per habit

{
  "type": "habit",
  "name": "Drink Water",
  "created": Date.now(),
}

• One document per activity

{
  "type": "activity",
  "habit_id": "id-from-habit-document",
  "created": Date.now(),
}

const habitId = "id-from-route-params";
const { docs } = useLiveQuery((doc) => if (doc.type === "habit") {
  return [doc._id, 0];
} else if (doc.type === "activity") {
  return [doc.habit_id, doc.created];
}, {prefix: [habitId]})

App Structure

1. Main Page ("Habit Tracker")

• Title: "Habit Tracker"
• Lists all habits as full-width buttons.
• Clicking a habit creates a new activity-* document.
• Button starts gray, turns green after the first click per day.
• Each additional click updates a counter in the button text.
• Top Right: ➕ (Add Habit) opens a form overlay.
• Below habits list: "Past 7 Days" section showing green dots (🟢) for habit completion history.
• Clicking a habit in "Past 7 Days" opens a 1-month calendar view.
• Calendar view shows a 1-month grid, marking successful days with 🟢.
• Option to delete the habit from the calendar view.
• Close buttons return to the main list view.

Implementation Details

• _id is randomly assigned but naturally time-collated.
• useLiveQuery is used to join habits and activities in real time.
• Sorting habits by _id descending ensures newest appear first.
• Uses React + Canvas API for interactive rendering.