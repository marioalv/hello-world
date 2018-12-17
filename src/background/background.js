if (typeof msBrowser !== 'undefined') {
  chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
  chrome = browser;
}

chrome.browserAction.onClicked.addListener(function (activeTab) {
  chrome.tabs.create({ url: 'background/helloWorld.html' }, null);
  google.payments.inapp.getPurchases({
    'parameters': {'env': 'prod'},
    'success': getPurchasesSuccess,
    'failure': getPurchasesError
  });

  var sku = "test1";
  google.payments.inapp.buy({
    'parameters': {'env': 'prod'},
    'sku': sku,
    'success': onPurchase,
    'failure': onPurchaseFail
  });
});


console.log("Hello World");

google.payments.inapp.getPurchases({
  'parameters': {'env': 'prod'},
  'success': getPurchasesSuccess,
  'failure': getPurchasesError
});

function getPurchasesSuccess(aResponse) {
  console.log(" +++ getPurchases SUCCESS +++ ");
  console.log(aResponse);
}

function getPurchasesError(aResponse) {
  console.log(" +++ getPurchases FAILURE +++ ");
  console.log(aResponse);
}

function onPurchase(aResponse) {
  console.log(" +++ onPurchase SUCCESS +++ ");
  console.log(aResponse);
}

function onPurchaseFail(aResponse) {
  console.log(" +++ onPurchaseFail FAILURE +++ ");
  console.log(aResponse);
}

