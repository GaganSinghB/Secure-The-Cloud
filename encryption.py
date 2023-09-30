import os
import tkinter as tk
from tkinter import filedialog, Tk
from cryptography.fernet import Fernet
import eel
import io
from otpVerify import sendOTP

root = tk.Tk()
root.wm_attributes('-topmost', 1)
root.withdraw()

# Function which generates our key (AES)
@eel.expose
def keyGen():
    key = Fernet.generate_key()
    file = open("Keys/key.key", "wb")
    file.write(key)
    file.close()
    print("\nKey Created.\n")


# Function which reads the key
def keyRead():
    try:
        file = open("Keys/key.key", "rb")
        key = file.read()
        file.close()
        return key
    except FileNotFoundError:
        # If key does not exists a new one is created.
        print("No Key exists, a new one has just been created.")
        keyGen()
        keyRead()


@eel.expose
def encryptFile():
    input = filedialog.askopenfile(initialdir="C:/Users/hp/Downloads/", parent=root)
    Key = keyRead()
    with open(input.name, "rb") as f:
        data = f.read()
    fernet = Fernet(Key)
    encrypted = fernet.encrypt(data)
    print(encrypted)
    savedFileName = os.path.basename(input.name)
    with open("Files/" + savedFileName, "wb") as f:
        f.write(encrypted)
    return os.path.basename(input.name)


# Function to decrypt files using the key
@eel.expose
def decryptFile():
    input = filedialog.askopenfile(initialdir="C:/Users/hp/Downloads/", parent=root)
    Key = keyRead()
    with open(input.name, "rb") as f:
        data = f.read()
    fernet = Fernet(Key)
    decrypted = fernet.decrypt(data)
    decryptedFileName = os.path.basename(input.name)
    with open("C:/Users/hp/Downloads/" + decryptedFileName, "wb") as f:
        f.write(decrypted)

    # input = filedialog.askopenfile(initialdir="C:/Users/hp/Downloads/")
    # Key = keyRead()
    # with open(input.name, "rb") as f:
    #     data = f.read()
    # fernet = Fernet(Key)
    # decrypted = fernet.decrypt(data)
    # decryptedFileName = os.path.basename(input.name)
    # with open("C:/Users/hp/Downloads/" + decryptedFileName, "wb") as f:
    #     f.write(decrypted)
