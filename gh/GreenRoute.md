name:	Prince2412k2/GreenRoute
description:	GreenRoute: A CO₂ emissions calculator for freight transport. Compare fuel types, vehicles, and routes using ISO 14083 and GLEC-based methods. Supports terrain-aware route emissions using OpenRouteService and elevation data.
--
# Project Setup

This project consists of a frontend and a backend component.

## Frontend Setup

Navigate to the `frontend/` directory:

```bash
cd frontend
```

Install the dependencies using npm. It is recommended to use `--legacy-peer-deps` due to potential peer dependency conflicts:

```bash
npm install --legacy-peer-deps
```

To start the frontend development server:

```bash
npm run dev
```

## Backend Setup

Before proceeding, create a `.env` file in the `backend/` directory with the following API keys:

```
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
ORS_API_KEY=YOUR_ORS_API_KEY
```

Navigate to the `backend/` directory:

```bash
cd backend
```

Install the dependencies. You can either use `uv` (if installed) or `pip`:

### Using `uv`

```bash
uv sync
```

### Using `pip`

First, create and activate a virtual environment (recommended):

```bash
python -m venv .venv
source .venv/bin/activate  # On Windows, use `.venv\Scripts\activate`
```

Then install the dependencies:

```bash
pip install -r requirements.txt
```

To run the backend server (example, adjust as per your backend's entry point):

```bash
uvicorn main:app --reload
```

