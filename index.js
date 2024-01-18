const scriptURL='https://script.google.com/macros/s/AKfycbyOUZmYbZ_BRXPveBJ1NaWqsI-8_-otn7tmzqJYh--5Ll_WuPLh-9iwJCg_ZDwB5NQB/exec'
const form = document.forms['contact-form'];
const title = document.getElementById('title');

form.addEventListener('submit', e => {
e.preventDefault();
fetch(scriptURL, {method:'POST', body: new FormData(form)})
.then(response => title.innerText=" Added "
)
.then(() => setTimeout(()=>{window.location.reload()},2000))
.catch(error => console.error('Error!', error.message))
})