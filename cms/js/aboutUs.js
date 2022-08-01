function tableData() {
  $.ajax({
    type: "POST",
    url: "functions/aboutUs.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblAboutUs').html(rec)
  });
}

function loadRecord(aboutId) {
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
   $('#myModalUpd').modal('show')
  }
})
$.ajax({
  type: "POST",
  url: "functions/aboutUs.php",
  data: {
    paramEdit: 1,
    AboutID: aboutId
  }
}).done(function (rec) {
  var rowEdit = $.parseJSON(rec)
  $('#txtId').val(rowEdit['aboutUs_id'])
  $('#about_descUpd').val(rowEdit['aboutUs_desc'])
});
}

function deleteRecord(aboutId) {
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
      url: "functions/aboutUs.php",
      data: {
        paramDelete: 1,
        AboutID: aboutId
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
  $('#about_desc').val('')
  $('#about_imgName').val('')
  $('#image').val('')
}

$(document).ready(function () {
  tableData()

  $('#btnAboutUs').click(function () {
    cleaner()
    $('#myModal').modal('show')
  })

  $('#btnAboutUpd').click(function () {
    $('#myModalUpd').modal('show')
  })

  $('#myForm').on('submit', function (e) {
    e.preventDefault()

    $.ajax({
      type: "POST",
      url: "functions/aboutUs.php",
      data: new FormData(this),
      dataType: "json",
      contentType: false,
      processData: false,
      cache: false
    })
  })

  $('#btnSave').click(function () {
    var aboutDesc = $('#about_desc').val()
    var imgName = $('#about_imgName').val()
    var img = $('#image').val()

    if (aboutDesc == '' || imgName == '' || img == '') {
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
        timer:1300
      })
    } else {
      Swal.fire({
        position: 'top-right',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup : 'animate__animated animate__fadeOutUp'
        },
        icon: 'success',
        title: 'Success!',
        width: 400,
        text: 'Your work has been saved!',
        showConfirmButton: false,
        timer: 1300
      })
      $('#myModal').modal('toggle')
      setTimeout(function () {
        tableData()
      }, 500)
    }
  })

  $('#btnSaveUpd').click(function () {
    var aboutDescUpd = $('#about_descUpd').val()
    var id = $('#txtId').val()
    var data = aboutDescUpd + '^' + id

    if (aboutDescUpd == '') {
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
        url: "functions/aboutUs.php",
        data: {
          paramUpdate: 1,
          Data: data
        }
      }).done(function () {
        $('#myModalUpd').modal('toggle')
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
        tableData()
      });
    }
  })
});