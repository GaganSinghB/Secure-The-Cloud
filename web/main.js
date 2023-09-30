function printConsole(text) {
  document.getElementById("consoleResult").innerHTML = text;
  setTimeout(function () {
    document.getElementById("consoleResult").innerHTML = "";
  }, 2000);
}

async function loginJS() {
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;
  let mobNo = await eel.login(login, password)();
  localStorage.setItem("mobile", mobNo);
}

eel.expose(loginSuccess);
function loginSuccess() {
  var text1 = document.getElementById("login");
  var text2 = document.getElementById("password");
  var button1 = document.getElementById("submit");
  text1.style.display = "none";
  text2.style.display = "none";
  button1.style.display = "none";
  printConsole("Logged in Successfuly!");
}

eel.expose(loginTry);
function loginTry() {
  document.getElementById("consoleResult").innerHTML =
    "User doesn't exist or wrong password! Try again!";
}

eel.expose(privMenu);
function privMenu() {
  document.getElementById("statusText").innerHTML = "Menu";
  document.getElementById("subText").innerHTML = "Select a function.";
  var button1 = document.getElementById("upload");
  var button2 = document.getElementById("download");
  var button3 = document.getElementById("settings");
  var button4 = document.getElementById("logout");
  button1.style.display = "inline-block";
  button2.style.display = "inline-block";
  button3.style.display = "inline-block";
  button4.style.display = "inline-block";
  var fileNText = document.getElementById("fileNameStr");
  var uploadButtonSubmit = document.getElementById("uploadSubmit");
  var backButtonSubmit = document.getElementById("backButton");
  fileNText.style.display = "none";
  uploadButtonSubmit.style.display = "none";
  backButtonSubmit.style.display = "none";
  var otpQuery = document.getElementById("otpQuery");
  var otpSubmit = document.getElementById("otpSubmit");
  var downloadButton = document.getElementById("downloadButton");
  otpQuery.style.display = "none";
  otpSubmit.style.display = "none";
  downloadButton.style.display = "none";
  var addUser = document.getElementById("addUserButton");
  var delUser = document.getElementById("deleteUserButton");
  var newKey = document.getElementById("newKey");
  addUser.style.display = "none";
  delUser.style.display = "none";
  newKey.style.display = "none";
  var addUserName = document.getElementById("addUserName");
  var addPassword = document.getElementById("addPassword");
  var addMobile = document.getElementById("addMobile");
  var createUser = document.getElementById("createUser");
  addUserName.style.display = "none";
  addPassword.style.display = "none";
  addMobile.style.display = "none";
  createUser.style.display = "none";
  var deleteUser = document.getElementById("deleteUser");
  deleteUser.style.display = "none";
}

eel.expose(standardMenu);
function standardMenu() {
  var button1 = document.getElementById("upload");
  var button2 = document.getElementById("download");
  var button3 = document.getElementById("logout");
  button1.style.display = "inline-block";
  button2.style.display = "inline-block";
  button3.style.display = "inline-block";
  var text1 = document.getElementById("fileNameStr");
  var button5 = document.getElementById("uploadSubmit");
  var button6 = document.getElementById("backButton");
  text1.style.display = "none";
  button5.style.display = "none";
  button6.style.display = "none";
  var otpQuery = document.getElementById("otpQuery");
  var otpSubmit = document.getElementById("otpSubmit");
  var downloadButton = document.getElementById("downloadButton");
  otpQuery.style.display = "none";
  otpSubmit.style.display = "none";
  downloadButton.style.display = "none";
}

function uploadScreen() {
  var button1 = document.getElementById("upload");
  var button2 = document.getElementById("download");
  var button3 = document.getElementById("settings");
  var button4 = document.getElementById("logout");
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  var button5 = document.getElementById("uploadSubmit");
  var button6 = document.getElementById("backButton");
  button5.style.display = "inline-block";
  button6.style.display = "inline-block";
  document.getElementById("statusText").innerHTML = "Encrypt and Upload Files";
  document.getElementById("subText").innerHTML =
    "Click on \"Upload\" to upload your file";
}

function downloadScreen() {
  var button1 = document.getElementById("upload");
  var button2 = document.getElementById("download");
  var button3 = document.getElementById("settings");
  var button4 = document.getElementById("logout");
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  var downloadButton = document.getElementById("downloadButton");
  var button6 = document.getElementById("backButton");
  downloadButton.style.display = "inline-block";
  button6.style.display = "inline-block";
  document.getElementById("statusText").innerHTML =
    "Download and Decrypt Files";
  document.getElementById("subText").innerHTML =
    "Files are downloaded to Downloads folder.";
}

function settingScreen() {
  var button1 = document.getElementById("upload");
  var button2 = document.getElementById("download");
  var button3 = document.getElementById("settings");
  var button4 = document.getElementById("logout");
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  var addUser = document.getElementById("addUserButton");
  var delUser = document.getElementById("deleteUserButton");
  var newKey = document.getElementById("newKey");
  var button6 = document.getElementById("backButton");
  addUser.style.display = "inline-block";
  delUser.style.display = "inline-block";
  newKey.style.display = "inline-block";
  button6.style.display = "inline-block";
  document.getElementById("statusText").innerHTML =
    "Download and Decrypt Files";
  document.getElementById("subText").innerHTML =
    "Files are downloaded to Downloads folder.";
}

function addUserScreen() {
  var addUser = document.getElementById("addUserButton");
  var delUser = document.getElementById("deleteUserButton");
  var newKey = document.getElementById("newKey");
  var button6 = document.getElementById("backButton");
  addUser.style.display = "none";
  delUser.style.display = "none";
  newKey.style.display = "none";

  var addUserName = document.getElementById("addUserName");
  var addPassword = document.getElementById("addPassword");
  var addMobile = document.getElementById("addMobile");
  var createUser = document.getElementById("createUser");

  addUserName.style.display = "inline-block";
  addPassword.style.display = "inline-block";
  addMobile.style.display = "inline-block";
  createUser.style.display = "inline-block";
  button6.style.display = "inline-block";
}

eel.expose(existingUser);
function existingUser() {
  printConsole("Login name already exist! Try again");
}

eel.expose(userCreated);
function userCreated() {
  printConsole("User Created!");
}

function deleteUserScreen() {
  var addUser = document.getElementById("addUserButton");
  var delUser = document.getElementById("deleteUserButton");
  var newKey = document.getElementById("newKey");
  var button6 = document.getElementById("backButton");
  addUser.style.display = "none";
  delUser.style.display = "none";
  newKey.style.display = "none";

  var addUserName = document.getElementById("addUserName");
  var deleteUser = document.getElementById("deleteUser");

  addUserName.style.display = "inline-block";
  deleteUser.style.display = "inline-block";
  button6.style.display = "inline-block";
}

function backButtonClick() {
  eel.loopBreak();
}

function logOut() {
  eel.logOutPy();
  eel.loopBreak();
  // close();
  var loginText = document.getElementById("login");
  var passText = document.getElementById("password");
  var loginButton = document.getElementById("submit");
  loginText.style.display = "inline-block";
  passText.style.display = "inline-block";
  loginButton.style.display = "inline-block";
  var button1 = document.getElementById("upload");
  var button2 = document.getElementById("download");
  var button3 = document.getElementById("settings");
  var button4 = document.getElementById("logout");
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  var fileNText = document.getElementById("fileNameStr");
  var uploadButtonSubmit = document.getElementById("uploadSubmit");
  var backButtonSubmit = document.getElementById("backButton");
  fileNText.style.display = "none";
  uploadButtonSubmit.style.display = "none";
  backButtonSubmit.style.display = "none";

  document.getElementById("statusText").innerHTML = "Secure The Cloud";
  document.getElementById("subText").innerHTML = "Don't be a fool encrypt your data.";
  printConsole("Logged out Successfuly!");
}

async function uploadClick() {
  let file = await eel.encryptFile()();
  let u = await eel.uploadFile(file)();
  if (u == 1) {
    printConsole("File Uploaded!");
  }
  if (u == 0) {
    printConsole("File doesn't exist in Files Directory");
  }
}

function downloadClick() {
  // eel.decryptFile(localStorage.getItem("mobile"));
  eel.sendOTP(localStorage.getItem("mobile"));
  var downloadBtn = document.getElementById("downloadButton");
  var button6 = document.getElementById("backButton");
  downloadBtn.style.display = "none";
  button6.style.display = "none";
  var otpQuery = document.getElementById("otpQuery");
  var otpSubmit = document.getElementById("otpSubmit");
  otpQuery.style.display = "inline-block";
  otpSubmit.style.display = "inline-block";
  // document.getElementById("statusText").innerHTML =
  //   "Download and Decrypt Files";
  // document.getElementById("subText").innerHTML =
  //   "Files are downloaded to Downloads folder.";
}

async function otpSubmission() {
  console.log("Submiting OTP...")
  var otp_code = document.getElementById("otpQuery").value;
  let verification = await eel.verifyOTP(otp_code, localStorage.getItem("mobile"))();
  console.log(verification)
  if(verification == 1) {
    eel.decryptFile();
  }
  else {
    printConsole("Wrong OTP entered!!!");
  }
  backButtonClick();
}

// async function searchClick() {
//   var file = document.getElementById("searchQuery").value;
//   let f = await eel.searchFile(file)();
//   if (f == 0) {
//     printConsole("No Files Found!");
//   } else {
//     document.getElementById("consoleResult").innerHTML = f;
//   }
// }

function createUserButton() {
  var userName = document.getElementById("addUserName").value;
  var password = document.getElementById("addPassword").value;
  var mobile = document.getElementById("addMobile").value;
  eel.newUser(userName, password, mobile);
}

async function deleteUserClick() {
  var userName = document.getElementById("addUserName").value;
  let userToBeDel = await eel.deleteUser(userName)();
  if (userToBeDel == 1) {
    printConsole("User Deleted!");
  }
  if (userToBeDel == 0) {
    printConsole("Username does not exist in network!");
  }
  if (userToBeDel == -1) {
    printConsole("Cannot delete Admin!");
  }
}

function newKeyGen() {
  eel.keyGen();
  printConsole("Created new key!");
}
