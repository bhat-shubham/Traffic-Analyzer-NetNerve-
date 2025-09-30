# light python img
FROM python:3.11-slim

# workingdir
WORKDIR /app

# backend req
COPY requirements.txt .

# install req
RUN pip install --no-cache-dir -r requirements.txt

# copy all files to dock
COPY . .

# web interface port
EXPOSE 8000
# Gunicorn port
EXPOSE 10000

# run cmd for backend
CMD ["gunicorn", "main:app", "-k", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:10000", "--timeout", "120"]
