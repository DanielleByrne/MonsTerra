$(document).ready(() => {
  $(".login-form").on("submit", (event) => {
    event.preventDefault();
    const email = $(".email-input").val();
    const password = $(".password-input").val();
    console.log(email);
  });
});
