# Frontend-Keycloak-API-Connector

Welcome to Frontend-Keycloak-API-Connector !

## Prerequisites

### Node.js

Make sure you have Node.js installed on your machine. If not, follow these steps:

1. **Download Node.js:**
   - Visit the [official Node.js website](https://nodejs.org/).
   - Click on the "Download" button for the LTS version (recommended for most users).

2. **Install Node.js:**
   - Follow the installation instructions for your operating system.

### Keycloak

Ensure you have Keycloak installed with version 22.0.0 or higher.

## Installation

To set up this project, follow these steps:

1. **Install Dependencies:**
This project relies on the following dependencies:
- cors v2.8.5
- express v4.18.2
- express-session v1.17.3
- keycloak-connect v22.0.5

    ```bash
    npm install
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
     - **Valid Post Logout Redirect URIs: http://localhost:3000/list.htm**
     - **Web Origins:***

   - Click "Save".

3. **Add Saml Theme to Keycloak:**
   - Copy the "saml-theme" folder.
   - Navigate to the themes folder in your Keycloak installation directory. (\keycloak-22.0.1\themes)
   - Paste the copied contents into the themes folder.

4. **Run Keycloak:**
    ```bash
    .\kc.bat --spi-theme-welcome-theme=saml-theme start-dev
    ```

5. **User Configuration:**
   - Provide users with the necessary information for their configurations.
     - Keycloak URL: http://localhost:8080
     - Realm: master
     - Client ID: frontend


