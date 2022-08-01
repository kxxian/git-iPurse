function tableData() {
  $.ajax({
    type: "POST",
    url: "functions/footer.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblFooter').html(rec)
  });
}

function cleaner() {
  $('#txtId').val('')
  $('#footer_desc').val('')
}

function loadRecord(footerId) {
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
    url: "functions/footer.php",
    data: {
      paramEdit: 1,
      FooterID: footerId
    }
  }).done(function (rec) {
    var rowEdit = $.parseJSON(rec)
    $('#txtId').val(rowEdit['footer_id'])
    $('#footer_desc').val(rowEdit['footer_desc'])
  });
})
}


function deleteRecord(footerId) {
Swal.fire({
  title: 'Are you sure?',
  width: 400,
  text: "Your file will be deleted permanently!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    $.ajax({
      type: "POST",
      url: "functions/footer.php",
      data: {
        paramDelete: 1,
        FooterID: footerId
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

$(document).ready(function () {
  tableData()

  $('#btnFooter').click(function () { 
    cleaner()
    $('#myModal').modal('show')
  });

  $('#btnSave').click(function () { 
    var id = $('#txtId').val()
    var footerDesc = $('#footer_desc').val()
    var data = footerDesc + '^' + id
    
    if (footerDesc == '') {
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
        url: "functions/footer.php",
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
            text: 'Your file has been updated!',
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
            text: 'Your file has been saved!',
            showConfirmButton: false,
            timer: 1300
          })
        }
        tableData()
      });
    }
  });
});