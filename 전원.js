/*
특정 스크립트의 전원을 키고, 끄는 스크립트입니다.
Api.on()과 Api.off()의 갯수를 늘려서 더 많은 스크립트를 한번에 통제할 수 있습니다.

여기서는 예시로 "test.js"라는 스크립트를 끄고 켜봤습니다.
*/


const scriptName="전원.js";

var botOn = true;
var administrator = [];
var command;

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
	//전원
  if(msg == "on" || msg == "off") {
    if(administrator.indexOf(sender) !== -1 && msg === "on") {
      if (botOn == true) {
        replier.reply ("봇이 이미 작동중입니다.");
      } else {
          botOn = true;
          Api.on("test.js");
          replier.reply("작동을 시작합니다.");
      }
    } else if(administrator.indexOf(sender) !== -1 && msg === "off") {
      if (botOn == true) {
        botOn = false;
        Api.off("test.js");
        replier.reply("봇이 작동을 중지합니다.");
      } else replier.reply("봇이 이미 꺼져있습니다.");
    } else replier.reply("관리자가 아닙니다.");
  }
}
