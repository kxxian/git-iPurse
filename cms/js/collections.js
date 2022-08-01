function tableData() {
  $.ajax({
    type: "POST",
    url: "functions/collections.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblCollections').html(rec)
  });
}

function loadRecord(collectionId) {
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
  url: "functions/collections.php",
  data: {
    paramEdit: 1,
    CollectionID: collectionId
  }
}).done(function (rec) {
  var rowEdit = $.parseJSON(rec)
  $('#txtId').val(rowEdit['collection_id'])
  $('#collection_title').val(rowEdit['collection_title'])
  $('#collection_desc').val(rowEdit['collection_desc'])
});
}

$(document).ready(function () {
  tableData()

  $('#btnCollectionUpd').click(function () {
    $('#myModal').modal('show')
  })


  $('#btnSave').click(function () {
    var id = $('#txtId').val()
    var collectionTitle = $('#collection_title').val()
    var collectionDesc = $('#collection_desc').val()
    var data = collectionTitle + '^' + collectionDesc + '^' + id

    if (collectionTitle == '' || collectionDesc == '') {
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
        url: "functions/collections.php",
        data: {
          paramUpdate: 1,
          Data: data
        }
      }).done(function () {
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
          text: 'Your work has been updated!',
          showConfirmButton: false,
          timer: 1300
        })
        tableData()
      });
    }
  })
});