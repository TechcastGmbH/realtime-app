

$('#pushSubmit').click( () => {
  let message = $('#pushInput').val()
  alert('send push message to node.js server: ' + message)
})

$('.pushDelete').click( () => {
  alert('delete push message from node.js server')
})
