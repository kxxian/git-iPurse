function tableData() {
  $.ajax({
    type: "POST",
    url: "functions/phone.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblPhone').html(rec)
  });
}

function loadRecord(phoneId) {
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
  url: "functions/phone.php",
  data: {
    paramEdit: 1,
    PhoneID: phoneId
  }
}).done(function (rec) {
  var rowEdit = $.parseJSON(rec)
  $('#txtId').val(rowEdit['phone_id'])
  $('#phone_num').val(rowEdit['phone_num'])
  $('#phone_icon').val(rowEdit['phone_icon'])
});
}

function deleteRecord(phoneId) {
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
      url: "functions/phone.php",
      data: {
        paramDelete: 1,
        PhoneID: phoneId
      }
    }).done(function () {
      Swal.fire({
        position: 'top-right',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animate animate__fadeOutUp'
        },
        icon: 'success',
        title: 'Success!',
        width: 400,
        text: 'Your file has been deleted!',
        showConfirmButton: false,
        timer: 1300
      })
      tableData()
    });
  }
})
}

function cleaner() {
  $('#txtId').val('')
  $('#phone_num').val('')
  $('#phone_icon').val('')
}

$(document).ready(function () {
  tableData()

  $('#btnPhone').click(function () {
    cleaner()
    $('#myModal').modal('show')
  })

  $('#btnSave').click(function () {
    var id = $('#txtId').val()
    var phoneNum = $('#phone_num').val()
    var phoneIcon = $('#phone_icon').val()
    var data = phoneNum + '^' + phoneIcon + '^' + id

    if (phoneNum == '' || phoneIcon == '') {
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
        url: "functions/phone.php",
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