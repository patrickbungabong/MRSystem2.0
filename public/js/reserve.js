$(document).ready( function(){
    loadFunctions();
});
//global variables to be used by various functions
var selected = [];

// load functionalities of inputs
function loadFunctions(){
    //seat checkboxes
    $('input[type=checkbox]').click( function(){

        if (!this.checked){
          selected.pop($(this).val());      //add to array
        }else{
           selected.push($(this).val());    //remove from array
        }
        //modify element content
        $('#selectedseat').val(selected.toString().replace(/,/g,", "));
        $('#modalselectedseat').val(selected.toString().replace(/,/g,", "));
        var count = selected.length;
        $('#count').val(count);
        $('#modalcount').val(count);
    });
    //reserve button
    $("#reserveMe").on("click", function(){
        //if no seat selected, do not proceed
        if(selected.length == 0){
            swal({
                title: "Ooops!",
                text: "There are no seats selected!",
                icon: "warning",
                dangerMode: true,
                button: true,
            }).then(function () {});
        }else{
            $(".modal-body p:nth-of-type(6)")
                .html("Total Amount: <input type='text' name='total' " + 
                        "class='text-dark' readonly value='" + 
                (Number($('#modalcount').val()) * Number($('#price').html())) + "'>");
            $('#modalConfirm').modal('show');    
        }
    });
    // confirm button in modal
    $('#confirm').on("click", function(){
        $('#modalConfirm').modal('hide');
        reservationList.push(getCurrentReservation());
        scheduleList[scheduleList.map(x => x.id).indexOf(scheduleId)].seats -= $('#modalcount').val();
        //save modified schedule list and reservation list
        localStorage.setItem("scheduleList", JSON.stringify(scheduleList));
        localStorage.setItem("reservationList", JSON.stringify(reservationList));
        //show sweet alert modal
        swal({
            title: "SUCCESS!",
            text: "You have successfully reserved your ticket!",
            icon: "success",
            closeOnConfirm: false
        }).then( 
            function () {
                window.location.href = 'dashboard.html';
            }
        );
    });
}