async function getPizzas() {
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();
    const pizzas = data.recipes;

    const result = pizzas.map(function (ele) {
        return `
            <div class='pizza-card'>
                <h2>${ele.title}</h2>
                <img src='${ele.image_url}' alt='${ele.title}'>
            </div>
        `;
    }).join('');

    document.querySelector(".pizza-container").innerHTML = result;
}

getPizzas();
