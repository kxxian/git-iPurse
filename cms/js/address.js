function tableData() {
  $.ajax({
    type: "POST",
    url: "functions/address.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblAddress').html(rec)
  });
}

function deleteRecord(addressId) {
  Swal.fire({
  title: 'Are you sure?',
  width: 400,
  text: "Your file will be permanently deleted!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
   $.ajax({
     type: "POST",
     url: "functions/address.php",
     data: {
       paramDelete: 1,
       AddressID: addressId
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
       text: 'Your file has been deleted!',
       width: 400,
       showConfirmButton: false,
       timer: 1300
     })
     tableData()
   });
  }
})
}

function loadRecord(addressId) {
  Swal.fire({
  title: 'Are you sure?',
  width: 400,
  text: "Your file will be permanently edited!",
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, edit it!'
}).then((result) => {
  if (result.isConfirmed) {
   $('#myModal').modal('show')
  }
})
$.ajax({
  type: "POST",
  url: "functions/address.php",
  data: {
    paramEdit: 1,
    AddressID: addressId
  }
}).done(function (rec) {
  var rowEdit = $.parseJSON(rec)
  $('#txtId').val(rowEdit['address_id'])
  $('#address_loc').val(rowEdit['address_loc'])
  $('#address_icon').val(rowEdit['address_icon'])
});
}

function cleaner() {
  $('#txtId').val('')
  $('#address_loc').val('')
  $('#address_icon').val('')
}

$(document).ready(function () {
  tableData()

  $('#btnAddress').click(function () {
    cleaner()
    $('#myModal').modal('show')
  })

  $('#btnSave').click(function () {
    var id = $('#txtId').val()
    var addressLoc = $('#address_loc').val()
    var addressIcon = $('#address_icon').val()
    var data = addressLoc + '^' + addressIcon + '^' + id

    if (addressLoc == '' || addressIcon == '') {
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
        url: "functions/address.php",
        data: {
          upsert: 1,
          Data: data
        }
      }).done(function () {
        $('#myModal').modal('toggle')
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
        tableData()
      });
    }
  })
});