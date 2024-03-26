import streamlit as st
from cltk import NLP
import json

# Inicializa el motor NLP para griego antiguo
cltk_nlp = NLP(language='grc')

# Función para cargar los epigramas desde un archivo JSON
def load_epigrams(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)


# Función para obtener la información gramatical de una palabra
# (podría modificarse para que devuelva un string con formato HTML que contenga la información deseada)
def get_word_info(word):
    doc = cltk_nlp.analyze(text=word)
    if doc.words:
        lemma = doc.words[0].lemma
        features = doc.words[0].features
        # Genera un string de HTML para mostrar la información
        info_html = f"<strong>Lemma:</strong> {lemma}<br><strong>Features:</strong> {features}"
        return info_html
    else:
        return "<strong>No se pudo obtener información para esta palabra.</strong>"

# Carga los epigramas
epigrams = load_epigrams('epigrams_processed.json')

# Interfaz de usuario en Streamlit
st.title('Explorador de Epigramas')

# Selector para elegir un epigrama
epigram_ref = st.selectbox('Selecciona un epigrama:', list(epigrams.keys()))

# Muestra el epigrama seleccionado
if epigram_ref:
    content = epigrams[epigram_ref]
    for line_info in content['processed_lines']:
        line_number = line_info['line']
        words = line_info['words']
        # Construye la línea con espacios adecuados
        reconstructed_line = ''.join([word if word in [',', '.', ':', ';', '!', '?', '’'] else f' {word}' for word in words]).strip()
        # Crea un contenedor para cada línea
        with st.container():
            # Aquí se puede mejorar para hacer cada palabra clickeable individualmente
            st.markdown(f"<p style='text-indent: 20px;'>{reconstructed_line}</p>", unsafe_allow_html=True)

# Ejemplo de cómo manejar la interacción (esto es solo un esquema, se necesita JS para interactividad real)
word_to_analyze = st.text_input('Introduce una palabra para analizar:')

if word_to_analyze:
    word_info_html = get_word_info(word_to_analyze)
    st.markdown(word_info_html, unsafe_allow_html=True)