# --- frontend---
FROM node:20-slim as frontend
WORKDIR /frontend

# install deps
COPY package*.json ./
RUN npm install

# copy all files and build frontend
COPY . .
RUN npm run build

# --- backend---
FROM python:3.11-slim
WORKDIR /app

# backend req install
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy backend code
COPY backend/ .

# Copy built frontend to backend static
COPY --from=frontend /frontend/out /app/static

# backend port
EXPOSE 10000

# Run FastAPI cmd
CMD ["gunicorn", "main:app", "-k", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:10000", "--timeout", "120"]
