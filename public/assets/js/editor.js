// var quill = new Quill('#editor', {
//     theme: 'snow'
// });

// var timespanFormat = {
//     'color': '#808080',
//     'italic': true,
//     'underline': true
//   };

//   var alternativeFormat = {
//     'color': '#000000'
//   };

// $.getJSON('./transcript.json', function (data) {
//     var results = data.Results;
//     var index = 0;
//     $.each(results, function (i, alternatives) {
//         $.each(alternatives, function (j, alt) {

//             var timespan = alt[0].Words[0].StartTime;
//             var id = "alt-" + timespan.replace('s', '');
//             timespan = ConvertToTimespan(timespan);
//             var alternative = alt[0].Transcript;

//             quill.insertText(index,timespan,timespanFormat);            
//             index += timespan.length;
//             quill.insertText(index,'\n');
//             index++;
//             quill.insertText(index,alternative + '\n\n',alternativeFormat);
//             index+= alternative.length + 2;
//         })
//     })
// });