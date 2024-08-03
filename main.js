var isAnimating = false;
var isOpen = false;
var button = document.querySelector(".sticky-menu-container .outer-button");
var menu = document.querySelector(".sticky-menu-container .inner-menu");
var closeIcon = document.querySelector(".sticky-menu-container .outer-button .close-icon");
var arrowIcon = document.querySelector(".sticky-menu-container .outer-button .arrow-icon");

button.addEventListener("click", function(){
  if(isAnimating) return;
  this.classList.add("clicked");
  menu.classList.toggle("closed");
  
  if(isOpen){
    closeIcon.classList.remove("show");
    closeIcon.classList.add("hide");
    arrowIcon.classList.remove("hide");
    arrowIcon.classList.add("show");
    
    isOpen = false;
  }
  else{
    closeIcon.classList.remove("hide");
    closeIcon.classList.add("show");
    arrowIcon.classList.remove("show");
    arrowIcon.classList.add("hide");

    isOpen = true;
  }
  
});

// code
var actionButtons = document.querySelector("#actionButtons");
var leftForm = document.querySelector("#leftForm");
var rightForm = document.querySelector("#rightForm");

button.addEventListener("animationstart", function(event){
  isAnimating = true;
  actionButtons.classList.remove("d-none");
  leftForm.classList.add("d-none");
  rightForm.classList.add("d-none");

  
  // document.querySelector("#leftFormStep1").classList.remove("d-none");
  // document.querySelector("#leftFormStep2").classList.add("d-none");
  // document.querySelector("#leftFormStep3").classList.add("d-none");
  // document.querySelector("#leftFormStep4").classList.add("d-none");

  // document.querySelector("#rightFormStep1").classList.remove("d-none");
  // document.querySelector("#rightFormStep2").classList.add("d-none");
  // document.querySelector("#rightFormStep3").classList.add("d-none");
  // document.querySelector("#rightFormStep4").classList.add("d-none");
  // document.querySelector("#rightFormStep5").classList.add("d-none");
});

button.addEventListener("animationend", function(event){
  isAnimating = false;
  this.classList.remove("clicked");
});

var buttonRight = document.querySelector("#buttonRight");
buttonRight.addEventListener("click", function(event){

  actionButtons.classList.add("d-none");
  leftForm.classList.remove("d-none");
  rightForm.classList.add("d-none");

});

var buttonLeft = document.querySelector("#buttonLeft");
buttonLeft.addEventListener("click", function(event){
  
  actionButtons.classList.add("d-none");
  leftForm.classList.add("d-none");
  rightForm.classList.remove("d-none");

});

// right form

$('.add-to-card').on('click', function() {

  $('#rightFormFooter').removeClass('d-none');

})

$('#rightFormCheckoutButton').on('click', function(event) {

  $('#rightFormStep1').addClass('d-none');
  $('#rightFormStep2').removeClass('d-none');

});

$('input[type="radio"].user-order').click(function() {

  var selectedValue = $('input[type="radio"].user-order:checked').val();
  
  // Always show forms
  $('#rightFormStep5').removeClass('d-none');
  $('#rightFormStep3').removeClass('d-none');

  if (selectedValue === '1') {
    $('#rightFormStep4').removeClass('d-none');
  } 
  else {
    $('#rightFormStep4').addClass('d-none');
  }
  
});

$('input[type="radio"].user-order-2').click(function() {
  var selectedValue = $('input[type="radio"].user-order-2:checked').val();

  if (selectedValue === '0') {
    $('.user-order-info').prop('disabled', true);
  } 
  else {
    $('.user-order-info').prop('disabled', false);
  }
});

// left form

$('#type-0').on('change', function() {

  $('#person-0').removeClass('d-none');

})

$('#person-0').on('change', function() {

  $('#date-0').removeClass('d-none');

})

$('#date-0').on('change', function() {

  $('#time-0').removeClass('d-none');

})

$('.time-btn').on('click', function() {

  $('#leftFormStep1').addClass('d-none');
  $('#leftFormStep2').removeClass('d-none');
  $('#LeftFormFooter').removeClass('d-none');
  $('#rightFormPreviousButton').attr('data-current-step',2);
  $('#rightFormNextButton').attr('data-current-step',2);

})

$('#rightFormPreviousButton').click(function() {

  var currentStep = parseInt($(this).attr('data-current-step'));
  var previousStep = currentStep - 1;

  console.log(`currentStep = leftFormStep${currentStep} and previous = #leftFormStep${previousStep}`);

  $(`#leftFormStep${currentStep}`).addClass('d-none');
  $(`#leftFormStep${previousStep}`).removeClass('d-none');
  $(this).attr('data-current-step',previousStep);
  $('#rightFormNextButton').attr('data-current-step',previousStep);

  if(previousStep == 1){
    $('#LeftFormFooter').addClass('d-none');
  }

});

$('#rightFormNextButton').click(function() {

  var currentStep = parseInt($(this).attr('data-current-step'));
  var nextStep    = currentStep + 1;

  $(`#leftFormStep${currentStep}`).addClass('d-none');
  $(`#leftFormStep${nextStep}`).removeClass('d-none');
  $(this).attr('data-current-step',nextStep);
  $('#rightFormPreviousButton').attr('data-current-step',nextStep);

});