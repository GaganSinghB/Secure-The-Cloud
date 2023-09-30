# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client
import eel

# Set environment variables for your credentials
# Read more at http://twil.io/secure
account_sid = ""
auth_token = ""
verify_sid = ""
client = Client(account_sid, auth_token)

@eel.expose()
def sendOTP(verified_number):
    verification = client.verify.v2.services(verify_sid) \
    .verifications \
    .create(to=verified_number, channel="sms")
    print(verification.status)

@eel.expose()
def verifyOTP(otp_code, verified_number):
    print("Verifying OTP...")
    verification_check = client.verify.v2.services(verify_sid) \
    .verification_checks \
    .create(to=verified_number, code=otp_code)
    if verification_check.status == "approved":
        print("True")
        return 1
    print("False")
    return 0
