# NYCDA_blog

Instructions for this assignment can be found here: https://medium.com/@the_taqquikarim/implement-a-personal-blog-with-nodejs-64fba1d616b2

This was an assignment assigned by NYCDA. It required the following:

Implement a Personal Blog with NodeJS

For your next large scale project, please implement a personal blog page that is powered by NodeJS.
Please read the following directions carefully before beginning. You might want to plan out your code (functions, node modules, files needed) before starting out. Feel free to share this game plan beforehand for feedback.
Features

Let’s begin with a few feature requirements. Your blog must:

Include a feed page that lists all posts published in reverse chronological order.
Include an admin page that allows user to publish, edit, and delete posts.
Include a post-detail page that the user is redirect to from the feed page once a post item is clicked.
It can be simple, but your page must have some basic CSS styles and structure. Feel free to roll your own framework or use something like Skeleton.

#STRETCHGOALS
In addition to the basic feature requests, here are some additional features you may implement to power up your blog:
Tags. Allow the editor to add up to three tags to your post. Tags should be displayed either below the title or content (totally up to you) in your post-feed page and your post-detail page.
Comments. Allow folks to leave comments on your posts. You may want to consider using something like Disqus or you might want to roll your own implementation.
Routing. Ever heard of the term SPA? (Single Page Application). Build your app to be bootstrapped off of one single page. Learn more about front-end routing on the Director documentation. You want to only consider the client-side documentation. We don’t need anything server-sider since we are using Express.
User authentication. Build out a user-auth layer to ensure that only admins can actually add / delete / edit your posts. You’ll want to look at passport to accomplish this.

Requirements

Here are the main technical requirements for your application:
Express
Use Express to handle server side routing. Your express server should serve a public directory statically (like we have implemented in class) and it should also expose endpoints for fetching, updating, creating, and deleting posts / tags / comments / user authentication (should you choose to implement the latter three).
Express.Router
Use Express.Router to separate your concerns — your post api endpoints should be enclosed within an Express router. Should you choose to implement any additional features (tags, comments, etc), these should also be wrapped within their own router implementations.
Example
Remember, this is how we handle routing in Express with express router.

Example Express.Router usage
Middleware
Use middleware to handle common server side tasks. For example, the body-parser npm module would probably be useful for handling JSON request body objects. Use any others that you may need.
Model
We use the term “Model” to describe an abstraction layer that handles transactions with the database. For this project, it should be sufficient to use something like lowdb to data persistence purposes. That being said, you might want to defined a dedicated node module to handle lowdb based transactions. This way, instead of requiring and running lowdb queries directly in your express router, you can instead call functions defined in your dedicated node module.
Example
Here is an example of the Model abstraction in action:

AJAX
Your front-end should implement the requisite ajax calls needed to interface with your APIs. You’ll probably have to implement POST, GET, PUT, DELETE methods — or, if you’re so inclined, implemented one function that can make any of these calls.
MAKE SURE YOUR USE PROMISES THO.
/posts
You should implement CRUD methods for /posts. This means your front-end should be able to create, read, update, delete post items through the admin page.
Final Thoughts
Feel free to make this as awesome or as bare minimum as you’d like. I’d encourage you to take a stab at at least one #STRETCHGOAL. But this is not mandatory. Remember to ask questions and experiment! That’s the best way to learn.
