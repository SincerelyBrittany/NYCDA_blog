//include express
const express = require('express');

// grab db
const low = require('lowdb');

// static file server
const serveStatic = require('serve-static');

// body parser middleware
const parser = require('body-parser');

//create an express application
const app = express();

// instantiate db
const db = low('./db.json');

//parses requests with the content type of `application/json`
app.use(parser.json());

//define a route on `/hello/world`
app.get('/api/todos',(request, response) => {
    response.header('Content-Type', 'application/json');
    response.send(db.get('todos').value());
});


// post todos
app.post('/api/todos', (request, response) => {
	const requestBody = request.body;

	// Add a post
	db.get('todos').push({
		id: Date.now(), 
		data: requestBody,
	}).write();

	response.header('Content-Type', 'application/json');
	response.send(db.get('todos').value());

});

app.put('/api/todo/:id', (request, response)=>{
const id = parseInt(request.params.id, 10);
  db.get('todos')
    .find({id})
    .set('data.isDone', request.body.isDone)
    // .assign({ isDone: dataPayload.isDone })
    .write()

  response.header('Content-Type', 'application/json');
  response.send(db.get('todos').value());
})



app.delete('/api/todo/:id', (request, response) => {
    const id = parseInt(request.params.id, 10);
    // add a delete
    db.get('todos')
      .remove({ id : id })
      .write()
    response.header('Content-Type', 'application/json');
    response.send(db.get('todos').value());
});


app.use('/', serveStatic( 'public', {
	'admin': [ 'admin.html' ]
}));


//have the application listen on a specific port
app.listen(5000, () => {
    console.log('Example app listening on port 3000!');
});