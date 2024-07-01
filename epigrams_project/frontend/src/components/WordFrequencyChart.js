import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function WordFrequencyChart({ epigram }) {
  const wordFrequency = {};

  epigram.processed_lines.forEach(line => {
    line.words.forEach(word => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
  });

  const data = {
    labels: Object.keys(wordFrequency),
    datasets: [{
      label: 'Frecuencia de Palabras',
      data: Object.values(wordFrequency),
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    }],
  };

  return <Bar data={data} />;
}

export default WordFrequencyChart;
