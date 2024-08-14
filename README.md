# Easy Pack Official Website

The official website of PT Easy Pack Indonesia.  
Your one-stop solution for food packaging goods.  
Available in EN and ID.

## Installation and Setup

Clone the project

```bash
  git clone https://github.com/briannval/easy-pack.git
```

Go to the project directory

```bash
  cd easy-pack
```

## Setup Environment Variables

Create a .env file in the root directory and add the following:

```bash
RESEND_API_KEY
CONTENTFUL_SPACE_ID
CONTENTFUL_ACCESS_TOKEN
BOTPRESS_BOT_ID
BOTPRESS_HOST_URL
BOTPRESS_MESSAGING_URL
BOTPRESS_CLIENT_ID
BOTPRESS_WEBHOOK_ID
BOTPRESS_STYLESHEET
BOTPRESS_THEME_NAME
BOTPRESS_BOT_NAME
BOTPRESS_THEME_COLOR

```

## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Run With Docker

Run docker container

```bash
  docker compose up --build
```

## Running Tests

To run tests, run the following command

```bash
  npx playwright test
```

## Support

For support, email easypackpackaging@gmail.com or brianvalentinoadhitya@gmail.com.
