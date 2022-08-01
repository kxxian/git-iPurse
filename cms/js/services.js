function recordLoader() {
  $.ajax({
    type: "POST",
    url: "functions/services.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblServices').html(rec)
  });
}

function loadRecord(serviceId) {
  Swal.fire({
  title: "Are you sure?",
  width: 400,
  text: "This file will be edited permanently!",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, edit it!",
  }).then((result) => {
    if (result.isConfirmed) {
      $("#myModal").modal("show");
    }
  })
  $.ajax({
    type: "POST",
    url: "functions/services.php",
    data: {
      paramEdit: 1,
      servId: serviceId
    }
  }).done(function (rec) {
    var rowEdit = $.parseJSON(rec)
    $('#txtId').val(rowEdit['service_id'])
    $('#service_title').val(rowEdit['service_title'])
    $('#service_desc').val(rowEdit['service_desc'])
    $('#service_icon').val(rowEdit['service_icon'])
  });
}

function deleteRecord(serviceId) {
  Swal.fire({
  title: "Are you sure?",
  width: 400,
  text: "This file will be deleted permanently!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "POST",
        url: "functions/services.php",
        data: {
          paramDelete: 1,
          servId: serviceId
        }
      }).done(function () {
        Swal.fire({
          position: 'top-right',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          icon: 'success',
          title: 'Success!',
          width: 400,
          text: 'Your file has been deleted!',
          showConfirmButton: false,
          timer: 1300
        })
        recordLoader()
      });
    }
  })
}

function cleaner() {
  $('#txtId').val('')
  $('#service_title').val('')
  $('#service_desc').val('')
  $('#service_icon').val('')
}

$(document).ready(function () {
  recordLoader()

  $('#btnServices').click(function () { 
    cleaner()
    $('#myModal').modal('show')    
  });

  $('#btnSave').click(function () { 
    var id = $('#txtId').val()
    var servTitle = $('#service_title').val()
    var servDesc = $('#service_desc').val()
    var servIcon = $('#service_icon').val()
    var data = servTitle + '^' + servDesc +  '^' + servIcon + '^' + id

    if (servTitle == '' || servDesc == '' || servIcon == '') {
      Swal.fire({
        position: 'top-right',
        showClass: {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        icon: 'error',
        title: 'Error!',
        width: 400,
        text: 'Insufficient Data',
        showConfirmButton: false,
        timer: 1300
      })
    } else {
      $.ajax({
        type: "POST",
        url: "functions/services.php",
        data: {
          upsert: 1,
          Data: data
        }
      }).done(function () {
        $('#myModal').modal('toggle');
          if (id !== '') {
            Swal.fire({
              position: 'top-right',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
              icon: 'success',
              title: 'Success!',
              width: 400,
              text: 'Your work has been updated!',
              showConfirmButton: false,
              timer: 1300
          })  
          } else {
            Swal.fire({
              position: 'top-right',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
              icon: 'success',
              title: 'Success!',
              width: 400,
              text: 'Your work has been saved!',
              showConfirmButton: false,
              timer: 1300
            })
          }
        recordLoader()
      });
    }
  });
});