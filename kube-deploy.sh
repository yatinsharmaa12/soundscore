#!/bin/bash

# Apply AWS Secret
echo "Applying AWS Secret..."
if kubectl apply -f aws-secret.yaml; then
    echo "AWS Secret applied successfully."
else
    echo "Failed to apply AWS Secret."
    exit 1
fi

# Apply DATABASE_URL ConfigMap
echo "Applying DATABASE_URL ConfigMap..."
if kubectl apply -f DATABASE_URL.yaml; then
    echo "DATABASE_URL ConfigMap applied successfully."
else
    echo "Failed to apply DATABASE_URL ConfigMap."
    exit 1
fi

# Apply Backend Deployment
echo "Applying Backend Deployment..."
if kubectl apply -f backend-deploy.yaml; then
    echo "Backend Deployment applied successfully."
else
    echo "Failed to apply Backend Deployment."
    exit 1
fi

echo "Applying frontend config ..."
if kubectl apply -f frontend-config.yaml; then
    echo "frontend-config applied successfully."
else
    echo "Failed to apply front-end config."
    exit 1
fi

# Apply Frontend Deployment
echo "Applying Frontend Deployment..."
if kubectl apply -f frontend-deploy.yaml; then
    echo "Frontend Deployment applied successfully."
else
    echo "Failed to apply Frontend Deployment."
    exit 1
fi

echo "All resources applied successfully."
