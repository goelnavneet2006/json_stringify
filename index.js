/* Write your function here. Useful type checking functions: 
 *
 * typeof(obj) === "string"
 * typeof(obj) === "number"
 * Array.isArray(obj) === true
 * typeof(obj) === "object" [and !isArray]
 */

var my_json_encode = function(obj) {
  var finalVal = "";
  if (obj === null) {
      finalVal = "null";
  } else if (typeof(obj) === "string") {
      finalVal = '"'.concat(obj, '"');
  } else if (typeof(obj) === "number") {
      finalVal = obj.toString();
  } else if (Array.isArray(obj) === true) {
      finalVal += "[";
      for (var i = 0; i < obj.length; i++) {
          finalVal += my_json_encode(obj[i]);
          if (i !== obj.length - 1) {
              finalVal += ", ";
          }
      }
      finalVal += "]";
  } else if (typeof(obj) === "object") {
      finalVal += "{";
      for (key in obj) {
          finalVal += '"'.concat(key, '"', ": ");
          finalVal += my_json_encode(obj[key]);
          finalVal += ", ";
      }
      finalVal = finalVal.substring(0, finalVal.length - 2);
      finalVal += "}";
  }
  return finalVal;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";
var parsed_input;

process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
	parsed_input = JSON.parse(input); 
    output = my_json_encode(parsed_input);
  
    process.stdout.write(output);
});
