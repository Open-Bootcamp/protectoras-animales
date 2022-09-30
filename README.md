## Installation

1. Initialize the project:
    ```bash
    git clone [repository_name]
    npm i
    ```

2. Create a database in PostgreSQL with the name `protectora-animales`.

3. In the project root, create `.env` file and set your environment by following the `.env.example` file.  
    And set the field `PG_DB_NAME=protectora-animales`

4. Run the command: 
    ```bash
    node ace migration:run
    ```
5. Run the project:
    ```bash
    npm run dev
    ```

## Change the models
- after making changes to the models run the commands:
    ```bash
    node ace make:migration [model_name]
    node ace migration:run
    ```
