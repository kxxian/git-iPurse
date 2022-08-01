function tableData() {
  $.ajax({
    type: "POST",
    url: "functions/email.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblEmail').html(rec)
  });
}

function loadRecord(emailId) {
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
  url: "functions/email.php",
  data: {
    paramEdit: 1,
    EmailID: emailId
  }
}).done(function (rec) {
  var rowEdit = $.parseJSON(rec)
  $('#txtId').val(rowEdit['email_id'])
  $('#email_acc').val(rowEdit['email_acc'])
  $('#email_icon').val(rowEdit['email_icon'])
});
}

function deleteRecord(emailId) {
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
      url: "functions/email.php",
      data: {
        paramDelete: 1,
        EmailID: emailId
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
      tableData()
    });
  }
})
}

function cleaner() {
  $('#txtId').val('')
  $('#email_acc').val('')
  $('#email_icon').val('')
}

$(document).ready(function () {
  tableData()

  $('#btnEmail').click(function () {
    cleaner()
    $('#myModal').modal('show')
  })

  $('#btnSave').click(function () {
    var id = $('#txtId').val()
    var emailAcc = $('#email_acc').val()
    var emailIcon = $('#email_icon').val()
    var data = emailAcc + '^' + emailIcon + '^' + id
    
    if (emailAcc == '' || emailIcon == '') {
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
        url: "functions/email.php",
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