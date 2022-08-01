function tableData() {
  $.ajax({
    type: "POST",
    url: "functions/contacts.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblContacts').html(rec)
  });
}

function recordLoader(contactId) {
  Swal.fire({
  title: 'Are you sure?',
  width: 400,
  text: "Your file will be edited permanently!",
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, edit it!'
}).then((result) => {
  if (result.isConfirmed) {
   $('#myModal').modal('show')
  }
  $.ajax({
    type: "POST",
    url: "functions/contacts.php",
    data: {
      paramEdit: 1,
      ContactID: contactId
    }
  }).done(function (rec) {
    var rowEdit = $.parseJSON(rec)
    $('#txtId').val(rowEdit['contact_id'])
    $('#contact_list').val(rowEdit['contact_list'])
    $('#contact_icons').val(rowEdit['contact_icon'])
  });
})
}

function deleteRecord(contactId) {
  Swal.fire({
  title: 'Are you sure?',
  width: 400,
  text: "Your file will be permanently delete!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    $.ajax({
      type: "POST",
      url: "functions/contacts.php",
      data: {
        paramDelete: 1,
        ContactID: contactId
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
$('#contact_list').val('')
$('#contact_icons').val('')
}

$(document).ready(function () {
  tableData()

  $('#btnContacts').click(function () { 
    cleaner()
    $('#myModal').modal('show')
  });

  $('#btnSave').click(function () {
    var id = $('#txtId').val()
    var contactList = $('#contact_list').val()
    var contactIcons = $('#contact_icons').val()
    var data = contactList + '^' + contactIcons + '^' + id

    if (contactList == '' || contactIcons == '') {
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
        url: "functions/contacts.php",
        data: {
          upsert: 1,
          Data: data
        }
      }).done(function () {
        $('#myModal').modal('toggle')
        if (id != '') {
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