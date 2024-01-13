# Chat System
* Helpjuice Test Project: Full-Stack Internship.
## Languages and frameworks 📑
* Ruby on Rails
* sqlite3
* Javascript
* HTML
* CSS
## Features 🥇
* Track and analyze users search.
## Cloning the repo and starting the app
* clone the repository and open the project in any IDE
``` bash
git clone https://github.com/MohamedRagaab/Helpjuice-Test-Project-Full-Stack-Internship.git
cd Helpjuice-Test-Project-Full-Stack-Internship
```
* You can run the following command to start the app
``` bash
docker build -t your_image_name .

```
## Usage 🚀
* Here is the list of the RESTful APIs
  - Application:
 
    - Create a new application:
        ``` bash
        POST /api/v1/applications
        ```
    - Read a specific application:
        ``` bash
        GET /api/v1/applications/:token
        ```
    - Update a specific application:
        ``` bash
        PUT /api/v1/applications/:token
        ```

  - Chats:
 
    - Create a new chat:
        ``` bash
        POST /api/v1/applications/:token/chats
        ```
    - List chats under a specific application:
        ``` bash
        GET /api/v1/applications/:token/chats
        ```
        
  - Message:
 
    - Create a new message:
        ``` bash
        POST /api/v1/applications/:token/chats/:number/messages
        ```
    - Read a specific message under a chat:
        ``` bash
        GET /api/v1/applications/:token/chats/:chat_number/messages/:message_number
        ```
    - Update a specific message:
        ``` bash
        PUT /api/v1/applications/:token/chats/:number/messages/:id
        ```
    - List all messages under a specific chat:
        ``` bash
        GET /api/v1/applications/:token/chats/:number/messages
        ```

## Examples 🖼️
* Create an application
<div align='center'>
<img height="350px" src="https://github.com/MohamedRagaab/Instabug-Backend-Challenge/assets/38363762/1d3e1d04-67e0-48a2-a48b-e64d14f18808">
<hr/>
</div>

* Create a chat under the app
<div align='center'>
<img height="350px" src="https://github.com/MohamedRagaab/Instabug-Backend-Challenge/assets/38363762/26033bfa-6fcc-4a61-a628-559fc7adfaf3">
<hr/>
</div>

* Create a message under the chat
<div align='center'>
<img height="350px" src="https://github.com/MohamedRagaab/Instabug-Backend-Challenge/assets/38363762/e6fc4235-4f36-4228-b0e1-593efb2581bb">
<hr/>
</div>

* search the message under the chat
<div align='center'>
<img height="350px" src="https://github.com/MohamedRagaab/Instabug-Backend-Challenge/assets/38363762/405315fe-1abe-4438-a5c0-ae58c91e5691">
<hr/>
</div>

## Task Checklist :white_check_mark:
- [x] Application Endpoints
- [x] Chat Endpoints
- [x] Message Endpoint
- [x] Using elasticsearch for searching messages
- [x] Using queuing system (Sidekiq)
- [x] Counts chat and message numbers in background (cron job)
- [x] Containerize the app (docker-compose.yml)
- [x] Using in-memory DB (Redis)
- [x] Writing a Readme file

