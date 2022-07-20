// Change event for subscription dropdown box
var subSubscriptionElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subSubscription = "basic";
var subDuration = 1;

subSubscriptionElement.addEventListener("change", function (e) {
  subSubscription = e.target.value;
  //console.log(subSubscription);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subSubscription === "standard") {
    monthlyCost = 7;
  } else if (subSubscription === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subSubscription} plan for $${total}.`;
};
