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


 GET('/api/blog')
    .then((blogItems) => {
      render(blogItems);
    });

  function render(todoItems) {

     const container = document.querySelector('.selectcol4');
    container.innerHTML = '';
    for (const todoItem of todoItems) {
      // console.log(todoItem)
      const h4 = document.createElement('div');
      h4.innerHTML = `
      ${todoItem.data.blog}
      `;

      // h4.innerHTML += `<div class="button" tabindex="0"><button class="likebutton">Likes</button>Likes</div>`;

    for (const todoItem of todoItems) {
      // console.log(todoItem)
     const li = document.createElement('div');
      li.innerHTML = `
${todoItem.data.blogText}
      `;

      // li.innerHTML += `<div class="button" tabindex="0"><button class="likebutton">Likes</button>Likes</div>`;




      // if (todoItem.data.isDone) {
      //   li.innerHTML += `<span class="glyphicon glyphicon-check todolist-icon js-todo-check green"></span>`
      // }
      // else {
      //   li.innerHTML += `<span class="glyphicon glyphicon-unchecked todolist-icon js-todo-check"></span>`
      // }


      li.classList.add('col4', 'wrapper');
      h4.classList.add('col3', 'wrapper');


    const div = document.createElement('div');
      div.appendChild(h4);
      div.appendChild(li);
      container.appendChild(div);

      // li.querySelector('.likebutton').addEventListener('click', (e) => {
      //     event.target.innerHTML = event.detail;
      //     }, false);

      
    }

  }

}



  })();