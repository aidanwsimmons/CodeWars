// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// it('sample tests', function() {
//     doTest(     0, '00:00:00');
//     doTest(    59, '00:00:59');
//     doTest(    60, '00:01:00');
//     doTest(    90, '00:01:30');
//     doTest(  3599, '00:59:59');
//     doTest(  3600, '01:00:00');
//     doTest( 45296, '12:34:56');
//     doTest( 86399, '23:59:59');
//     doTest( 86400, '24:00:00');
//     doTest(359999, '99:59:59');
//   });

function humanReadable (seconds) {
    //60 seconds in a minute
    //60 minutes in an hour === 3600 seconds in an hour
    let hours, minutes;
    hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    if(hours < 10){
      hours = `0${hours.toString()}`
    }else{
      hours = hours.toString()
    }
    if(minutes < 10){
      minutes = `0${minutes.toString()}`
    }else{
      minutes = minutes.toString()
    }
    if(seconds < 10){
      seconds = `0${seconds.toString()}`
    }else{
      seconds = seconds.toString()
    }
    
    return `${hours}:${minutes}:${seconds}`
  }

  function humanReadableRefactor (seconds) {
    //60 seconds in a minute
    //60 minutes in an hour === 3600 seconds in an hour
    let hours, minutes;
    hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    
    function pad(num){
        return (num < 10) ? '0' + num : num.toString();
    }
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  }