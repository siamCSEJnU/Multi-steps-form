$(document).ready(function () {
  var form = $("#register");
  form.validate({
    errorPlacement: function errorPlacement(error, element) {
      element.before(error);
    },
    rules: {
      confirm: {
        equalTo: "#password",
      },
    },
  });
  form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex) {
      if (currentIndex > newIndex) {
        return true;
      }
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    },
    onFinishing: function (event, currentIndex) {
      form.validate().settings.ignore = ":disabled";
      return form.valid();
    },
    onFinished: function (event, currentIndex) {
      toastr.success("Registration complemted successfully!");
    },
  });

  const phoneInput = document.querySelector("#phone");
  window.intlTelInput(phoneInput, {
    initialCountry: "bd",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/25.2.1/js/utils.js",
  });
  $(".iti").css("width", "100%");

  let venues = [
    "City Hall",
    "Downtown Park",
    "ICCB Center",
    "Art Museum",
    "Pan Pacific Sonargaon",
    "The Olives",
    "Radisson Blu Dhaka Water Garden",
    "Lakeshore Hotel & Apartment",
    "University of Dhaka",
    "Krishibid Institution Bangladesh",
    "GEC Convention Centre",
  ];
  $("#eventVenue").autocomplete({
    source: venues,
    minLength: 1,
    delay: 100,
  });

  $("#eventDate").datepicker({
    dateFormat: "dd-mm-yy",
    minDate: 0,
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
  });

  tinymce.init({
    selector: "#eventDescription",
    height: 300,
    plugins: "advlist link image lists",
    toolbar:
      "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent",
  });
});
