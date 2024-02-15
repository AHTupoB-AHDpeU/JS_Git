function UserName(name) {
    const users = [
        { name: "Leanne Graham", id: 1 },
        { name: "Ervin Howell", id: 2 },
        { name: "Clementine Bauch", id: 3 },
        { name: "Patricia Lebsack", id: 4 },
        { name: "Chelsey Dietrich", id: 5 },
        { name: "Mrs. Dennis Schulist", id: 6 },
        { name: "Kurtis Weissnat", id: 7 },
        { name: "Nicholas Runolfsdottir V", id: 8 },
        { name: "Glenna Reichert", id: 9 },
        { name: "Clementina DuBuque", id: 10 }
];

const user = users.find(user => user.name === name);
return user ? user.id : undefined;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('root').addEventListener('click', function() {
        let index = 1;
        const body = document.getElementById('body');
        body.innerHTML = ''; // Очистить содержимое таблицы
        const xhrUsers = new XMLHttpRequest();
        xhrUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhrUsers.send();

xhrUsers.onload = function() {
    if (xhrUsers.status === 200) {
        const users = JSON.parse(xhrUsers.responseText);
        users.forEach(user => {
            const userId = UserName(user.name);
            if (userId !== undefined) {
                const xhrTodos = new XMLHttpRequest();
                xhrTodos.open('GET', `https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
                xhrTodos.send();
                
                xhrTodos.onload = function() {
                    if (xhrTodos.status === 200) {
                        const facts = JSON.parse(xhrTodos.responseText);
                        facts.forEach(fact => {
                            const row = document.createElement('tr');
                            row.innerHTML = `
                            <td>${index++}</td>
                            <td>${user.name}</td>
                            <td>${fact.title}</td>
                            <td><input type="checkbox" ${fact.completed ? 'checked' : ''} disabled></td>
                            `;
                            body.append(row);
                        });
                    }
                };
            }
        });
    }
};
});
});
