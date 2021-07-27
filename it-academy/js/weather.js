var css_file = document.createElement("link");
var widgetUrl = location.href;
css_file.setAttribute("rel", "stylesheet");
css_file.setAttribute("type", "text/css");
css_file.setAttribute("href", 'https://s.bookcdn.com/css/w/bw-160-36.css?v=0.0.1');
document.getElementsByTagName("head")[0].appendChild(css_file);

function setWidgetData_74465(data) {
    if (typeof(data) != 'undefined' && data.results.length > 0) {
        for (var i = 0; i < data.results.length; ++i) {
            var objMainBlock = document.getElementById('m-booked-small-t3-74465');
            if (objMainBlock !== null) {
                var copyBlock = document.getElementById('m-bookew-weather-copy-' + data.results[i].widget_type);
                objMainBlock.innerHTML = data.results[i].html_code;
                if (copyBlock !== null) objMainBlock.appendChild(copyBlock);
            }
        }
    } else {
        alert('data=undefined||data.results is empty');
    }
}
var widgetSrc = "https://widgets.booked.net/weather/info?action=get_weather_info;ver=7;cityID=18366;type=13;scode=124;ltid=3540;domid=589;anc_id=86437;countday=undefined;cmetric=1;wlangID=20;color=fff5d9;wwidth=158;header_color=fff5d9;text_color=333333;link_color=08488D;border_form=0;footer_color=fff5d9;footer_text_color=333333;transparent=1;v=0.0.1";
widgetSrc += ';ref=' + widgetUrl;
widgetSrc += ';rand_id=74465';
var weatherBookedScript = document.createElement("script");
weatherBookedScript.setAttribute("type", "text/javascript");
weatherBookedScript.src = widgetSrc;
document.body.appendChild(weatherBookedScript)