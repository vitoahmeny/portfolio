(function (window) {
	// body...
	var validator = {};


	validator.isEmailAddress = function (input) {
		if (!input) throw "Missing parameter in isEmailAddress function: 'input'.";
		var atPosition = input.indexOf("@");
		return atPosition !== -1 && atPosition !== 0 && atPosition !== input.length - 1;
	};

	validator.isPhoneNumber = function (input) {
		var arr = input.toString(10).split("");
		var myArr = [];
		if (arr.length == 11) {
			for (var i = 0; i < arr.length; i++) {
				myArr.push(typeof arr[i] == "number");
			}
			if (myArr.indexOf("false") == -1) return true;
		}
		else return false;
	};

	validator.withoutSymbols = function (input) {
		var str = input.toString();
		var myArr = [];
		for (var i = 0; i < str.length; i++) {
			var code = str.charCodeAt(i);
			if ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123) || str[i] == " ") 
				myArr.push(str[i]);
		}
		return myArr.join("");
	};

	validator.isDate = function (input) {
		var date = new Date(input);
  		return date.toString() !== "Invalid Date"; };


  	validator.isHour = function (input) {
  		var re = /\d{1,2}:00/;
  		return input >= 0 && input < 24 || re.test(input);
  		

  	}

  	validator.completeHour = function (input) {
  		var re = /\d{1,2}:00/;
  		if (!re.test(input)) {
  		  		input = input + ":00";
  		  	}
  		return input;
  	}
	validator.convertToDateObject = function (input) {
		if (input instanceof Date) return input;
		else if (validator.isDate(input)) {
			return new Date(input);
		}
		else throw "Argument is not a valid date";
	};
	validator.isBeforeDate = function (input, reference) {
		var date = validator.convertToDateObject(input);
		var date2 = validator.convertToDateObject(reference);
		if (date && date2) {
			return date.getTime() < date2.getTime();
		}
	};
	validator.isAfterDate = function (input,reference) {
		return !(validator.isBeforeDate(input, reference));
	};

	validator.isBeforeToday = function (input) {
		return validator.isBeforeDate(input, new Date());		
	};

	validator.isAfterToday = function (input) {
		return !isBeforeDate(input);
		//when input is today
	};

	validator.isEmpty = function (input) {
		var result = true;
		if (input.length !== 0) {
			for (var i = 0; i < input.length; i++) {
				if (input[i] !== " ") {
					result = false;
				}
			}
		}

		return result;
	};

	validator.contains = function (input, words) {
		var str = input.toLowerCase();
        var arr = [];
		for (var i = 0; i < str.length; i++) {
			var code = str.charCodeAt(i);
			if (!((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123))) {
                arr.push(" ");
            }
          else arr.push(str[i]);
		}
      var newArr = arr.join("").split(" ");
      for (var j = 0; j < words.length; j++) {
			words[j] = words[j].toLowerCase();
		}
      var booleanArr = [];
		for (var k = 0; k < words.length; k++) {
			if (newArr.indexOf(words[k]) !== -1) {
				 booleanArr.push(true);
			}
			else booleanArr.push(false);
		}
      if(booleanArr.indexOf(true) !== -1)
        return true;
      else return false;
	};

	validator.lacks = function (input, words) {
		return !validator.contains(input, words);
	};

	validator.sortArrayByElementLength = function (arr) {
		var newArr = [];
        var sortByLength = function(a, b){
				if (a.length > b.length) {
					return a;
				}
				else return b;
			};
        var length = arr.length;
		for (var i = 0; i < length; i++) {
			var ele = arr.reduce(sortByLength);
			newArr.push(ele);
			arr.splice(arr.indexOf(ele), 1);
		}
		return newArr;
	};

	validator.removeSubstr = function (str, substr) {
		var re = new RegExp(substr, 'g');
		return str.replace(re, "");
	};

	validator.isComposedOf = function (input, strings) {
		strings = this.sortArrayByElementLength(strings);
		input = this.withoutSymbols(input);
		for (var i = 0; i < strings.length; i++) {
			input = this.removeSubstr(input, strings[i]);
		}
        var arr = [];
        for (var j = 0; j < input.length; j++) {
        	if (input[j] == " ") {
        		arr.push(true);
        	}
        	else arr.push(false);
        }
        return arr.indexOf(false) == -1;
    };

    validator.isLength = function (input, n) {
    	return input.length <= n;
    };

    validator.isOfLength = function (input, n) {
    	return input.length >= n;
    };

    validator.elementCount = function (arr, ele) {
    	var count = 0;
    	for (var i = 0; i < arr.length; i++) {
    		if (arr[i] === ele) count += 1;
    	}
    	return count;
    };

    validator.countWords = function (input) {
    	var arr = [];
    	var start = 0;
    	for (var i = 0; i <= input.length; i++) {
    		var code = input.charCodeAt(i);
    		if (!((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123))) {
    			arr.push(input.substring(start, i));
    			start = i + 1;
    		}
    	}
    	if (arr.indexOf("") !== -1) {
    		return arr.length - validator.elementCount(arr, "");
    	}
    	else return arr.length;
    };

    validator.lessWordsThan = function (input, n) {
    	return validator.countWords(input) <= n;
    };

    validator.moreWordsThan = function (input, n) {
    	return validator.countWords(input) >= n;
    };

    validator.isAlphanumeric = function (input) {
		var arr = [];
		if (input.length !== 0) {
			for (var i = 0; i < input.length; i++) {
				var code = input.charCodeAt(i);
				if ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123))
					arr.push(true);
				else arr.push(false);
			}
		return arr.indexOf(false) == -1;
		}
		else return true;
	};

	validator.booleanArr = function (arr) {
		if (arr.indexOf(false) == -1 && arr.length !== 0) return true;
		else return false;
	};

	validator.isCreditCard = function (input) {
		if (validator.isAlphanumeric(input)) {
			return input.length === 16;
		}
		else 
			inputArr = input.split("-");
			var arr = [];
			for (var i = 0; i < inputArr.length; i++) {
				if (validator.isAlphanumeric(inputArr[i])) {
					arr.push(true);
				}
				else arr.push(false);
			}
			return validator.booleanArr(arr) && input.length === 19;
	};

	validator.isHexChar = function (input) {
		var code = input.charCodeAt(0);
		return ((code > 47 && code < 58) || (code > 64 && code < 71) || (code > 96 && code < 103));
	};

	validator.isHex = function (input) {
		var arr = [];
		if ((input.length === 7 && input.charAt(0) === "#") || (input.length === 4 && input.charAt(0) === "#")) {
			for (var i = 1; i < input.length; i++) {
				arr.push(validator.isHexChar(input[i]));
			}
		}
		return validator.booleanArr(arr);

	};

	validator.isUnique = function(str, char) {
		var count = 0;
		for (var i = 0; i < str.length; i++) {
			if(str[i] === char) count += 1;
		}
		return count == 1;
    };

	validator.isRGB = function (input) {
		var arr = input.split(",");
		if (arr.length === 3) {
			return (arr[0].substring(0, 4) === "rgb(" && (arr[0].substring(4) >= 0 && arr[0].substring(4) <= 255)) && (parseInt(arr[1]) >= 0 && parseInt(arr[1]) <= 255) && (parseInt(arr[2]) >= 0 && parseInt(arr[2]) <= 255) && arr[2].indexOf(")") === (arr[2].length - 1) && validator.isUnique(arr[2], ")");
		}
		else return false;
	};

	validator.isWithinRange = function (n, min, max) {
		return n >= min && n<= max;
	};

	validator.isHSL = function (input) {
		var arr = input.split(",");
		if (arr.length === 3) {
			return (arr[0].substring(0, 4) === "hsl(" &&  validator.isWithinRange(arr[0].substring(4), 0, 360) && validator.isWithinRange(parseFloat(arr[1]), 0, 1) && validator.isWithinRange(parseFloat(arr[2]), 0, 1) && arr[2].indexOf(")") === (arr[2].length - 1) && validator.isUnique(arr[2], ")"));
		}
		else return false;
	};

	validator.isColor = function (input) {
		return validator.isRGB(input) || validator.isHex(input) || validator.isHSL(input);
	};

	validator.isPassword = function (input) {
		return validator.isEmpty(input) && input.length >= 6;
	};

	validator.isTrimmed = function (input) {
		var result = true;
		if ((input.charAt(0) === " ") || (input.charAt(input.length - 1) === " "))
			return false;
		else
			for (var i = 1; i < input.length; i++) {
				if (input[i] == " " && input[i - 1] == " ") {
					result = false;
				}
			}
			return result;
	};
	window.validator = validator;
})(window);

	