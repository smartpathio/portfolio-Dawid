 // Pastelowe kolory zgodne ze stylem
const pastelColors = ['#bde0fe', '#cdeac0', '#ffd6e0', '#ffe5a5'];

// Wspólne dane kwartalne
const quarterlyData = [120, 150, 180, 210];

// Konfiguracje dla trzech wersji językowych
const charts = {
  'chart-pl': {
    label: 'Przychody (tys. PLN)',
    title: 'Przykładowe dane kwartalne',
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    data: quarterlyData
  },
  'chart-en': {
    label: 'Revenue (k PLN)',
    title: 'Sample quarterly data',
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    data: quarterlyData
  },
  'chart-de': {
    label: 'Umsatz (Tsd. PLN)',
    title: 'Beispieldaten Quartale',
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    data: quarterlyData
  }
};

// Funkcja pomocnicza do tworzenia wykresu
function createChart(ctx, cfg) {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: cfg.labels,
      datasets: [{
        label: cfg.label,
        data: cfg.data,
        backgroundColor: cfg.data.map((_, i) => pastelColors[i % pastelColors.length]),
        borderColor: '#ffffff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: cfg.title }
      },
      scales: {
        y: {
          ticks: { stepSize: 50 },
          grid: { color: 'rgba(0,0,0,0.06)' }
        },
        x: {
          grid: { color: 'rgba(0,0,0,0.04)' }
        }
      }
    }
  });
}

// Inicjalizacja wykresów tylko tam, gdzie istnieje canvas
document.addEventListener('DOMContentLoaded', () => {
  Object.entries(charts).forEach(([canvasId, cfg]) => {
    const el = document.getElementById(canvasId);
    if (el) createChart(el.getContext('2d'), cfg);
  });
});
