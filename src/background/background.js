if (typeof msBrowser !== 'undefined') {
  chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
  chrome = browser;
}

chrome.browserAction.onClicked.addListener(function (activeTab) {
    chrome.tabs.create({ url: 'background/helloWorld.html' }, null);
});


console.log("Hello World");

google.payments.inapp.getPurchases({
  'parameters': {'env': 'prod'},
  'success': getPurchasesSuccess,
  'failure': getPurchasesSuccess
});

function getPurchasesSuccess(aResponse) {
  console.log(" +++ getPurchases SUCCESS +++ ");
  console.log(aResponse);

}

function getPurchasesSuccess(aResponse) {
  console.log(" +++ getPurchases FAILURE +++ ");
  console.log(aResponse);
}
