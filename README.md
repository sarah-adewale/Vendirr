

![Logo-main](https://user-images.githubusercontent.com/49436342/196834082-76a61393-0b67-4889-9e29-d2faeb093938.png)

**Landing Page:** https://venddir.netlify.app/

**Live App:** https://venddir.netlify.app/

Venddir is an online directory for vendors. As with any directory, its core function is listing - alphabetically or thematically with details such as names, addresses, and phone numbers, - all vendors who have opted to showcase their business information on the platform.

Users can sign up either as a client or a vendor. Clients can change their avatars, view vendors, and bookmark vendors. Vendors can create their business profile with all their business details, bookmark other vendors, view other vendors, and change business logo. 


![a0983336-79c9-4756-919b-a89824503059](https://user-images.githubusercontent.com/49436342/196834233-27468616-21d9-4b12-8973-de52f9230951.png)


## How To Run Application

Clone the project

```bash
  git clone https://github.com/sarah-adewale/Vendirr
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Start Tailwind

```bash
  npm run tailwind:css 
```


## Tech Used: 

## Client: FIGMA, EJS, TailwindCSS

**Figma:**
#### Why was this tool chosen?

Figma is an easy to use design tool. I wanted a tool that would help with a hiFi view of what my idea was. Figma was used for logo, whiteboarding, site map, wireframes and prototyping. 

**EJS:**
#### Why was this stack chosen?
I used EJS for my view. I wanted a chance to use a new tool that looked kinda similar to html and javascript. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 

**Tailwind:**
#### Why was this stack chosen?
Tailwind is a "utility-first CSS framework" which provides several of these opinionated, single-purpose utility classes that you can use directly inside your markup to design an element. Tailwind is simply a fast and easy way to create your designs

## Server: Node, Express, MongoDB, Passport, Cloudinary

#### Why was this stack chosen?
I used the MVC (Model, View, Controller) Architecture for my backend. MVC is an architectural design pattern used in web development. MVC helped me with structure and separation of concerns. I have my database and passport method in the config folder. My server method in the controller folder. The model folder has the database schema. My view in the view folder (used partial to handle reusable pieces of code). Public folder has all my styles(tailwind and custom css). I have my routes in the routes folder and basically connected everything in my server.js file. 

Node is a pretty lightweight server choice and can be spun up fairly easily. I needed a backend that could send a different response based on the result of another controller. 

By using Express' built in middleware architecture we could cleanly write fallbacks. MongoDB is used to handle databases, on venddir although users can browse through different vendors without signing in, when a user signs in, mongoDB is used to handle the user tables. I used Mongoose to handle my database schema. 

Passport handled all my authentication. I chose Passport because of how fast it is to integrate. Cloudinary was used to store images to reduce server load. 

## Optimizations






