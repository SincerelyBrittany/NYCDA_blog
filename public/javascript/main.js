(function() { // protect the lemmings

	function GET(url) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.open('GET', url);
			request.onload = () => {
				const data = JSON.parse(request.responseText);
				resolve(data)
			}; 
			request.onerror = (err) => {
				reject(err)
			};
			request.send();
		});
	} // GET

	function POST(url, data) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.open('POST', url);
			request.setRequestHeader('Content-Type', 'application/json');

			request.onload = () => {
				const data = JSON.parse(request.responseText);
				resolve(data)
			}; 
			request.onerror = (err) => {
				reject(err)
			};

			request.send(JSON.stringify(data));
		});
	} // POST

	function PUT(url, data) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.open('PUT', url);
			request.setRequestHeader('Content-Type', 'application/json');

			request.onload = () => {
				const data = JSON.parse(request.responseText);
				resolve(data)
			}; 
			request.onerror = (err) => {
				reject(err)
			};

			request.send(JSON.stringify(data));
		});
	} // POST

	function DELETE(url, data = {}) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.open('DELETE', url);
			request.setRequestHeader('Content-Type', 'application/json');

			request.onload = () => {
				const data = JSON.parse(request.responseText);
				resolve(data)
			}; 
			request.onerror = (err) => {
				reject(err)
			};

			request.send(JSON.stringify(data));
		});
	} // DELETE

	function render(todoItems) {

		const container = document.querySelector('.js-todolist');
		container.innerHTML = '';
		for (const todoItem of todoItems) {
			console.log(todoItem)
			const li = document.createElement('li');
			li.innerHTML = `
${todoItem.data.todo}
			`;

			li.innerHTML += `<span class="glyphicon glyphicon-remove todolist-icon js-todo-remove"></span>`;

			if (todoItem.data.isDone) {
				li.innerHTML += `<span class="glyphicon glyphicon-check todolist-icon js-todo-check green"></span>`
			}
			else {
				li.innerHTML += `<span class="glyphicon glyphicon-unchecked todolist-icon js-todo-check"></span>`
			}


			li.classList.add('list-group-item', 'todolist-item');

			container.appendChild(li);
			li.querySelector('.js-todo-remove').addEventListener('click', (e) => {
				console.log('about to delete LOL')
				const {id} = todoItem;

				DELETE('/api/todo/' + id)
					.then((data) => {
						render(data);
					})
					.catch((e) => {
						alert(e)
					});
			});
			li.querySelector('.js-todo-check').addEventListener('click', (e) => {
				console.log(todoItem);
				let isDone;
				if (todoItem.data.isDone) {
					isDone = false;
				}
				else {
					isDone = true;
				}

				PUT('/api/todo/' + todoItem.id, {isDone})
					.then((data) => {
						render(data);
					})
					.catch((e) => {
						alert(e)
					})
			})
			
		}

		if (todoItems.length === 0) {
			container.innerHTML = `
<li class="list-group-item">
No todoitems!
</li>
			`;
		}
	} // render


	GET('/api/todos')
		.then((todoItems) => {
			console.log(todoItems)
			render(todoItems);
		});



		// document.querySelector('.js-add-todo').addEventListener('click', (e) => {
		// const input = document.querySelector('.js-todo-text');
		// input.setAttribute('disabled', 'disabled');

// 		POST('/api/todos', {
// 			todo: input.value,
// 			when: new Date().getTime() + 9 * 60 * 60 * 1000
// 		}).then((data) => {
// 			input.removeAttribute('disabled');
// 			input.value = '';
// 			render(data);
// 		});
// 	})

// })();



	document.querySelector('.js-add-todo').addEventListener('click', (e) => {
		const input = document.querySelector('.js-todo-text');
		const {keyCode, which} = e;
		input.setAttribute('disabled', 'disabled');


	// document.querySelector('.js-add-text').addEventListener('keydown', (e) => {
 //        const {keyCode, which} = e;
 //        // console.log(keydown);
 //        if (keyCode === 13 || which === 13) {
 //        	console.log("You got 13")
 //   //         const input = document.querySelector('.js-todo-text');
	// 		// input.setAttribute('disabled', 'disabled');
 //            }
 //    });



		POST('/api/todos', {
			todo: input.value,
			when: new Date().getTime() + 9 * 60 * 60 * 1000
		}).then((data) => {
			input.removeAttribute('disabled');
			input.value = '';
			render(data);

			// alert('about to redirect to feed page...')
			window.location.href = '/';
		});
	})

})();

/*
	return POST('/api/todos', {
			todo: 'wake up',
			when: new Date().getTime() + 9 * 60 * 60 * 1000
		});
	.then((dataFromPostLOL) => {
		console.log(dataFromPostLOL);
	});
*/
