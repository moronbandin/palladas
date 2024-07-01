from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# Cargar los epigramas desde el JSON
with open('data/epigrams.json', 'r', encoding='utf-8') as file:
    epigrams = json.load(file)

@app.route('/api/epigrams', methods=['GET'])
def get_epigrams():
    """Devuelve la lista de referencias de los epigramas."""
    return jsonify(list(epigrams.keys()))

@app.route('/api/epigrams/<epigram_id>', methods=['GET'])
def get_epigram(epigram_id):
    """Devuelve los detalles de un epigrama específico."""
    epigram = epigrams.get(epigram_id)
    if epigram:
        return jsonify(epigram)
    return jsonify({"error": "Epigrama no encontrado"}), 404

if __name__ == '__main__':
    app.run(debug=True)
