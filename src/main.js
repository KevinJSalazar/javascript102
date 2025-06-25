"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const select = document.getElementById('items');
    const imgEl = document.getElementById('displayImage');
    const photographerEl = document.getElementById('photographer');
    const descEl = document.getElementById('description');
    const scoreEl = document.getElementById('score');
    const btnUp = document.getElementById('increaseScore');
    const btnDown = document.getElementById('decreaseScore');

    // Llenar el select con los nombres de los ítems
    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    // Función para mostrar los datos del ítem seleccionado
    function mostrarItem(key) {
        const item = itemData[key];
        if (!item) return;
        imgEl.src = item.image;
        photographerEl.value = item.photographer;
        descEl.value = item.description;
        scoreEl.value = item.score;
    }

    // Seleccionar el primer ítem por defecto
    const primerKey = Object.keys(itemData)[0];
    select.value = primerKey;
    mostrarItem(primerKey);

    // Cambiar datos al seleccionar otro ítem
    select.addEventListener('change', () => {
        mostrarItem(select.value);
    });

    // Aumentar puntaje
    btnUp.addEventListener('click', () => {
        const key = select.value;
        itemData[key].score++;
        scoreEl.value = itemData[key].score;
    });

    // Disminuir puntaje
    btnDown.addEventListener('click', () => {
        const key = select.value;
        itemData[key].score--;
        scoreEl.value = itemData[key].score;
    });
});