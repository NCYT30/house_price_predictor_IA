from django.shortcuts import render
import joblib
import numpy as np

# Cargar el modelo desde la raíz del proyecto
model = joblib.load('house_price_model.pkl')

def home(request):
    return render(request, 'home.html')

def predict(request):
    if request.method == 'POST':
        # Obtener los datos del formulario
        overall_qual = int(request.POST.get('overall_qual'))
        gr_liv_area = int(request.POST.get('gr_liv_area'))
        garage_cars = int(request.POST.get('garage_cars'))
        garage_area = int(request.POST.get('garage_area'))

        # Crear un array con los datos
        features = np.array([[overall_qual, gr_liv_area, garage_cars, garage_area]])

        # Hacer la predicción
        prediction = model.predict(features)
        predicted_price = round(prediction[0], 2)

        return render(request, 'result.html', {'price': predicted_price})

    return render(request, 'home.html')
