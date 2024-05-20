const form = document.getElementById('form');
const alertElement = document.querySelector('.alert');

form.addEventListener('submit', function(event) {
  // Optional: Prevent default form submission if not needed
  // event.preventDefault();

  // Create alert content
  const price = document.getElementById('overall_qual').value; // Assuming price is based on overall_qual
  const alertContent = `¡Su casa podría venderse por $${price}!  Tenga en cuenta que este es solo un precio estimado y el valor real puede variar.`;

  // Set alert content
  alertElement.innerHTML = alertContent;

  // Show the alert
  alertElement.style.display = 'block';
});


function validateForm() {
    var overall_qual = document.getElementById("overall_qual").value;
    var gr_liv_area = document.getElementById("gr_liv_area").value;
    var garage_cars = document.getElementById("garage_cars").value;
    var garage_area = document.getElementById("garage_area").value;

    if (overall_qual == "" || gr_liv_area == "" || garage_cars == "" || garage_area == "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }

    return true;
  }