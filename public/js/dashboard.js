$(document).ready( function(){
  loadFunctions();
});

function loadFunctions(){
  $("tbody td button.reserve-btn").on("click", function(){
     var form = $(this).siblings('form');
     console.log(form);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this reservation!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Your reservation has been deleted!", {
          icon: "success",
        }).then((a) => {
          form.submit();
        });
      } else {
        swal("Your reservation is safe!");
      }
    });
  });
}
