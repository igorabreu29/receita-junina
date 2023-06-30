const quantityItem = document.querySelector('.quantity-item');
const states = document.querySelectorAll('[data-state]');
const ingredientsList = document.querySelector('.ingredients ul');
const lists = [...ingredientsList.querySelectorAll('li')];

let index = 1;

states.forEach((item) => {
  item.addEventListener('click', () => {
    const actions = {
      add() {
        if (index === 100) {
          alert('Limite alcaçado!');
          index = 1;
          lists[0].innerHTML = `${index} espiga de milho verde`;
          lists[1].innerHTML = `${index} colher de sopa de açúcar`;
          lists[2].innerHTML = `${index} colher de sopa de manteiga`;
          return;
        }

        index++;
        lists[0].innerHTML = `${index} x espigas de milho verde`;
        lists[1].innerHTML = `${index} x colheres de sopa de açúcar`;
        lists[2].innerHTML = `${index} x colheres de sopa de manteiga`;
      },

      remove() {
        if (index === 1) {
          alert('Quantidade não pode ser menor que zero');
          return;
        }

        index--;
        lists[0].innerHTML = `${index} x espigas de milho verde`;
        lists[1].innerHTML = `${index} x colheres de sopa de açúcar`;
        lists[2].innerHTML = `${index} x colheres de sopa de manteiga`;

        if (index < 2) {
          lists[0].innerHTML = `${index} espiga de milho verde`;
          lists[1].innerHTML = `${index} colher de sopa de açúcar`;
          lists[2].innerHTML = `${index} colher de sopa de manteiga`;
          return;
        }
      },
    };

    const action = item.dataset.state;
    actions[action]();

    quantityItem.textContent = index;
  });
});
