# Frontend build
FROM node:20-slim as frontend

# workingdir for frontend
WORKDIR /frontend

# Copy files
COPY package*.json ./

# install req
RUN npm install

# copy all files
COPY . .

# build the frontend
RUN npm run build


#backend build
FROM python:3.11-slim

# bakend working dir
WORKDIR /app

# install req
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy backend code
COPY backend/ .

# expose req port
EXPOSE 10000

# run FastAPI with Gunicorn+Uvicorn
CMD ["gunicorn", "main:app", "-k", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:10000", "--timeout", "120"]
