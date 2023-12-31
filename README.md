# Urban Stride 🏙️👟

Step up your shoe game with Urban Stride - Where Style Meets Motion!

![Urban Stride Logo](public/img/logo.png)

## About

Urban Stride is a dynamic sports shoe e-commerce platform developed with TypeScript, Node.js, EJS, and MongoDB. This project serves as a practice ground for honing skills in modern web development.

## Key Features 🌟

- 🛍️ Curated collection of trendy sports shoes
- 🛒 Seamless e-commerce experience with Stripe integration
- 📦 PDF order confirmation using PDFKit
- ✉️  Email notifications powered by SendGrid
- 🔒 Secure user sessions and cookies management + CSRF Protection
- 🌐 RESTful API for smooth interactions
- 📊 MongoDB for efficient data storage and retrieval

## Tech Stack 💻

- Backend: Node.js, Express.js
- Frontend: HTML, CSS, EJS, JavaScript
- Database: MongoDB with Mongoose ODM
- Additional Tools: Stripe, PDFKit, SendGrid

## More Functionalities 🤩

- Users can create an account using their email. They will receive a welcome email once the account is successfully created.
- They can use the same email to reset their password. A password reset link will be provided in that email, which will be valid for only 1 hour.
- They can create a product that they want to sell, and it will be listed on the Products page. An authenticated user can perform edit and delete operations only on the products that belong to that user.
- An authenticated user can also add products from the Product page to their cart. And later, they can also buy it. They'll be redirected to the payment page where they can enter their credit card details (don't enter your real credentials, use the dummy credentials that are provided [**here**]()) and as soon as the transaction completes, they are redirected to the Orders page.
- And there they can also download the order receipt which will be generated on the fly.

## Wait!! There's More!! 🥳

- Besides all that, it utilizes all the latest features like data streaming, utilization of meaningful status codes, pagination, input and file validation, async/await syntax and best practices for writing code that is flexible and re-usable and which is easily testable and maintainable.

## Getting Started 🚀

1. First, clone the repo by running `git clone git@github.com:AmaaelTyrneaMitore/UrbanStride.git`.
2. Install dependencies using `npm install`.
3. Now setup environment variables for MongoDB by creating `nodemon.dev.json` (*for development*) and `nodemon.prod.json` (*for production*) at the project root and populate them with the followong content:
   ``` js
    {
      "env": {
        "MONGO_USER": "",
        "MONGO_PASS": "",
        "MONGO_DEFAULT_DB": "",
        "STRIPE_KEY": "",
        "NODE_ENV": ""
      }
    }
    ```
4. Now you can set all the environment variables that you want to use during development in `nodemon.dev.json` and running the `npm run start:dev` command will spin up a development server on `http://localhost:3000/` using this config file. And running the `npm run start:prod` command will spin up the production server on the same port which will use the `nodemon.prod.json` config file, so make sure to set the `"NODE_ENV"` to `"development"` in `nodemon.dev.json` file, and set this to `"production"` in `nodemon.prod.json` file.

    ***NOTE:*** Although the above configuration is the recommended way of setting up your development environment, you don't have to follow this approach.
    
## Simulating Payments To Test Stripe Integration 💷
You can read all about it in [**Stripe's official documentation**](https://stripe.com/docs/testing?numbers-or-method-or-token=card-numbers) on testing your API keys.

## Usage 💡

- Visit the website, browse the catalog, and add products to your cart.
- Proceed to checkout, complete the payment using Stripe, and receive a PDF confirmation via email.

## Contributing 🤝

We welcome contributions! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License 📝

This project is licensed under the [GPL-3.0 License](LICENSE).

## Acknowledgements 🙏

- Special thanks to the amazing communities of Node.js, Express.js, and MongoDB.
- Hat tip to the creators of Stripe, PDFKit, and SendGrid for their invaluable tools.

---

Feel free to reach out at [sshashank790@gmail.com](mailto:sshashank790@gmail.com) for any questions or feedback!

Happy Striding! 🏃‍♂️👟
