$( document ).ready( function() {
    var Offset = $( '#mobile-header' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > Offset.top ) {
        $( '#mobile-header' ).addClass( 'fixed' );
      }
      else {
        $( '#mobile-header' ).removeClass( 'fixed' );
      }
    });
  } );