cordova.define("cordova-plugin-sumup.SumUp", function(require, exports, module) {
// iOS
// SMPSumUpSDKErrorGeneral             = 0,        // General error
// SMPSumUpSDKErrorActivationNeeded    = 1,        // The merchant's account is not activated
// SMPSumUpSDKErrorAccountGeneral      = 20,
// SMPSumUpSDKErrorAccountNotLoggedIn  = 21,       // The merchant is not logged into his account.
// SMPSumUpSDKErrorAccountIsLoggedIn   = 22,       // A merchant is logged in already. Call logout before logging in again.
// SMPSumUpSDKErrorCheckoutGeneral     = 50,
// SMPSumUpSDKErrorCheckoutInProgress  = 51,       // Another checkout process is currently in progress.

module.exports = {
	
	
	login: (accessToken, success, failure) => {
    cordova.exec(
      success,
      failure,
      "SumUp",
      "login",
      accessToken ? [accessToken] : []
    );
  },
  auth: (accessToken, success, failure) => {
    cordova.exec(
      success,
      failure,
      "SumUp",
      "auth",
      accessToken ? [accessToken] : []
    );
  },
  getSettings: (success, failure) => {
    cordova.exec(success, failure, "SumUp", "getSettings", []);
  },
  logout: (success, failure) => {
    cordova.exec(success, failure, "SumUp", "logout", []);
  },
  isLoggedIn: (success, failure) => {
    cordova.exec(success, failure, "SumUp", "isLoggedIn", []);
  },
  prepare: (success, failure) => {
    cordova.exec(success, failure, "SumUp", "prepare", []);
  },
  closeConnection: (success, failure) => {
    cordova.exec(success, failure, "SumUp", "closeConnection", []);
  },
  pay: (amount, currencycode, title, success, failure) => {
    cordova.exec(success, failure, "SumUp", "pay", [amount, currencycode, title]);
  }
}

});
