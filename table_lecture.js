async function methodGetUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();

    xhr.onload = function () {
        const response = JSON.parse(xhr.response);

        if (response && Array.isArray(response) && response.length > 0) {
            response.forEach((user, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>Task</td>
                    <td>False</td>
                `;
                document.getElementById('factTableBody').appendChild(row);
            });
        }
    };
}
