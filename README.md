# React Intern Assignment – Real-Time Gallery Interaction App

This project is a **real-time image interaction web application** developed as part of the  
**React Intern Assignment (Round 1)**.
The application allows users to view images, add emoji reactions and comments,  
and see all interactions update **instantly in real time** across all users.

---
 Live Demo

**Live Application:**  
[https://your-live-link-here.vercel.app](https://real-time-gallery-interaction-task.vercel.app/)

##  Assignment Goal

Build a real-time interactive image gallery where:
- Users can react to images with emojis
- Users can add comments to images
- All interactions sync instantly for all users
- A global feed shows all activities in real time

---

##  Features
### 🖼 Image Gallery
- Images fetched from **Unsplash API**
- Click on an image to view details
- Optimized image loading (lazy loading)

###  Emoji Reactions (Real-Time)
- Supported reactions: ❤️ 😂 👍 🔥 😮
- Users can react to images
- Reaction count updates instantly
- Synced across all active sessions

###  Comments (Real-Time)
- Users can add comments on images
- Comments appear instantly for all users
- Comment count shown per image

###  Global Activity Feed
- Shows real-time activities such as:
  - User reacted ❤️ to an image
  - User commented on an image
- Feed updates instantly
- Sorted by latest activity

---

##  Real-Time Implementation

**InstantDB** is used for handling real-time data synchronization.

### How it works:
- Data is written using `db.transact()`
- Data is read using `db.useQuery()`
- UI updates automatically without refresh

### Tables Used:
- `comments`
- `reactions`
- `feed`

---

##  State Management

**React Context API** is used to manage global state.

### Context Provides:
- All comments
- Comment count by image
- Reaction count by image
- Global feed data

`useMemo` is used for optimized derived state.

---

##  User Handling

- No authentication used
- A random user ID is generated using **nanoid**
- User ID is stored in `localStorage`
- Ensures same user identity across sessions

---

##  Folder Structure

```txt
src/
├── assets/
├── components/
├── context/
├── db/
├── pages/
├── routes/
├── services/
├── utils/
├── App.jsx
├── main.jsx
