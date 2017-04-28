window.addEventListener("load",function () {
  var valorCaptchaInput = document.getElementById("valor-captcha");
  var confirmCaptchaInput = document.getElementById("confirm-captcha");
  var setCaptchaButton = document.getElementById("setCaptcha");
  var reloadCaptchaButton = document.getElementById("reloadCaptcha");
  var resultsInput = document.getElementById("results");
  valorCaptchaInput.value = randomCaptcha();

  reloadCaptchaButton.addEventListener("click", function () {
    valorCaptchaInput.value = randomCaptcha();
    confirmCaptchaInput.value = null;
    resultsInput.value = null;
  })
  setCaptchaButton.addEventListener("click", function () {
    var a = valorCaptchaInput.value;
    var b = confirmCaptchaInput.value;
    if (b == a) {
      resultsInput.value = "ok";
    }else {
      resultsInput.value = "error";
    }
  });
});
function randomCaptcha() {
  var captchaValues = ["A1g2RT@", "FgIo45p", "Ghty70Q"];
  return captchaValues[Math.floor(Math.random() * captchaValues.length) + 0];
}
