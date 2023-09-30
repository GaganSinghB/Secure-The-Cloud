from __future__ import print_function
import httplib2
import os
import eel

from apiclient import discovery
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage

try:
    import argparse

    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None
import io
import auth
from googleapiclient.http import MediaFileUpload, MediaIoBaseDownload

# If modifying these scopes, delete your previously saved credentials
# at ~/.credentials/drive-python-quickstart.json
SCOPES = "https://www.googleapis.com/auth/drive"
CLIENT_SECRET_FILE = "client_secret.json"
APPLICATION_NAME = "Drive API Python Quickstart"

authIntsance = auth.auth(SCOPES, CLIENT_SECRET_FILE, APPLICATION_NAME)
credentials = authIntsance.get_credentials()
http = credentials.authorize(httplib2.Http())
drive_service = discovery.build("drive", "v3", http=http)


# Google drive API's taken from Google Drive API Quickstart guide modified slightly to my spec
@eel.expose
def uploadFile(fileName):
    try:
        file_metadata = {"name": fileName}
        filePath = "Files/" + fileName
        media = MediaFileUpload(filePath, mimetype="text/plain")
        file = (
            drive_service.files()
            .create(body=file_metadata, media_body=media, fields="id")
            .execute()
        )
        fileID = file.get("id")
        print("File ID: " + fileID)
        return 1
    except FileNotFoundError:
        print("\nFile does not exists please double check\n")
        return 0


@eel.expose
def downloadFile(fileName):
    file_id = fileID(fileName)
    if file_id == 0:
        return 0

    try:
        request = drive_service.files().get_media(fileId=file_id)
        fh = io.BytesIO()
        downloader = MediaIoBaseDownload(fh, request)
        done = False
        while done is False:
            status, done = downloader.next_chunk()
            print("Download %d%%." % int(status.progress() * 100))
        with io.open("Downloads/" + fileName, "wb") as f:
            fh.seek(0)
            f.write(fh.read())
        return 1
    except FileNotFoundError:
        print("\nFile does not exists please double check\n")
        return 0
    except Exception:
        pass


@eel.expose
def searchFile(query):
    files = []
    results = (
        drive_service.files()
        .list(
            pageSize=10,
            fields="nextPageToken, files(id, name)",
            q="name contains '" + query + "'",
        )
        .execute()
    )
    items = results.get("files", [])
    if not items:
        print("No files found.")
        return 0
    else:
        for item in items:
            files.append(item["name"])
            print(item["name"])
        return files


def fileID(query):
    results = (
        drive_service.files()
        .list(
            pageSize=100,
            fields="nextPageToken, files(id, name)",
            q="name contains '" + query + "'",
        )
        .execute()
    )
    items = results.get("files", [])
    if not items:
        print("No files found.")
        return 0
    else:
        for item in items:
            return item["id"]


