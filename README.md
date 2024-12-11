# GitHub Scout

This project is a simple web application that allows users to search for a GitHub user's profile information using the GitHub API. It displays the user's profile data such as avatar, bio, location, followers, following, and other details.

## Features
- Search for a GitHub user's profile.
- Display user information: avatar, name, bio, company, location, email, public repos, followers, following, account creation date, and last updated date.
- Display an error message if the user is not found or if there is an issue with the API request.

## Screenshots
![image](https://github.com/user-attachments/assets/fbb061c0-2512-4b80-9699-fb74e94b8113)

## Tech Stack
- **HTML** for structure and layout.
- **CSS** for styling and responsive design.
- **JavaScript** for fetching data from GitHub API and updating the UI.

## Prerequisites
- A modern browser (Chrome, Firefox, etc.)
- No server-side setup is required for this project; it runs entirely on the client side.

## Clone the Repository
git clone https://github.com/your-username/github-profile-search.git
cd github-profile-search

## Files
- **index.html** - The main HTML structure.
- **script.js** - JavaScript code to fetch user data from GitHub API.
- **style.css** - CSS file for styling the profile page.

## Usage
1. Open the `index.html` file in a web browser.
2. Enter a GitHub username in the input field and click "Search".
3. If the user is found, their profile information will be displayed.
4. If the user is not found or there is an error with the request, an error message will be shown.

## How It Works
- When the user clicks the "Search" button, the JavaScript function `fetchUser()` is triggered.
- The function sends a GET request to GitHub’s API (`https://api.github.com/users/{username}`) to fetch user data.
- If the request is successful, it updates the profile section with the user's details.
- If the user does not exist or an error occurs, it displays an error message.

## Contribution
Feel free to fork this repository and make changes. If you find any issues or want to add features, feel free to create a pull request.

## License
This project is open-source and available under the [MIT License](https://github.com/neeldesaind/github-scout/blob/main/LICENSE).
