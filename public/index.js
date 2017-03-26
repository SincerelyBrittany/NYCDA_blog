  (function() { 


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


  GET('/api/todos')
    .then((todoItems) => {
      console.log(todoItems)
      render(todoItems);
    });


  function render(todoItems) {

    const container = document.querySelector('.selectcol4');
    container.innerHTML = '';
    for (const todoItem of todoItems) {
      console.log(todoItem)
      const li = document.createElement('div');
      li.innerHTML = `
${todoItem.data.todo}
      `;

      li.innerHTML += `<div class="button" tabindex="0"><button></button></div>`;

      // if (todoItem.data.isDone) {
      //   li.innerHTML += `<span class="glyphicon glyphicon-check todolist-icon js-todo-check green"></span>`
      // }
      // else {
      //   li.innerHTML += `<span class="glyphicon glyphicon-unchecked todolist-icon js-todo-check"></span>`
      // }


      li.classList.add('col4', 'wrapper');

      container.appendChild(li);
      // li.querySelector('.js-todo-remove').addEventListener('click', (e) => {
      //   console.log('about to delete LOL')
      //   const {id} = todoItem;

      //   DELETE('/api/todo/' + id)
      //     .then((data) => {
      //       render(data);
      //     })
      //     .catch((e) => {
      //       alert(e)
      //     });
      // });
      // li.querySelector('.js-todo-check').addEventListener('click', (e) => {
      //   console.log(todoItem);
      //   let isDone;
      //   if (todoItem.data.isDone) {
      //     isDone = false;
      //   }
      //   else {
      //     isDone = true;
      //   }

        // PUT('/api/todo/' + todoItem.id, {isDone})
        //   .then((data) => {
        //     render(data);
        //   })
        //   .catch((e) => {
        //     alert(e)
        //   })
      // })
      
    }

//     if (todoItems.length === 0) {
//       container.innerHTML = `
// <li class="list-group-item">
// No todoitems!
// </li>
//       `;
//     }
  } // render



  })();