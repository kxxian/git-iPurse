function recordLoader() {
  $.ajax({
    type: "POST",
    url: "functions/newGames.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblNewGame').html(rec)
  });
}

function cleaner() {
$('#name').val('')
$('#image').val('')
}

function deleteRecord(newGameId) {
   Swal.fire({
    title: "Are you sure?",
    width: 400,
    text: "This file will be deleted permanently!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "POST",
        url: "functions/newGames.php",
        data: {
          newGameID: newGameId,
          paramDelete: 1
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
          text: 'Your file was permanently deleted!',
          showConfirmButton: false,
          timer: 1300
        })
        recordLoader()
      });
    }
  })
}

$(document).ready(function () {
  recordLoader()

  $('#btnNewGame').click(function () { 
    cleaner()
    $('#myModal').modal('show')
  });

  $('#myForm').on('submit', function (e) {
    e.preventDefault()
  
    $.ajax({
      type: "POST",
      url: "functions/newGames.php",
      data: new FormData(this),
      dataType: "json",
      contentType: false,
      processData: false,
      cache: false
    });
  });

  $('#image').change(function () {
    var image = this.files[0]
    var fileType = image.type
    var match = ['image/jpeg', 'image/jpg', 'image/png']

    if (!(fileType == match[0] || fileType == match[1] || fileType == match[2])) {
      Swal.fire({
        position: 'top-right',
        showClass: {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        icon: 'error',
        title: 'Oops...',
        width: 400,
        text: 'Only jpeg, jpg, and png are available file types to upload'
      })

      $('#image').val('')
      return false
    }
  })

  $('#btnSave').click(function () { 
    var name = $('#name').val()
    var image = $('#image').val()

    if (name == '' || image == '') {
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
        text: 'Insufficient Data',
        width: 400,
        showConfirmButton: false,
        timer: 1300
      })
    } else {
      $('#myModal').modal('toggle')
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
      setTimeout(function () {
        recordLoader()
      }, 500)
    }
  });
});