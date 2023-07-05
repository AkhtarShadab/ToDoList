# Todo List App (Website Live - [https://todolist-akhtarshadab.onrender.com](https://todolist-akhtarshadab.onrender.com))

This is a simple web application for managing todo lists. You can use this app to create multiple todo lists, add items to the lists, mark items as completed, and delete items from the lists. The app is built using Node.js, Express.js, and MongoDB.

## Installation

To install and run this app locally, follow these steps:

1. Clone the repository from GitHub:

   ```sh
   git clone https://github.com/AkhtarShadab/ToDoList.git
   ```

2. Change into the project directory:

   ```sh
   cd ToDoList-app
   ```

3. Install the dependencies using npm:

   ```sh
   npm install
   ```

4. Create a MongoDB Atlas account and set up a new cluster.

5. Replace the MongoDB connection string in the \`app.js\` file with your own connection string. You can find this line in the code:

   ```js
   mongoose.connect(
     "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.83b3qvq.mongodb.net/todoListDB"
   );
   ```

6. Start the server:

   ```sh
   node app.js
   ```

7. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the app.

## Usage

- To create a new todo list, enter the desired list name in the URL (e.g., [http://localhost:3000/work](http://localhost:3000/work)) and press Enter. If the list already exists, it will be loaded; otherwise, a new empty list will be created.

- To add an item to the list, type the item text in the input field and click the "+" button. The item will be added to the bottom of the list.

- To mark an item as completed, click the checkbox next to the item. The item will be removed from the list.

## Contributing

If you'd like to contribute to this project, you can follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository:

   ```sh
   git clone https://github.com/AkhtarShadab/ToDoList.git
   ```

3. Create a new branch for your feature or bug fix:

   ```sh
   git checkout -b feature/your-feature-name
   ```

4. Make your changes and commit them with descriptive commit messages:

   ```sh
   git commit -m "Add your commit message here"
   ```

5. Push your changes to your forked repository:

   ```sh
   git push origin feature/your-feature-name
   ```

6. Open a pull request on the original repository and describe your changes.

## Contact

If you have any questions or suggestions, please feel free to contact me at [sakn501@gmail.com](mailto:sakn501@gmail.com).
