//input
let ballResp = document.getElementById("response");
document.getElementById("eight-balls").addEventListener("click", ballRoll);

//process
function ballRoll() {
  let ballQ = document.getElementById("question").value;
  if (ballQ === "") {
    ballResp.innerHTML = "Please ask a question...";
  } else if (
    ballQ === "Does a magic 8 ball actually work?" ||
    ballQ === "Does this really work?"
  ) {
    ballResp.innerHTML = "How dare you doubt me!";
  } else if (ballQ === "Should I play persona 3 reload?") {
    ballResp.innerHTML = "Definitely.";
  } else {
    let rand = Math.random();
    if (rand < 0.2) {
      ballResp.innerHTML = "Wihtout a doubt.";
    } else if (rand < 0.4) {
      ballResp.innerHTML = "As I see it, yes.";
    } else if (rand < 0.6) {
      ballResp.innerHTML = "Concentrate and ask again.";
    } else if (rand < 0.8) {
      ballResp.innerHTML = "Don't count on it.";
    } else {
      ballResp.innerHTML = "Outlook not so good.";
    }
  }
}
