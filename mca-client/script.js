async function fetchDoggos(){
    // const resp = await fetch(`${process.env.API_URL}/dogs`);
    const resp = await fetch(`http://localhost:3000/dogs`);
    const { data, error } = await resp.json();
    data ? appendDoggos(data) : showError(error);
}

function appendDoggos(data){
    const doggos = document.querySelector("#doggos");
    data.forEach(d => {
        const li = document.createElement('li');
        li.textContent = `${d.name}: ${d.age}`;
        doggos.append(li);
    })
}

function showError(err){
    const banner = document.createElement('div');
    banner.style.width = '100vv';
    banner.style.backgroundColor = 'red';
    banner.textContent = err;
    document.body.append(banner);
}

document.querySelector('#fetch').addEventListener('click', fetchDoggos)