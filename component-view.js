const client = ZoomMtgEmbedded.createClient()

let meetingSDKElement = document.getElementById('meetingSDKElement')

var authEndpoint = 'https://api.thinking-134-209-155-58.sslip.io/file/zoom-signature'
var sdkKey = '13MmlK7R7qQUAztLzImDw'
var meetingNumber = '6560730517'
var passWord = 'amtqL2FxcjF1eXlEOW9MWFp5TDAxZz09'
var role = 1
var userName = 'JavaScript'
var userEmail = ''
var registrantToken = ''
var zakToken = ''

client.init({
  zoomAppRoot: meetingSDKElement,
  language: 'en-US',
})

function getSignature() {
  fetch(authEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      meetingNumber: meetingNumber,
      role: role
    })
  }).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    startMeeting(data.signature)
  }).catch((error) => {
  	console.log(error)
  })
}

function startMeeting(signature) {
  client.join({
    signature: signature,
    sdkKey: sdkKey,
    meetingNumber: meetingNumber,
    password: passWord,
    userName: userName,
    userEmail: userEmail,
    tk: registrantToken,
    zak: zakToken
  })
}
