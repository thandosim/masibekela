# Overview

As a software engineer, my goal is to expand my understanding of web development and improve my ability to build scalable, user-friendly applications. This project is a dynamic web application designed to streamline content management for a specific audience, providing features such as authentication, personalized user interfaces, and data handling.

The web app can be run locally by starting a development server. To do this:
1. Clone the repository and navigate to the project directory.
2. Ensure all dependencies are installed using the package manager (e.g., `npm install` for frontend and `pip install` for backend).
3. Start the backend server with `python manage.py runserver` and the frontend with `npm start` (or the equivalent commands).
4. Open your browser and navigate to `http://localhost:3000` to see the app’s homepage.

The purpose of this software is to provide an accessible way to manage and navigate various features efficiently while supporting user roles. My main focus was on implementing practical functionality and a clean UI design to enhance user experience.

[Software Demo Video](https://youtu.be/Echd1ecCIAc)

# Web Pages

The web app consists of the following pages:
1. **Home Page**: Serves as the dashboard, displaying dynamic content tailored to the logged-in user. This page uses API calls to fetch and render user-specific data.
2. **Login Page**: Allows users to securely log in with their credentials. It validates input and uses token-based authentication for access control.
3. **Register Page**: Supports new users to create an account. If a user already exists, appropriate feedback is shown.
4. **404 Page (NotFound)**: Displays a friendly error message if the user attempts to access an invalid route.

Navigation between these pages is facilitated using React Router for a seamless, dynamic experience. Authentication ensures only authorized users can access protected routes.

# Development Environment

- **Tools**: VS Code for coding, Git for version control, and Postman for testing API endpoints.
- **Backend**: Python (Django and Django Rest Framework) for API creation and database management.
- **Frontend**: React.js for building an interactive user interface.
- **Database**: SQLite during development for lightweight and fast data handling.

# Useful Websites

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [MDN Web Docs](https://developer.mozilla.org/)

# Future Work

Here are areas for improvement and expansion:
* Implement role-based access control (e.g., teacher vs. student functionality).
* Enhance the UI/UX with better design and responsiveness.
* Add more features, such as newsletters or public notes for broader collaboration.