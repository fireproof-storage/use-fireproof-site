#### Fireproof Habit Tracker

**Data Model:**
- Each habit is stored as a document:
  ```js
  { "type": "habit", "name": "Drink Water" }
  ```
- Each activity (habit completion) is stored as a separate document:
  ```js
  { "type": "activity", "habit_id": "habit-id", "created": Date.now() }
  ```

**App Structure:**
1. **Habit Tracker (Main Page)**
   - Displays a list of habits as buttons containing the habit name, count and **streak view**.
   - Clicking a habit logs an activity (turns button green & updates count).
   - Top-right ➕ button opens a habit creation form.
   - A **streak view** visualizes progress with 🟢 markers for each activity in the last 7 days.
   
**How It Works:**
- Uses `useLiveQuery` for real-time updates.
- Habits & activities are stored as Fireproof documents.
- Sorting by `_id` ensures newest habits appear first.
- Implemented with React & Fireproof for seamless syncing.
