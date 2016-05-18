# handleCookie
handleCookie
        // 当点击时，出现提示
            var input_alert;
            $('input').not('input[type="submit"]').click(function(event) {

                var cookieName = $(this).attr('id');
                var cookieValue = handleCookie.get(cookieName);
                input_alert = '<select><option>' + cookieValue + '</option></select>';
                $(this).after(input_alert);
            });

            $('form').submit(function(event) {
                event.preventDefault();
                var inputId = $('input');
                inputId.not('input[type="submit"]').each(function(index, el) {
                    handleCookie.set($(this).attr('id'), $(this).val(), 3);
                });
            });

            // param: name,value,hours
            // return: undefined
            var handleCookie = {
                set: function (name,value,hours) {
                    var data = name + '=' + value;
                    if (hours) {
                        var now = new Date();
                        now.setHours(now.getHours() + hours);
                        data += "; expires=" + now.toGMTString();
                    }
                    document.cookie = data;
                },
                // param: name
                // return : value or undefined
                get: function (name) {
                    var cookieString = document.cookie;
                    var value;
                    $(cookieString.split(' ')).each(function(index, el) {
                        var cookieAlone = this.split('=');
                        if (cookieAlone[0] === name) {
                            value = cookieAlone[1].split(';')[0];
                        }
                    });
                    return value;
                }
            }

