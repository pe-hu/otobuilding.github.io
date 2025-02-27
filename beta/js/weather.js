let messageList = $('#footer');

//openweathermap（天気予報API）に接続
let request = new XMLHttpRequest();
let targetCityName = "osaka";
let appId = "557b466129cf7d7427b03e5b7886a4bb";
let owmURL = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + targetCityName + ",jp;";


request.open('GET', owmURL, true);
//結果をjson型で受け取る
request.responseType = 'json';

request.onload = function () {
    var data = this.response;
    var messageElement = $(
        "<span>" +
        data["name"] +
        " - " +
        data["weather"][0]["description"] +
        " " +
        data["weather"][0]["main"] +
        " </span><span> 気温 " +
        data["main"]["temp"] +
        " ℃ </span><span> 最高気温 " +
        data["main"]["temp_max"] +
        "℃ </span><span> 最低気温 " +
        data["main"]["temp_min"] +
        "℃ </span><span> 風速 " +
        data["wind"]["speed"] +
        " ㎞ </span><span> 雲量 " +
        data["clouds"]["all"] +
        " % </span>"
    );
    //HTMLに取得したデータを追加する
    messageList.append(messageElement);
};

request.send();