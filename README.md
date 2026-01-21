# CV Analyzer

Resumind is an intelligent resume analysis tool designed to help job seekers optimize their CVs. By uploading a PDF, users receive instant, detailed feedback on their resume's **Tone, Content, Structure, and Skills**. It also provides an **ATS (Applicant Tracking System)** compatibility score to ensure resumes get past automated filters and reach human recruiters.

## Link to Live Demo

📌 https://canbozcvanalyzer.netlify.app 📌

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Working Logic / File Structure](#working-logic--file-structure)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Overview

Resumind simplifies the resume review process. Instead of waiting for recruiter feedback, users can upload their resume to get an immediate analysis. The application breaks down the resume into key categories, visualizing scores with intuitive gauges and badges. It uses a modern, responsive UI to highlight strengths and areas for improvement, offering specific actionable tips.

## Features

- **Drag & Drop Upload:** Easy file upload interface supporting PDF files (`FileUploader`).
- **Visual Scoring System:**
    - **Overall Score:** Interactive gauge displaying the total effectiveness of the resume (`ScoreGauge`).
    - **Category Breakdown:** Detailed scores for Tone & Style, Content, Structure, and Skills (`Summary`).
- **ATS Compatibility Check:** Dedicated analysis to see how well the resume performs against Applicant Tracking Systems (`ATS`).
- **Interactive Feedback:** Expandable accordion sections containing specific "Good" and "Improve" tips for each category (`Details`, `Accordion`).
- **Resume History:** Dashboard view to manage and revisit previously analyzed resumes with preview images (`ResumeCard`).
- **Responsive Design:** Fully responsive interface built with Tailwind CSS.

## Technologies Used

- **[React](https://reactjs.org/)** - Library for building the user interface.
- **[TypeScript](https://www.typescriptlang.org/)** - For type-safe code and better developer experience.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling.
- **[Puter.js](https://puter.com/)** - Used for cloud-based file system and storage operations.
- **[React Dropzone](https://react-dropzone.js.org/)** - For handling file uploads.
- **[React Router](https://reactrouter.com/)** - For handling client-side navigation.

## Working Logic / File Structure

The project is structured around reusable UI components and feature-specific blocks. Below is an overview of the key components provided:

1.  **Core Components:**
    - `App.tsx` / `main.tsx`: Entry points setting up the router and providers.
    - `Navbar.tsx`: Global navigation bar linking to Home and Upload pages.

2.  **UI & Visualization:**
    - `ScoreGauge.tsx`: An animated SVG arc gauge to display the overall score (0-100).
    - `ScoreCircle.tsx`: A circular progress indicator used in card views.
    - `ScoreBadge.tsx`: Displays status labels like "Strong", "Good Start", or "Needs Work" based on thresholds.
    - `Accordion.tsx`: A robust, context-driven accordion system to toggle detailed feedback sections.

3.  **Feature Components:**
    - `FileUploader.tsx`: Handles PDF selection with validation (max 20MB) and drag-and-drop support.
    - `Summary.tsx`: Displays the high-level breakdown of scores (Tone, Content, etc.).
    - `Details.tsx`: Uses the Accordion to list specific tips and explanations for each category.
    - `ATS.tsx`: Shows the ATS-specific score and provides suggestions to improve machine readability.
    - `ResumeCard.tsx`: Displays a summary card for a saved resume, fetching the image via `Puter.js`.

## Contributing

If you want to contribute to this project, please follow these steps:

1.  **Fork** this repository.
2.  Create a new branch: `git checkout -b feature/amazing-feature`
3.  Make your changes and commit them: `git commit -m 'Add some amazing feature'`
4.  Push to the branch: `git push origin feature/amazing-feature`
5.  Open a **Pull Request (PR)**.

## Contact

Can BOZ - [LinkedIn Profile](https://www.linkedin.com/in/emrecanboz)
