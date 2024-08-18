import sys
import json
import joblib
import numpy as np

# Load the Isolation Forest model
model_if = joblib.load('models/train_model.pkl')

# Check if any argument is passed
if len(sys.argv) < 2:
    raise ValueError("No features provided")

# Load the features from the command line argument
try:
    features = json.loads(sys.argv[1])
    features = np.array(features)
except json.JSONDecodeError as e:
    raise ValueError(f"Invalid JSON format: {str(e)}")

# Ensure the length of features matches the model's expected number of features
if len(features) != model_if.n_features_in_:
    raise ValueError(f"The input features length {len(features)} does not match the expected {model_if.n_features_in_} features.")

# Make predictions
prediction_if = model_if.predict([features])

# Output the result
result = {
    'anomaly_detection': int(prediction_if[0])
}
print(json.dumps(result))