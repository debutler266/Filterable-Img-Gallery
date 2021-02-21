$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if (value == 'All'){
      $('.itemBox').show('1000');
    }
    else {
      $('.itemBox').not('.'+value).hide('1000');
      $('.itemBox').filter('.'+value).show('1000');
    }
  })
  // active class for selected item
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})


// Get the modal
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
