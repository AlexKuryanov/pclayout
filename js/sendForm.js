const sendForm = () => {
  const form = document.querySelector('.modal');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = form.querySelector('input[type=text]');
    const tel = form.querySelector('input[type=tel]');
    const email = form.querySelector('input[type=email]');

    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(sendObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.status < 200 && response.status > 299) {
          throw new Error('Something went wrong!');
        }
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        text.value = '';
        tel.value = '';
        email.value = '';
        console.log('Form is cleared!');
      });
  });
};

sendForm();
