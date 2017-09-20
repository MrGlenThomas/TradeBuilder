'use strict';



require('./config');
require('./util.js');



/*
|--------------------------------------------------------------------------
| Application Is Ready
|--------------------------------------------------------------------------
|
| When all the dependencies of the page are loaded and executed,
| the application automatically call this function. You can consider it as
| a replacer for jQuery ready function - "$( document ).ready()".
|
*/

app.ready(function() {


  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  |
  | Import initialization of plugins that used in your application
  |
  */

  //require('./plugins/something.js');

require('../../vendor/sweetalert2/sweetalert2.js')

  /*
  |--------------------------------------------------------------------------
  | Paritials
  |--------------------------------------------------------------------------
  |
  | Import your main application code
  |
  */

  //require('./partials/something.js');

  console.log('fuck off');

  $('#book-trade-1').on('click', function(){
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn btn-secondary',
      buttonsStyling: false
    }).then(function() {
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );
    }, function(dismiss) {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'
      if (dismiss === 'cancel') {
        swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    })
  });


});
