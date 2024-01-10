# Frontend-Keycloak-Saml-Extended-Plugin

## Prerequisites

### Node.js

Make sure you have Node.js installed on your machine. If not, follow these steps:

1. **Download Node.js:**
   - Visit the (https://nodejs.org/).
   - Click on the "Download" button for the LTS version (recommended for most users).

2. **Install Node.js:**
   - Follow the installation instructions for your operating system.

### Keycloak

Ensure you have Keycloak installed with version 22.0.0 or higher.

## Installation
1. Clone the repository to your local machine 
To set up this project, follow these steps:

1. **Install Dependencies:**
This project relies on the following dependencies:
- cors v2.8.5
- express v4.18.2
- express-session v1.17.3
    
To install them, open a terminal, navigate to the project's directory, and run the following command:

   ```bash
    npm install cors v2.8.5
   ```

2. **Set Up Keycloak Client:**
   - Open your Keycloak admin console.
   - Click on "Clients" in the left menu.
   - Click on "Create" to add a new client.
   - Set the "Client ID" to "frontend".
   - Configure other settings as needed:
     - **Client Authentication: Off**
     - **Authorization: Off** 
     - **Valid Redirect URIs: http://localhost:3000/***
     - **Valid Post Logout Redirect URIs: http://localhost:3000/list.html**
     - **Web Origins:***

   - Click "Save".

3. **Add Saml Theme to Keycloak:**
   - Copy the "saml-theme" folder.
   - Navigate to the themes folder in your Keycloak installation directory. (\keycloak-22.0.1\themes)
   - Paste the saml-theme into the themes folder.
   
5. **Run  Node.js:**
    - Navigate to the project directory if you are not already there
    ```bash
    cd saml
    ```
   - Start the server
    ```bash
    node server.js
    ```
 6. **Run Keycloak:**
    ```bash
    .\kc.bat --spi-theme-welcome-theme=saml-theme start-dev
    ```
 7.  ## Accessing The Frontend

 follow these steps:

1. Open a web browser and navigate to http://localhost:8080.

2. Look for "saml plugin" or "saml" in the menu and open it.

3. log in using an admin user account .



