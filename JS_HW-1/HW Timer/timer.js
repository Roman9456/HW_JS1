function startTimer(duration, downloadUrl) {
  let timer = duration;
  let hours, minutes, seconds;

  let timerInterval = setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt((timer % 3600) % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timerElement = document.getElementById("timer");
    timerElement.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(timerInterval);
      downloadFile(downloadUrl);
      alert("Вы победили в конкурсе!");
    }
  }, 1000);
}
  function downloadFile(downloadUrl) {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.target = "_blank";
    link.download = "file.txt";
    link.click();
  }
  
  const timeRemainingInSeconds = 15619; // Время в секундах
  const downloadUrl = "http://example.com/download"; // URL для загрузки файла
  
  startTimer(timeRemainingInSeconds, downloadUrl);