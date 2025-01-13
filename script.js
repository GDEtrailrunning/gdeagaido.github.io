document.addEventListener("DOMContentLoaded", function () {
  //actualizarDiasRestantes();
  //setInterval(actualizarDiasRestantes, 24*60*60*1000); // Actualizar diario
   // Datos para el gráfico de líneas
const dataLine1 = {
  labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'], // Etiquetas de los días
  datasets: [{
    label: 'Km recorridos en Semana 2',
    data: [9, 12, 13, 23], // Datos de los km recorridos en cada día
    borderColor: 'rgba(75, 192, 192, 1)',
    fill: true,
    tension: 0.1
  }]
};

const dataLine2 = {
  labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'], // Etiquetas de los días
  datasets: [{
    label: 'Km recorridos en Semana 3',
    data: [10, 13, 10, 13], // Datos de los km recorridos en cada día
    borderColor: 'rgba(153, 102, 255, 1)',
    fill: true,
    tension: 0.1
  }]
};

  // Opciones comunes para los gráficos
  const commonOptions = {
    responsive: false, // Desactiva el ajuste automático
    maintainAspectRatio: false, // Permite ajustar proporciones
    scales: {
      y: { beginAtZero: true }
    }
  };

  // Crear los gráficos
  const chartLine1 = new Chart(document.getElementById('myChart-line-1'), {
    type: 'line',
    data: dataLine1,
    options: commonOptions
  });

  const chartLine2 = new Chart(document.getElementById('myChart-line-2'), {
    type: 'line',
    data: dataLine2,
    options: commonOptions
  });

  // Ajustar tamaño de los gráficos
  const canvas1 = document.getElementById('myChart-line-1');
  canvas1.width = 1000; // Ancho deseado
  canvas1.height = 500; // Alto deseado

  const canvas2 = document.getElementById('myChart-line-2');
  canvas2.width = 1000; // Ancho deseado
  canvas2.height = 500; // Alto deseado

  // Actualizar días restantes
  function actualizarDiasRestantes() {
    const pageTitle = document.getElementById('pageTitle').innerText;
    const objetivoDate = new Date(pageTitle.split(": ")[1]);
    const currentDate = new Date();
    const timeDiff = objetivoDate - currentDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('result').textContent = `Faltan ${daysDiff} días para llegar a la carrera.`;
    console.log("actualizarDiasRestantes function called");
  }
  // actualizarDiasRestantes();
  // setInterval(actualizarDiasRestantes, 24 * 60 * 60 * 1000);

  // Agregar videos a las secciones
  const videos = [
    { id: "Semana 1", src: "video1.mp4" },
    { id: "Semana 1", src: "video2.mp4" },
    { id: "Semana 2", src: "video3.mp4" },
    { id: "Semana 2", src: "video4.mp4" }
  ];

  videos.forEach(video => {
    const videoElement = document.createElement("video");
    videoElement.src = video.src;
    videoElement.controls = true;
    videoElement.autoplay = false;
    videoElement.loop = false;
    document.getElementById(video.id).appendChild(videoElement);
  });
});


