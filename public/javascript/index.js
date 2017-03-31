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

  function render(blogItems) {

    const container = document.querySelector('.selectcol4');
    container.innerHTML = '';
    for (const blogItem of blogItems) {
      // console.log(todoItem)
      const h4 = document.createElement('div');
      h4.innerHTML = `
      ${blogItem.data.blog}
      `;

    // for (const blogItem of blogItems) {
      // console.log(todoItem)
     const li = document.createElement('div');
      li.innerHTML = `
${blogItem.data.blogText}
      `;

      li.classList.add('col4', 'wrapper');
      h4.classList.add('col3', 'wrapper');


    const div = document.createElement('div');
      div.appendChild(h4);
      div.appendChild(li);
      container.appendChild(div);

    // }

  }

}



  })();