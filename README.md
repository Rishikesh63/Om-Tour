# SARATHI: Your Travel Agent 
![image](https://github.com/user-attachments/assets/77a5cd6c-dd70-4929-ad7b-5166c3196d7b)

## Running the Agent

```sh
cd agent
poetry install
```

Then, create a `.env` file inside `./agent` with the following:

```
GROQ_API_KEY=...
GOOGLE_MAPS_API_KEY=...
```

Then, run the demo:

```sh
poetry run demo
```

## Running the UI

First, install the dependencies:

```sh
cd ./ui
pnpm i
```

Then, create a `.env` file inside `./ui` with the following:

```
GROQ_API_KEY=...
NEXT_PUBLIC_CPK_PUBLIC_API_KEY=...
```

If you need a CopilotKit API key, you can get one [here](https://cloud.copilotkit.ai)

Then, run the Next.js project:

```sh
pnpm run dev
```

## Usage

Navigate to [http://localhost:3000](http://localhost:3000).




