async function get() {

    document.querySelector("#userN").innerHTML = "<h3>Loading...</h3>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Request Failed");
        }

        const data = await response.json();

        document.querySelector("#userN").innerHTML = `
            <select id="users">
                <option value="">Choose User</option>
                ${data.map(user => `
                    <option value="${user.id}">${user.name}</option>
                `).join("")}
            </select>
        `;

        const select = document.querySelector("#users");

        select.addEventListener("change", function () {

            const user = data.find(item => item.id == this.value);

            if (!user) return;

            document.querySelector("#name").textContent = user.name;
            document.querySelector("#username").textContent = user.username;
            document.querySelector("#email").textContent = user.email;
            document.querySelector("#phone").textContent = user.phone;
        });

    } catch (error) {
        console.error(error);       

        document.querySelector("#userN").innerHTML = `
            <h3 style="color:red;">❌ Failed to load data.</h3>
        `;
    }
}

get();