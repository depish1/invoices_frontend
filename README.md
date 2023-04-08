# MyInvoice

## Table of content

[About](#about)  
[Technologies](#technologies)  
[Installation](#installation)  
[Usage](#usage)  
[App preview](#app-preview)

## About

👋 Welcome! **MyInvoice** is a web application for creating, storing, and generating invoices. It allows users to create accounts, login, create, delete and edit invoices, and generate PDF files with invoice data.  
This is a side project that allowed me to develop my skills, try technologies that I had no contact with, and serves as a sample of my code to show during recruitment.

Live: https://my-invoices-depish1.vercel.app

I also prepared the backend of this application, but I warn you in advance that I am a fronted developer and it was my first contact with Node and express.js, so if you want to look at the code, treat it as a curiosity: https://github.com/depish1/invoices_backend

## Technologies

- React
- Typescript
- Redux Toolkit (_global store_)
- Redux Toolkit Query (_API calls_)
- React Hook Form (_forms_)
- Vite (_builder_)
- Styled Components (_styles_)
- Yup (_validation_)
- React-i18next (_translations_)

## Installation

- Clone the repository: **git clone https://github.com/depish1/invoices_frontend.git**
- Install dependencies: **npm install**
- Run the app: **npm run dev**
- If you want to run the frontend locally and connect to the
  remote, server-hosted backend, paste the environment variable
  **VITE_API** from the **.env.production** file to the **.env.development** file.

## Usage

- Create an account by signing up with your email address and a password.
- Login to your account using your email address and password.
- Create a new invoice by filling out the form with the necessary information.
- Read the list of existing invoices in the table after logging in.
- Update an existing invoice by clicking on the appropriate record in the table and making changes in the edit form.
- Delete an existing invoice by clicking on the menu icon in the corresponding record in the table in the last column of the table and select the "Delete invoice" option.
- Generate a PDF for an existing invoice by clicking on the menu icon in the appropriate record in the table in the last column of the table and select the "Generate invoice" option.

## App preview

_Sign up form_
![enter image description here](https://user-images.githubusercontent.com/61850475/230634441-b1ba3ed0-05bd-45ed-8728-f597d2cb5e9b.jpg)

_Sign in form_![enter image description here](https://user-images.githubusercontent.com/61850475/230634430-90546c2e-24e3-452b-a40c-29c852a55a44.jpg)

_Invoices list view_![enter image description here](https://user-images.githubusercontent.com/61850475/230634429-af730d46-b249-492a-a620-08b73796baa7.jpg)

_New invoice form_![enter image description here](https://user-images.githubusercontent.com/61850475/230634440-6afb1919-41ac-4069-b7a0-5df202c1c530.jpg)

_Edit invoice form_![enter image description here](https://user-images.githubusercontent.com/61850475/230634425-3615f7d2-3fcb-438b-9a6c-8eff9d32a109.jpg)
